/**
 * wedding-data.js — Customer-facing editable data layer for diya-haveli
 * Edit this file to update couple names, dates, events, love story, venue, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Amrit",
    bride: "Ankita",
    monogram: "A & A",
    tagline: "Two souls, one sacred celebration",
  },

  wedding: {
    dateLabel: "09 · 12 · 2026",
    timePlace: "Sahyadri Mangal Karyalay · 7:00 PM onwards",
    dateISO: "2026-12-09T19:00:00+05:30",
    quote: "In the presence of sacred fire and eternal love",
  },

  events: [
    {
      name: "Mehendi",
      date: "8 December 2026",
      time: "12:00 PM onwards",
      place: "Sahyadri Mangal Karyalay",
      note: "Henna, lively melodies and celebratory blessings.",
      photo: "./editable/assets/event-mehendi.jpg",
      start: "2026-12-08T12:00:00+05:30",
      end: "2026-12-08T16:00:00+05:30",
      slug: "mehendi",
    },
    {
      name: "Sangeet & Ring Ceremony",
      date: "8 December 2026",
      time: "7:00 PM onwards",
      place: "Sahyadri Mangal Karyalay",
      note: "An evening of dance, celebration, and exchange of rings.",
      photo: "./editable/assets/event-sangeet.jpg",
      start: "2026-12-08T19:00:00+05:30",
      end: "2026-12-08T23:30:00+05:30",
      slug: "sangeet-ring-ceremony",
    },
    {
      name: "Haldi",
      date: "9 December 2026",
      time: "12:00 PM onwards",
      place: "Sahyadri Mangal Karyalay",
      note: "Auspicious turmeric, blessings, laughter, and yellow hues.",
      photo: "./editable/assets/event-haldi.jpg",
      start: "2026-12-09T12:00:00+05:30",
      end: "2026-12-09T15:00:00+05:30",
      slug: "haldi",
    },
    {
      name: "Shaadi",
      date: "9 December 2026",
      time: "7:00 PM onwards",
      place: "Sahyadri Mangal Karyalay",
      note: "Saat phere under the sacred mandap and the stars.",
      photo: "./editable/assets/event-shaadi.jpg",
      start: "2026-12-09T19:00:00+05:30",
      end: "2026-12-09T23:30:00+05:30",
      slug: "shaadi",
    },
  ],

  story: [
    {
      year: "Chapter I",
      title: "The First Meeting",
      text: "We met as strangers, with nervous hearts and uncertain smiles — little did we know, we were meeting our forever.",
      photo: {
        src: "./editable/assets/story-first-meeting.jpg",
        alt: "Amrit & Ankita walking along the beach shore at sunset",
        placement: "right",
      },
    },
    {
      year: "Chapter II",
      title: "The First Journey",
      text: "Our first journey took us to Rajasthan, where amidst Jaipur’s colours and quiet corners, two hearts slowly found their way to each other.",
      photo: {
        src: "./editable/assets/story-journey.jpg",
        alt: "Amrit & Ankita at the Jaipur City Palace peacock doorway",
        placement: "left",
      },
    },
    {
      year: "Chapter III",
      title: "The Question",
      text: "Then came the question we had been writing together for nine years — “Will you marry me?” And the answer was always you. ❤️",
      photo: {
        src: "./editable/assets/story-question.jpg",
        alt: "Amrit proposing to Ankita on one knee with a ring",
        placement: "below",
      },
    },
    {
      year: "Chapter IV",
      title: "The Beginning",
      text: "Two families. One sacred promise. Seven vows. Step by step, walking hand in hand into a lifetime of togetherness.",
      photo: {
        src: "./editable/assets/story-beginning.jpg",
        alt: "Amrit & Ankita standing together illuminated by warm celebratory lights",
        placement: "left",
      },
    },
  ],

  venue: {
    name: "Sahyadri Mangal Karyalay",
    address: "Neral - Badlapur Rd · Chamtoli · Maharashtra 421503",
    description: "A scenic celebration venue surrounded by the serene hills of Sahyadri, welcoming all our loved ones.",
    photo: "./editable/assets/venue.jpg",
    mapsQuery: "Sahyadri+Mangal+Karyalay,+Neral+-+Badlapur+Rd,+Chamtoli,+Maharashtra+421503",
    mapsUrl: "https://maps.app.goo.gl/V5mNtMtpdc1T8TFp6?g_st=ic",
  },

  music: {
    title: "Tum Prem Ho",
    src: "./editable/assets/tum_prem_ho.mp3",
    youtubeUrl: "https://music.youtube.com/watch?v=mCsoAPRI52U&si=HPXbwNaH2UmjEcfA",
  },

  images: {
    heroCourtyard: "./editable/assets/palace-courtyard.jpg",
    weddingHands: "./editable/assets/wedding-hands.jpg",
    storyFirstMeeting: "./editable/assets/story-first-meeting.jpg",
    storyJourney: "./editable/assets/story-journey.jpg",
    storyQuestion: "./editable/assets/story-question.jpg",
    storyBeginning: "./editable/assets/story-beginning.jpg",
    eventMehendi: "./editable/assets/event-mehendi.jpg",
    eventSangeet: "./editable/assets/event-sangeet.jpg",
    eventHaldi: "./editable/assets/event-haldi.jpg",
    eventShaadi: "./editable/assets/event-shaadi.jpg",
    venuePhoto: "./editable/assets/venue.jpg",
    openerVideo: "./editable/assets/openr.mp4",
    lotusVideo: "./editable/assets/lotus.mp4",
  },
};
