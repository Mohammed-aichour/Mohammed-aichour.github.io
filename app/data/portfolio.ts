export const portfolioData = {
  identity: {
    firstName: 'Zinedine', fullName: 'Zinedine Tlemsani Benhattal',
    title: 'Futur ingénieur en Génie Informatique', ambition: 'Ingénieur et chercheur en intelligence artificielle',
    location: 'Agadir, Maroc', education: 'Génie Informatique — École Polytechnique d’Agadir',
    email: '', // PERSONNALISATION : ajoutez votre adresse e-mail.
    linkedin: '', // PERSONNALISATION : ajoutez l’URL complète de votre profil.
    github: '', // PERSONNALISATION : ajoutez l’URL complète de votre profil.
    photo: '/assets/photo-zinedine.jpg',
    avatar: '/assets/avatar-zinedine-v3.png',
    cv: '', // PERSONNALISATION : ex. /documents/cv-zinedine.pdf
  },
  dynamicTopics: ['Intelligence artificielle', 'Recherche et innovation', 'Solutions SaaS', 'Robotique intelligente'],
  bio: "Étudiant en première année de spécialisation en Génie Informatique à l’École Polytechnique d’Agadir, je construis progressivement les bases techniques et scientifiques de mon projet professionnel. Curieux, ambitieux et attiré par l’innovation, je souhaite comprendre l’intelligence artificielle en profondeur pour imaginer des solutions concrètes et utiles. Mon parcours est encore en construction : chaque projet est une occasion d’apprendre, d’expérimenter et de me rapprocher d’un double objectif — devenir ingénieur spécialisé en IA et, à long terme, contribuer à la recherche dans ce domaine.",
  interests: [
    { title: 'Intelligence artificielle', description: 'Comprendre les systèmes intelligents et apprendre à les transformer en solutions concrètes.', icon: 'BrainCircuit' },
    { title: 'Recherche et innovation', description: 'Explorer, expérimenter et contribuer progressivement aux technologies de demain.', icon: 'FlaskConical' },
    { title: 'Création de solutions SaaS', description: 'Imaginer des produits numériques utiles, accessibles et capables d’évoluer.', icon: 'CloudCog' },
    { title: 'Robotique intelligente', description: 'Relier perception, décision et mouvement pour concevoir des machines plus autonomes.', icon: 'Bot' },
  ],
  skills: [
    { title: 'Conception de solutions numériques', principle: 'Transformer un besoin concret en une solution claire, structurée et agréable à utiliser.', objective: 'Apprendre à construire des applications complètes, de l’idée initiale jusqu’à une expérience fonctionnelle.' },
    { title: 'Intelligence artificielle', principle: 'Comprendre comment un système intelligent analyse une demande, mobilise des informations et produit une réponse utile.', objective: 'Concevoir progressivement des assistants et des automatisations capables de résoudre de vrais problèmes.' },
    { title: 'Robotique intelligente', principle: 'Relier la perception, la prise de décision et l’action pour faire évoluer une machine dans son environnement.', objective: 'Comprendre les fondations nécessaires à la création de robots plus autonomes et capables d’interagir avec les utilisateurs.' },
    { title: 'Architecture SaaS', principle: 'Penser un produit numérique comme un ensemble cohérent de services, de données et de parcours utilisateurs.', objective: 'Savoir imaginer des plateformes utiles, maintenables et capables d’évoluer avec les besoins.' },
    { title: 'Recherche en IA', principle: 'Questionner une idée, formuler une hypothèse, expérimenter puis analyser les résultats avec rigueur.', objective: 'Développer une démarche scientifique pour comprendre l’IA en profondeur et contribuer, à long terme, à ses avancées.' },
  ],
  timeline: [
    { date: 'En cours', title: 'École Polytechnique d’Agadir', subtitle: 'Première année de spécialisation en Génie Informatique', description: 'Construction progressive de bases solides en programmation, systèmes informatiques et technologies émergentes.', type: 'formation' },
    { date: 'Date à compléter', title: 'Institut Sainte Jeanne d’Arc — Dakar', subtitle: 'Baccalauréat scientifique sénégalais', description: 'Obtention d’un baccalauréat scientifique à Dakar, au Sénégal, avant la poursuite de mes études supérieures au Maroc.', type: 'formation' },
    { date: 'Date à compléter', title: 'Fablab Universiapolis', subtitle: 'Expérience ou stage — détails à compléter', description: 'Une expérience au contact de la fabrication numérique, de l’expérimentation et de projets technologiques.', type: 'experience' },
    { date: 'Dates à compléter', title: 'Formations suivies', subtitle: 'Informations à compléter', description: 'Cet espace accueillera les formations réellement suivies et leurs acquis.', type: 'formation' },
    { date: 'À venir', title: 'Certifications futures', subtitle: 'Aucune certification revendiquée à ce jour', description: 'Les certifications obtenues pourront être ajoutées ici au fil du parcours.', type: 'future' },
    { date: 'Prochaine étape', title: 'Approfondir l’intelligence artificielle', subtitle: 'Projet de progression', description: 'Développer des applications complètes, renforcer le machine learning et découvrir les méthodes de recherche en IA.', type: 'future' },
  ],
  engagement: {
    title: 'Rotaract Universiapolis',
    label: 'Club associatif',
    description: 'Rotaract Universiapolis est un espace d’engagement étudiant tourné vers la solidarité, l’initiative et l’action collective.',
    objective: 'Cette expérience associative complète mon parcours technique en développant mon sens de la collaboration, de l’écoute et de l’engagement au service des autres.',
    note: 'Rôle et actions réalisés à compléter',
  },
  projects: [
    { id: 'agent-fablab', title: 'Agent IA pour le Fablab', eyebrow: 'Assistant intelligent', description: 'Un assistant pensé pour faciliter l’accès aux informations et certaines tâches de gestion du Fablab.', detail: 'Le projet explore la manière dont un agent conversationnel pourrait centraliser les réponses utiles, orienter les usagers et assister progressivement certaines opérations internes.', technologies: ['Technologies à confirmer'], status: 'En réflexion', skills: ['Conception produit', 'Agents IA'], image: '', github: '', demo: '' },
    { id: 'fabot-pro', title: 'FABOT PRO', eyebrow: 'Robotique intelligente', description: 'Concept de robot intelligent destiné à accompagner les activités du Fablab.', detail: 'Le concept envisage l’accueil des visiteurs, un assistant vocal, le déplacement autonome, la cartographie, la détection d’obstacles, la surveillance de l’état des machines et un tableau de bord responsable.', technologies: ['ROS 2 envisagé', 'Navigation autonome envisagée', 'IA vocale envisagée'], status: 'En cours de développement', skills: ['Robotique', 'Architecture système', 'Prototypage'], image: '', github: '', demo: '' },
    { id: 'python-learning', title: 'Projets Python', eyebrow: 'Apprentissage par la pratique', description: 'Une collection de petits programmes réalisés pour renforcer progressivement mes bases.', detail: 'Calculatrice, jeu du nombre mystère, Pierre-Feuille-Ciseaux et To-Do List : des exercices simples qui m’ont permis de pratiquer la logique, les conditions, les boucles et l’organisation du code.', technologies: ['Python'], status: 'Apprentissage', skills: ['Logique', 'Algorithmique', 'Organisation du code'], image: '', github: '', demo: '' },
    { id: 'dental-saas', title: 'SaaS pour cabinets dentaires', eyebrow: 'Concept de produit', description: 'Une plateforme intelligente imaginée pour moderniser la gestion des cabinets dentaires.', detail: 'Le concept prévoit la gestion des patients, du personnel, des finances et des équipements, ainsi que la centralisation des informations et un assistant IA capable d’interroger et de mettre à jour les données.', technologies: ['Stack à définir', 'Intégration IA envisagée'], status: 'Projet futur', skills: ['Réflexion SaaS', 'Analyse des besoins', 'Conception fonctionnelle'], image: '', github: '', demo: '' },
  ],
  goals: [
    { horizon: 'Court terme', index: '01', items: ['Renforcer mes bases en programmation', 'Progresser en développement web', 'Réaliser davantage de projets', 'Approfondir les bases de l’intelligence artificielle'] },
    { horizon: 'Moyen terme', index: '02', items: ['Maîtriser le développement d’applications complètes', 'Construire des agents IA plus avancés', 'Développer des solutions SaaS utiles', 'Approfondir le machine learning', 'Participer à des projets innovants'] },
    { horizon: 'Long terme', index: '03', items: ['Devenir ingénieur spécialisé en intelligence artificielle', 'Devenir chercheur en intelligence artificielle', 'Participer au développement de nouvelles technologies', 'Créer mes propres solutions SaaS', 'Construire des produits ayant une utilité réelle'] },
  ],
} as const;

export type Project = (typeof portfolioData.projects)[number];
