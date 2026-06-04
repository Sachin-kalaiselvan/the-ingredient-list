import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import tilLogo from "@/assets/til-logo.png";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background px-6 py-6 lg:px-10">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <a href="/" className="group flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="text-sm font-medium">Back</span>
          </a>
          <img src={tilLogo} alt="The Ingredient List" className="h-12 w-auto object-contain mix-blend-multiply" />
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="font-brand text-5xl font-extrabold text-foreground mb-2">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="space-y-8 text-sm leading-7 text-muted-foreground">
            {/* Section 1 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">1. Engagement & Scope</h2>
              <p>
                All projects begin with a detailed scope discussion and written agreement. Once approved, scope changes require a written amendment and may impact timeline and cost. Change requests submitted mid-project are treated as additions and billed separately.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">2. Payment Terms</h2>
              <p>
                Invoices are issued upon project commencement and at agreed milestones. Payment via UPI, bank transfer, or credit card. GST will be added where applicable. Late payments may incur interest at 1.5% per month. All prices quoted are in Indian Rupees (₹).
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">3. Timeline & Delivery</h2>
              <p>
                Delivery dates are estimates based on timely feedback and approvals from your end. Delays in providing content, feedback, or approvals may push the launch date. We maintain the right to pause projects if payments are pending for 15+ days.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                Upon final payment, all custom work becomes your property. We retain the right to use the work as a portfolio reference and case study (with your permission). Third-party libraries and frameworks remain under their original licenses.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">5. Revisions & Support</h2>
              <p>
                Revision rounds are included as specified in the engagement letter. Additional revisions beyond the agreed scope are billed at ₹5,000/hour. Post-launch support is provided for 30 days. Ongoing maintenance and updates can be discussed separately.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">6. Hosting & Domain</h2>
              <p>
                We deploy to Vercel or your preferred hosting provider. Domain registration and annual renewals are your responsibility. We can assist in setup for an additional fee. Migration of existing sites is charged separately based on complexity.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">7. Confidentiality</h2>
              <p>
                All client information, strategy, and unpublished work are kept confidential. We will not share details about your project, metrics, or business without explicit written consent. This obligation survives project completion.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>
                Our liability is capped at the total amount paid for the project. We are not responsible for indirect damages, lost revenue, or third-party integrations beyond our control. Use of the site is at your own risk.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">9. Cancellation</h2>
              <p>
                Projects can be cancelled with written notice. If cancelled before 25% completion, a 25% cancellation fee applies. Beyond that, work completed to date is non-refundable. In-progress projects may have partial refunds at our discretion.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-brand text-lg font-extrabold text-foreground mb-3">10. Communication</h2>
              <p>
                Communication is via email and WhatsApp. Regular check-ins and updates are provided as agreed. Delayed responses from your end may impact project velocity. We maintain the right to establish reasonable response time expectations.
              </p>
            </div>

            {/* Final note */}
            <div className="border-t border-border pt-8 mt-12">
              <p className="text-xs text-muted-foreground/60">
                These terms apply to all engagements with The Ingredient List. For questions or clarifications, contact us at <a href="mailto:theingredientlist.co@gmail.com" className="text-primary hover:underline">theingredientlist.co@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-card/50 p-8 text-center">
            <h3 className="font-brand text-xl font-extrabold text-foreground mb-3">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss your project and how we can help.</p>
            <Button asChild variant="brand" className="rounded-full px-8">
              <a href="https://cal.com/threxa/design-audit" target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-8 lg:px-10 mt-12">
        <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Ingredient List. Crafted in-house.</p>
        </div>
      </footer>
    </main>
  );
};

export default TermsAndConditions;
