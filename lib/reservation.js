// ---------------------------------------------------------------------------
// Lien de prise de rendez-vous pour l'appel découverte.
// Colle entre les apostrophes le lien de ta page de réservation Google Agenda
// (il ressemble à https://calendar.app.google/xxxxxxxx).
// Tant que c'est vide, les boutons renvoient vers le bloc contact (email).
// ---------------------------------------------------------------------------

export const RESERVATION_URL = 'https://calendar.app.google/9a8p5Ud753JnLTwy7';

export const reservationProps = RESERVATION_URL
  ? { href: RESERVATION_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { href: '#contact' };
