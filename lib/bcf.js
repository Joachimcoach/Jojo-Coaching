// ---------------------------------------------------------------------------
// Version BCF du site : tous les textes sont ici.
// Pour changer un prix, un titre ou une question, c'est dans ce fichier.
// ---------------------------------------------------------------------------

export const bcfSite = {
  nom: 'La Grimpe',
  vraiNom: 'Joachim Berrewaerts',
  email: 'berrewaertsj@hotmail.com',
};

export const bcfNav = [
  { label: 'Qui je suis', href: '#histoire' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Formules', href: '#formules' },
  { label: 'FAQ', href: '#faq' },
];

export const bcfHero = {
  surtitre: 'Coach vélo & course à pied · BCF',
  alias: 'Joachim Berrewaerts, alias',
  titre: 'La Grimpe',
  accroche:
    "Ton plan d'entraînement pour les classiques BCF, construit par un coureur du peloton qui a étudié la physiologie de l'effort.",
  cta: 'Réserver mon appel découverte',
  ctaDetail: '20 min · gratuit',
  prix: 'Dès 49 € / mois',
  photos: [
    { src: '/images/bcf-velo.jpg', alt: 'Joachim en position de course sur son vélo', position: '30% center' },
    { src: '/images/bcf-course-spa.jpg', alt: 'Joachim en course à pied sous la pluie à Spa', position: '45% center' },
  ],
};

export const bcfHistoire = {
  surtitre: 'Qui je suis',
  titre: "Il y a un an, j'étais frissons.",
  paragraphes: [
    "Première classique BCF de l'année, catégorie Frissons. Six mois plus tard, j'étais un des leaders de mon équipe, la Sunset TAVELO. Mon coach pendant tout ce temps ? Moi-même.",
    "Ce que j'ai fait pour moi, je le fais maintenant pour toi : un master en sciences de la motricité à l'ULB (préparation physique), une spécialisation en physiologie de l'effort, et la connaissance des parcours et des coulisses de la BCF, parce que j'y cours.",
    "On me croise aussi devant le groupe comme ride leader du club Sunday, et en course à pied, du 10 km au marathon.",
  ],
  photo: {
    src: '/images/bcf-giro.jpg',
    alt: 'Joachim porté en triomphe au Giro di Vosges 2026',
    position: 'center 30%',
  },
  chiffres: [
    { valeur: '2e', label: 'Classement général', detail: 'Giro BCF 2026' },
    { valeur: 'Top 10', label: 'Classiques Pro Tour', detail: 'La plus haute division BCF' },
    { valeur: '3×', label: 'Vainqueur des 24 h vélo', detail: 'Bois de la Cambre, Troupe Notre-Dame du Rosaire' },
    { valeur: 'Top 10', label: 'Course à pied', detail: 'Courses locales et trails courts' },
  ],
};

export const bcfMethode = {
  surtitre: 'La méthode',
  titre: 'Comment on bosse',
  etapes: [
    {
      numero: '01',
      titre: 'Appel & test',
      texte:
        "20 minutes pour parler de tes objectifs BCF. Puis un test de vitesse ou de puissance critique pour fixer tes zones d'intensité.",
    },
    {
      numero: '02',
      titre: 'Ton plan',
      texte:
        'Tes séances dans Intervals.icu, synchronisées avec ta montre ou ton compteur, construites autour des classiques que tu vises.',
    },
    {
      numero: '03',
      titre: 'On ajuste',
      texte:
        "Chaque semaine, je regarde tes séances et ton ressenti. On échange sur WhatsApp ou le chat d'Intervals.icu.",
    },
  ],
};

export const bcfCalculateur = {
  surtitre: 'Outil gratuit',
  titre: 'Calcule ta vitesse ou ta puissance critique',
  sousTitre: "Deux efforts à fond, de durées différentes (idéalement entre 3 et 15 min), et tu obtiens ta valeur critique et tes zones.",
  exemple: 'Essayer avec un exemple',
  avertissement: "C'est une estimation. Le vrai test, dans de bonnes conditions, on le fait ensemble.",
};

export const bcfFormules = {
  surtitre: 'Formules',
  titre: 'Choisis ta formule',
  photo: {
    src: '/images/bcf-podium.jpg',
    alt: 'Podium du Giro di Vosges 2026',
    fleche: 'ça, c’est moi',
    // Position de la flèche sur la photo, en % (gauche, haut)
    x: 9,
    y: 30,
    legende: 'Podium du Giro di Vosges 2026, à côté de Paul Asselberghs, le GOAT de la BCF.',
  },
  offres: [
    {
      nom: 'La Saison',
      prix: '49 €',
      unite: '/ mois',
      detail: 'Tarif de lancement 2027 · engagement de janvier à octobre',
      badge: 'Recommandé',
      points: [
        'Test de vitesse ou puissance critique, zones personnalisées',
        'Plan hebdo construit autour des classiques et Grands Tours BCF',
        'Ajustements chaque semaine selon tes séances et ton ressenti',
        "Échanges sur WhatsApp ou le chat d'Intervals.icu",
      ],
      cta: 'Réserver mon appel',
      miseEnAvant: true,
    },
    {
      nom: 'Prépa Classique',
      prix: '177 €',
      unite: '/ 3 mois',
      detail: 'Soit 59 € / mois · sans engagement au-delà',
      points: [
        'Un objectif : une classique ou un Grand Tour BCF',
        '12 semaines de préparation ciblée',
        'Un test au départ, un test avant la course',
        'Même suivi que La Saison',
      ],
      cta: 'Réserver mon appel',
    },
    {
      nom: 'Équipe',
      prix: 'Sur demande',
      unite: '',
      detail: 'Pour les équipes BCF, nouvelles ou non',
      points: [
        'Programme collectif calé sur le calendrier BCF',
        "Sorties d'entraînement en groupe",
        "Point d'équipe avant chaque objectif",
        'Suivi individuel des coureurs à tarif réduit',
      ],
      cta: 'On en parle',
    },
  ],
  options: [
    'Option renforcement musculaire : + 19 € / mois (séances envoyées sur Nolio).',
    'Course à pied : mêmes formules, du 10 km au marathon et au trail.',
  ],
};

export const bcfFaq = {
  surtitre: 'FAQ',
  titre: 'Questions fréquentes',
  questions: [
    {
      question: 'Je débute à la BCF, c’est pour moi ?',
      reponse:
        "Oui, et c'est même là que la progression est la plus rapide. J'étais à ta place il y a 2 ans.",
    },
    {
      question: 'Je n’ai pas de capteur de puissance.',
      reponse:
        "Pas grave : on peut travailler à la fréquence cardiaque et aux sensations. Un capteur affine le suivi, mais il n'est pas obligatoire pour commencer.",
    },
    {
      question: 'Je peux arrêter quand je veux ?',
      reponse:
        "La Saison est un engagement jusqu'à fin octobre : c'est ce qui permet le tarif de lancement. Si tu préfères sans engagement, la Prépa Classique s'arrête d'elle-même après 3 mois.",
    },
    {
      question: 'Pourquoi « La Grimpe » ?',
      reponse: "C'est le surnom que le peloton m'a donné. Je te laisse deviner sur quel terrain je me sens le mieux.",
    },
  ],
};

export const bcfContact = {
  titre: 'On en parle\u00a0?',
  texte:
    "20 minutes, gratuit et sans engagement : tu me racontes tes objectifs, je te dis comment je bosserais avec toi.",
  cta: 'Réserver mon appel découverte',
  ouEmail: 'ou écris-moi :',
};
