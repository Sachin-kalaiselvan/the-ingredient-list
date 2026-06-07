import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-5 lg:px-10">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="rounded-full gap-2">
            <a href="/"><ArrowLeft className="h-4 w-4" /> Back to site</a>
          </Button>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Privacy Policy</span>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
        {/* Title */}
        <div className="mb-14">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-brand text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <p className="mt-4 text-muted-foreground leading-7">
            This Privacy Policy describes how <strong>The Ingredient List</strong> ("we", "us", or "our"),
            operated by Sachin, Bengaluru, India, collects, uses, and protects your information when
            you visit <strong>theingredientlist.co</strong> or engage our services.
          </p>
        </div>

        <div className="space-y-12 text-[15px] leading-8 text-foreground/80">

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect only what we need to provide our services:</p>
            <ul className="space-y-3 list-none">
              {[
                ["Contact information","Name, email address, phone number, and business URL — collected when you fill in our contact or audit request form."],
                ["Communication data","Messages you send us via email, WhatsApp, or our website forms."],
                ["Technical data","IP address, browser type, and pages visited — collected automatically via analytics tools (e.g. Google Analytics 4) to understand site usage."],
                ["Project information","Details you share about your business, goals, and requirements during the engagement process."],
              ].map(([label, desc]) => (
                <li key={label as string} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span><strong className="text-foreground">{label as string}: </strong>{desc as string}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3 list-none">
              {[
                "To respond to enquiries and provide the services you've requested.",
                "To send project updates, invoices, and relevant communications.",
                "To improve our website and services based on usage patterns.",
                "To comply with legal obligations.",
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">
              We do not sell, rent, or trade your personal information to third parties. We do not send unsolicited marketing emails.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">3. Data Storage &amp; Security</h2>
            <p className="text-muted-foreground mb-4">
              Your data is stored securely. We use industry-standard practices to protect your information from unauthorised access, disclosure, or loss. Our website is hosted on Vercel (global CDN, SOC 2 compliant).
            </p>
            <p className="text-muted-foreground">
              While we take reasonable steps to protect your data, no method of transmission over the internet is 100% secure. We encourage you to contact us immediately if you believe your information has been compromised.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">We use the following third-party services, each with their own privacy policies:</p>
            <div className="rounded-2xl border border-border overflow-hidden">
              {[
                ["Google Analytics 4", "Website usage analytics", "policies.google.com/privacy"],
                ["Cal.com",            "Meeting booking",          "cal.com/privacy"],
                ["WhatsApp",           "Direct communication",     "whatsapp.com/legal/privacy-policy"],
                ["Vercel",             "Website hosting",          "vercel.com/legal/privacy-policy"],
              ].map(([service, purpose, url], i, arr) => (
                <div key={service} className={`flex items-start justify-between gap-4 px-5 py-4 text-sm ${i !== arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div>
                    <strong className="text-foreground">{service}</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">{purpose}</p>
                  </div>
                  <a href={`https://${url}`} target="_blank" rel="noreferrer" className="text-primary text-xs hover:underline flex-shrink-0">{url}</a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">5. Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses minimal cookies — primarily for analytics (Google Analytics) and to remember your preferences. You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use the site.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="space-y-3 list-none">
              {[
                "Request access to the personal information we hold about you.",
                "Request correction of any inaccurate information.",
                "Request deletion of your personal information.",
                "Opt out of any communication from us at any time.",
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:theingredientlist.co@gmail.com" className="text-primary hover:underline">theingredientlist.co@gmail.com</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Project-related communications are retained for a minimum of 3 years for record-keeping. You may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-brand text-2xl font-extrabold text-foreground mb-4">10. Contact</h2>
            <p className="text-muted-foreground mb-4">For any questions or concerns about this Privacy Policy, contact:</p>
            <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-2 text-sm">
              <p><strong className="text-foreground">The Ingredient List</strong></p>
              <p className="text-muted-foreground">Operated by Sachin · Bengaluru, Karnataka, India</p>
              <p><a href="mailto:theingredientlist.co@gmail.com" className="text-primary hover:underline">theingredientlist.co@gmail.com</a></p>
              <p><a href="https://www.theingredientlist.co" className="text-primary hover:underline">theingredientlist.co</a></p>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;
