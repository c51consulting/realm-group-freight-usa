import React from 'react';
import { APP_NAME } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME} — what we collect, how we use it, and your rights under CCPA/CPRA.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 prose prose-brand">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-500">Effective date: 3 June 2026</p>

      <p>
        {APP_NAME} (operated by REALM Group Global, &quot;REALM&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This Policy describes what personal information we collect, how we use it, with whom we share it, and what rights you have. It applies to the Platform and any related services.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Account information:</strong> name, email, phone, business name, EIN/Tax ID, role (buyer, seller, carrier).</li>
        <li><strong>Identity &amp; compliance:</strong> data required to onboard you to Stripe Connect (legal name, date of birth where required, address, last 4 of SSN where Stripe requires it). This data is collected by Stripe directly; we receive only confirmation status.</li>
        <li><strong>Transaction data:</strong> listings, offers, orders, freight bookings, weighbridge events, quality grades, photographs and documents you upload.</li>
        <li><strong>Communications:</strong> in-platform messages, support tickets, and notes related to disputes.</li>
        <li><strong>Usage data:</strong> IP address, device and browser information, pages visited, cookies and similar technologies.</li>
        <li><strong>Location data:</strong> the pickup/delivery addresses on listings, and (with your permission) device coordinates on proof-of-delivery uploads.</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To operate the marketplace and complete the transactions you direct (legal basis: contract).</li>
        <li>To verify identity, prevent fraud, and comply with US sanctions and anti-money-laundering laws (legal basis: legal obligation, legitimate interests).</li>
        <li>To send transactional emails, dispute notices and security alerts (legal basis: contract).</li>
        <li>To improve the Platform — analytics, debugging, A/B testing (legal basis: legitimate interests).</li>
        <li>To send marketing only where you have opted in; you can unsubscribe at any time.</li>
      </ul>

      <h2>3. Who we share with</h2>
      <ul>
        <li><strong>Payment processor:</strong> Stripe, Inc. (transaction, identity verification).</li>
        <li><strong>Hosting &amp; infrastructure:</strong> Vercel Inc. (web hosting), Supabase Inc. (database and authentication).</li>
        <li><strong>Communications:</strong> Resend / Postmark (transactional email), Twilio (SMS) where used.</li>
        <li><strong>Counterparties:</strong> when you transact with another user, we share the information necessary to complete the transaction (name, business name, contact, delivery address).</li>
        <li><strong>Legal:</strong> when required by law, court order, or to protect rights, safety or property.</li>
        <li>We do not sell or share your personal information for cross-context behavioural advertising.</li>
      </ul>

      <h2>4. Retention</h2>
      <p>
        We retain account and transaction records for as long as your account is active and for up to 7 years afterwards to meet US tax and audit requirements. Identity verification records are retained per Stripe&apos;s policy. You can request deletion (see §6) — we will honour the request except where law requires retention.
      </p>

      <h2>5. Security</h2>
      <p>
        We use industry-standard safeguards: TLS in transit, encryption at rest (Supabase managed), row-level security on tenant data, scoped API keys, and access logging. No system is perfectly secure; you are responsible for keeping your password confidential.
      </p>

      <h2>6. Your rights — California (CCPA/CPRA) and other US states</h2>
      <p>
        Residents of California and other US states with comprehensive privacy laws (Colorado, Connecticut, Virginia, Utah, Texas, Oregon, Montana and others) have the right to:
      </p>
      <ul>
        <li>Know what personal information we hold about you and how we use it.</li>
        <li>Access a copy of your personal information.</li>
        <li>Request correction or deletion (subject to legal exceptions).</li>
        <li>Opt out of any &quot;sale&quot; or &quot;sharing&quot; (we do neither, but we will honour the signal).</li>
        <li>Be free from retaliation for exercising any of these rights.</li>
      </ul>
      <p>
        To exercise a right, email privacy@realmgroup.global with the subject line &quot;Privacy Request&quot;. We will respond within 45 days. You may also authorise an agent to act on your behalf.
      </p>

      <h2>7. International users</h2>
      <p>
        The Platform is operated from Australia and the United States. By using it you consent to your information being processed in those jurisdictions.
      </p>

      <h2>8. Children</h2>
      <p>
        The Platform is not directed to children under 18 and we do not knowingly collect their personal information.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this Policy. Material changes will be notified by email or in-platform notice at least 14 days before they take effect.
      </p>

      <h2>10. Contact</h2>
      <p>
        Privacy questions? <a href="/contact">/contact</a> or privacy@realmgroup.global.
      </p>
    </div>
  );
}
