# Customer Editing Guide — diya-haveli

This template is a luxury Rajasthani palace wedding invitation featuring an interactive lamp-lighting (press-and-hold diya) ritual, animated word-by-word quotes, love story timeline, 4-event celebration itinerary with .ics calendar downloads, live countdown timer, and embedded Google Maps venue card.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/diya-haveli/editable/wedding-data.js)

### Couple Details
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (e.g. `"Aarav"`, `"Meera"`)
- `monogram`: Couple initials or monogram (e.g. `"A & M"`)
- `tagline`: Tagline subtitle

### Wedding Date & Hero
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Formatted short date string (e.g. `"14 · 02 · 2027"`)
- `timePlace`: Subheading label (e.g. `"Jaipur · at half past six"`)
- `dateISO`: Event timestamp in ISO 8601 (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Directly drives the live countdown timer.

### Events & Ceremonies
Edit `events` array in `editable/wedding-data.js`:
- Each celebration item contains:
  - `name`: Event title (e.g. `"Mehendi"`, `"Sangeet"`, `"Wedding Ceremony"`, `"Reception"`)
  - `date`: Formatted date label
  - `time`: Event timing
  - `place`: Specific hall / lawn within venue
  - `note`: Short celebratory description
  - `start` & `end`: ISO timestamps driving `.ics` calendar exports
  - `slug`: Unique identifier for calendar UID

### Love Story Chapters
Edit `story` array in `editable/wedding-data.js`:
- `year`: Milestone label (e.g. `"2019 — Meteorology"`, `"2025 — Devotion"`)
- `title`: Chapter title
- `text`: Narrative story paragraph
- `photo`: Optional photo object (`src`, `alt`, `placement: "left" | "right" | "below"`)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Haveli / Palace name (e.g. `"Rambagh Haveli"`)
- `address`: Formatted street address (e.g. `"Amber Road · Jaipur · 302002"`)
- `mapsQuery`: Query for Google Maps embed and directions link

### Media & Assets
Replace files directly in `editable/assets/` or update `images`:
- Palace courtyard background: `editable/assets/palace-courtyard.jpg`
- Wedding hands artwork: `editable/assets/wedding-hands.jpg`
- Story photos: `story-first-meeting.jpg`, `story-question.jpg`, `story-beginning.jpg`
- Videos: `openr.mp4` (lamp intro ritual), `lotus.mp4`

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
