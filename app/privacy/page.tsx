import LegalShell, { LegalSection, LEGAL_SUPPORT_EMAIL } from "@/components/legal/LegalShell";

// ⚠️ DRAFT — pending final Indian legal review (DPDP Act 2023, IT Act / SPDI
// Rules). Describes current data handling in good faith; not a certified policy.

export const metadata = {
  title: "Privacy Policy — SYNERGIC BOND",
  description: "How SYNERGIC BOND collects, uses, stores and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="This Privacy Policy explains what personal data SYNERGIC BOND collects when you use our website and learning platform, how we use it, and the choices you have. Please read it together with our Terms of Service."
    >
      <LegalSection heading="1. Who we are">
        <p>
          SYNERGIC BOND (“we”, “us”, “our”) operates the synergicbond.com learning
          platform for chemistry education. We act as the data fiduciary for the
          personal data you provide while using the platform.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>Depending on how you use the platform, we may collect:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Account data</strong> — name, email address, and password credentials managed through our authentication provider.</li>
          <li><strong>Contact and profile data</strong> — phone number and date of birth, where you choose to provide them for account setup, communication or age-appropriate content.</li>
          <li><strong>Learning data</strong> — your practice attempts, test results, mistakes, progress, and content you generate or upload (for example, images submitted to Snap &amp; Solve).</li>
          <li><strong>Payment data</strong> — subscription and purchase records. Card/UPI details are processed by our payment gateway (Razorpay); we do not store your full payment instrument details on our servers.</li>
          <li><strong>Technical data</strong> — basic log and device information used to keep the service secure and working (including for rate-limiting and abuse prevention).</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we use your data">
        <ul className="list-disc space-y-1 pl-5">
          <li>To create and manage your account and provide the learning features you request.</li>
          <li>To process payments, subscriptions and program entitlements.</li>
          <li>To personalise study recommendations and track your progress.</li>
          <li>To operate AI-assisted features, which may send your query text or uploaded images to third-party AI providers to generate a response.</li>
          <li>To maintain security, prevent misuse, and comply with applicable law.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Phone, email and date of birth">
        <p>
          Where provided, your email is used for authentication and essential
          service communication; your phone number for support and account
          verification; and your date of birth to help us apply age-appropriate
          handling. You may contact us to review or update this information.
        </p>
      </LegalSection>

      <LegalSection heading="5. Sharing and third parties">
        <p>
          We share data only with service providers that help us run the platform
          — including our authentication and database provider (Supabase), payment
          gateway (Razorpay), and AI providers used to power generative features —
          and only to the extent needed to deliver the service, or where required
          by law. We do not sell your personal data.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data retention and security">
        <p>
          We retain your data for as long as your account is active or as needed to
          provide the service and meet legal obligations, and we apply reasonable
          technical and organisational safeguards. No method of transmission or
          storage is perfectly secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="7. Children and parental responsibility">
        <p>
          Our platform is used by school and competitive-exam students, some of
          whom are minors. If you are under 18, you should use the platform under
          the supervision of a parent or guardian, who is responsible for the
          account, any purchases, and consent to this policy on the minor’s behalf.
          If you believe a minor has provided data without appropriate consent,
          contact us and we will address it.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your choices">
        <p>
          You may access or update your profile information from your account, and
          you may request correction or deletion of your personal data by writing
          to <a className="text-cyan-400 hover:text-cyan-300" href={`mailto:${LEGAL_SUPPORT_EMAIL}`}>{LEGAL_SUPPORT_EMAIL}</a>.
          Some records may be retained where the law requires.
        </p>
      </LegalSection>

      <LegalSection heading="9. Educational-content note">
        <p>
          AI-generated explanations and auto-generated questions are study aids and
          may contain errors. They are not a substitute for verified textbooks or
          your teacher’s guidance. See our Terms of Service for details.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
