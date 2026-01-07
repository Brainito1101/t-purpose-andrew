// app/terms/page.tsx  (if using App Router)
// or pages/terms.tsx  (if using Pages Router)

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Terms & Conditions | Andrew Dietz Services & Website",
  description: "Understand the policies governing your use of Andrew Dietz’s website, workshops, and mentorship programs.",
  alternates: {
    canonical: "https://www.andrew-dietz.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const TermsAndConditions: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions",
    "description": "Terms and Conditions for Andrew Dietz website and services",
    "datePublished": "2025-08-13",
    "inLanguage": "en-US"
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
      <p className="mb-2">
        <strong>Effective Date:</strong>  January 5, 2026
      </p>
      <p className="mb-4">
        Also view our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
      </p>
      <p className="mb-6">
        Emails sent to Andrew Dietz or to any official mailing addresses of
        Andrew Dietz shall become the property of Andrew Dietz and may be used
        at his discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Terms of Use</h2>
      <p className="mb-4">
        The content and all trademarks, service marks, logos, pictures,
        slogans, written material, and other content used on this website are
        the property of Andrew Dietz unless otherwise stated. Andrew Dietz
        respects the intellectual property of others and asks that all visitors
        and users do the same. Failure to comply with U.S. and international
        copyright, trademark, or other laws may subject you to criminal and/or
        civil penalties. Hyper-linking, uploading, or otherwise posting
        unauthorized pictures or content on this website is prohibited.
      </p>
      <p className="mb-4">
        The following User Agreement (“Agreement”) governs the use of Andrew
        Dietz’s online services (“Service”), including any discussion boards,
        interactive features, and access to all content provided through the
        Service. By accessing or registering for any part of the Service, you
        agree to comply with these terms. If you do not agree, you are not
        authorized to use the Service.
      </p>
      <p className="mb-4">
        These terms may be updated from time to time. The most recent effective
        date will appear at the top of this page. Continued access to the
        Service after any changes constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Ownership</h2>
      <p className="mb-4">
        The content and all trademarks, service marks, logos, slogans, and
        other marks used on the Service are the property of their respective
        owners. “Andrew Dietz” is a trademark of the Owner. Any unauthorized
        use may violate copyright, trademark, and other applicable laws, and
        may result in legal action.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p className="mb-4">
        The content provided on this website is for educational and
        informational purposes only. It should not be used for diagnosis or
        treatment of any medical, mental health, or psychological condition. No
        guarantee of results is expressed or implied. If you are under the care
        of a licensed healthcare or mental health professional, please consult
        them before making changes to your treatment or lifestyle.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Cancellations and Refunds
      </h2>
      <p className="mb-4">
        Cancellation and refund policies may vary by service, event, or
        product, and will be clearly stated on the relevant sales or booking
        page. For questions, please Contact Us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        License to Use Service
      </h2>
      <p className="mb-4">
        You are granted a nonexclusive, non-transferable license to view, read,
        listen to, and privately display the content posted on this website for
        personal, non-commercial purposes. You may not publicly distribute,
        transmit, perform, archive, sublicense, lease, or create derivative
        works from the content without explicit written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Limitations of Rights to Use Service
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>This Service is not intended for users under the age of 13.</li>
        <li>
          You agree not to use any obscene, defamatory, harassing, or otherwise
          offensive language or content.
        </li>
        <li>
          You may not post any material that is unlawful, invasive of privacy,
          or in violation of any laws.
        </li>
        <li>
          You are responsible for ensuring that any material you submit does
          not violate intellectual property rights of third parties.
        </li>
        <li>
          You agree not to disrupt or interfere with the Service, its software,
          hardware, or servers.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Materials Provided to Service
      </h2>
      <p className="mb-4">
        By submitting content, messages, or other materials to the Service, you
        grant Andrew Dietz a worldwide, royalty-free, perpetual, non-exclusive
        license to use, reproduce, adapt, and display such materials in any
        media, now known or later developed, for both commercial and
        non-commercial purposes. You represent that you own or have permission
        to use all materials you submit.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Edits to Content</h2>
      <p className="mb-4">
        Andrew Dietz reserves the right to edit, remove, or relocate any
        content posted to the Service at his discretion without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Copyright Infringement
      </h2>
      <p className="mb-4">
        If you believe any content on the Service infringes your copyright,
        please notify us immediately with full details so we can investigate.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold harmless Andrew Dietz, his affiliates,
        employees, and agents from any claims, damages, or expenses (including
        legal fees) arising from your use of the Service, your submissions, or
        your violation of this Agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Disclaimer of Warranty
      </h2>
      <p className="mb-4">
        THE SERVICE IS PROVIDED “AS IS” WITHOUT ANY WARRANTIES, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF ACCURACY,
        RELIABILITY, TITLE, MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A
        PARTICULAR PURPOSE. Andrew Dietz does not warrant that the Service will
        be uninterrupted, error-free, or free from harmful components.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        IN NO EVENT SHALL ANDREW DIETZ OR HIS AFFILIATES BE LIABLE FOR ANY
        DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
        ARISING OUT OF YOUR USE OF THE SERVICE. TOTAL LIABILITY SHALL NOT
        EXCEED $1,500 PER CLAIM.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Release</h2>
      <p className="mb-4">
        You agree to release Andrew Dietz, his affiliates, and agents from all
        claims, known or unknown, arising from or related to your use of the
        Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Arbitration</h2>
      <p className="mb-4">
        Any disputes arising out of this Agreement or your use of the Service
        shall be resolved by binding arbitration in Baltimore County, Maryland,
        in accordance with the rules of the American Arbitration Association.
        The non-prevailing party shall bear arbitration costs.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Miscellaneous</h2>
      <p className="mb-4">
        This Agreement is governed by the laws of the State of Maryland. Any
        legal action must be brought in state or federal court located in
        Maryland. If any provision is found invalid, the remaining provisions
        remain in effect.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Bulletin Board and Advertisements
      </h2>
      <p className="mb-4">
        Comments, opinions, or statements posted on discussion boards or forums
        are solely those of the individual authors and do not necessarily
        reflect the views of Andrew Dietz. We make no warranties regarding
        products, services, or advice mentioned by third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">General Disclaimer</h2>
      <p>
        We cannot respond to personal questions for Andrew through this
        website. If you wish to engage directly, please refer to the booking or
        event sections for available opportunities. Services and programs are
        intended to complement, not replace, professional medical or
        psychological treatment.
      </p>
    </main>
  );
};

export default TermsAndConditions;
