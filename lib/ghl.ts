/**
 * GoHighLevel API Integration Service
 * Handles contact creation, updates, tagging, and custom fields
 */

interface ContactData {
    email: string;
    name: string;
    tags?: string[];
    customFields?: Record<string, string | number>;
}

interface OpportunityData {
    contactId: string;
    pipelineId?: string;
    pipelineStageId?: string;
    monetaryValue: number;
    name: string;
}

const GHL_API_BASE = 'https://services.leadconnectorhq.com/';
const GHL_API_VERSION = 'v1';

/**
 * Search for existing contact by email
 */
async function searchContactByEmail(email: string): Promise<any | null> {
    if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
        console.error('GHL_API_KEY or GHL_LOCATION_ID not configured');
        return null;
    }

    try {
        const response = await fetch(
            `${GHL_API_BASE}contacts/?locationId=${process.env.GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
                    'Content-Type': 'application/json',
                    'Version': '2021-07-28',
                },
            }
        );

        if (!response.ok) {
            console.error('GHL search contact failed:', await response.text());
            return null;
        }

        const data = await response.json();
        return data.contacts && data.contacts.length > 0 ? data.contacts[0] : null;
    } catch (error) {
        console.error('Error searching contact in GHL:', error);
        return null;
    }
}

/**
 * Create new contact in GoHighLevel
 */
async function createContact(contactData: ContactData): Promise<string | null> {
    if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
        console.error('GHL_API_KEY or GHL_LOCATION_ID not configured');
        return null;
    }

    try {
        const payload: any = {
            email: contactData.email,
            locationId: process.env.GHL_LOCATION_ID,
        };

        // Split name into first and last
        const nameParts = contactData.name.split(' ');
        payload.firstName = nameParts[0] || '';
        payload.lastName = nameParts.slice(1).join(' ') || '';

        if (contactData.tags && contactData.tags.length > 0) {
            payload.tags = contactData.tags;
        }

        if (contactData.customFields) {
            payload.customFields = Object.entries(contactData.customFields).map(
                ([key, value]) => ({ key, value: String(value) })
            );
        }

        const response = await fetch(`${GHL_API_BASE}contacts/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('GHL create contact failed:', await response.text());
            return null;
        }

        const data = await response.json();
        return data.contact?.id || null;
    } catch (error) {
        console.error('Error creating contact in GHL:', error);
        return null;
    }
}

/**
 * Update existing contact in GoHighLevel
 */
async function updateContact(
    contactId: string,
    contactData: Partial<ContactData>
): Promise<boolean> {
    if (!process.env.GHL_API_KEY) {
        console.error('GHL_API_KEY not configured');
        return false;
    }

    try {
        const payload: any = {};

        if (contactData.name) {
            const nameParts = contactData.name.split(' ');
            payload.firstName = nameParts[0] || '';
            payload.lastName = nameParts.slice(1).join(' ') || '';
        }

        if (contactData.tags && contactData.tags.length > 0) {
            payload.tags = contactData.tags;
        }

        if (contactData.customFields) {
            payload.customFields = Object.entries(contactData.customFields).map(
                ([key, value]) => ({ key, value: String(value) })
            );
        }

        const response = await fetch(`${GHL_API_BASE}contacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('GHL update contact failed:', await response.text());
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error updating contact in GHL:', error);
        return false;
    }
}

/**
 * Create opportunity in GHL pipeline
 */
async function createOpportunity(
    opportunityData: OpportunityData
): Promise<string | null> {
    if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
        console.error('GHL_API_KEY or GHL_LOCATION_ID not configured');
        return null;
    }

    try {
        const payload = {
            locationId: process.env.GHL_LOCATION_ID,
            name: opportunityData.name,
            contactId: opportunityData.contactId,
            monetaryValue: opportunityData.monetaryValue,
            status: 'won',
            ...(opportunityData.pipelineId && { pipelineId: opportunityData.pipelineId }),
            ...(opportunityData.pipelineStageId && { pipelineStageId: opportunityData.pipelineStageId }),
        };

        const response = await fetch(`${GHL_API_BASE}opportunities/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
                'Content-Type': 'application/json',
                'Version': '2021-07-28',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error('GHL create opportunity failed:', await response.text());
            return null;
        }

        const data = await response.json();
        return data.opportunity?.id || null;
    } catch (error) {
        console.error('Error creating opportunity in GHL:', error);
        return null;
    }
}

/**
 * Main function: Create or update contact with payment information
 */
export async function savePaymentToGHL(params: {
    email: string;
    name: string;
    service: string;
    addons: string[];
    totalAmount: number;
    stripeSessionId: string;
}): Promise<boolean> {
    const { email, name, service, addons, totalAmount, stripeSessionId } = params;

    try {
        // Build tags
        const tags = [
            'Paid Customer',
            `Service: ${service.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`,
            ...addons.map((addon) =>
                `Addon: ${addon.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}`
            ),
        ];

        // Build custom fields
        const customFields = {
            'purchased_service': service,
            'addons_purchased': addons.join(', '),
            'total_amount_paid': totalAmount / 100, // Convert cents to dollars
            'payment_source': 'Stripe',
            'stripe_session_id': stripeSessionId,
        };

        // Search for existing contact
        const existingContact = await searchContactByEmail(email);

        let contactId: string | null;

        if (existingContact) {
            // Update existing contact
            console.log(`Updating existing contact: ${existingContact.id}`);
            const updated = await updateContact(existingContact.id, {
                name,
                tags,
                customFields,
            });

            if (!updated) {
                console.error('Failed to update contact');
                return false;
            }

            contactId = existingContact.id;
        } else {
            // Create new contact
            console.log(`Creating new contact for: ${email}`);
            contactId = await createContact({
                email,
                name,
                tags,
                customFields,
            });

            if (!contactId) {
                console.error('Failed to create contact');
                return false;
            }
        }

        // Create opportunity (optional but recommended)
        if (contactId) {
            await createOpportunity({
                contactId,
                monetaryValue: totalAmount / 100,
                name: `${service} - ${new Date().toLocaleDateString()}`,
            });
        }

        console.log('Successfully saved payment to GHL');
        return true;
    } catch (error) {
        console.error('Error in savePaymentToGHL:', error);
        return false;
    }
}
