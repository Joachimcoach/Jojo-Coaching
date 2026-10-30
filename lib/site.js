// ---------------------------------------------------------------------------
// Tous les textes du site sont ici : accueil, page course, page vélo.
// Pour changer un prix, un titre ou une question, c'est dans ce fichier.
// ---------------------------------------------------------------------------

export const site = {
  nom: 'Joachim Berrewaerts',
  email: 'berrewaertsj@hotmail.com',
};

// Couleur de chaque sport (utilisée pour les boutons, titres, détails)
export const couleurs = {
  accueil: '#141414',
  course: '#ff5a2c',
  velo: '#e8336d',
};

/* ------------------------------- ACCUEIL ------------------------------- */

export const accueil = {
  surtitre: 'Coach course à pied & vélo',
  titre: 'Joachim Berrewaerts',
  accroche:
    "Ton plan d'entraînement, construit par un athlète qui court et roule en compétition, et qui a étudié la physiologie de l'effort.",
  cta: 'Réserver mon appel découverte',
  ctaDetail: '20 min · gratuit',
  photos: [
    {
      sport: 'course',
      lien: '/course',
      label: 'Coaching course à pied',
      src: '/images/bcf-course-spa.jpg',
      alt: 'Joachim en course à pied sous la pluie à Spa',
      position: '45% center',
    },
    {
      sport: 'velo',
      lien: '/velo',
      label: 'Coaching vélo',
      src: '/images/bcf-velo.jpg',
      alt: 'Joachim en position de course sur son vélo',
      position: '30% center',
    },
  ],
  bande: ['Course à pied', 'Vélo', 'Vitesse critique', 'Puissance critique', 'Du 10 km au marathon', 'Classiques BCF'],
};

export const histoire = {
  surtitre: 'Qui je suis',
  titre: 'Joachim Berrewaerts',
  role: "Préparateur physique - spécialisé en physiologie de l'effort",
  // Trois blocs avec un intertitre. « liste » est optionnelle (puces).
  blocs: [
    {
      intertitre: 'La science',
      texte:
        "Diplômé en Sciences de la Motricité (bachelier et master) à l'ULB, je me suis spécialisé en physiologie de l'effort : comprendre ce qui se passe dans le corps à l'entraînement pour construire des plans qui ont du sens. Mon mémoire portait sur l'effet d'un programme HIIT en course à pied sur la VO2max, mesurée sur cyclo-ergomètre et sur tapis roulant.",
    },
    {
      intertitre: 'Le terrain',
      texte:
        "Je cours du 10 km au marathon et je roule avec l'équipe Sunset TAVELO à la Bonneville Cycling Federation. Le mercredi soir, de mi-avril à mi-octobre, je suis aussi ride leader au club Sunday à Bruxelles. Quelques résultats :",
      liste: [
        '2e du classement général du Giro BCF 2026',
        'Tops 10 sur les classiques Pro Tour, la plus haute division BCF',
        '3 victoires aux 24 h vélo du Bois de la Cambre (Troupe Notre-Dame du Rosaire)',
        'Tops 10 en course à pied sur des courses locales et des trails courts',
      ],
    },
    {
      intertitre: 'Pour toi',
      texte:
        "J'ouvre aujourd'hui mon coaching à tous les niveaux, en course à pied comme à vélo, du premier 10 km au chrono qu'on vise depuis longtemps. Chaque plan se construit autour de ta vraie semaine : ton boulot, ta vie de famille, tes imprévus.",
    },
  ],
  photo: {
    src: '/images/portrait-sunday.png',
    alt: 'Portrait de Joachim, bras croisés, maillot jaune du club Sunday',
  },
};

export const choixSport = {
  surtitre: 'Ton sport',
  titre: 'Tu cours ou tu roules ?',
  cartes: [
    {
      sport: 'course',
      lien: '/course',
      titre: 'Coaching course à pied',
      texte: 'Du premier 10 km au marathon, sur route ou en trail.',
      src: '/images/bcf-course-spa.jpg',
      position: '45% 30%',
    },
    {
      sport: 'velo',
      lien: '/velo',
      titre: 'Coaching vélo',
      texte: 'Route, classiques et Grands Tours BCF, offre équipe.',
      src: '/images/bcf-giro.jpg',
      position: 'center 35%',
    },
  ],
};

export const contact = {
  titre: 'On en parle ?',
  texte:
    '20 minutes, gratuit et sans engagement : tu me racontes tes objectifs, je te dis comment je travaillerais avec toi.',
  cta: 'Réserver mon appel découverte',
  ouEmail: 'ou écris-moi :',
};

/* ---------------------------- PAGES PAR SPORT --------------------------- */

const methodeCommune = (test, appareil) => [
  {
    numero: '01',
    titre: 'Appel & test',
    texte: `20 minutes pour parler de tes objectifs. Puis un test de ${test} pour fixer tes zones d'intensité personnalisées.`,
  },
  {
    numero: '02',
    titre: 'Ton plan',
    texte: `Tes séances dans Intervals.icu, synchronisées avec ${appareil}, construites autour de ton objectif et de ta vraie semaine.`,
  },
  {
    numero: '03',
    titre: 'On ajuste',
    texte: "Chaque semaine, je regarde tes séances et ton ressenti. On échange sur WhatsApp ou le chat d'Intervals.icu.",
  },
];

export const sports = {
  course: {
    nom: 'Course à pied',
    entete: {
      surtitre: 'Coaching course à pied',
      titre: 'Ton prochain chrono.',
      texte: 'Du premier 10 km au marathon, sur route ou en trail : un plan construit pour toi, ajusté chaque semaine.',
      photo: { src: '/images/bcf-course-spa.jpg', alt: 'Joachim en course à pied à Spa', position: 'center 20%' },
    },
    methode: methodeCommune('vitesse critique', 'ta montre GPS'),
    calculateur: {
      titre: 'Calcule ta vitesse critique',
      sousTitre:
        "Deux efforts courus à fond, de durées différentes (idéalement entre 3 et 15 min) : tu obtiens ta vitesse critique et tes zones d'allure.",
    },
    tarifs: [
      {
        nom: 'Plan & suivi',
        prix: '50 €',
        unite: '/ mois',
        points: [
          'Test de vitesse critique et zones personnalisées',
          'Plan hebdomadaire construit autour de ton objectif',
          'Ajustements chaque semaine selon ton ressenti',
          "Échanges sur WhatsApp ou le chat d'Intervals.icu",
        ],
        miseEnAvant: true,
      },
      {
        nom: 'Plan + renforcement',
        prix: '69 €',
        unite: '/ mois',
        points: [
          'Tout le contenu de Plan & suivi',
          'Programme de renforcement musculaire pour coureurs',
          "Séances de renforcement envoyées sur l'application Nolio",
        ],
      },
    ],
    faq: [
      {
        question: 'Il me faut une montre GPS ?',
        reponse:
          "Une montre GPS, ou simplement l'application Strava sur ton téléphone, suffit pour démarrer. Tes séances arrivent ensuite automatiquement dans Intervals.icu.",
      },
      {
        question: 'Je débute, c’est pour moi ?',
        reponse:
          "Oui. Le plan part de ton niveau réel : on avance progressivement, sans te mettre dans le rouge.",
      },
      {
        question: 'Je peux arrêter quand je veux ?',
        reponse: 'Oui, le suivi est mensuel et sans engagement.',
      },
    ],
  },

  velo: {
    nom: 'Vélo',
    entete: {
      surtitre: 'Coaching vélo',
      titre: 'Ton prochain défi.',
      texte:
        "Une gran fondo, l'Étape du Tour, une course élite 3 ou juste lâcher tes potes dans les côtes : quel que soit ton défi, je construis le plan pour y arriver et je l'ajuste chaque semaine.",
      photo: { src: '/images/bcf-velo.jpg', alt: 'Joachim en position de course sur son vélo', position: '30% 35%' },
    },
    methode: methodeCommune('puissance critique', 'ton compteur ou ta montre'),
    calculateur: {
      titre: 'Calcule ta puissance critique',
      sousTitre:
        'Deux efforts roulés à fond, de durées différentes (idéalement entre 3 et 15 min) : tu obtiens ta puissance critique et tes zones.',
    },
    bcf: {
      surtitre: 'Bonneville Cycling Federation',
      titre: 'Tu roules à la BCF ?',
      texte:
        "Je cours en Pro Tour avec la Sunset TAVELO : je connais les parcours, les classiques et ce qu'il faut pour y performer. Pour les équipes, nouvelles ou non, je propose un accompagnement collectif calé sur le calendrier BCF.",
      photo: {
        src: '/images/bcf-podium.jpg',
        alt: 'Podium du Giro di Vosges 2026',
        fleche: 'ça, c’est moi',
        x: 9,
        y: 30,
        legende: 'Podium du Giro di Vosges 2026, à côté de Paul Asselberghs, le GOAT de la BCF.',
      },
    },
    tarifs: [
      {
        nom: 'Plan & suivi',
        prix: '50 €',
        unite: '/ mois',
        points: [
          'Test de puissance critique et zones personnalisées',
          'Plan hebdomadaire construit autour de tes objectifs',
          'Ajustements chaque semaine selon ton ressenti',
          "Échanges sur WhatsApp ou le chat d'Intervals.icu",
        ],
        miseEnAvant: true,
      },
      {
        nom: 'Plan + renforcement',
        prix: '69 €',
        unite: '/ mois',
        points: [
          'Tout le contenu de Plan & suivi',
          'Programme de renforcement musculaire pour cyclistes',
          "Séances de renforcement envoyées sur l'application Nolio",
        ],
      },
      {
        nom: 'Équipe BCF',
        prix: 'Sur demande',
        unite: '',
        points: [
          'Programme collectif calé sur le calendrier BCF',
          "Sorties d'entraînement en groupe",
          "Point d'équipe avant chaque objectif",
          'Suivi individuel des coureurs à tarif réduit',
        ],
        cta: 'On en parle',
      },
    ],
    faq: [
      {
        question: 'Je n’ai pas de capteur de puissance.',
        reponse:
          "Pas grave : on peut travailler à la fréquence cardiaque et aux sensations. Un capteur affine le suivi, mais il n'est pas obligatoire pour commencer.",
      },
      {
        question: 'Je débute à la BCF, c’est pour moi ?',
        reponse: "Oui, et c'est là que la progression est la plus rapide. J'étais à ta place il y a un an.",
      },
      {
        question: 'Je peux arrêter quand je veux ?',
        reponse: 'Oui, le suivi individuel est mensuel et sans engagement.',
      },
    ],
  },
};
