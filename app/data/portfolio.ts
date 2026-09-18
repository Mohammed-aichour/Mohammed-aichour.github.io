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
    { date: 'Date à compléter', title: 'Institut Sainte Jeanne d’Arc — Dakar', subtitle: 'Baccalauréat scientifique sénégalais', description: 'Obtention d’un baccalauréat scientifique à Dakar, au Sénégal, avant la poursuite de mes études supérieures au Maroc.', type: 'formation' },
    { date: 'En cours', title: 'Universiapolis — École Polytechnique d’Agadir', subtitle: 'Première année de spécialisation en Génie Informatique', description: 'Construction progressive de bases solides en programmation, systèmes informatiques et technologies émergentes.', type: 'formation' },
    { date: 'Formation · 3 mois', title: 'Stage au Fablab', subtitle: 'Formation pratique au Fablab Universiapolis', description: 'Trois mois d’apprentissage par la pratique autour de l’intelligence artificielle, du développement web, de la fabrication numérique et de projets techniques.', type: 'formation', href: '/stage-fablab' },
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
    {
      id: 'smartgrow', title: 'SmartGrow', eyebrow: 'Irrigation automatique et connectée',
      description: 'Un prototype d’irrigation qui observe l’état du sol et déclenche l’arrosage selon les besoins réels de la plante.',
      detail: 'Réalisé en équipe dans le cadre d’un projet intégrateur industriel, SmartGrow réunit électronique, programmation, fabrication et interface connectée pour limiter le gaspillage d’eau.',
      technologies: ['ESP32', 'Capteurs', 'IoT', 'Impression 3D'], status: 'Prototype fonctionnel',
      progressNote: 'La maquette et la chaîne de contrôle sont réalisées. Le projet entre dans une phase de tests en conditions réelles et d’optimisation de la régulation.',
      skills: ['Systèmes embarqués', 'IoT', 'Prototypage', 'Travail en équipe'],
      image: '/assets/projects/smartgrow-concept-realistic-v2.png',
      frontImage: '/assets/projects/smartgrow-concept-realistic-v2.png',
      backImage: '/assets/projects/smartgrow-prototype-back.jpg',
      steps: [
        { phase: '01', title: 'Observer le sol', summary: 'Mesurer les conditions réelles avant de décider d’arroser.', tools: [
          { name: 'Capteur capacitif d’humidité', definition: 'Sonde qui estime la quantité d’eau présente dans le sol.', principle: 'L’humidité modifie la capacité électrique de la sonde, puis le signal analogique est converti en pourcentage.' },
          { name: 'DHT11', definition: 'Capteur numérique de température et d’humidité de l’air.', principle: 'Il mesure les conditions ambiantes et transmet les valeurs sous forme numérique au contrôleur.' },
        ] },
        { phase: '02', title: 'Analyser et décider', summary: 'Centraliser les mesures et appliquer la logique automatique.', tools: [
          { name: 'ESP32', definition: 'Microcontrôleur qui constitue le cerveau du système.', principle: 'Il lit les capteurs, compare l’humidité au seuil configuré, pilote la pompe et échange les données en Wi-Fi.' },
          { name: 'Programme embarqué', definition: 'Logique exécutée directement par l’ESP32.', principle: 'Une boucle surveille le sol : la pompe démarre sous le seuil minimal et s’arrête lorsque l’humidité redevient suffisante.' },
        ] },
        { phase: '03', title: 'Déclencher l’irrigation', summary: 'Transformer la décision électronique en circulation d’eau.', tools: [
          { name: 'Module relais 5 V', definition: 'Interrupteur électrique commandé par le microcontrôleur.', principle: 'Il permet à l’ESP32 d’activer la pompe sans lui faire supporter directement son courant de puissance.' },
          { name: 'Pompe à eau 5 V', definition: 'Actionneur chargé d’acheminer l’eau vers la zone de culture.', principle: 'Elle se met en marche lorsque le relais reçoit l’ordre d’arroser, puis s’arrête au seuil défini.' },
          { name: 'Alimentation autonome', definition: 'Source d’énergie dédiée au prototype et à ses actionneurs.', principle: 'Elle fournit la tension nécessaire au circuit et permet à la maquette de fonctionner sans alimentation de laboratoire.' },
        ] },
        { phase: '04', title: 'Informer et configurer', summary: 'Rendre le système compréhensible et réglable localement.', tools: [
          { name: 'Écran LCD I2C', definition: 'Afficheur local pour les mesures et l’état de la pompe.', principle: 'Le protocole I2C transporte les informations avec peu de fils et simplifie le câblage.' },
          { name: 'Boutons poussoirs', definition: 'Commandes physiques accessibles sur le boîtier.', principle: 'Ils permettent d’ajuster le seuil d’humidité sans reprogrammer la carte.' },
        ] },
        { phase: '05', title: 'Prototyper et protéger', summary: 'Construire une maquette transportable et organiser l’électronique.', tools: [
          { name: 'Breadboard, câbles et résistances', definition: 'Éléments de prototypage et de connexion du circuit.', principle: 'La breadboard permet les essais sans soudure, les câbles relient les modules et les résistances protègent les composants.' },
          { name: 'Wokwi', definition: 'Environnement de simulation pour circuits électroniques et programmes embarqués.', principle: 'Il permet de vérifier le câblage et la logique de commande virtuellement avant l’assemblage physique.' },
          { name: 'SolidWorks et impression 3D', definition: 'Outils de conception et de fabrication du boîtier de commande.', principle: 'Le boîtier est d’abord modélisé en CAO, puis fabriqué pour regrouper et protéger l’interface et l’électronique.' },
        ] },
        { phase: '06', title: 'Connecter et superviser', summary: 'Suivre le système à distance et conserver son historique.', tools: [
          { name: 'Wi-Fi et interface SmartGrow Hub', definition: 'Liaison entre le prototype et le tableau de bord web/mobile.', principle: 'Les mesures remontent périodiquement et l’utilisateur peut consulter l’état du système ou modifier le seuil.' },
          { name: 'Firebase Firestore', definition: 'Base de données cloud utilisée pour synchroniser les informations.', principle: 'Elle centralise les mesures et les réglages afin de rendre la supervision bidirectionnelle.' },
        ] },
      ],
      github: '', demo: '',
    },
    {
      id: 'agent-fablab', title: 'Agent IA pour le Fablab', eyebrow: 'Assistant intelligent',
      description: 'Un assistant conversationnel conçu pour rendre les informations du Fablab plus faciles à trouver et préparer l’automatisation de certaines tâches internes.',
      detail: 'Le projet part d’un besoin concret : éviter de chercher une information dans plusieurs documents ou auprès de plusieurs personnes. L’agent doit comprendre une demande, retrouver le contexte utile et formuler une réponse claire. Le prototype constitue une première base, appelée à évoluer avec des sources mieux structurées et davantage de tests.',
      technologies: ['Python', 'API d’IA', 'Prompting', 'Base documentaire', 'Interface web'], status: 'Prototype en évolution',
      progressNote: 'Une première version de l’assistant a été développée pendant le stage. Le travail se poursuit sur la qualité des sources, la fiabilité des réponses et l’intégration aux futurs outils de gestion du Fablab.',
      skills: ['Analyse du besoin', 'Logique conversationnelle', 'Intégration d’API', 'Structuration de l’information', 'Tests et amélioration'],
      image: '', frontImage: '', backImage: '',
      steps: [
        { phase: '01', title: 'Comprendre le besoin', summary: 'Identifier les questions récurrentes et les informations réellement utiles aux utilisateurs.', tools: [
          { name: 'Analyse fonctionnelle', definition: 'Étude des besoins du Fablab et des situations dans lesquelles l’assistant peut apporter une aide concrète.', principle: 'Partir des usages réels permet de limiter les fonctions inutiles et de donner un objectif précis à l’agent.' },
        ] },
        { phase: '02', title: 'Préparer les connaissances', summary: 'Organiser les contenus que l’agent doit pouvoir retrouver et expliquer.', tools: [
          { name: 'Base documentaire', definition: 'Ensemble structuré de documents et d’informations internes servant de référence à l’assistant.', principle: 'Une source claire et bien découpée améliore la pertinence des informations retrouvées avant la génération de la réponse.' },
          { name: 'Structuration des données', definition: 'Classement des contenus par thèmes, besoins et niveaux de priorité.', principle: 'L’agent peut rechercher plus efficacement quand les informations sont cohérentes, nettoyées et contextualisées.' },
        ] },
        { phase: '03', title: 'Construire la logique de l’agent', summary: 'Relier la demande de l’utilisateur, les sources disponibles et le modèle d’intelligence artificielle.', tools: [
          { name: 'Python', definition: 'Langage utilisé pour organiser le traitement des requêtes et les échanges entre les différentes briques du prototype.', principle: 'Le programme reçoit une question, prépare le contexte, appelle le service d’IA puis renvoie une réponse exploitable.' },
          { name: 'API d’intelligence artificielle', definition: 'Interface permettant au prototype de communiquer avec un modèle de langage.', principle: 'La requête combine les instructions de l’agent, la question et le contexte utile afin d’obtenir une réponse adaptée.' },
          { name: 'Prompting', definition: 'Rédaction d’instructions qui cadrent le rôle, le ton et les limites de l’assistant.', principle: 'Des consignes précises réduisent les réponses vagues et aident l’agent à rester centré sur le Fablab.' },
        ] },
        { phase: '04', title: 'Créer l’expérience', summary: 'Rendre l’assistant simple à utiliser depuis une interface claire.', tools: [
          { name: 'Interface web', definition: 'Point de contact conversationnel entre l’utilisateur et l’agent.', principle: 'L’interface organise les messages, rend les réponses lisibles et prépare l’intégration à un futur outil de gestion.' },
        ] },
        { phase: '05', title: 'Tester et améliorer', summary: 'Observer les réponses, repérer les limites et préparer les prochaines versions.', tools: [
          { name: 'Jeux de questions', definition: 'Série de demandes représentatives utilisées pour vérifier le comportement de l’agent.', principle: 'Comparer les réponses attendues et obtenues permet d’ajuster les sources, les instructions et les garde-fous.' },
        ] },
      ], github: '', demo: '',
    },
    { id: 'fabot-pro', title: 'FABOT PRO', eyebrow: 'Robotique intelligente', description: 'Concept de robot intelligent destiné à accompagner les activités du Fablab.', detail: 'Le concept envisage l’accueil des visiteurs, un assistant vocal, le déplacement autonome, la cartographie, la détection d’obstacles, la surveillance de l’état des machines et un tableau de bord responsable.', technologies: ['ROS 2 envisagé', 'Navigation autonome envisagée', 'IA vocale envisagée'], status: 'En cours de développement', progressNote: '', skills: ['Robotique', 'Architecture système', 'Prototypage'], image: '', frontImage: '', backImage: '', steps: [], github: '', demo: '' },
    { id: 'python-learning', title: 'Projets Python', eyebrow: 'Apprentissage par la pratique', description: 'Une collection de petits programmes réalisés pour renforcer progressivement mes bases.', detail: 'Calculatrice, jeu du nombre mystère, Pierre-Feuille-Ciseaux et To-Do List : des exercices simples qui m’ont permis de pratiquer la logique, les conditions, les boucles et l’organisation du code.', technologies: ['Python'], status: 'Apprentissage', progressNote: '', skills: ['Logique', 'Algorithmique', 'Organisation du code'], image: '', frontImage: '', backImage: '', steps: [], github: '', demo: '' },
    { id: 'dental-saas', title: 'SaaS pour cabinets dentaires', eyebrow: 'Concept de produit', description: 'Une plateforme intelligente imaginée pour moderniser la gestion des cabinets dentaires.', detail: 'Le concept prévoit la gestion des patients, du personnel, des finances et des équipements, ainsi que la centralisation des informations et un assistant IA capable d’interroger et de mettre à jour les données.', technologies: ['Stack à définir', 'Intégration IA envisagée'], status: 'Projet futur', progressNote: '', skills: ['Réflexion SaaS', 'Analyse des besoins', 'Conception fonctionnelle'], image: '', frontImage: '', backImage: '', steps: [], github: '', demo: '' },
  ],
  goals: [
    { horizon: 'Court terme', index: '01', items: ['Renforcer mes bases en programmation', 'Progresser en développement web', 'Réaliser davantage de projets', 'Approfondir les bases de l’intelligence artificielle'] },
    { horizon: 'Moyen terme', index: '02', items: ['Maîtriser le développement d’applications complètes', 'Construire des agents IA plus avancés', 'Développer des solutions SaaS utiles', 'Approfondir le machine learning', 'Participer à des projets innovants'] },
    { horizon: 'Long terme', index: '03', items: ['Devenir ingénieur spécialisé en intelligence artificielle', 'Devenir chercheur en intelligence artificielle', 'Participer au développement de nouvelles technologies', 'Créer mes propres solutions SaaS', 'Construire des produits ayant une utilité réelle'] },
  ],
} as const;

export type Project = (typeof portfolioData.projects)[number];
