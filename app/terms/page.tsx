import LegalShell, { LegalSection, LEGAL_SUPPORT_EMAIL } from "@/components/legal/LegalShell";

// ⚠️ DRAFT — pending final Indian legal review (Indian Contract Act, Consumer
// Protection Act 2019 / e-commerce rules, IT Act 2000). Good-faith description of
// the current terms of use; not a certified legal document.

export const metadata = {
  title: "Terms of Service — SYNERGIC BOND",
  description: "The terms that govern your use of the SYNERGIC BOND learning platform.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      intro="These Terms govern your access to and use of the SYNERGIC BOND platform. By creating an account or using the platform, you agree to these Terms. If you do not agree, please do not use the platform."
    >
      <LegalSection heading="1. The service">
        <p>
          SYNERGIC BOND provides online chemistry learning tools, notes, practice,
          tests, and AI-assisted features for NEET, JEE, board and related
          curricula. Some content is free; some is available only with a paid
          subscription or program purchase.
        </p>
      </LegalSection>

      <LegalSection heading="2. Accounts">
        <p>
          You are responsible for the accuracy of your account information and for
          keeping your credentials secure. You are responsible for activity under
          your account. Notify us promptly of any unauthorised use.
        </p>
      </LegalSection>

      <LegalSection heading="3. Subscriptions, purchases and pricing">
        <p>
          Paid plans and program purchases unlock the specific content described at
          the time of purchase. A purchase for one program or board/class does not
          unlock unrelated programs. Prices are shown on our pricing page and are
          charged through our payment gateway. We may change prices prospectively;
          changes do not affect an active paid period already purchased.
        </p>
      </LegalSection>

      <LegalSection heading="4. Acceptable use">
        <ul className="list-disc space-y-1 pl-5">
          <li>Do not share, resell or redistribute paid content or your account access.</li>
          <li>Do not attempt to bypass paywalls, rate limits, or security controls.</li>
          <li>Do not misuse AI features to generate unlawful, abusive, or infringing content.</li>
          <li>Do not scrape, overload, or disrupt the platform.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Educational content — limitations">
        <p>
          Our content, including AI-generated solutions and auto-generated
          questions, is provided as a study aid. While we work to keep it accurate,
          it may contain errors or omissions and is not guaranteed to match every
          syllabus, examiner, or edition. Where a question is marked as pending
          manual review, its accuracy has not yet been independently verified. You
          should cross-check important material with official textbooks and your
          teacher. We make no guarantee of any particular exam outcome or score.
        </p>
      </LegalSection>

      <LegalSection heading="6. Intellectual property">
        <p>
          The platform and its original content are owned by SYNERGIC BOND or its
          licensors and are protected by applicable law. Your subscription grants a
          personal, non-transferable licence to access the content for your own
          study; it does not transfer ownership.
        </p>
      </LegalSection>

      <LegalSection heading="7. Minors and parental responsibility">
        <p>
          If you are under 18, you may use the platform only under the supervision
          of a parent or guardian, who accepts these Terms and is responsible for
          any purchases made through the account.
        </p>
      </LegalSection>

      <LegalSection heading="8. Payments and refunds">
        <p>
          Payments are handled by our payment gateway. Refunds and cancellations are
          governed by our{" "}
          <a className="text-cyan-400 hover:text-cyan-300" href="/refund">Refund &amp; Cancellation Policy</a>.
        </p>
      </LegalSection>

      <LegalSection heading="9. Disclaimers and liability">
        <p>
          The platform is provided on an “as is” and “as available” basis. To the
          extent permitted by law, we exclude implied warranties and limit our
          liability for indirect or consequential loss. Nothing in these Terms
          excludes liability that cannot be excluded under applicable Indian law.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes and contact">
        <p>
          We may update these Terms; continued use after an update means you accept
          the revised Terms. Questions? Contact{" "}
          <a className="text-cyan-400 hover:text-cyan-300" href={`mailto:${LEGAL_SUPPORT_EMAIL}`}>{LEGAL_SUPPORT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
