export default function NFCAPProfessionalHomepage() {

  const basePath = process.env.NODE_ENV === "production" ? "/nfcap-site" : "";

  const stats = [
    { value: '100+', label: 'Apprentices trained' },
    { value: '5', label: 'States operating' },
    { value: '45', label: 'Industry partners' },
    { value: '90%', label: 'Job placement rate' },
  ];

  const steps = [
    {
      title: '1) Train',
      desc: 'Hands-on training aligned with employer expectations.',
      icon: '🧰',
    },
    {
      title: '2) Certify',
      desc: 'Competency benchmarks and professionalism standards.',
      icon: '🏅',
    },
    {
      title: '3) Place',
      desc: 'Employer matching and placement support.',
      icon: '💼',
    },
  ];

  const stories = [
    {
      name: 'Brittney',
      desc: 'Tile setter → rapidly growing contractor track',
      image:
        `${basePath}/brittney.jpg`,
    },
    {
      name: 'Andrea',
      desc: 'Rising apprentice → building a strong career path',
      image:
        `${basePath}/andrea.jpg`,
    },
    {
      name: 'Jeremy',
      desc: 'Hands-on installer → advancing with industry tools',
      image:
        `${basePath}/jeremy.jpg`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f1f4] px-6 py-8 text-slate-900">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[10px] border border-slate-300 bg-[#f8f7f8] shadow-[0_18px_55px_rgba(15,23,42,0.12)]">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
          <div className="flex items-center gap-4">
            <img src={`${basePath}/logo.png`} alt="NFCAP Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden items-center gap-9 text-[15px] font-medium text-slate-700 md:flex">
            <a href="#program" className="hover:text-[#133b72]">
              Program
            </a>
            <a href="#partners" className="hover:text-[#133b72]">
              Partners
            </a>
            <a href="#success-stories" className="hover:text-[#133b72]">
              Success Stories
            </a>
            <a href="#contact" className="hover:text-[#133b72]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:carlos@nfcap.org" className="rounded-md bg-[#163b73] px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm inline-block">
              Apply
            </a>
          </div>
        </header>

        <section className="relative h-[575px] overflow-hidden">
  <img
    src={`${basePath}/hero.jpg`}
    alt="NFCAP training facility"
    className="absolute inset-0 h-full w-full object-cover object-center z-0"
  />

  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#12274a]/35 via-[#12274a]/10 to-transparent" />

  <div className="relative z-20 flex h-full items-start px-10 pt-16">
    <div className="max-w-[720px] text-white">
      <h1 className="max-w-[650px] text-[68px] font-black leading-[1.02] tracking-[-0.04em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        Building Skilled Careers.{" "}
        <span className="text-[#d9d5ea]">Transform futures.</span>
      </h1>
      <p className="mt-7 max-w-[760px] text-[20px] leading-9 text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
        Federally recognized apprenticeship program connecting Job Corps
        graduates to careers in flooring.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="mailto:carlos@nfcap.org"
          className="rounded-md bg-[#efc44f] px-8 py-4 text-[18px] font-bold text-slate-900 shadow-md inline-block"
        >
          Apply for Apprenticeship
        </a>
        <a
          href="mailto:carlos@nfcap.org"
          className="rounded-md bg-[#163b73] px-8 py-4 text-[18px] font-bold text-white shadow-md inline-block"
        >
          Partner with Us
        </a>
      </div>
    </div>
  </div>
</section>

        <section className="bg-white px-10 py-7">
          <div className="text-[16px] font-semibold text-[#1d457d]">
            Impact metrics section—
          </div>
          <div className="mt-5 grid grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-3 text-center ${
                  index < 3 ? 'border-r border-slate-200' : ''
                }`}
              >
                <div className="text-[64px] font-light leading-none tracking-[-0.03em] text-[#132f63]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[18px] text-slate-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="program"
          className="relative overflow-hidden bg-[#f8f7f8] px-10 pb-12 pt-0"
        >
          <div className="relative h-[300px] overflow-hidden">
            <img
              src={`${basePath}/hero.jpg`}
              alt="Training environment"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12274a]/60 via-[#12274a]/30 to-transparent" />
            <div className="relative px-8 py-10 text-white">
              <h2 className="max-w-[980px] text-[28px] font-bold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] md:text-[34px]">
                Preparing a highly skilled, dependable workforce in collaboration
                with industry leaders.
              </h2>
            </div>
          </div>

          <div className="relative z-10 -mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-[18px] border border-slate-200 bg-white px-8 py-9 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
              >
                <div className="text-4xl">{step.icon}</div>
                <div className="mt-4 text-[24px] font-bold tracking-tight text-[#173967]">
                  {step.title}
                </div>
                <p className="mx-auto mt-4 max-w-[280px] text-[18px] leading-8 text-slate-700">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="success-stories"
          className="bg-[#f8f7f8] px-10 pb-10 pt-2"
        >
          <h2 className="text-[58px] font-black tracking-[-0.04em] text-slate-900">
            Success Stories
          </h2>
          <p className="mt-4 max-w-[1100px] text-[21px] leading-9 text-slate-700">
            Collaborating with top industry manufacturers, and flooring
            contractors to bridge the skilled labor gap.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.name}
                className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-[250px] w-full object-cover"
                />
                <div className="px-7 py-6">
                  <h3 className="text-[24px] font-bold tracking-tight text-slate-900">
                    {story.name}
                  </h3>
                  <p className="mt-4 text-[18px] leading-8 text-slate-700">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="rounded-md bg-[#efc44f] px-10 py-3 text-[18px] font-semibold text-slate-900 shadow-md">
              Read Their Stories
            </button>
          </div>
        </section>

        <section
          id="partners"
          className="overflow-hidden bg-[#163b73] px-10 py-10 text-white"
        >
          <div className="max-w-3xl">
            <h2 className="text-[54px] font-black tracking-[-0.04em]">
              Our Partners
            </h2>
            <p className="mt-4 text-[20px] leading-9 text-white/90">
              Collaborating with top industry manufacturers, employers, and supporters.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.paypal.com/donate/YOUR_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#efc44f] px-8 py-4 text-[18px] font-bold text-slate-900 shadow-md inline-block"
              >
                Donate now
              </a>
              <button className="rounded-md bg-[#0f2f5e] px-8 py-4 text-[18px] font-bold text-white shadow-md">
                Contact Us
              </button>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-8">
          <div className="grid gap-8 md:grid-cols-3 text-left">

            <div>
              <div className="text-lg font-bold">NFCAP</div>
              <p className="mt-3 text-sm text-white/80">
                Building skilled careers and transforming futures through apprenticeship and workforce development.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#program" className="hover:underline">Program</a></li>
                <li><a href="#success-stories" className="hover:underline">Success Stories</a></li>
                <li><a href="mailto:carlos@nfcap.org" className="hover:underline">Apply</a></li>
                <li><a href="mailto:carlos@nfcap.org" className="hover:underline">Partner</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/70">Connect</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="mailto:carlos@nfcap.org" className="hover:underline">
                    carlos@nfcap.org
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/nfcap" target="_blank" className="hover:underline">
                    <span className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                      </svg>
                      @NFCAP
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-[14px] text-white/70">
            © 2024 NFCAP. All rights reserved.
            <div className="mt-2">
              223 East Flagler St. #502a, Miami, FL 33131
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}
