# Focused on Health Centre — Multi-Page React Recreation

A multi-page React (Vite + React Router + Tailwind) recreation of
https://www.thetorontochiropractor.com/, including a self-contained
mock **Booking** flow with no backend required.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## 1. Site analysis & routes

The live site is built on GoHighLevel (a funnel/landing-page builder) and, in
practice, behaves as a single long scrolling page with in-page anchors rather
than distinct routes. For this multi-page recreation, that content is split
across real routes matching the header nav structure:

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, condition checklist, service card preview, office hours |
| `/about` | About Us | `#team` (Meet Our Team) and `#philosophy` (brain-body philosophy) anchors |
| `/services` | Services | Full condition list, service cards, one anchored section per Services-dropdown item (`#chiropractic-care`, `#mva`, `#psych-k`, `#neurofeedback`, `#pregnancy`, `#workshops`, `#orthotics`) |
| `/booking` | **Booking** | Mandatory multi-step appointment form (see below) |
| `/testimonials` | Testimonials | Review carousel |
| `/contact` | Contact | Contact form + office hours |
| `/terms`, `/privacy` | Legal | Placeholder pages linked from the footer |
| `*` | 404 | Falls back inside the shared layout, never a dead end |

`src/components/Layout.jsx` supplies the shared header/footer via
`<Outlet />`, and `src/hooks/useScrollToHash.js` scrolls to the right
section when a nav link carries a `#hash` (e.g. `/services` → `#orthotics`).

The original booking/appointment links point to a separate hosted
GoHighLevel scheduling calendar (a third-party embed) — out of scope for a
static recreation — so `/booking` here is a fully self-contained mock
booking flow instead, per the assignment.

## 2. Design tokens (`tailwind.config.js`)

Unchanged from the single-page version — a deep teal brand color, warm gold
accent, serif display face, clean sans body face. These are a faithful,
deliberately-chosen approximation (not pixel-measured — see Limitations):

| Token | Value |
|---|---|
| `brand-700` (header/footer/hero) | `#1c4d46` |
| `brand-500` (primary teal) | `#2f7d71` |
| `accent-500` (CTA gold) | `#c9954a` |
| `ink` (body text) | `#1f2a28` |
| `cloud` (section background) | `#f6f8f7` |
| Display font | `'Playfair Display', serif` |
| Body font | `'Source Sans 3', sans-serif` |
| Card radius | `10px` (`rounded-card`) |
| Card shadow | `0 10px 30px rgba(20,40,37,0.10)` (`shadow-card`) |

## 3. Component hierarchy

```
App (Routes)
└── Layout                 (Header, <Outlet/>, Footer, useScrollToHash)
    ├── HomePage            → Hero, ConditionsGrid, ServicesOffered, OfficeHours
    ├── AboutPage           → TeamGrid (#team), BrainBodySection (#philosophy)
    ├── ServicesPage        → ConditionsGrid, ServicesOffered,
    │                          ServiceDetailSection × 6 (one per dropdown item),
    │                          OrthoticsSection (#orthotics)
    ├── BookingPage         → BookingForm
    │   └── booking/
    │       ├── StepIndicator        (4-step progress bar)
    │       ├── ServiceSelector      (Step 1 — pick a service)
    │       ├── DatePicker           (Step 2 — custom 14-day calendar strip)
    │       ├── TimeSlotSelector     (Step 2 — slots from office hours)
    │       ├── PersonalDetailsForm  (Step 3 — controlled + validated)
    │       ├── ReviewStep           (Step 4 — summary, jump-back-to-edit)
    │       └── ConfirmationModal    (shown after mock submit)
    ├── TestimonialsPage    → Testimonials (carousel)
    ├── ContactPage         → ContactSection (form), OfficeHours
    ├── LegalPage           → Terms / Privacy placeholders
    └── NotFoundPage        → 404
```

Mock/content data lives in `src/data/` (`navigation.js`, `services.js`,
`serviceDetails.js`, `officeHours.js`, `team.js`, `testimonials.js`,
`booking.js`) and pure scheduling logic lives in
`src/utils/bookingSchedule.js`, so components stay presentational.

## 4. Interactive elements & state

| Behavior | Implementation |
|---|---|
| Desktop dropdown menus | `useState` in `Header`, hover + click toggle, real routes with optional `hash` |
| Mobile nav toggle + accordion submenus | `useState` (`mobileOpen`, `openDropdown`) + conditional classes |
| Hash-based section scrolling | `useScrollToHash` (`useEffect` + `useLocation` from React Router) |
| Testimonial carousel | `useState` for active index, prev/next + dot pagination |
| Contact form (`/contact`) | Controlled inputs, submit-time validation, mocked async submit |
| **Booking multi-step form** | See below |

### Booking flow (`/booking`) — the required piece

- **State**: `BookingForm` owns `step` (1–4), a single `formData` object,
  per-step validation `errors`, and the `confirmedBooking` shown in the modal.
- **Step 1 — Service**: `ServiceSelector` renders `bookableServices`
  (`src/data/booking.js`) as a radio-card grid.
- **Step 2 — Date & Time**: `DatePicker` is a **custom** calendar strip (no
  external date-picker library) built from `getUpcomingOpenDates()`, which
  walks forward from today and returns only days the clinic is open per its
  real office hours. `TimeSlotSelector` calls `getTimeSlotsForDate()`, which
  generates 30-minute slots inside that day's open windows, disables any
  slot already in the past (for today), and disables a deterministic mock
  subset of "already booked" slots via `isSlotBooked()` — no backend, but
  behaves consistently rather than randomly on every render.
- **Step 3 — Details**: `PersonalDetailsForm`, fully controlled, with
  `validateDetails()` checking required fields, email format, and phone
  format before advancing.
- **Step 4 — Review**: `ReviewStep` shows a read-only summary with per-field
  "Edit" links that jump back to the owning step.
- **Submit**: writes the booking (plus a generated confirmation code) to
  `localStorage` under `toh_bookings`, then shows `ConfirmationModal`
  (Escape/backdrop-click to close, focus sent to its close button on open).
  Closing the modal resets the form back to Step 1.

No image carousel/slider library was needed anywhere — the testimonials
carousel and the booking calendar are both plain `useState`, matching the
assignment's "custom implementation if simple" guidance.

## 5. Styling approach

**Tailwind CSS**, as requested. All design tokens are centralized in
`tailwind.config.js` under `theme.extend`, so components use semantic names
(`bg-brand-700`, `text-accent-600`) instead of raw hex values.

## 6. Limitations / what couldn't be fully replicated

- **Exact visual assets**: analyzed via rendered markup/text, not
  screenshots — exact brand hex codes, webfonts, and photo crops weren't
  verifiable. Image slots are clearly marked placeholders sized to drop real
  assets into.
- **Testimonials**: the live site embeds a third-party reviews widget
  (`backend.leadconnectorhq.com`) rather than static markup, so no real
  review text existed to recreate — `Testimonials` ships with clearly
  placeholder quotes; wire up a real reviews API before shipping.
- **Booking backend**: this is a fully mock flow — no real calendar,
  payment, or clinic-system integration. "Booked" slots are deterministic
  mock data (see `isSlotBooked`), not real availability, and confirmations
  are saved only to the browser's `localStorage`, not emailed or synced
  anywhere. Swap `saveBookingToLocalStorage` in `BookingForm.jsx` for a real
  API call in production.
- **Team bios**: the live site names three doctors (Halpern, Stethem,
  Najafian) throughout its copy, but their full individual bio pages weren't
  reachable from a text-only fetch, so `data/team.js` bios are written to
  match each doctor's stated specialty rather than scraped verbatim.
- **Embedded Google Map**: the footer map is a static placeholder box; swap
  in a real Google Maps embed/API key.
