export default function ShinerayFerrazPreview() {
  const motos = [
    {
      nome: "Denver 250",
      categoria: "Custom / Urbana",
      imagem: "/motos/denver250.jpg",
      preco: "Consulte condições",
      destaque: "Estilo marcante + presença premium",
    },
    {
      nome: "Jet 125",
      categoria: "Uso diário",
      imagem: "motos/jet125.jpg",
      preco: "Consulte condições",
      destaque: "Economia e praticidade",
    },
    {
      nome: "Storm 200 EFI",
      categoria: "Street",
      imagem: "/motos/storm200.jpg",
      preco: "Consulte condições",
      destaque: "Visual esportivo",
    },
    {
      nome: "SHI 175",
      categoria: "Mobilidade urbana",
      imagem: "/motos/shi175.jpg",
      preco: "Consulte condições",
      destaque: "Boa para rotina intensa",
    },
  ];

  const beneficios = [
    "Atendimento rápido pelo WhatsApp",
    "Ajuda para financiamento",
    "Loja local em Ferraz de Vasconcelos",
    "Catálogo digital com motos em destaque",
  ];

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Estoque", href: "#estoque" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Shineray Ferraz" className="h-20 w-auto" />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Shineray</div>
              <div className="text-base font-bold text-zinc-950">Ferraz</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-zinc-700 transition hover:text-red-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] md:inline-flex"
          >
            Falar agora
          </a>
        </div>

        <div className="border-t border-zinc-200/70 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 overflow-x-auto whitespace-nowrap">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <section id="home" className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,37,33,0.25),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:px-10 md:py-20 lg:px-12">
          <div className="relative z-10 flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-zinc-200">
              Moto da Gente - Shineray Ferraz • Conceito inicial
            </span>
            <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Sua próxima <span className="text-red-500">Shineray</span> começa aqui.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
              Uma landing page com visual forte, foco em estoque, ficha de interesse e atendimento rápido para transformar visitas em conversas no WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-900/30 transition hover:scale-[1.02]">
                Ver motos em destaque
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Falar no WhatsApp
              </button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-bold">+ Leads</div>
                <div className="mt-1 text-sm text-zinc-300">Captação direta pelo site</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-bold">Local</div>
                <div className="mt-1 text-sm text-zinc-300">Presença digital para Ferraz </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Modelo em destaque</p>
                    <h2 className="mt-2 text-3xl font-bold">Denver 250</h2>
                  </div>
                  <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">Destaque</span>
                </div>

                <div className="mt-8 rounded-[24px] border border-white/10 bg-black/30 p-6">
                  <div className="aspect-[16/9] rounded-[20px] border border-dashed border-white/15 bg-zinc-900/80 p-4">
                    <img
                      src="/motos/denver250.jpg"
                      alt="Denver 250"
                      className="h-full w-full object-cover rounded-[18px]"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-zinc-400">Categoria</div>
                      <div className="mt-1 font-semibold">Custom</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-zinc-400">Condição</div>
                      <div className="mt-1 font-semibold">Consulte</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-zinc-400">Contato</div>
                      <div className="mt-1 font-semibold">WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="estoque" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Motos em destaque</p>
            <h3 className="mt-2 text-3xl font-bold">Visual de estoque com cara de loja séria</h3>
          </div>
          <div className="hidden rounded-2xl bg-zinc-100 px-4 py-2 text-sm text-zinc-600 md:block">
            Estrutura inspirada em concessionária / vitrine digital
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {motos.map((moto) => (
            <div key={moto.nome} className="group rounded-[28px] border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] rounded-[22px] bg-gradient-to-br from-zinc-100 to-zinc-200 p-4 text-sm text-zinc-500">
                <div className="aspect-[4/3] rounded-[22px] bg-gradient-to-br from-zinc-100 to-zinc-200 p-4 text-sm text-zinc-500">
                  <img
                    src={moto.imagem}
                    alt={moto.nome}
                    className="h-full w-full rounded-[18px] object-contain p-2"
                  />
                </div>
              </div>
              <div className="px-1 pb-1 pt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">{moto.categoria}</div>
                <h4 className="mt-2 text-2xl font-bold text-zinc-900">{moto.nome}</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{moto.destaque}</p>
                <div className="mt-4 text-lg font-semibold text-zinc-900">{moto.preco}</div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button className="flex-1 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white">
                    Ver detalhes
                  </button>
                  <button className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700">
                    Interesse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Ficha de interesse</p>
            <h3 className="mt-2 text-3xl font-bold text-zinc-950">Captação pensada para vender, não só para enfeitar.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              Como você já tem um sistema de ficha de interesse, a landing pode empurrar o usuário direto para essa ação com destaque visual e uma oferta clara de atendimento.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {beneficios.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm font-medium text-zinc-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Simulação</div>
                <h4 className="mt-2 text-2xl font-bold">Quero saber mais</h4>
              </div>
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">Lead</span>
            </div>

            <div className="space-y-3">
              <input className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none" placeholder="Seu nome" />
              <input className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none" placeholder="WhatsApp" />
              <select className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none">
                <option>Tenho interesse em</option>
                <option>Denver 250</option>
                <option>Jet 125</option>
                <option>Storm 200 EFI</option>
              </select>
              <textarea className="min-h-[120px] w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none" placeholder="Mensagem" />
              <button className="w-full rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-200">
                Enviar ficha de interesse
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-12">
        <div className="rounded-[36px] bg-zinc-950 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Encerramento</p>
              <h3 className="mt-2 text-3xl font-bold">Moto da Gente - Shineray Ferraz com presença digital de verdade.</h3>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Estoque em destaque, contato rápido, captação de leads e um visual alinhado à identidade da marca para passar mais confiança logo no primeiro acesso.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-2xl bg-red-600 px-5 py-3 font-semibold">Solicitar atendimento</button>
              <button className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-zinc-100">Ver localização</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
