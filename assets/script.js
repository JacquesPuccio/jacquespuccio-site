/* ══════════════════════════════════════════
   JACQUESPUCCIO — Script
   ══════════════════════════════════════════ */

/* ─── GOOGLE SHEETS ENDPOINT ─────────────── */
const SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

/* ─── TRANSLATIONS ───────────────────────── */
const translations = {
  en: {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Work With Me',
    'hero.eyebrow': 'Web Creator · Hotel Tech · Customer Experience',
    'hero.statement': 'I build websites and digital tools.<br>I know the hospitality industry <em>from the inside</em>.<br>Four years inside hotel tech. Now building independently.',
    'hero.cta1': 'See My Work',
    'hero.cta2': "Let's Talk",
    'hero.scroll': 'Scroll',
    'pill.1': 'Web Design',
    'pill.2': 'Hotel Tech',
    'pill.3': 'CRM',
    'pill.4': 'n8n Automation',
    'pill.5': 'Next.js',
    'pill.6': 'Customer Experience',
    'pill.7': 'SaaS Ops',
    'stat.1': 'Sites Built',
    'stat.2': 'Yrs Hotel Tech',
    'stat.3': 'CSAT Score',
    'portfolio.label': 'Selected Work',
    'portfolio.title': 'Things I\'ve built —<br><em>and what they solve</em>',
    'portfolio.lead': 'From personal sites to custom CRMs, here\'s a selection of real work. Every project started with understanding the business behind the brief.',
    'p1.cat': 'AI & Operations Consulting',
    'p1.desc': 'B2B consulting website built from concept to launch — brand identity, copy, and code. Designed to attract mid-size businesses looking to automate operations and scale with AI.',
    'p1.link': 'Live Site',
    'p2.cat': 'Personal Portfolio',
    'p2.desc': 'Multilingual portfolio (EN/ES/FR/IT) with custom cursor animations, scroll reveal system, multi-step lead capture, and a dark luxury design built to stand out.',
    'p2.link': 'You\'re here →',
    'p3.cat': 'Lead Generation',
    'p3.desc': 'High-converting landing page for a roofing company in Orlando, FL. Clean layout, trust signals, and direct CTAs designed to turn visitors into leads.',
    'p3.link': 'Live Site',
    'p4.cat': 'Internal Tool',
    'p4.title': 'Sales & Ops CRM',
    'p4.desc': 'A lightweight web-based CRM built to replace scattered spreadsheets — tracking leads, managing pipeline, and centralizing customer data for a small business team.',
    'p4.link': 'Internal',
    'services.label': 'Services',
    'services.title': 'What I do —<br><em>and where I add real value</em>',
    'services.lead': 'Web development rooted in business context. I don\'t just write code — I understand the operation behind it.',
    's1.title': 'Web Design & Development',
    's1.desc': 'From landing pages to full multi-page websites — built clean, fast, and responsive. No templates. Every site designed to convert and represent your brand properly.',
    's1.t1': 'Landing Pages', 's1.t2': 'Portfolios', 's1.t3': 'Corporate Sites',
    's2.title': 'Hotel Tech Consulting',
    's2.desc': 'Years working inside leading hotel tech platforms — supporting properties with distribution strategy, PMS integrations, OTA connections, and channel manager setup. I know the stack and the business behind it.',
    's2.t1': 'Channel Manager', 's2.t2': 'PMS / OTA', 's2.t3': 'Distribution',
    's3.title': 'Customer Experience (CX)',
    's3.desc': 'Auditing support processes, reducing friction, building playbooks and escalation paths. From achieving 98% CSAT at Apple to designing onboarding flows for SaaS teams at scale.',
    's3.t1': 'CX Audit', 's3.t2': 'Support Design', 's3.t3': 'CSAT',
    's4.title': 'Custom CRM & Internal Tools',
    's4.desc': 'If your team runs on spreadsheets, there\'s a better way. I build lightweight, web-based tools that fit your actual workflow — lead tracking, pipeline management, internal dashboards.',
    's4.t1': 'Web Apps', 's4.t2': 'Internal Tools', 's4.t3': 'Full-Stack',
    's5.title': 'AI Automation (n8n)',
    's5.desc': 'Repetitive workflows automated. From email sequences to data pipelines — built with n8n and connected to the tools you already use. More output, less manual work.',
    's5.t1': 'n8n Workflows', 's5.t2': 'AI Pipelines', 's5.t3': 'Integrations',
    's6.title': 'SaaS Onboarding & Ops',
    's6.desc': 'Implementation, user adoption, process design. I\'ve done it at scale for hotel chains and enterprise clients — now available as a fractional service for growing SaaS teams.',
    's6.t1': 'SaaS', 's6.t2': 'Onboarding', 's6.t3': 'Operations',
    'statement.quote': '"The best digital products are built by people who understand the business —<br><em>not just the technology</em>."',
    'process.label': 'How It Works',
    'process.title': 'From first conversation to<br><em>delivered product</em>',
    'p1.title.proc': 'Discovery Call — 30 min, free',
    'p1.desc.proc': 'We talk about what you need, what you\'ve tried, and what\'s blocking you. I listen more than I talk. No sales pitch — just an honest conversation about whether I can help.',
    'p1.detail.proc': 'Free · No commitment · 30 minutes',
    'p2.title.proc': 'Proposal & Scope',
    'p2.desc.proc': 'You get a clear written proposal — scope, timeline, fixed price. No vague estimates, no surprise charges. We agree on exactly what we\'re building before I start.',
    'p2.detail.proc': 'Written proposal · Fixed price · Clear timeline',
    'p3.title.proc': 'Build & Iterate',
    'p3.desc.proc': 'I build in cycles, share progress regularly, and adjust as we go. You stay involved without being buried in it. Feedback is always welcome — changes are part of the process.',
    'p3.detail.proc': 'Regular updates · Feedback loops · Transparent progress',
    'p4.title.proc': 'Launch & Handover',
    'p4.desc.proc': 'When it\'s live, it\'s yours. Full handover — code, credentials, documentation. No dependency on me to keep it running. Ongoing support available if needed.',
    'p4.detail.proc': 'Full handover · Docs included · Support available',
    'about.label': 'About',
    'about.title': 'I build things.<br><em>And I know your industry.</em>',
    'about.p1': "I'm Albert — a full-stack developer and hotel tech consultant based in Barcelona. I completed developer training at Aulab Hackademy in 2020, then spent years working inside leading hotel tech platforms — helping properties globally optimize their distribution, integrations, and technology stack.",
    'about.p2': 'That combination — technical build experience plus deep industry knowledge — is what makes the work different. I don\'t just design a hotel website and guess what works. I know what operators need, what guests expect, and where most hospitality tech implementations break down.',
    'about.p3': 'I work independently under jacquespuccio / Caruci LLC, available for web projects, hotel tech consulting, and operational tooling. Working remotely across Europe and North America.',
    'v1.title': 'Industry depth, not just code',
    'v1.desc': "I've worked inside the product, not just around it.",
    'v2.title': 'No lock-in, ever',
    'v2.desc': 'You own everything I build. Full handover, always.',
    'v3.title': 'Real attention, small team',
    'v3.desc': 'You work directly with me — not a junior subcontractor.',
    'contact.label': 'Work With Me',
    'contact.title': "Let's build<br><em>something.</em>",
    'contact.desc': "Tell me about your project. Whether it's a new website, a hotel tech challenge, or an internal tool — I'll get back to you within 24 hours.",
    'ctag.1': 'Web Design', 'ctag.2': 'Hotel Tech', 'ctag.3': 'CRM', 'ctag.4': 'AI Automation',
    'cf.name': 'Your Name *',
    'cf.email': 'Email Address *',
    'cf.emailErr': 'Enter a valid email',
    'cf.req': 'Required',
    'cf.service': 'What are you looking for?',
    'cf.select': 'Select...',
    'cf.s1': 'Web Design & Development',
    'cf.s2': 'Hotel Tech Consulting',
    'cf.s3': 'Custom CRM / Internal Tool',
    'cf.s4': 'AI Automation (n8n)',
    'cf.s5': 'Customer Experience',
    'cf.s6': 'Something else',
    'cf.message': 'Tell me about your project *',
    'cf.messageErr': 'Please describe your project',
    'cf.submit': 'Send Message',
    'cf.sending': 'Sending...',
    'success.title': 'Message Received',
    'success.msg': "I'll get back to you within <strong>24 hours</strong>.",
    'success.btn': 'Back to top',
    'footer.tagline': 'Web Creator & Hotel Tech Consultant',
    'footer.copy': '© 2026 jacquespuccio. All rights reserved.',
    'meta.desc': 'jacquespuccio — Full-stack developer and hotel tech consultant. I build websites, custom CRMs, and AI automations — and I know the hospitality industry from years on the inside.',
    'meta.title': 'jacquespuccio | Web Creator & Hotel Tech Consultant',
  },

  es: {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Trabaja Conmigo',
    'hero.eyebrow': 'Creador Web · Hotel Tech · Experiencia de Cliente',
    'hero.statement': 'Construyo sitios web y herramientas digitales.<br>Conozco el sector hotelero <em>desde adentro</em>.<br>Años dentro de hotel tech. Ahora trabajo de forma independiente.',
    'hero.cta1': 'Ver Mi Trabajo',
    'hero.cta2': 'Hablamos',
    'hero.scroll': 'Scroll',
    'pill.1': 'Diseño Web',
    'pill.2': 'Hotel Tech',
    'pill.3': 'CRM',
    'pill.4': 'Automatización n8n',
    'pill.5': 'Next.js',
    'pill.6': 'Experiencia de Cliente',
    'pill.7': 'Ops SaaS',
    'stat.1': 'Sitios Creados',
    'stat.2': 'Años Hotel Tech',
    'stat.3': 'CSAT Score',
    'portfolio.label': 'Trabajo Seleccionado',
    'portfolio.title': 'Lo que he construido —<br><em>y qué problema resuelve</em>',
    'portfolio.lead': 'Desde sitios personales hasta CRMs a medida, aquí hay una selección de trabajo real. Cada proyecto empezó entendiendo el negocio detrás del brief.',
    'p1.cat': 'Consultoría IA & Operaciones',
    'p1.desc': 'Sitio web de consultoría B2B construido de concepto a lanzamiento — identidad de marca, copy y código. Diseñado para atraer empresas medianas que quieren automatizar operaciones.',
    'p1.link': 'Sitio en Vivo',
    'p2.cat': 'Portfolio Personal',
    'p2.desc': 'Portfolio multilingüe (EN/ES/FR/IT) con animaciones de cursor personalizadas, sistema de scroll reveal, captura de leads y diseño oscuro de lujo para destacar.',
    'p2.link': 'Estás aquí →',
    'p3.cat': 'Generación de Leads',
    'p3.desc': 'Landing page de alta conversión para una empresa de techos en Orlando, FL. Layout limpio, señales de confianza y CTAs directos para convertir visitantes en leads.',
    'p3.link': 'Sitio en Vivo',
    'p4.cat': 'Herramienta Interna',
    'p4.title': 'CRM Ventas & Operaciones',
    'p4.desc': 'CRM web ligero construido para reemplazar hojas de cálculo dispersas — seguimiento de leads, gestión de pipeline y centralización de datos de clientes.',
    'p4.link': 'Interno',
    'services.label': 'Servicios',
    'services.title': 'Lo que hago —<br><em>y dónde aporto valor real</em>',
    'services.lead': 'Desarrollo web con contexto de negocio. No solo escribo código — entiendo la operación detrás.',
    's1.title': 'Diseño & Desarrollo Web',
    's1.desc': 'Desde landing pages hasta sitios web completos — construidos limpios, rápidos y responsive. Sin plantillas. Cada sitio diseñado para convertir.',
    's1.t1': 'Landing Pages', 's1.t2': 'Portfolios', 's1.t3': 'Sitios Corporativos',
    's2.title': 'Consultoría Hotel Tech',
    's2.desc': 'Años trabajando dentro de plataformas líderes de hotel tech — apoyando propiedades con estrategia de distribución, integraciones PMS, conexiones OTA y configuración de channel manager.',
    's2.t1': 'Channel Manager', 's2.t2': 'PMS / OTA', 's2.t3': 'Distribución',
    's3.title': 'Experiencia de Cliente (CX)',
    's3.desc': 'Auditoría de procesos de soporte, reducción de fricción, construcción de playbooks. Desde un 98% CSAT en Apple hasta diseño de onboarding para equipos SaaS.',
    's3.t1': 'Auditoría CX', 's3.t2': 'Diseño de Soporte', 's3.t3': 'CSAT',
    's4.title': 'CRM & Herramientas Internas',
    's4.desc': 'Si tu equipo trabaja con hojas de cálculo, hay una forma mejor. Construyo herramientas web ligeras que se adaptan a tu flujo real — seguimiento de leads, pipeline, dashboards.',
    's4.t1': 'Apps Web', 's4.t2': 'Herramientas Internas', 's4.t3': 'Full-Stack',
    's5.title': 'Automatización IA (n8n)',
    's5.desc': 'Flujos repetitivos automatizados. Desde secuencias de email hasta pipelines de datos — construidos con n8n y conectados a las herramientas que ya usas.',
    's5.t1': 'Flujos n8n', 's5.t2': 'Pipelines IA', 's5.t3': 'Integraciones',
    's6.title': 'Onboarding & Ops SaaS',
    's6.desc': 'Implementación, adopción de usuarios, diseño de procesos. Lo he hecho a escala para cadenas hoteleras y clientes enterprise — ahora disponible como servicio fraccional.',
    's6.t1': 'SaaS', 's6.t2': 'Onboarding', 's6.t3': 'Operaciones',
    'statement.quote': '"Los mejores productos digitales los construyen personas que entienden el negocio —<br><em>no solo la tecnología</em>."',
    'process.label': 'Cómo Funciona',
    'process.title': 'De la primera conversación al<br><em>producto entregado</em>',
    'p1.title.proc': 'Llamada de Descubrimiento — 30 min, gratis',
    'p1.desc.proc': 'Hablamos de lo que necesitas, lo que has probado y lo que te bloquea. Escucho más de lo que hablo. Sin ventas — solo una conversación honesta sobre si puedo ayudarte.',
    'p1.detail.proc': 'Gratis · Sin compromiso · 30 minutos',
    'p2.title.proc': 'Propuesta & Alcance',
    'p2.desc.proc': 'Recibes una propuesta escrita clara — alcance, timeline, precio fijo. Sin estimaciones vagas. Acordamos exactamente qué construimos antes de empezar.',
    'p2.detail.proc': 'Propuesta escrita · Precio fijo · Timeline claro',
    'p3.title.proc': 'Construcción & Iteración',
    'p3.desc.proc': 'Construyo en ciclos, comparto el progreso regularmente y ajusto sobre la marcha. Te mantengo involucrado sin saturarte. El feedback siempre es bienvenido.',
    'p3.detail.proc': 'Actualizaciones regulares · Feedback loops · Progreso transparente',
    'p4.title.proc': 'Lanzamiento & Entrega',
    'p4.desc.proc': 'Cuando está live, es tuyo. Entrega completa — código, credenciales, documentación. Sin dependencia de mí para que funcione. Soporte disponible si lo necesitas.',
    'p4.detail.proc': 'Entrega completa · Docs incluidos · Soporte disponible',
    'about.label': 'Sobre Mí',
    'about.title': 'Construyo cosas.<br><em>Y conozco tu industria.</em>',
    'about.p1': 'Soy Albert — desarrollador full-stack y consultor de hotel tech con base en Barcelona. Completé mi formación en Aulab Hackademy en 2020, y luego pasé años trabajando dentro de plataformas líderes de hotel tech — ayudando a propiedades a optimizar su distribución, integraciones y stack tecnológico.',
    'about.p2': 'Esa combinación — experiencia técnica más conocimiento profundo del sector — es lo que hace que el trabajo sea diferente. No diseño un sitio web para hoteles adivinando qué funciona. Sé lo que necesitan los operadores, lo que esperan los huéspedes y dónde fallan la mayoría de las implementaciones de tecnología hotelera.',
    'about.p3': 'Trabajo de forma independiente bajo jacquespuccio / Caruci LLC, disponible para proyectos web, consultoría hotel tech y herramientas operacionales. Trabajo en remoto para Europa y Norteamérica.',
    'v1.title': 'Profundidad sectorial, no solo código',
    'v1.desc': 'He trabajado dentro del producto, no solo alrededor.',
    'v2.title': 'Sin lock-in, nunca',
    'v2.desc': 'Eres dueño de todo lo que construyo. Entrega completa, siempre.',
    'v3.title': 'Atención real, equipo pequeño',
    'v3.desc': 'Trabajas directamente conmigo — no con un subcontratista junior.',
    'contact.label': 'Trabaja Conmigo',
    'contact.title': 'Construyamos<br><em>algo.</em>',
    'contact.desc': 'Cuéntame tu proyecto. Si es un nuevo sitio web, un reto de hotel tech o una herramienta interna — te respondo en 24 horas.',
    'ctag.1': 'Diseño Web', 'ctag.2': 'Hotel Tech', 'ctag.3': 'CRM', 'ctag.4': 'Automatización IA',
    'cf.name': 'Tu Nombre *',
    'cf.email': 'Correo Electrónico *',
    'cf.emailErr': 'Ingresa un correo válido',
    'cf.req': 'Obligatorio',
    'cf.service': '¿Qué necesitas?',
    'cf.select': 'Seleccionar...',
    'cf.s1': 'Diseño & Desarrollo Web',
    'cf.s2': 'Consultoría Hotel Tech',
    'cf.s3': 'CRM / Herramienta Interna',
    'cf.s4': 'Automatización IA (n8n)',
    'cf.s5': 'Experiencia de Cliente',
    'cf.s6': 'Otra cosa',
    'cf.message': 'Cuéntame tu proyecto *',
    'cf.messageErr': 'Por favor describe tu proyecto',
    'cf.submit': 'Enviar Mensaje',
    'cf.sending': 'Enviando...',
    'success.title': 'Mensaje Recibido',
    'success.msg': 'Te respondo en <strong>24 horas</strong>.',
    'success.btn': 'Volver arriba',
    'footer.tagline': 'Creador Web & Consultor Hotel Tech',
    'footer.copy': '© 2026 jacquespuccio. Todos los derechos reservados.',
    'meta.desc': 'jacquespuccio — Desarrollador full-stack y consultor de hotel tech. Construyo sitios web, CRMs a medida y automatizaciones IA — y conozco el sector hotelero desde adentro.',
    'meta.title': 'jacquespuccio | Creador Web & Consultor Hotel Tech',
  },

  fr: {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contact': 'Travaillons Ensemble',
    'hero.eyebrow': 'Créateur Web · Hotel Tech · Expérience Client',
    'hero.statement': 'Je construis des sites web et des outils digitaux.<br>Je connais l\'hôtellerie <em>de l\'intérieur</em>.<br>Des années dans le hotel tech. Maintenant en indépendant.',
    'hero.cta1': 'Voir Mon Travail',
    'hero.cta2': 'Parlons',
    'hero.scroll': 'Défiler',
    'pill.1': 'Web Design',
    'pill.2': 'Hotel Tech',
    'pill.3': 'CRM',
    'pill.4': 'Automatisation n8n',
    'pill.5': 'Next.js',
    'pill.6': 'Expérience Client',
    'pill.7': 'Ops SaaS',
    'stat.1': 'Sites Créés',
    'stat.2': 'Ans Hotel Tech',
    'stat.3': 'Score CSAT',
    'portfolio.label': 'Travail Sélectionné',
    'portfolio.title': 'Ce que j\'ai construit —<br><em>et ce que ça résout</em>',
    'portfolio.lead': 'Des sites personnels aux CRM sur mesure, voici une sélection de vrai travail. Chaque projet a commencé par comprendre le business derrière le brief.',
    'p1.cat': 'Conseil IA & Opérations',
    'p1.desc': 'Site web de conseil B2B construit de A à Z — identité de marque, copy et code. Conçu pour attirer des entreprises moyennes cherchant à automatiser leurs opérations.',
    'p1.link': 'Site en Ligne',
    'p2.cat': 'Portfolio Personnel',
    'p2.desc': 'Portfolio multilingue (EN/ES/FR/IT) avec animations de curseur, scroll reveal, capture de leads multi-étapes, et un design sombre et luxueux pour se démarquer.',
    'p2.link': 'Vous y êtes →',
    'p3.cat': 'Génération de Leads',
    'p3.desc': 'Landing page haute conversion pour une entreprise de toiture à Orlando, FL. Layout épuré, signaux de confiance et CTAs directs pour convertir les visiteurs.',
    'p3.link': 'Site en Ligne',
    'p4.cat': 'Outil Interne',
    'p4.title': 'CRM Ventes & Ops',
    'p4.desc': 'CRM web léger construit pour remplacer des feuilles de calcul dispersées — suivi des leads, gestion du pipeline et centralisation des données clients.',
    'p4.link': 'Interne',
    'services.label': 'Services',
    'services.title': 'Ce que je fais —<br><em>et où j\'apporte de la vraie valeur</em>',
    'services.lead': 'Développement web ancré dans le contexte business. Je n\'écris pas que du code — je comprends l\'opération derrière.',
    's1.title': 'Web Design & Développement',
    's1.desc': 'Des landing pages aux sites multi-pages complets — construits propres, rapides et responsive. Pas de templates. Chaque site conçu pour convertir.',
    's1.t1': 'Landing Pages', 's1.t2': 'Portfolios', 's1.t3': 'Sites Corporate',
    's2.title': 'Conseil Hotel Tech',
    's2.desc': 'Des années au sein de plateformes hotel tech de premier plan — accompagnement des établissements en stratégie de distribution, intégrations PMS, connexions OTA et configuration channel manager.',
    's2.t1': 'Channel Manager', 's2.t2': 'PMS / OTA', 's2.t3': 'Distribution',
    's3.title': 'Expérience Client (CX)',
    's3.desc': 'Audit des processus support, réduction des frictions, construction de playbooks. Du 98% CSAT chez Apple à la conception d\'onboarding pour équipes SaaS.',
    's3.t1': 'Audit CX', 's3.t2': 'Design Support', 's3.t3': 'CSAT',
    's4.title': 'CRM & Outils Internes',
    's4.desc': 'Si votre équipe tourne sous Excel, il y a mieux. Je construis des outils web légers adaptés à votre flux de travail réel.',
    's4.t1': 'Apps Web', 's4.t2': 'Outils Internes', 's4.t3': 'Full-Stack',
    's5.title': 'Automatisation IA (n8n)',
    's5.desc': 'Workflows répétitifs automatisés. Des séquences email aux pipelines de données — construits avec n8n et connectés à vos outils existants.',
    's5.t1': 'Workflows n8n', 's5.t2': 'Pipelines IA', 's5.t3': 'Intégrations',
    's6.title': 'Onboarding & Ops SaaS',
    's6.desc': 'Implémentation, adoption utilisateurs, design de processus. Fait à l\'échelle pour des chaînes hôtelières et clients enterprise — disponible en service fractionnel.',
    's6.t1': 'SaaS', 's6.t2': 'Onboarding', 's6.t3': 'Opérations',
    'statement.quote': '"Les meilleurs produits digitaux sont créés par des gens qui comprennent le business —<br><em>pas seulement la technologie</em>."',
    'process.label': 'Comment Ça Marche',
    'process.title': 'De la première conversation au<br><em>produit livré</em>',
    'p1.title.proc': 'Appel de Découverte — 30 min, gratuit',
    'p1.desc.proc': 'On parle de ce dont vous avez besoin. J\'écoute plus que je ne parle. Pas de discours commercial — juste une conversation honnête.',
    'p1.detail.proc': 'Gratuit · Sans engagement · 30 minutes',
    'p2.title.proc': 'Proposition & Périmètre',
    'p2.desc.proc': 'Vous recevez une proposition claire — périmètre, délai, prix fixe. Pas d\'estimations vagues. On s\'accorde sur ce qu\'on construit avant de commencer.',
    'p2.detail.proc': 'Proposition écrite · Prix fixe · Délai clair',
    'p3.title.proc': 'Construction & Itération',
    'p3.desc.proc': 'Je construis par cycles, partage l\'avancement régulièrement et ajuste en cours de route. Vous restez impliqué sans être noyé dedans.',
    'p3.detail.proc': 'Mises à jour régulières · Boucles de feedback · Avancement transparent',
    'p4.title.proc': 'Lancement & Remise',
    'p4.desc.proc': 'Quand c\'est en ligne, c\'est le vôtre. Remise complète — code, accès, documentation. Pas de dépendance à moi pour le maintenir en ligne.',
    'p4.detail.proc': 'Remise complète · Docs inclus · Support disponible',
    'about.label': 'À Propos',
    'about.title': 'Je construis des choses.<br><em>Et je connais votre secteur.</em>',
    'about.p1': 'Je suis Albert — développeur full-stack et consultant hotel tech basé à Barcelone. Formé à l\'Aulab Hackademy en 2020, puis des années au sein de plateformes hotel tech de premier plan — à aider les établissements à optimiser leur distribution et leur stack technologique.',
    'about.p2': 'Cette combinaison — expérience technique et connaissance sectorielle profonde — fait la différence. Je ne conçois pas un site hôtelier en devinant ce qui fonctionne. Je sais ce dont les opérateurs ont besoin.',
    'about.p3': 'Je travaille en indépendant sous jacquespuccio / Caruci LLC, disponible pour des projets web, du conseil hotel tech et des outils opérationnels. En remote entre l\'Europe et l\'Amérique du Nord.',
    'v1.title': 'Profondeur sectorielle, pas seulement du code',
    'v1.desc': "J'ai travaillé dans le produit, pas seulement autour.",
    'v2.title': 'Sans lock-in, jamais',
    'v2.desc': 'Vous possédez tout ce que je construis. Remise complète, toujours.',
    'v3.title': 'Vraie attention, petite équipe',
    'v3.desc': 'Vous travaillez directement avec moi — pas un sous-traitant junior.',
    'contact.label': 'Travaillons Ensemble',
    'contact.title': 'Construisons<br><em>quelque chose.</em>',
    'contact.desc': 'Parlez-moi de votre projet. Site web, défi hotel tech ou outil interne — je vous réponds dans les 24 heures.',
    'ctag.1': 'Web Design', 'ctag.2': 'Hotel Tech', 'ctag.3': 'CRM', 'ctag.4': 'Automatisation IA',
    'cf.name': 'Votre Nom *',
    'cf.email': 'Adresse Email *',
    'cf.emailErr': 'Email invalide',
    'cf.req': 'Obligatoire',
    'cf.service': 'Que cherchez-vous ?',
    'cf.select': 'Sélectionner...',
    'cf.s1': 'Web Design & Développement',
    'cf.s2': 'Conseil Hotel Tech',
    'cf.s3': 'CRM / Outil Interne',
    'cf.s4': 'Automatisation IA (n8n)',
    'cf.s5': 'Expérience Client',
    'cf.s6': 'Autre chose',
    'cf.message': 'Parlez-moi de votre projet *',
    'cf.messageErr': 'Veuillez décrire votre projet',
    'cf.submit': 'Envoyer le Message',
    'cf.sending': 'Envoi...',
    'success.title': 'Message Reçu',
    'success.msg': 'Je vous répondrai dans <strong>24 heures</strong>.',
    'success.btn': 'Retour en haut',
    'footer.tagline': 'Créateur Web & Consultant Hotel Tech',
    'footer.copy': '© 2026 jacquespuccio. Tous droits réservés.',
    'meta.desc': 'jacquespuccio — Développeur full-stack et consultant hotel tech. Je construis des sites web, CRM sur mesure et automatisations IA — et je connais l\'hôtellerie de l\'intérieur.',
    'meta.title': 'jacquespuccio | Créateur Web & Consultant Hotel Tech',
  },

  it: {
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Servizi',
    'nav.about': 'Chi Sono',
    'nav.contact': 'Lavoriamo Insieme',
    'hero.eyebrow': 'Creatore Web · Hotel Tech · Customer Experience',
    'hero.statement': 'Costruisco siti web e strumenti digitali.<br>Conosco il settore alberghiero <em>dall\'interno</em>.<br>Anni dentro l\'hotel tech. Ora in proprio.',
    'hero.cta1': 'Vedi il Mio Lavoro',
    'hero.cta2': 'Parliamo',
    'hero.scroll': 'Scorri',
    'pill.1': 'Web Design',
    'pill.2': 'Hotel Tech',
    'pill.3': 'CRM',
    'pill.4': 'Automazione n8n',
    'pill.5': 'Next.js',
    'pill.6': 'Customer Experience',
    'pill.7': 'Ops SaaS',
    'stat.1': 'Siti Costruiti',
    'stat.2': 'Anni Hotel Tech',
    'stat.3': 'CSAT Score',
    'portfolio.label': 'Lavoro Selezionato',
    'portfolio.title': 'Cosa ho costruito —<br><em>e cosa risolve</em>',
    'portfolio.lead': 'Da siti personali a CRM su misura, ecco una selezione di lavoro reale. Ogni progetto è partito dalla comprensione del business.',
    'p1.cat': 'Consulenza IA & Operazioni',
    'p1.desc': 'Sito web di consulenza B2B costruito dal concept al lancio — identità di marca, copy e codice. Progettato per attrarre aziende che vogliono automatizzare le operazioni.',
    'p1.link': 'Sito Live',
    'p2.cat': 'Portfolio Personale',
    'p2.desc': 'Portfolio multilingue (EN/ES/FR/IT) con animazioni cursore personalizzate, sistema scroll reveal, acquisizione lead multi-step e design scuro di lusso.',
    'p2.link': 'Sei qui →',
    'p3.cat': 'Generazione Lead',
    'p3.desc': 'Landing page ad alta conversione per un\'azienda di coperture a Orlando, FL. Layout pulito, segnali di fiducia e CTA diretti per convertire i visitatori.',
    'p3.link': 'Sito Live',
    'p4.cat': 'Strumento Interno',
    'p4.title': 'CRM Vendite & Ops',
    'p4.desc': 'CRM web leggero costruito per sostituire fogli di calcolo sparsi — tracciamento lead, gestione pipeline e centralizzazione dati clienti.',
    'p4.link': 'Interno',
    'services.label': 'Servizi',
    'services.title': 'Cosa faccio —<br><em>e dove aggiungo vero valore</em>',
    'services.lead': 'Sviluppo web radicato nel contesto business. Non scrivo solo codice — capisco l\'operazione dietro.',
    's1.title': 'Web Design & Sviluppo',
    's1.desc': 'Dalle landing page ai siti multi-pagina completi — costruiti puliti, veloci e responsive. Nessun template. Ogni sito progettato per convertire.',
    's1.t1': 'Landing Page', 's1.t2': 'Portfolio', 's1.t3': 'Siti Corporate',
    's2.title': 'Consulenza Hotel Tech',
    's2.desc': 'Anni lavorando all\'interno di piattaforme hotel tech leader — supporto alle strutture con strategia di distribuzione, integrazioni PMS, connessioni OTA e configurazione channel manager.',
    's2.t1': 'Channel Manager', 's2.t2': 'PMS / OTA', 's2.t3': 'Distribuzione',
    's3.title': 'Customer Experience (CX)',
    's3.desc': 'Audit dei processi di supporto, riduzione della frizione, costruzione di playbook. Dal 98% CSAT in Apple alla progettazione di onboarding per team SaaS.',
    's3.t1': 'Audit CX', 's3.t2': 'Design Supporto', 's3.t3': 'CSAT',
    's4.title': 'CRM & Strumenti Interni',
    's4.desc': 'Se il tuo team lavora su Excel, c\'è di meglio. Costruisco strumenti web leggeri che si adattano al tuo flusso di lavoro reale.',
    's4.t1': 'App Web', 's4.t2': 'Strumenti Interni', 's4.t3': 'Full-Stack',
    's5.title': 'Automazione IA (n8n)',
    's5.desc': 'Workflow ripetitivi automatizzati. Dalle sequenze email alle pipeline di dati — costruiti con n8n e connessi agli strumenti che già usi.',
    's5.t1': 'Workflow n8n', 's5.t2': 'Pipeline IA', 's5.t3': 'Integrazioni',
    's6.title': 'Onboarding & Ops SaaS',
    's6.desc': 'Implementazione, adozione utenti, design dei processi. Fatto su larga scala per catene alberghiere e clienti enterprise — disponibile come servizio frazionale.',
    's6.t1': 'SaaS', 's6.t2': 'Onboarding', 's6.t3': 'Operazioni',
    'statement.quote': '"I migliori prodotti digitali sono costruiti da persone che capiscono il business —<br><em>non solo la tecnologia</em>."',
    'process.label': 'Come Funziona',
    'process.title': 'Dalla prima conversazione al<br><em>prodotto consegnato</em>',
    'p1.title.proc': 'Call di Scoperta — 30 min, gratuita',
    'p1.desc.proc': 'Parliamo di cosa ti serve, cosa hai provato e cosa ti blocca. Ascolto più di quanto parlo. Niente vendita — solo una conversazione onesta.',
    'p1.detail.proc': 'Gratuita · Senza impegno · 30 minuti',
    'p2.title.proc': 'Proposta & Scope',
    'p2.desc.proc': 'Ricevi una proposta scritta chiara — scope, timeline, prezzo fisso. Nessuna stima vaga. Concordiamo esattamente cosa costruiamo prima di iniziare.',
    'p2.detail.proc': 'Proposta scritta · Prezzo fisso · Timeline chiara',
    'p3.title.proc': 'Costruzione & Iterazione',
    'p3.desc.proc': 'Costruisco in cicli, condivido i progressi regolarmente e aggiusto in corso d\'opera. Resti coinvolto senza essere sommerso.',
    'p3.detail.proc': 'Aggiornamenti regolari · Loop di feedback · Progresso trasparente',
    'p4.title.proc': 'Lancio & Consegna',
    'p4.desc.proc': 'Quando è live, è tuo. Consegna completa — codice, accessi, documentazione. Nessuna dipendenza da me per tenerlo in funzione.',
    'p4.detail.proc': 'Consegna completa · Docs inclusi · Supporto disponibile',
    'about.label': 'Chi Sono',
    'about.title': 'Costruisco cose.<br><em>E conosco il tuo settore.</em>',
    'about.p1': 'Sono Albert — sviluppatore full-stack e consulente hotel tech con base a Barcellona. Ho completato la formazione all\'Aulab Hackademy nel 2020, poi ho trascorso anni lavorando all\'interno di piattaforme hotel tech leader — aiutando le strutture a ottimizzare distribuzione, integrazioni e stack tecnologico.',
    'about.p2': 'Quella combinazione — esperienza tecnica più conoscenza profonda del settore — è ciò che rende il lavoro diverso. Non progetto un sito per hotel indovinando cosa funziona. So cosa necessitano gli operatori.',
    'about.p3': 'Lavoro in proprio sotto jacquespuccio / Caruci LLC, disponibile per progetti web, consulenza hotel tech e strumenti operativi. In remoto tra Europa e Nord America.',
    'v1.title': 'Profondità settoriale, non solo codice',
    'v1.desc': "Ho lavorato dentro il prodotto, non solo intorno.",
    'v2.title': 'Nessun lock-in, mai',
    'v2.desc': 'Possiedi tutto ciò che costruisco. Consegna completa, sempre.',
    'v3.title': 'Vera attenzione, team piccolo',
    'v3.desc': 'Lavori direttamente con me — non con un subappaltatore junior.',
    'contact.label': 'Lavoriamo Insieme',
    'contact.title': 'Costruiamo<br><em>qualcosa.</em>',
    'contact.desc': 'Parlami del tuo progetto. Sito web, sfida hotel tech o strumento interno — ti rispondo entro 24 ore.',
    'ctag.1': 'Web Design', 'ctag.2': 'Hotel Tech', 'ctag.3': 'CRM', 'ctag.4': 'Automazione IA',
    'cf.name': 'Il Tuo Nome *',
    'cf.email': 'Indirizzo Email *',
    'cf.emailErr': 'Email non valida',
    'cf.req': 'Obbligatorio',
    'cf.service': 'Cosa stai cercando?',
    'cf.select': 'Seleziona...',
    'cf.s1': 'Web Design & Sviluppo',
    'cf.s2': 'Consulenza Hotel Tech',
    'cf.s3': 'CRM / Strumento Interno',
    'cf.s4': 'Automazione IA (n8n)',
    'cf.s5': 'Customer Experience',
    'cf.s6': 'Altro',
    'cf.message': 'Parlami del tuo progetto *',
    'cf.messageErr': 'Descrivi il tuo progetto',
    'cf.submit': 'Invia Messaggio',
    'cf.sending': 'Invio...',
    'success.title': 'Messaggio Ricevuto',
    'success.msg': 'Ti risponderò entro <strong>24 ore</strong>.',
    'success.btn': 'Torna su',
    'footer.tagline': 'Creatore Web & Consulente Hotel Tech',
    'footer.copy': '© 2026 jacquespuccio. Tutti i diritti riservati.',
    'meta.desc': 'jacquespuccio — Sviluppatore full-stack e consulente hotel tech. Costruisco siti web, CRM su misura e automazioni IA — e conosco l\'hôtellerie dall\'interno.',
    'meta.title': 'jacquespuccio | Creatore Web & Consulente Hotel Tech',
  },
};

/* ─── LANGUAGE SYSTEM ────────────────────── */
let currentLang = 'en';
try { currentLang = localStorage.getItem('jp_lang') || 'en'; } catch(_) {}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try { localStorage.setItem('jp_lang', lang); } catch(_) {}

  document.documentElement.lang = lang;
  document.title = translations[lang]['meta.title'] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', translations[lang]['meta.desc'] || '');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ─── CUSTOM CURSOR ──────────────────────── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let fX = 0, fY = 0, mX = 0, mY = 0;

document.addEventListener('mousemove', e => {
  mX = e.clientX; mY = e.clientY;
  cursor.style.left = mX + 'px';
  cursor.style.top  = mY + 'px';
});

(function animateFollower() {
  fX += (mX - fX) * 0.12;
  fY += (mY - fY) * 0.12;
  follower.style.left = fX + 'px';
  follower.style.top  = fY + 'px';
  requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a,button,.service-card,.project-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-link'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-link'));
});

/* ─── NAVBAR ─────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ─── HERO REVEAL ────────────────────────── */
(function heroReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  els.forEach(el => {
    const delay = parseInt(el.dataset.revealDelay || 0);
    setTimeout(() => el.classList.add('revealed'), delay + 80);
  });
})();

/* ─── SCROLL REVEAL (AOS) ────────────────── */
const aosObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.aosDelay || 0);
      setTimeout(() => entry.target.classList.add('aos-visible'), delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* ─── COUNTER ANIMATION ──────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.to);
  const duration = 1800;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ─── SMOOTH SCROLL ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── CONTACT FORM ───────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const nameEl    = document.getElementById('contactName');
    const emailEl   = document.getElementById('contactEmail');
    const messageEl = document.getElementById('contactMessage');
    let valid = true;

    [nameEl, emailEl, messageEl].forEach(el => {
      const group = el.closest('.field-group');
      const msg   = group.querySelector('.field-error-msg');
      const empty = !el.value.trim();
      const badEmail = el === emailEl && !empty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
      if (empty || badEmail) {
        group.classList.add('has-error');
        if (msg) msg.style.display = 'block';
        valid = false;
      } else {
        group.classList.remove('has-error');
        if (msg) msg.style.display = 'none';
      }
    });

    if (!valid) return;

    const submitBtn  = document.getElementById('contactSubmitBtn');
    const submitText = document.getElementById('contactSubmitText');
    submitBtn.classList.add('loading');
    submitText.textContent = translations[currentLang]['cf.sending'] || 'Sending...';

    const data = {
      timestamp:   new Date().toISOString(),
      name:        nameEl.value,
      email:       emailEl.value,
      service:     document.getElementById('contactService').value,
      message:     messageEl.value,
    };

    try {
      if (SHEETS_URL && SHEETS_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        console.log('Contact form submission (no Sheets URL configured):', data);
        await new Promise(r => setTimeout(r, 800));
      }
    } catch(err) {
      console.error('Submission error:', err);
    }

    contactForm.style.display = 'none';
    const successEl = document.getElementById('contactSuccess');
    if (successEl) {
      successEl.style.display = 'block';
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

/* ─── INIT LANGUAGE ──────────────────────── */
setLanguage(currentLang);
