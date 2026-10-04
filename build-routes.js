const fs = require('fs');

let code = fs.readFileSync('original-routes.js', 'utf8');

// 1. Add _w at the beginning after the first semicolon
const firstSemi = code.indexOf(';');
const decl = ';var _w=(typeof window!=="undefined"&&window.WEDDING_DATA)||{},_wc=_w.couple||{},_we=_w.wedding||{},_wv=_w.venue||{},_wi=_w.images||{};';
code = code.slice(0, firstSemi) + decl + code.slice(firstSemi + 1);

function replaceExact(name, target, replacement) {
  const parts = code.split(target);
  if (parts.length !== 2) {
    console.error(`FAIL: ${name} matched ${parts.length - 1} times!`);
    process.exit(1);
  }
  code = parts.join(replacement);
  console.log(`OK: ${name}`);
}

// 2. Events array Gg
replaceExact('Events array Gg', '},Gg=[{name:`Mehendi`,date:`12 February 2027`', '},Gg=_w.events||[{name:`Mehendi`,date:`12 February 2027`');

// 3. Events calendar
replaceExact('Calendar PRODID', 'PRODID:-//Aarav and Meera//Wedding//EN', 'PRODID:-//Amrit and Ankita//Wedding//EN');
replaceExact('Calendar UID domain', '@aarav-meera-2027.example', '@amrit-ankita-2026.example');
replaceExact('Calendar summary', 'SUMMARY:Aarav & Meera', 'SUMMARY:${_wc.groom||"Amrit"} & ${_wc.bride||"Ankita"}');
replaceExact('Calendar download', 'download:`aarav-meera-${e.slug}.ics`', 'download:`${(_wc.groom||"amrit").toLowerCase()}-${(_wc.bride||"ankita").toLowerCase()}-${e.slug}.ics`');

// 4. Hero couple names in p_
replaceExact('Hero groom name', '(0,a.jsx)(f_,{text:`Aarav`})', '(0,a.jsx)(f_,{text:_wc.groom||`Amrit`})');
replaceExact('Hero bride name', '(0,a.jsx)(f_,{text:`Meera`})', '(0,a.jsx)(f_,{text:_wc.bride||`Ankita`})');

// 5. Hero curtain date and venue/time
replaceExact('Hero curtain date', 'children:`14 · 02 · 2027`', 'children:_we.dateLabel||`09 · 12 · 2026`');
replaceExact('Hero curtain venue/time', 'children:`Jaipur · at half past six`', 'children:_we.timePlace||`Sahyadri Mangal Karyalay · 7:00 PM onwards`');
replaceExact('Tagline', 'children:`Meet us beneath the Jaipur sky.`', 'children:_wv.tagline||`Celebrate with us at Sahyadri Mangal Karyalay.`');

// 6. Blessings text
replaceExact('Blessings text', 'children:`With the blessings of Shri & Smt. Raghav Menon and Shri & Smt. Devang Sharma, we invite you to share in the joy of our wedding.`', 'children:_w.blessings||`With the blessings of our beloved families, we invite you to share in the joy of our wedding.`');

// 7. Story array h_
replaceExact('Story array h_', 'var h_=[{year:`2019 — Meteorology`', 'var h_=_w.story||[{year:`2019 — Meteorology`');

// 8. Bl and Hl image paths
replaceExact('Wedding hands image Bl', 'var Bl=`https://media.invitestory.in/diya-haveli/src/assets/wedding-hands.jpg`;', 'var Bl=_wi.weddingHands||`editable/assets/wedding-hands.jpg`;');
replaceExact('Courtyard image Hl', 'var Hl=`https://media.invitestory.in/diya-haveli/src/assets/palace-courtyard.jpg`;', 'var Hl=_wi.heroCourtyard||`editable/assets/palace-courtyard.jpg`;');

// 9. Venue card v_()
replaceExact('Venue title', '{title:`Rambagh Haveli on Google Maps`', '{title:(_wv.name||`Sahyadri Mangal Karyalay`)+` on Google Maps`');
replaceExact('Venue iframe src', 'src:`https://www.google.com/maps?q=Rambagh+Haveli+Jaipur&output=embed`', 'src:``+("https://www.google.com/maps?q=" + encodeURIComponent(_wv.mapsQuery||"Sahyadri+Mangal+Karyalay") + "&output=embed")+``');
replaceExact('Venue card name', '{className:`font-display text-lg text-gold-soft`,children:`Rambagh Haveli`}', '{className:`font-display text-lg text-gold-soft`,children:_wv.name||`Sahyadri Mangal Karyalay`}');
replaceExact('Venue card address', '{className:`mt-1 text-xs text-foreground/55`,children:`Amber Road, Jaipur 302002`}', '{className:`mt-1 text-xs text-foreground/55`,children:_wv.address||`Neral - Badlapur Rd · Chamtoli · Maharashtra 421503`}');
replaceExact('Venue card link', '{href:`https://maps.google.com/?q=Rambagh+Haveli+Jaipur`,target:`_blank`', '{href:_wv.mapsUrl||(``+("https://maps.google.com/?q=" + encodeURIComponent(_wv.mapsQuery||"Sahyadri+Mangal+Karyalay"))+``),target:`_blank`');

// 10. Venue section text
replaceExact('Venue section name', '{className:`font-display text-3xl gold-text sm:text-4xl`,children:`Rambagh Haveli`}', '{className:`font-display text-3xl gold-text sm:text-4xl`,children:_wv.name||`Sahyadri Mangal Karyalay`}');
replaceExact('Venue section address', '{className:`mt-3 text-sm tracking-[0.25em] text-gold-soft/80 uppercase`,children:`Amber Road · Jaipur · 302002`}', '{className:`mt-3 text-sm tracking-[0.25em] text-gold-soft/80 uppercase`,children:_wv.address||`Neral - Badlapur Rd · Chamtoli · Maharashtra 421503`}');
replaceExact('Venue section description', '{className:`mt-8 font-display text-lg italic leading-relaxed text-foreground/80`,children:`A 19th-century palace set among eight acres of gardens — candlelit courtyards, mirrored halls, and the soft sound of fountains beneath a Jaipur sky.`}', '{className:`mt-8 font-display text-lg italic leading-relaxed text-foreground/80`,children:_wv.description||`A scenic celebration venue surrounded by the serene hills of Sahyadri, welcoming all our loved ones.`}');

// 11. Countdown date and header
replaceExact('Countdown date', 'var y_=`2027-02-14T18:30:00+05:30`', 'var y_=_we.dateISO||`2026-12-09T19:00:00+05:30`');
replaceExact(
  'Remove hardcoded countdown title and greeting',
  '(0,a.jsx)(pu,{eyebrow:`The Countdown`,title:`179 days, still counting.`,className:`mx-auto max-w-2xl`}),(0,a.jsxs)(`div`,{className:`mt-10`,children:[(0,a.jsx)(Qg,{}),',
  '(0,a.jsx)(`h2`,{className:`text-center font-display text-3xl gold-text sm:text-4xl`,children:`The Countdown`}),(0,a.jsxs)(`div`,{className:`mt-8`,children:['
);

// 12. Footer couple names & date
replaceExact('Footer couple names', 'children:[`Aarav `,(0,a.jsx)(`span`,{className:`font-light italic text-gold-soft/55`,children:`&`}),` Meera`]', 'children:[(_wc.groom||`Amrit`)+` `,(0,a.jsx)(`span`,{className:`font-light italic text-gold-soft/55`,children:`&`}),` `+(_wc.bride||`Ankita`)]');
replaceExact('Footer date', '{children:`14 February 2027 · Jaipur`}', '{children:(_we.dateLabel||`09 · 12 · 2026`)+` · Maharashtra`}');
replaceExact('Footer hashtag', '{children:`#TwoSoulsOneLotus`}', '{children:`#`+(_wc.groom||`Amrit`)+`Weds`+(_wc.bride||`Ankita`)}');

// 13. Add event photos on celebration cards
replaceExact('Event cards photo', 'style:{transformStyle:`preserve-3d`},children:[', 'style:{transformStyle:`preserve-3d`},children:[' +
  'e.photo&&(0,a.jsx)(`div`,{className:`mb-5 overflow-hidden rounded-lg aspect-[16/10] border border-gold/25 shadow-md`,children:(0,a.jsx)(`img`,{src:e.photo,alt:e.name,className:`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`})}),');

// 14. Add venue photo in venue section
replaceExact('Venue section photo', '{className:`mx-auto mt-12 max-w-xl text-center`,children:[', '{className:`mx-auto mt-12 max-w-xl text-center`,children:[' +
  '(_wv.photo||_wi.venuePhoto)&&(0,a.jsx)(`div`,{className:`mb-8 overflow-hidden rounded-2xl border border-gold/30 shadow-2xl aspect-[16/10]`,children:(0,a.jsx)(`img`,{src:_wv.photo||_wi.venuePhoto,alt:_wv.name||`Sahyadri Mangal Karyalay`,className:`h-full w-full object-cover`})}),');

fs.writeFileSync('assets/routes-B4KIa_IW.js', code, 'utf8');
console.log('ALL EXACT REPLACEMENTS SUCCEEDED! Built routes-B4KIa_IW.js cleanly!');
