// ---------------------------------------------------------------------------
// Tout le texte du site est centralisé ici.
// Pour changer un prix, un titre, une question de FAQ ou un témoignage,
// c'est ici et nulle part ailleurs. Pas besoin de toucher aux composants.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Joachim Berrewaerts',
  tagline: 'Coaching sportif personnalisé',
  email: 'contact@joachimberrewaerts.be', // TODO: remplacer par la vraie adresse
  instagram: '#', // TODO: lien Instagram
  strava: '#', // TODO: lien Strava
};

export const nav = [
  { label: 'Présentation', href: '#presentation' },
  { label: 'Vision', href: '#vision' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Formules', href: '#formules' },
  { label: 'Avis', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Coaching course à pied · cyclisme · renforcement',
  title: "L'entraînement qui s'adapte à toi. Pas l'inverse.",
  subtitle:
    "Un coaching construit à partir de tes données d'entraînement, de ton ressenti et d'une expertise en physiologie de l'effort — sans VMA imposée, sans plan générique, sans pression.",
  ctaPrimary: 'Réserver un appel découverte',
  ctaSecondary: 'Découvrir la méthode',
};

export const presentation = {
  eyebrow: 'Qui je suis',
  title: 'Joachim Berrewaerts',
  role: "Préparateur physique — spécialisé en physiologie de l'effort",
  paragraphs: [
    "Diplômé en Sciences de la Motricité (bachelier et master) à l'Université Libre de Bruxelles (ULB), je me suis spécialisé dans la physiologie de l'effort : comprendre concrètement ce qui se passe dans le corps d'un athlète à l'entraînement, pour construire des plans qui font sens physiologiquement — pas seulement sur papier.",
    "Aujourd'hui j'accompagne des coureurs, cyclistes et personnes en reprise d'activité, avec une conviction simple : la donnée ne remplace jamais l'écoute, elle la rend plus précise.",
  ],
  diploma: 'Master en Sciences de la Motricité — ULB',
};

export const vision = {
  eyebrow: 'Ma vision',
  statement: "Pas de VMA, pas de plan générique : une méthode data-driven où c'est l'entraînement qui s'adapte à toi, pas l'inverse.",
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
    "Cinq étapes, du signal brut de ton corps jusqu'à un entraînement clair et personnalisé, sans jamais te laisser seul avec la complexité derrière.",
  steps: [
    {
      number: '01',
      title: 'Tes données',
      text: 'Fréquence cardiaque, allure, puissance, sommeil, ressenti : tout ce que ton corps donne comme information à chaque séance.',
      accent: false,
    },
    {
      number: '02',
      title: 'Centralisation — Intervals.icu',
      text: "Ces données sont structurées et suivies dans la durée, pour faire émerger de vraies tendances plutôt que des instantanés isolés.",
      accent: false,
    },
    {
      number: '03',
      title: 'Analyse approfondie — IA',
      text: "Une intelligence artificielle croise tes indicateurs pour repérer ce qu'un œil humain met des heures à voir : charge cachée, tendance de fatigue, marge de progression réelle.",
      accent: false,
    },
    {
      number: '04',
      title: "Ton entraînement — par Joachim",
      text: "C'est ici que ça devient personnel. J'interprète cette analyse à la lumière de ta physiologie, ton vécu et tes objectifs, et je construis ton programme.",
      accent: true,
    },
    {
      number: '05',
      title: 'Livraison — Nolio',
      text: "Ton programme, ton suivi et nos échanges (chat inclus) centralisés dans une seule appli, simple à utiliser au quotidien.",
      accent: false,
    },
  ],
  note: "L'IA ne coache jamais à ma place : elle m'aide à voir plus loin, plus vite. La décision reste toujours humaine.",
};

export const formules = {
  eyebrow: 'Formules',
  title: "Deux façons de travailler ensemble",
  disclaimer: 'Prix indicatifs, à affiner ensemble lors de l\'appel découverte.',
  offers: [
    {
      title: 'Planification & suivi',
      description:
        "Un plan d'entraînement complet et évolutif, construit à partir de tes données et ajusté au fil des semaines.",
      tags: ['Course à pied', 'Cyclisme', 'Renforcement musculaire'],
      price: '99',
      unit: '/ mois',
      features: [
        'Analyse initiale complète du profil (Intervals.icu + IA)',
        'Plan hebdomadaire personnalisé',
        'Ajustements continus selon ton ressenti',
        'Suivi et chat via Nolio',
      ],
      cta: 'Réserver un appel découverte',
      highlighted: true,
    },
    {
      title: 'Remise en forme',
      description:
        "Un accompagnement progressif pour retrouver forme et énergie, sans te mettre en danger, au rythme de ton corps.",
      tags: ['Cardiaque', 'Musculaire'],
      price: '69',
      unit: '/ mois',
      features: [
        'Bilan de forme initial',
        'Progression cardio et musculaire encadrée',
        'Suivi hebdomadaire',
        'Chat et suivi via Nolio',
      ],
      cta: 'Réserver un appel découverte',
      highlighted: false,
    },
  ],
};

export const testimonials = {
  eyebrow: 'Ils en parlent',
  title: 'Contenu de démonstration — à remplacer par de vrais avis clients',
  items: [
    {
      quote:
        "Grâce à Joachim, j'ai enfin compris pourquoi mes plans précédents ne fonctionnaient pas. Le suivi est précis mais jamais oppressant.",
      name: 'Marie',
      context: 'Trail',
    },
    {
      quote:
        "Une approche vraiment différente : on part de mes données, pas d'un plan tout fait. Je progresse sans m'épuiser.",
      name: 'Thomas',
      context: 'Cyclisme',
    },
    {
      quote:
        "Le chat sur Nolio change tout : j'ai toujours une réponse rapide et bienveillante quand j'en ai besoin.",
      name: 'Sophie',
      context: 'Remise en forme',
    },
  ],
};

export const badges = {
  eyebrow: 'Formation',
  title: 'Une expertise académique, au service du terrain',
  items: [
    {
      title: 'Master — Sciences de la Motricité',
      subtitle: 'Université Libre de Bruxelles (ULB)',
    },
    {
      title: 'Bachelier — Sciences de la Motricité',
      subtitle: 'Université Libre de Bruxelles (ULB)',
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
        "Un cardiofréquencemètre ou un capteur de puissance aide à affiner l'analyse, mais ce n'est pas obligatoire pour démarrer.",
    },
    {
      question: 'Est-ce que l\'IA remplace le suivi humain ?',
      answer:
        "Non. L'IA m'aide à analyser tes données plus vite et plus finement, mais c'est toujours moi qui interprète et construis ton entraînement.",
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
        "Via le chat intégré à Nolio, avec des points réguliers pour ajuster le plan selon ton ressenti et ton emploi du temps.",
    },
  ],
};

export const ctaFinal = {
  title: 'On construit ton plan ensemble ?',
  subtitle:
    "Un appel de 20 minutes, sans engagement, pour comprendre ton profil et voir si l'approche te correspond.",
  cta: 'Réserver un appel découverte gratuit',
};
