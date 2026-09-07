export const portfolioData = {
  identity: {
    firstName: 'Zinedine', fullName: 'Zinedine Tlemsani Benhattal',
    title: 'Futur ingénieur en Génie Informatique', ambition: 'Ingénieur et chercheur en intelligence artificielle',
    location: 'Agadir, Maroc', education: 'Génie Informatique — École Polytechnique d’Agadir',
    email: '', // PERSONNALISATION : ajoutez votre adresse e-mail.
    linkedin: '', // PERSONNALISATION : ajoutez l’URL complète de votre profil.
    github: '', // PERSONNALISATION : ajoutez l’URL complète de votre profil.
    photo: '', // PERSONNALISATION : ex. /assets/photo-zinedine.jpg
    avatar: '/assets/avatar-zinedine-placeholder.png',
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
    { category: 'Développement', icon: 'Code2', items: [['Python', 'Bases acquises'], ['JavaScript', 'En progression'], ['HTML', 'Bases acquises'], ['CSS', 'En progression']] },
    { category: 'Intelligence artificielle', icon: 'Sparkles', items: [['Création et intégration d’agents IA', 'En progression'], ['Utilisation d’API d’intelligence artificielle', 'En progression'], ['Notions de machine learning', 'Notions'], ['Automatisation intelligente', 'En apprentissage']] },
    { category: 'Outils et environnement', icon: 'Terminal', items: [['Git', 'En progression'], ['GitHub', 'En progression'], ['Linux', 'Bases acquises']] },
    { category: 'Robotique', icon: 'CircuitBoard', items: [['ROS 2', 'En apprentissage'], ['Simulation robotique', 'En apprentissage'], ['Notions de navigation autonome', 'Notions']] },
    { category: 'En cours d’apprentissage', icon: 'BookOpen', items: [['Développement full-stack', 'En apprentissage'], ['Bases de données', 'En apprentissage'], ['Architecture SaaS', 'Notions'], ['Machine learning', 'En apprentissage'], ['Fondamentaux de la recherche en IA', 'En apprentissage']] },
  ],
  timeline: [
    { date: 'En cours', title: 'École Polytechnique d’Agadir', subtitle: 'Première année de spécialisation en Génie Informatique', description: 'Construction progressive de bases solides en programmation, systèmes informatiques et technologies émergentes.', type: 'formation' },
    { date: 'Date à compléter', title: 'Fablab Universiapolis', subtitle: 'Expérience ou stage — détails à compléter', description: 'Une expérience au contact de la fabrication numérique, de l’expérimentation et de projets technologiques.', type: 'experience' },
    { date: 'Dates à compléter', title: 'Formations suivies', subtitle: 'Informations à compléter', description: 'Cet espace accueillera les formations réellement suivies et leurs acquis.', type: 'formation' },
    { date: 'À venir', title: 'Certifications futures', subtitle: 'Aucune certification revendiquée à ce jour', description: 'Les certifications obtenues pourront être ajoutées ici au fil du parcours.', type: 'future' },
    { date: 'Prochaine étape', title: 'Approfondir l’intelligence artificielle', subtitle: 'Projet de progression', description: 'Développer des applications complètes, renforcer le machine learning et découvrir les méthodes de recherche en IA.', type: 'future' },
  ],
  projects: [
    { id: 'agent-fablab', title: 'Agent IA pour le Fablab', eyebrow: 'Assistant intelligent', description: 'Un assistant pensé pour faciliter l’accès aux informations et certaines tâches de gestion du Fablab.', detail: 'Le projet explore la manière dont un agent conversationnel pourrait centraliser les réponses utiles, orienter les usagers et assister progressivement certaines opérations internes.', technologies: ['Technologies à confirmer'], status: 'En réflexion', skills: ['Conception produit', 'Agents IA'], image: '', github: '', demo: '' },
    { id: 'fabot-pro', title: 'FABOT PRO', eyebrow: 'Robotique intelligente', description: 'Concept de robot intelligent destiné à accompagner les activités du Fablab.', detail: 'Le concept envisage l’accueil des visiteurs, un assistant vocal, le déplacement autonome, la cartographie, la détection d’obstacles, la surveillance de l’état des machines et un tableau de bord responsable.', technologies: ['ROS 2 envisagé', 'Navigation autonome envisagée', 'IA vocale envisagée'], status: 'En cours de développement', skills: ['Robotique', 'Architecture système', 'Prototypage'], image: '', github: '', demo: '' },
    { id: 'python-learning', title: 'Projets Python', eyebrow: 'Apprentissage par la pratique', description: 'Une collection de petits programmes conçus pour renforcer mes bases.', detail: 'Calculatrice, jeu du nombre mystère, Pierre-Feuille-Ciseaux et To-Do List : des exercices simples mais importants dans mon apprentissage de la logique et de la programmation.', technologies: ['Python'], status: 'Projets d’apprentissage', skills: ['Logique', 'Algorithmique', 'Organisation du code'], image: '', github: '', demo: '' },
    { id: 'dental-saas', title: 'SaaS pour cabinets dentaires', eyebrow: 'Concept de produit', description: 'Une plateforme intelligente imaginée pour moderniser la gestion des cabinets dentaires.', detail: 'Le concept prévoit la gestion des patients, du personnel, des finances et des équipements, ainsi que la centralisation des informations et un assistant IA capable d’interroger et de mettre à jour les données.', technologies: ['Stack à définir', 'Intégration IA envisagée'], status: 'Projet futur', skills: ['Réflexion SaaS', 'Analyse des besoins', 'Conception fonctionnelle'], image: '', github: '', demo: '' },
  ],
  goals: [
    { horizon: 'Court terme', index: '01', items: ['Renforcer mes bases en programmation', 'Progresser en développement web', 'Réaliser davantage de projets', 'Approfondir les bases de l’intelligence artificielle'] },
    { horizon: 'Moyen terme', index: '02', items: ['Maîtriser le développement d’applications complètes', 'Construire des agents IA plus avancés', 'Développer des solutions SaaS utiles', 'Approfondir le machine learning', 'Participer à des projets innovants'] },
    { horizon: 'Long terme', index: '03', items: ['Devenir ingénieur spécialisé en intelligence artificielle', 'Devenir chercheur en intelligence artificielle', 'Participer au développement de nouvelles technologies', 'Créer mes propres solutions SaaS', 'Construire des produits ayant une utilité réelle'] },
  ],
} as const;

export type Project = (typeof portfolioData.projects)[number];
