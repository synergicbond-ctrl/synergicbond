import LegalShell, { LegalSection, LEGAL_SUPPORT_EMAIL } from "@/components/legal/LegalShell";

// ⚠️ DRAFT — pending final Indian legal review (Consumer Protection Act 2019 &
// e-commerce rules, GST rules, payment-gateway policy requirements). Good-faith
// description of current refund handling; not a certified legal document.

export const metadata = {
  title: "Refund & Cancellation Policy — SYNERGIC BOND",
  description: "How cancellations and refunds work for SYNERGIC BOND subscriptions and program purchases.",
};

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund & Cancellation Policy"
      intro="This policy explains how cancellations and refunds are handled for SYNERGIC BOND subscriptions and program purchases. It should be read together with our Terms of Service."
    >
      <LegalSection heading="1. Digital nature of the service">
        <p>
          SYNERGIC BOND sells access to digital learning content and tools. Because
          access is granted immediately on purchase, refunds are considered on the
          basis set out below rather than as an automatic right of return.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cancellation">
        <p>
          You can cancel a recurring subscription at any time from your account. On
          cancellation, your paid access continues until the end of the current paid
          period and is not renewed thereafter. One-time program purchases remain
          available for the access period described at purchase.
        </p>
      </LegalSection>

      <LegalSection heading="3. When we offer refunds">
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Duplicate or failed charge</strong> — if you were charged more than once for the same item, or charged for a transaction that did not grant access, we will refund the extra/erroneous amount.</li>
          <li><strong>Technical non-delivery</strong> — if a verified platform fault prevents you from accessing the content you paid for and we are unable to resolve it within a reasonable time, you may request a refund for the affected purchase.</li>
          <li><strong>Early-request window</strong> — for a first-time purchase, if you contact us within a short period after buying and have not made substantial use of the paid content, we will review your request in good faith.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. When refunds are generally not available">
        <ul className="list-disc space-y-1 pl-5">
          <li>Change of mind after substantial use of the paid content.</li>
          <li>Partially elapsed subscription periods (access continues until period end instead).</li>
          <li>Dissatisfaction with exam results — content is a study aid and we do not guarantee any outcome.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. How to request a refund">
        <p>
          Email{" "}
          <a className="text-cyan-400 hover:text-cyan-300" href={`mailto:${LEGAL_SUPPORT_EMAIL}`}>{LEGAL_SUPPORT_EMAIL}</a>{" "}
          from your registered email with your order details and the reason for the
          request. Approved refunds are made to the original payment method through
          our payment gateway; the time to reflect depends on your bank or provider.
        </p>
      </LegalSection>

      <LegalSection heading="6. Contact">
        <p>
          For any billing question, reach us at{" "}
          <a className="text-cyan-400 hover:text-cyan-300" href={`mailto:${LEGAL_SUPPORT_EMAIL}`}>{LEGAL_SUPPORT_EMAIL}</a>.
          We aim to respond promptly and resolve issues fairly.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
