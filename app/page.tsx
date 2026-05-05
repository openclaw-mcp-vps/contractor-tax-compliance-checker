export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          IRS &amp; DOL Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Verify Contractor Classification{" "}
          <span className="text-[#58a6ff]">Compliance Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Analyze contractor relationships against IRS and DOL guidelines, get instant risk scores, and download compliant contract templates — before the IRS comes knocking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Compliance Check — $19/mo
          </a>
          <a
            href="#pricing"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            See Pricing
          </a>
        </div>
        <p className="mt-5 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["IRS 20-Factor Test", "DOL Economic Reality Test", "Risk Score Report", "Contract Templates", "PDF Export", "Instant Analysis"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Answer Questions", desc: "Complete a guided multi-step form about your contractor relationship — control, payment, tools, and more." },
            { step: "02", title: "Get Risk Score", desc: "Our engine evaluates your answers against IRS 20-factor and DOL economic reality tests and returns a risk score." },
            { step: "03", title: "Download Report", desc: "Receive a PDF compliance report and a ready-to-use contractor agreement tailored to your situation." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-3xl font-black mb-3">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] text-center mb-10">One plan. Everything included.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-black text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited contractor analyses",
              "IRS 20-factor &amp; DOL tests",
              "Instant risk score reports",
              "Compliant contract templates",
              "PDF export &amp; download",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. Billed monthly via Lemon Squeezy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "What is contractor misclassification and why does it matter?",
              a: "Misclassification occurs when a business treats an employee as an independent contractor. The IRS and DOL can impose back taxes, penalties, and fines — sometimes exceeding $50,000 per worker. Our tool helps you identify and fix risks before they become costly."
            },
            {
              q: "Which compliance tests does the checker use?",
              a: "We evaluate relationships using the IRS 20-Factor Behavioral/Financial/Type-of-Relationship test and the DOL Economic Reality Test under the FLSA. Both are the primary standards used in audits and litigation."
            },
            {
              q: "Can I use the generated contracts as-is?",
              a: "Our templates are drafted to reflect compliant contractor relationships based on your answers. We recommend having an attorney review any contract before signing, but the templates are a strong, legally-informed starting point."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#6e7681] text-sm">
        <p>&copy; {new Date().getFullYear()} Contractor Tax Compliance Checker. Not legal advice.</p>
      </footer>
    </main>
  );
}
