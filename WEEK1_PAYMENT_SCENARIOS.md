# WEEK1_PAYMENT_SCENARIOS

| Scenario | Status | Evidence | Blocker | Next Action |
| --- | --- | --- | --- | --- |
| Successful payment | PARTIAL | User reported live INR 149 captured; frontend verifies Razorpay payment signature through `/api/payment/verify-payment`. | No Razorpay dashboard proof in workspace. | Capture payment id/screenshot/export. |
| Failed payment handling | PARTIAL | `components/PaymentGateway.tsx` handles `payment.failed`, tracks reason, alerts user, clears processing state. | No live failed payment test evidence. | Run Razorpay test/live failure case. |
| Cancelled checkout | PARTIAL | Checkout `modal.ondismiss` tracks cancellation and clears processing state. | No live cancellation evidence. | Open checkout and dismiss modal. |
| Retry after failure | PARTIAL | Processing state resets on failed/cancelled/error paths, allowing button retry. | No browser runtime evidence. | Test retry after failure. |
| Duplicate webhook | PASS | `payment_events.event_id` is unique and webhook returns duplicate success when existing event is found. | None. | None. |
| Replay webhook | PARTIAL | Duplicate event id is idempotent; invalid signatures are rejected. | No signed replay test against production. | Retry same Razorpay delivery after env fix. |
| Renewal/subscription update | NOT TESTED | Current flow uses one-time orders, not Razorpay subscription renewal events. | No renewal system present. | Define renewal product before testing. |

Safe test methods:
- Razorpay Dashboard webhook resend after setting `RAZORPAY_WEBHOOK_SECRET`.
- Browser checkout cancel.
- Razorpay failed-payment test card/method in test mode.

