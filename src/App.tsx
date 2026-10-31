import { useState, useRef } from 'react';

import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  X,
  CarFront,
  MessageCircle,
  Route,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Instagram,
  BadgePlus,
  MoveUpRight,
} from 'lucide-react';

const units = [
  {
    name: 'Campo Grande',
    phone: '5581988703241',
    display: '(81) 98870-3241',
    address: 'Estrada de Belém, 1501 · Campo Grande, Recife',
    map: 'https://goo.gl/maps/ZYJn2HN2qjyB5BxN6',
  },
  {
    name: 'Encruzilhada',
    phone: '5581992312150',
    display: '(81) 99231-2150',
    address: 'Encruzilhada · Recife, PE',
    map: 'https://goo.gl/maps/8KwDkQsW5Wfd5ooUA',
  },
];
const services = [
  {
    title: 'Primeira habilitação',
    subtitle: 'O começo da sua independência.',
    icon: CarFront,
    text: 'Seu primeiro passo para sair do banco do passageiro. Converse com a nossa equipe para conhecer as opções de habilitação e começar sua jornada.',
    items: [
      'Orientação para começar',
      'Preparação teórica e prática',
      'Categorias A e B: moto e carro',
    ],
    tag: 'SEU PRIMEIRO PASSO',
  },
  {
    title: 'Renovação da CNH',
    subtitle: 'Mais caminhos pela frente.',
    icon: RefreshCw,
    text: 'Chegou a hora de renovar? Entenda o que você precisa para dar continuidade à sua habilitação com o apoio da nossa equipe.',
    items: [
      'Orientação sobre o processo',
      'Informações sobre documentação',
      'Atendimento na sua unidade',
    ],
    tag: 'SIGA EM FRENTE',
  },
  {
    title: 'Classificação',
    subtitle: 'Seu próximo objetivo ao volante.',
    icon: Route,
    text: 'Sua próxima conquista pode ser uma nova categoria. A Belém oferece classificação: converse com a equipe sobre a categoria D e os próximos passos para o seu objetivo.',
    items: [
      'Classificação para a categoria D',
      'Orientação personalizada',
      'Condições direto com a equipe',
    ],
    tag: 'NOVAS POSSIBILIDADES',
  },
  {
    title: 'Adição de categoria',
    subtitle: 'Mais possibilidades na sua CNH.',
    icon: BadgePlus,
    text: 'Já tem habilitação e quer adicionar uma categoria? Conheça as opções da Belém para moto e carro e converse com a equipe para planejar seu próximo passo.',
    items: [
      'Adição nas categorias A e B',
      'Orientação para quem já tem CNH',
      'Consulte condições e disponibilidade',
    ],
    tag: 'AMPLIE SEUS CAMINHOS',
  },
  {
    title: 'Aulas para habilitados',
    subtitle: 'Reencontre a confiança para dirigir.',
    icon: ShieldCheck,
    text: 'Já tem CNH e quer voltar a dirigir? Dê o próximo passo com aulas para habilitados e converse sobre o que você deseja praticar.',
    items: [
      'Prática para quem já tem CNH',
      'Conversa sobre seus objetivos',
      'Consulte horários disponíveis',
    ],
    tag: 'CONFIANÇA NO CAMINHO',
  },
  {
    title: 'Atualização',
    subtitle: 'Conhecimento para seguir melhor.',
    icon: BookOpen,
    text: 'Mantenha o aprendizado em dia. Nossa equipe explica as opções de atualização oferecidas e ajuda você a encontrar o atendimento adequado.',
    items: [
      'Informações sobre atualização',
      'Orientação para sua necessidade',
      'Atendimento pelo WhatsApp',
    ],
    tag: 'APRENDER É CONTINUAR',
  },
];
const questions = [
  [
    'A Belém faz adição e classificação?',
    'Sim! Oferecemos adição de categoria e classificação. Trabalhamos com as categorias A, B e D. Converse com a equipe sobre a categoria desejada para entender as condições e os próximos passos para o seu caso.',
  ],
  [
    'Como começo minha primeira habilitação?',
    'Escolha uma das nossas unidades e fale com a equipe pelo WhatsApp. Você recebe informações sobre as opções disponíveis, documentos, etapas e condições para começar.',
  ],
  [
    'Quais são os valores e as formas de pagamento?',
    'Os valores dependem do serviço escolhido. Solicite uma proposta pelo WhatsApp da unidade de sua preferência para consultar preços e condições atualizadas.',
  ],
  [
    'Já tenho CNH. Posso fazer aulas?',
    'Sim. A Autoescola Belém oferece aulas para habilitados. Conte à equipe quais são seus objetivos e consulte os horários e condições.',
  ],
  [
    'Onde ficam as unidades?',
    'Temos atendimento em Campo Grande e Encruzilhada, no Recife. Na seção de unidades, você pode abrir a localização no Google Maps e conversar diretamente com cada equipe.',
  ],
  [
    'Posso treinar para a prova teórica?',
    'No nosso Linktree você encontra o acesso ao simulador de prova teórica do Detran-PE. Consulte também a equipe sobre a preparação oferecida pela autoescola.',
  ],
];
const whatsapp = (unit: number, service = 'os serviços da autoescola') =>
  `https://wa.me/${units[unit].phone}?text=${encodeURIComponent(`Olá, Autoescola Belém! Vim pelo site e gostaria de saber mais sobre ${service}. Tenho interesse na unidade ${units[unit].name}.`)}`;

export default function App() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState(0);
  const [unit, setUnit] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const contact = (index?: number) => {
    if (index !== undefined) setService(index);
    opener.current = document.activeElement as HTMLElement;
    dialog.current?.showModal();
  };
  const close = () => {
    dialog.current?.close();
    opener.current?.focus();
  };
  const ActiveIcon = services[service].icon;
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="topline">
        <span>
          <MapPin size={13} /> DUAS UNIDADES, UM NOVO CAMINHO.
        </span>
        <span>
          Campo Grande <i /> Encruzilhada
        </span>
      </div>
      <header>
        <a href="#" className="brand" aria-label="Autoescola Belém, início">
          <img src="/images/logo.jpg" alt="" width="48" height="48" />
          <span>
            AUTOESCOLA
            <strong>
              BELÉM<span>®</span>
            </strong>
          </span>
        </a>
        <nav aria-label="Menu principal" className={menu ? 'nav open' : 'nav'}>
          {[
            ['Serviços', 'servicos'],
            ['A Belém', 'sobre'],
            ['Unidades', 'unidades'],
            ['Dúvidas', 'duvidas'],
          ].map(([name, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {name}
            </a>
          ))}
        </nav>
        <button className="btn btn-dark header-cta" onClick={() => contact()}>
          Começar minha jornada <ArrowUpRight size={18} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="conteudo">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="small-line" /> AUTOESCOLA BELÉM · RECIFE
            </div>
            <h1>
              A vida acontece
              <br />
              lá fora.
              <br />
              <span>Vá dirigir.</span>
              <svg viewBox="0 0 300 14" aria-hidden="true">
                <path d="M3 10Q130-4 295 6" fill="none" stroke="currentColor" strokeWidth="5" />
              </svg>
            </h1>
            <p>
              Da primeira habilitação à adição e classificação. Conquiste novos caminhos com as
              categorias A, B e D.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-yellow" onClick={() => contact(0)}>
                Quero conquistar minha CNH <ArrowUpRight size={20} />
              </button>
              <a href="#servicos" className="text-link">
                Conhecer os serviços <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-foot">
              <span className="mini-icon">
                <ShieldCheck size={22} />
              </span>
              <span>
                Seu caminho começa com uma conversa.
                <br />
                <strong>Fale diretamente com a nossa equipe.</strong>
              </span>
            </div>
          </div>
          <figure className="campaign-art">
            <img
              src="/images/categorias-abd.png"
              alt="Aqui tem! Categorias A, B e D na Autoescola Belém, com moto, ônibus e carro da escola."
              width="399"
              height="501"
              fetchPriority="high"
            />
            <figcaption>
              <div>
                <span className="eyebrow">MOTO, CARRO E ÔNIBUS</span>
                <strong>Seu próximo caminho tem lugar aqui.</strong>
              </div>
              <button
                className="campaign-link"
                onClick={() =>
                  contact(services.findIndex((s) => s.title === 'Adição de categoria'))
                }
              >
                Quero adicionar uma categoria <ArrowUpRight size={18} />
              </button>
            </figcaption>
          </figure>
        </section>
        <div className="ribbon">
          <span>
            <CarFront /> PRIMEIRA HABILITAÇÃO
          </span>
          <i>✳</i>
          <span>
            <BadgePlus /> ADIÇÃO DE CATEGORIA
          </span>
          <i>✳</i>
          <span>
            <Route /> CLASSIFICAÇÃO
          </span>
          <i>✳</i>
          <span>
            <ShieldCheck /> AULAS PARA HABILITADOS
          </span>
        </div>
        <section id="servicos" className="section services">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / ESCOLHA SEU CAMINHO</span>
              <h2>
                Em que momento
                <br />
                você está?
              </h2>
            </div>
            <p>
              Todo motorista tem um ponto de partida.
              <br />
              Encontre o serviço para o seu próximo passo.
            </p>
          </div>
          <div className="service-layout">
            <div
              className="service-tabs"
              role="tablist"
              aria-label="Serviços"
              aria-orientation="vertical"
            >
              {services.map((s, i) => (
                <button
                  role="tab"
                  aria-selected={service === i}
                  aria-controls="service-panel"
                  id={`service-tab-${i}`}
                  tabIndex={service === i ? 0 : -1}
                  key={s.title}
                  onClick={() => setService(i)}
                  onKeyDown={(e) => {
                    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
                      e.preventDefault();
                      const next =
                        e.key === 'Home'
                          ? 0
                          : e.key === 'End'
                            ? services.length - 1
                            : (i + (e.key === 'ArrowDown' ? 1 : services.length - 1)) %
                              services.length;
                      setService(next);
                      document.getElementById(`service-tab-${next}`)?.focus();
                    }
                  }}
                  className={service === i ? 'service-tab active' : 'service-tab'}
                >
                  <span className="tab-number">0{i + 1}</span>
                  {s.title}
                  <ArrowUpRight size={20} />
                </button>
              ))}
            </div>
            <div
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${service}`}
              className="service-panel"
              key={service}
            >
              <div className="panel-top">
                <span className="eyebrow">{services[service].tag}</span>
                <ActiveIcon size={52} strokeWidth={1.2} />
              </div>
              <h3>{services[service].subtitle}</h3>
              <p>{services[service].text}</p>
              <ul>
                {services[service].items.map((t) => (
                  <li key={t}>
                    <Check size={16} />
                    {t}
                  </li>
                ))}
              </ul>
              <button className="text-link" onClick={() => contact()}>
                Quero saber mais <ArrowUpRight size={20} />
              </button>
              <span className="panel-decoration" aria-hidden="true">
                0{service + 1}
              </span>
            </div>
          </div>
        </section>
        <section id="sobre" className="about section">
          <div className="about-photo">
            <img
              src="/images/facade.webp"
              alt="Fachada amarela da Autoescola Belém, em registro do site da escola"
              loading="lazy"
              width="900"
              height="675"
            />
            <span className="photo-label">
              <MapPin size={16} /> NOSSA HISTÓRIA É AQUI, NO RECIFE.
            </span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">02 / PRAZER, SOMOS A BELÉM</span>
            <h2>
              Mais que dirigir.
              <br />É sobre <span>ir além.</span>
            </h2>
            <p>
              Ir ao trabalho por conta própria. Pegar a estrada. Ganhar autonomia no dia a dia. A
              gente sabe que uma habilitação abre muito mais do que a porta de um carro.
            </p>
            <p>
              Com unidades em Campo Grande e Encruzilhada, a Autoescola Belém faz parte desse
              caminho no Recife — da primeira habilitação ao retorno ao volante.
            </p>
            <div className="about-facts">
              <div>
                <strong>02</strong>
                <span>unidades no Recife</span>
              </div>
              <div>
                <MoveUpRight size={40} strokeWidth={1.3} />
                <span>um novo caminho para você</span>
              </div>
            </div>
            <a
              className="text-link"
              href="https://www.instagram.com/cfcbelem/"
              target="_blank"
              rel="noreferrer"
            >
              Acompanhe a Belém no Instagram <Instagram size={20} />
            </a>
          </div>
        </section>
        <section className="steps section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SEM COMPLICAR O PRIMEIRO PASSO</span>
              <h2>Vamos sair do lugar?</h2>
            </div>
            <button className="btn btn-outline" onClick={() => contact()}>
              Vamos conversar <MessageCircle size={18} />
            </button>
          </div>
          <div className="steps-grid">
            {[
              [
                '01',
                'Escolha seu objetivo',
                'Primeira habilitação, renovação ou mais confiança para dirigir? Conta pra gente.',
              ],
              [
                '02',
                'Encontre sua unidade',
                'Campo Grande ou Encruzilhada. Escolha o atendimento mais perto de você.',
              ],
              [
                '03',
                'Converse com a equipe',
                'Tire suas dúvidas, conheça as condições e descubra como começar.',
              ],
            ].map(([n, t, p]) => (
              <div key={n}>
                <span className="step-number">
                  {n}
                  <ArrowRight size={22} />
                </span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="unidades" className="units section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / PERTO DE VOCÊ</span>
              <h2>
                Dois endereços.
                <br />A mesma direção.
              </h2>
            </div>
            <p>
              Escolha sua unidade e fale direto com a equipe.
              <br />
              Seu próximo caminho começa no Recife.
            </p>
          </div>
          <div className="units-grid">
            {units.map((u, i) => (
              <article className="unit-card" key={u.name}>
                <div className="unit-top">
                  <span>UNIDADE 0{i + 1}</span>
                  <MapPin size={23} />
                </div>
                <h3>{u.name}</h3>
                <p>{u.address}</p>
                <a href={u.map} target="_blank" rel="noreferrer" className="map-link">
                  Ver localização no mapa <ArrowUpRight size={16} />
                </a>
                <div className="unit-bottom">
                  <span>{u.display}</span>
                  <a className="btn btn-dark" href={whatsapp(i)} target="_blank" rel="noreferrer">
                    Falar com a unidade <MessageCircle size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="duvidas" className="faq section">
          <div>
            <span className="eyebrow">04 / PODE PERGUNTAR</span>
            <h2>
              Tire a dúvida.
              <br />
              Dê a partida.
            </h2>
            <p>
              Não encontrou o que precisava?
              <br />A nossa equipe conversa com você.
            </p>
            <button className="text-link" onClick={() => contact()}>
              Chamar no WhatsApp <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="faq-list">
            {questions.map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <h3>
                  <button
                    aria-expanded={faq === i}
                    aria-controls={`answer-${i}`}
                    onClick={() => setFaq(faq === i ? null : i)}
                  >
                    {q}
                    <ChevronDown size={20} className={faq === i ? 'rotated' : ''} />
                  </button>
                </h3>
                <div id={`answer-${i}`} hidden={faq !== i}>
                  <p>
                    {a}
                    {q === 'Posso treinar para a prova teórica?' && (
                      <>
                        {' '}
                        <a href="https://linktr.ee/cfcbelem" target="_blank" rel="noreferrer">
                          Acessar Linktree oficial ↗
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="final-cta">
          <div>
            <span className="eyebrow">O PRÓXIMO PASSO É SEU.</span>
            <h2>
              Seu lugar é<br />
              <span>no volante.</span>
            </h2>
            <button className="btn btn-dark" onClick={() => contact()}>
              Vamos começar? <ArrowUpRight size={22} />
            </button>
          </div>
          <div className="big-arrow" aria-hidden="true">
            <MoveUpRight strokeWidth={0.8} />
          </div>
          <span className="cta-caption">AUTOESCOLA BELÉM · RECIFE, PE</span>
        </section>
      </main>
      <footer>
        <a href="#" className="brand">
          <span>
            AUTOESCOLA
            <strong>
              BELÉM<span>®</span>
            </strong>
          </span>
        </a>
        <p>Novos caminhos começam aqui.</p>
        <div>
          <a href="https://www.instagram.com/cfcbelem/" target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight size={14} />
          </a>
          <a href="https://linktr.ee/cfcbelem" target="_blank" rel="noreferrer">
            Nossos links <ArrowUpRight size={14} />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Autoescola Belém</span>
      </footer>
      <button
        className="floating-contact"
        onClick={() => contact()}
        aria-label="Escolher unidade para conversar pelo WhatsApp"
      >
        <MessageCircle size={25} />
        <span>Vamos conversar?</span>
      </button>
      <dialog
        aria-labelledby="contact-title"
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onCancel={close}
      >
        <div className="contact-dialog">
          <button className="dialog-close" onClick={close} aria-label="Fechar">
            <X />
          </button>
          <span className="eyebrow">SEU CAMINHO COMEÇA AQUI</span>
          <h2 id="contact-title">
            Vamos dar
            <br />o primeiro passo?
          </h2>
          <p>Escolha o serviço e a unidade. Vamos preparar sua mensagem para a equipe.</p>
          <label htmlFor="service-select">O que você procura?</label>
          <select
            id="service-select"
            value={service}
            onChange={(e) => setService(Number(e.target.value))}
          >
            {services.map((s, i) => (
              <option key={s.title} value={i}>
                {s.title}
              </option>
            ))}
          </select>
          <fieldset>
            <legend>Qual unidade fica melhor para você?</legend>
            <div className="unit-options">
              {units.map((u, i) => (
                <label key={u.name} className={unit === i ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="unit"
                    value={i}
                    checked={unit === i}
                    onChange={() => setUnit(i)}
                  />
                  <MapPin size={18} />
                  {u.name}
                </label>
              ))}
            </div>
          </fieldset>
          <a
            className="btn btn-yellow"
            href={whatsapp(unit, services[service].title)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} /> Continuar no WhatsApp <ArrowUpRight size={18} />
          </a>
          <small>
            A conversa será aberta com a unidade {units[unit].name}.<br />A mensagem só é enviada
            quando você confirmar no WhatsApp.
          </small>
        </div>
      </dialog>
    </>
  );
}
