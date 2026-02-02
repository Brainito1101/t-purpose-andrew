// Pricing configuration - DO NOT expose to frontend
export const BASE_PRICES = {
    workshop_2day: 19700, // $197 in cents
    vip_upgrade: 29700, // $297 in cents
} as const;

export const ADDON_PRICES = {
    consultation_1hour: 49500, // $495 in cents
    coaching_3month: 187500, // $1,875 in cents
    coaching_12month_full: 749500, // $7,495 in cents
    coaching_12month_monthly: 64900, // $649/month in cents
} as const;

export type BaseService = keyof typeof BASE_PRICES;
export type Addon = keyof typeof ADDON_PRICES;

/**
 * Calculate total price based on base service and add-ons
 * @param baseService - The base service selected
 * @param addons - Array of addon keys
 * @returns Total price in cents
 */
export function calculateTotalPrice(
    baseService: BaseService,
    addons: Addon[]
): number {
    const basePrice = BASE_PRICES[baseService];
    const addonsPrice = addons.reduce((sum, addon) => {
        return sum + ADDON_PRICES[addon];
    }, 0);

    return basePrice + addonsPrice;
}

/**
 * Validate that the service and addons are valid
 */
export function validatePricing(
    baseService: string,
    addons: string[]
): { valid: boolean; error?: string } {
    if (!Object.keys(BASE_PRICES).includes(baseService)) {
        return { valid: false, error: 'Invalid base service' };
    }

    for (const addon of addons) {
        if (!Object.keys(ADDON_PRICES).includes(addon)) {
            return { valid: false, error: `Invalid addon: ${addon}` };
        }
    }

    return { valid: true };
}
