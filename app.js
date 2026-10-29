const translations = {
  en: {
    wordmarkLabel: "Iman and Aziz, back to top",
    languageSelectorLabel: "Choose language",
    invitationCardLabel: "Wedding invitation",
    invitationEyebrow: "A little note, sealed with love",
    welcome: "You have a special invitation",
    instruction: "Click to open",
    together: "Together with our families",
    coupleNames: "Iman <span>&amp;</span> Aziz",
    invite: "Joyfully invite you to celebrate their wedding.",
    fullDate: "December 8, 2026 · 6:00 PM",
    venue: "<bdi>Salle des Fêtes Al Zahra</bdi>",
    location: "<bdi>Oran, Algeria</bdi>",
    dressCode: "Dress Code: Baby Blue",
    openLabel: "Open the wedding invitation",
    stageCaption: "With love, for a day we’ll always remember",
    countdownEyebrow: "The day is drawing near",
    countdownTitle: "Until we celebrate",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    eventPassed: "The celebration has begun",
    detailsEyebrow: "Save the date",
    detailsTitle: "A beautiful beginning",
    detailsIntro: "We would be delighted to share this special evening with you.",
    backToInvitation: 'Back to invitation <span aria-hidden="true">↗</span>',
    dateLabel: "Date",
    timeLabel: "Time",
    venueLabel: "Venue",
    detailDate: "December 8, 2026",
    detailTime: "6:00 PM",
    detailVenue: "<bdi>Salle des Fêtes Al Zahra</bdi>",
    detailLocation: "<bdi>Oran, Algeria</bdi>",
    dressLabel: "Dress code",
    detailDress: "Baby Blue",
    footerCredit: "Designed with love by",
  },
  fr: {
    wordmarkLabel: "Iman et Aziz, retour en haut de page",
    languageSelectorLabel: "Choisir la langue",
    invitationCardLabel: "Invitation de mariage",
    invitationEyebrow: "Un joli mot, scellé avec amour",
    welcome: "Vous avez une invitation spéciale",
    instruction: "Cliquez pour ouvrir",
    together: "Entourés de nos familles",
    coupleNames: "Iman <span>&amp;</span> Aziz",
    invite: "ont le plaisir de vous inviter à célébrer leur mariage.",
    fullDate: "Le 8 décembre 2026 à 18h00",
    venue: "<bdi>Salle des fêtes Al Zahra</bdi>",
    location: "<bdi>Oran, Algérie</bdi>",
    dressCode: "Code vestimentaire : Bleu ciel",
    openLabel: "Ouvrir l’invitation de mariage",
    stageCaption: "Avec amour, pour un jour inoubliable",
    countdownEyebrow: "Le grand jour approche",
    countdownTitle: "Avant de célébrer",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    eventPassed: "La célébration a commencé",
    detailsEyebrow: "À noter dans votre agenda",
    detailsTitle: "Un beau commencement",
    detailsIntro: "Nous serions ravis de partager cette soirée spéciale avec vous.",
    backToInvitation: 'Retour à l’invitation <span aria-hidden="true">↗</span>',
    dateLabel: "Date",
    timeLabel: "Heure",
    venueLabel: "Lieu",
    detailDate: "Le 8 décembre 2026",
    detailTime: "18h00",
    detailVenue: "<bdi>Salle des fêtes Al Zahra</bdi>",
    detailLocation: "<bdi>Oran, Algérie</bdi>",
    dressLabel: "Tenue",
    detailDress: "Bleu ciel",
    footerCredit: "Créé avec amour par",
  },
  ar: {
    wordmarkLabel: "إيمان وعزيز، العودة إلى الأعلى",
    languageSelectorLabel: "اختيار اللغة",
    invitationCardLabel: "دعوة زفاف",
    invitationEyebrow: "دعوة صغيرة، مختومة بكل حب",
    welcome: "لديكم دعوة مميزة",
    instruction: "اضغط لفتح الدعوة",
    together: "بكل الحب والفرح",
    coupleNames: "إيمان وعزيز",
    invite: "يتشرّفان بدعوتكم لمشاركتهما فرحة زفافهما، في يومٍ يجمع الأحبة وتزهر فيه أجمل البدايات.",
    fullDate: "الثلاثاء 8 ديسمبر 2026، على الساعة السادسة مساءً",
    venue: "<bdi>قاعة الحفلات الزهراء</bdi>",
    location: "<bdi>وهران، الجزائر</bdi>",
    dressCode: "اللباس المطلوب: الأزرق السماوي",
    openLabel: "افتحوا دعوة الزفاف",
    stageCaption: "بكل حب، ليومٍ سيبقى في الذاكرة",
    countdownEyebrow: "يقترب اليوم المنتظر",
    countdownTitle: "حتى نحتفل معًا",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثوانٍ",
    eventPassed: "بدأت الاحتفالات",
    detailsEyebrow: "احفظوا التاريخ",
    detailsTitle: "بداية جميلة",
    detailsIntro: "يسعدنا أن تشاركونا هذه الأمسية المميزة.",
    backToInvitation: 'العودة إلى الدعوة <span aria-hidden="true">↗</span>',
    dateLabel: "التاريخ",
    timeLabel: "الوقت",
    venueLabel: "المكان",
    detailDate: "8 ديسمبر 2026",
    detailTime: "السادسة مساءً",
    detailVenue: "<bdi>قاعة الحفلات الزهراء</bdi>",
    detailLocation: "<bdi>وهران، الجزائر</bdi>",
    dressLabel: "اللباس المطلوب",
    detailDress: "الأزرق السماوي",
    footerCredit: "صُمّم بكل حب من",
  },
};

const languageButtons = document.querySelectorAll(".language-button");
const hero = document.querySelector(".hero");
const envelopeTrigger = document.querySelector(".envelope-trigger");
const invitationCard = document.querySelector(".invitation-card");
const countdownValues = {
  days: document.querySelector('[data-count="days"]'),
  hours: document.querySelector('[data-count="hours"]'),
  minutes: document.querySelector('[data-count="minutes"]'),
  seconds: document.querySelector('[data-count="seconds"]'),
};
const countdown = document.querySelector(".countdown");
const countdownPassed = document.querySelector(".countdown-passed");
const weddingTime = new Date("2026-12-08T18:00:00+01:00").getTime();
let activeLanguage = "en";
let opening = false;
let opened = false;

function setLanguage(language) {
  if (!Object.hasOwn(translations, language)) return;

  activeLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];
    if (translation !== undefined) element.innerHTML = translation;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", translations[language][key]);
  });

  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  envelopeTrigger.setAttribute("aria-label", translations[language].openLabel);
  document.title = language === "fr"
    ? "Iman & Aziz — Invitation de mariage"
    : language === "ar"
      ? "إيمان وعزيز — دعوة زفاف"
      : "Iman & Aziz — A Wedding Invitation";
  updateCountdown();
}

function updateCountdown() {
  const remaining = weddingTime - Date.now();
  if (remaining <= 0) {
    countdown.hidden = true;
    countdownPassed.hidden = false;
    return;
  }

  countdown.hidden = false;
  countdownPassed.hidden = true;
  const totalSeconds = Math.floor(remaining / 1000);
  const units = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
  Object.entries(units).forEach(([unit, value]) => {
    countdownValues[unit].textContent = String(value).padStart(2, "0");
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

envelopeTrigger.addEventListener("click", () => {
  if (opening || opened) return;
  opening = true;
  envelopeTrigger.disabled = true;
  envelopeTrigger.setAttribute("aria-expanded", "true");
  hero.classList.add("is-opening");

  const finishOpening = () => {
    opened = true;
    opening = false;
    hero.classList.remove("is-opening");
    hero.classList.add("is-opened");
    envelopeTrigger.hidden = true;
    invitationCard.setAttribute("tabindex", "-1");
    invitationCard.focus({ preventScroll: true });
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(finishOpening, reducedMotion ? 30 : 1450);
});

setLanguage(activeLanguage);
updateCountdown();
window.setInterval(updateCountdown, 1000);
