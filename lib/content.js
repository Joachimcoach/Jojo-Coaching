// ---------------------------------------------------------------------------
// Tout le texte du site est centralisé ici.
// Pour changer un prix, un titre, une question de FAQ ou un témoignage,
// c'est ici et nulle part ailleurs. Pas besoin de toucher aux composants.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Joachim Berrewaerts',
  tagline: 'Coaching sportif personnalisé',
  email: 'berrewaertsj@hotmail.com',
  instagram: '#', // TODO: lien Instagram
  strava: '#', // TODO: lien Strava
};

export const nav = [
  { label: 'Méthode', href: '#methode' },
  { label: 'Présentation', href: '#presentation' },
  { label: 'Formules', href: '#formules' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Coaching course à pied · cyclisme · renforcement',
  title: "L'entraînement qui s'adapte à toi.",
  subtitle:
    "Tu me dis ce qui te fait envie : un premier semi, battre ton chrono, ou aller chercher ton prochain segment Strava. On construit l'entraînement autour.",
  prix: 'Dès 50 € / mois',
  prixDetail: 'Appel découverte gratuit',
  ctaPrimary: 'Réserver un appel découverte',
  ctaSecondary: 'Voir les formules',
};

export const presentation = {
  eyebrow: 'Qui je suis',
  title: 'Joachim Berrewaerts',
  role: "Préparateur physique spécialisé en physiologie de l'effort",
  paragraphs: [
    "Diplômé en Sciences de la Motricité (bachelier et master) à l'Université Libre de Bruxelles (ULB), je me suis spécialisé dans la physiologie de l'effort : comprendre concrètement ce qui se passe dans le corps d'un athlète à l'entraînement, pour construire des plans qui font sens physiologiquement.",
    "J'ouvre aujourd'hui mon coaching à tous les niveaux, en course à pied comme à vélo, du premier 10 km au chrono qu'on vise depuis longtemps. Chaque plan se construit autour de ta vraie semaine : ton boulot, ta vie de famille, tes imprévus.",
    "Je suis aussi sportif : je cours du 10 km au marathon, et je roule au sein de l'équipe amateur Sunset TAVELO, à la Bonneville Cycling Federation, avec laquelle je participe régulièrement à des courses.",
  ],
  photo: {
    src: '/images/joachim-portrait.jpg',
    alt: 'Joachim Berrewaerts, souriant, après une course sur piste',
  },
  gallery: [
    {
      src: '/images/joachim-course.jpg',
      alt: 'Joachim en course à pied sur route mouillée',
      position: 'center',
    },
    {
      src: '/images/joachim-velo.jpg',
      alt: 'Joachim à vélo en position de course',
      position: '35% center',
    },
  ],
  diploma: 'Master en Sciences de la Motricité, orientation éducation physique, finalité spécialisée (préparation physique) — ULB',
};

export const vision = {
  eyebrow: 'Ma vision',
  statement: "Pas de VMA imposée, pas de plan générique : un coaching où c'est l'entraînement qui s'adapte à toi, pas l'inverse.",
  pillars: [
    {
      title: 'À l\'écoute du corps',
      text: "Le ressenti du jour prime toujours sur un chiffre imposé à l'avance.",
    },
    {
      title: 'Tes objectifs, ton rythme',
      text: "Le plan s'ajuste à ta vie — travail, sommeil, stress — pas l'inverse.",
    },
    {
      title: 'Sans pression',
      text: "La régularité et la progressivité battent l'intensité forcée, à chaque fois.",
    },
    {
      title: 'Communication empathique',
      text: "On ajuste ensemble, en continu — jamais dans le vide entre deux séances.",
    },
  ],
};

export const process = {
  eyebrow: 'La méthode',
  title: 'Comment ça marche',
  intro:
    "Quatre étapes, de notre premier échange jusqu'à un entraînement calibré sur ton niveau réel et ajusté chaque semaine.",
  steps: [
    {
      number: '01',
      title: 'Bilan et connexion',
      visuel: { type: 'logo', src: '/images/intervals-logo.png', alt: 'Logo Intervals.icu', legende: 'Intervals.icu' },
      text: "On fait le point sur ton niveau, ton historique et tes objectifs. Tu relies ta montre GPS ou ton compte Strava à Intervals.icu : tes séances y arrivent ensuite automatiquement, sans rien avoir à noter.",
      accent: false,
    },
    {
      number: '02',
      title: 'Test de terrain',
      visuel: { type: 'courbe', alt: 'Courbe puissance-durée avec la puissance critique' },
      text: "Un test de vitesse critique (course à pied) ou de puissance critique (vélo) mesure l'intensité que tu peux tenir dans la durée. Il sert à définir tes zones d'intensité personnalisées : les allures ou puissances exactes de chaque séance.",
      accent: false,
    },
    {
      number: '03',
      title: 'Ton programme',
      visuel: { type: 'image', src: '/images/methode-plan.png', alt: "Exemple de plan d'entraînement sur plusieurs semaines", position: 'left top' },
      text: "C'est ici que ça devient personnel. À partir de ton test, de tes séances passées et de tes objectifs, je construis un programme adapté à ta physiologie et à ton emploi du temps.",
      accent: true,
    },
    {
      number: '04',
      title: 'Suivi et ajustements',
      visuel: { type: 'image', src: '/images/methode-suivi.png', alt: "Analyse d'une séance de vélo : puissance et fréquence cardiaque", position: '52% center' },
      text: "Chaque semaine, je regarde tes séances et ton ressenti, et j'adapte la suite : fatigue, imprévus, progression.",
      accent: false,
    },
  ],
  note: '',
};

// Calculateur de vitesse / puissance critique (section Méthode, replié par défaut)
export const calculateur = {
  titre: 'Tu as déjà des chronos ? Estime ta vitesse ou ta puissance critique',
  sousTitre: 'Deux efforts suffisent. Résultat, prédictions et zones en direct.',
  course: 'Course à pied',
  velo: 'Vélo',
  consigneCourse:
    "Entre deux efforts courus à fond, de durées bien différentes, idéalement entre 3 et 15 minutes. Peu importe s'ils étaient fixés en distance (ex. 1 200 m et 3 600 m) ou en durée (ex. 3 min et 12 min) : indique la distance parcourue et le temps réalisé.",
  consigneVelo:
    'Entre deux efforts roulés à fond, de durées bien différentes, idéalement entre 3 et 15 minutes (ex. 3 min et 12 min), avec la puissance moyenne tenue sur chacun.',
  effort: 'Effort',
  distance: 'Distance',
  temps: 'Temps',
  duree: 'Durée',
  puissance: 'Puissance moyenne',
  attente: 'Remplis les deux efforts pour voir ton résultat.',
  resultatVC: 'Vitesse critique',
  resultatDPrime: 'Réserve anaérobie (D′)',
  resultatCP: 'Puissance critique',
  resultatWPrime: 'Réserve anaérobie (W′)',
  explicationReserve: "L'effort disponible au-dessus de ta valeur critique avant l'épuisement.",
  titrePredictions: 'Ce que ça donne',
  limitePredictions:
    "Prédictions limitées aux efforts de 2 à 40 minutes : au-delà, le modèle surestime la performance (« — » = hors de cette plage).",
  titreZones: 'Tes zones d\'intensité',
  explicationZonesCourse: 'Calculées avec ta vitesse critique comme allure de référence (Z4 = jusqu\'à ta VC).',
  explicationZonesVelo: 'Calculées avec ta puissance critique comme puissance de référence.',
  avertissement:
    "Ces valeurs sont une estimation. Un test réalisé dans de bonnes conditions, et des zones ajustées à ton profil et à ton ressenti, c'est ce qu'on construit ensemble.",
  cta: 'Appel découverte gratuit',
  erreurs: {
    memeDuree: 'Les deux efforts doivent avoir des durées différentes.',
    incoherent:
      "Les deux efforts ne sont pas cohérents : l'effort le plus long doit être réalisé à une allure (ou une puissance) plus faible que le plus court. Vérifie tes valeurs.",
    horsPlage:
      "Au moins un effort sort de la plage de 2 à 40 minutes : le résultat est moins fiable. Pour une bonne estimation, vise des efforts entre 3 et 15 minutes.",
  },
};

export const formules = {
  eyebrow: 'Formules',
  title: "Deux façons de travailler ensemble",
  disclaimer: 'L\'appel découverte est gratuit : on vérifie ensemble que la formule te correspond avant de commencer.',
  offers: [
    {
      title: 'Planification & suivi',
      description:
        "Un plan d'entraînement complet et évolutif, construit pour toi et ajusté au fil des semaines.",
      tags: ['Course à pied', 'Cyclisme'],
      price: '50',
      unit: '/ mois',
      features: [
        'Bilan initial + test de vitesse ou de puissance critique',
        'Plan hebdomadaire personnalisé',
        'Ajustements continus selon ton ressenti',
        'Échanges via WhatsApp ou le chat Intervals.icu',
      ],
      cta: 'Réserver un appel découverte gratuit',
      highlighted: true,
    },
    {
      title: 'Planification + renforcement musculaire',
      description:
        "Tout le suivi de la formule Planification, complété par un programme de renforcement musculaire construit pour ton sport et ton niveau.",
      tags: ['Course à pied', 'Cyclisme', 'Renforcement musculaire'],
      price: '69',
      unit: '/ mois',
      features: [
        'Tout le contenu de la formule Planification & suivi',
        'Programme de renforcement musculaire personnalisé',
        'Séances de renforcement envoyées via l\'application Nolio',
        'Échanges via WhatsApp ou le chat Intervals.icu',
      ],
      cta: 'Réserver un appel découverte gratuit',
      highlighted: false,
    },
  ],
};

// Section avis clients masquée (retirée de app/page.js et du menu).
// Pour la réactiver plus tard : ajouter de VRAIS avis ici, puis remettre
// <Testimonials /> dans app/page.js et l'entrée 'Avis' dans le menu.
export const testimonials = {
  eyebrow: 'Ils en parlent',
  title: 'Ce qu\'en disent mes athlètes',
  items: [],
};

export const badges = {
  eyebrow: 'Formation',
  title: 'Une expertise académique, au service du terrain',
  items: [
    {
      title: 'Master - Sciences de la Motricité',
      subtitle: 'Orientation éducation physique, finalité spécialisée (préparation physique) — ULB',
    },
    {
      title: 'Bachelier - Sciences de la Motricité',
      subtitle: 'Orientation éducation physique (ULB)',
    },
    {
      title: "Spécialisation",
      subtitle: "Physiologie de l'effort",
    },
  ],
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions fréquentes',
  note: 'Contenu de démonstration — à préciser avant la mise en ligne.',
  items: [
    {
      question: 'Dois-je avoir du matériel spécifique pour commencer ?',
      answer:
        "Une montre GPS, ou simplement l'application Strava sur ton téléphone, suffit pour démarrer. En vélo, un capteur de puissance permet un suivi plus précis, mais il n'est pas obligatoire.",
    },
    {
      question: 'C\'est quoi un test de vitesse ou de puissance critique ?',
      answer:
        "Un test simple, réalisé sur le terrain, qui mesure l'intensité que tu peux maintenir longtemps sans t'épuiser. On s'en sert pour fixer tes zones d'entraînement : tu sais exactement à quelle allure ou à quelle puissance faire chaque séance.",
    },
    {
      question: 'Combien de temps avant de voir des résultats ?',
      answer:
        "Cela dépend de ton point de départ et de tes objectifs. On en parle concrètement dès l'appel découverte.",
    },
    {
      question: 'Puis-je arrêter à tout moment ?',
      answer:
        "Oui, sans engagement de longue durée. Les conditions précises seront détaillées avant ton inscription.",
    },
    {
      question: 'Comment se passe la communication au quotidien ?',
      answer:
        "Par WhatsApp ou via le chat d'Intervals.icu, avec des points réguliers pour ajuster le plan selon ton ressenti et ton emploi du temps.",
    },
  ],
};

export const ctaFinal = {
  title: 'On construit ton plan ensemble ?',
  subtitle:
    "Un appel de 20 minutes, sans engagement, pour comprendre ton profil et voir si l'approche te correspond.",
  cta: 'Réserver un appel découverte gratuit',
};