// Weekly office-hours windows expressed in minutes-from-midnight, one
// array of [start, end] pairs per JS weekday index (0 = Sunday). Mirrors
// data/officeHours.js (the display copy) but in a form the slot
// generator can do arithmetic with.
const WEEKDAY_WINDOWS = {
  0: [], // Sunday — closed
  1: [[480, 720], [900, 1120]], // Monday 8:00-12:00, 3:00-6:40
  2: [[900, 1110]], // Tuesday 3:00-6:30
  3: [[480, 720], [900, 1120]], // Wednesday 8:00-12:00, 3:00-6:40
  4: [[600, 780], [900, 1110]], // Thursday 10:00-1:00, 3:00-6:30
  5: [[540, 780], [900, 1120]], // Friday 9:00-1:00, 3:00-6:40
  6: [[540, 720]], // Saturday 9:00-12:00
};

const SLOT_LENGTH_MINUTES = 30;

function minutesToLabel(minutes) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function toDateKey(date) {
  // YYYY-MM-DD in local time, used as a stable key for storage/hashing.
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns the next `count` calendar dates (starting today) that fall on
 * a day the clinic is open, each as { date, key, label, weekdayLabel }.
 */
export function getUpcomingOpenDates(count = 14, from = new Date()) {
  const results = [];
  const cursor = new Date(from);
  cursor.setHours(0, 0, 0, 0);

  // Look ahead up to 30 calendar days to find `count` open days.
  for (let i = 0; i < 30 && results.length < count; i += 1) {
    const day = new Date(cursor);
    day.setDate(cursor.getDate() + i);
    if (WEEKDAY_WINDOWS[day.getDay()].length > 0) {
      results.push({
        date: day,
        key: toDateKey(day),
        weekdayLabel: day.toLocaleDateString('en-CA', { weekday: 'short' }),
        dayLabel: day.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
      });
    }
  }
  return results;
}

/** Cheap deterministic string hash, used only to mock "already booked" slots. */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Mock availability: deterministically marks roughly 1 in 4 slots as
 * already booked so the UI has something to disable, without needing a
 * real backend. Swap this for a real availability lookup in production.
 */
export function isSlotBooked(dateKey, timeLabel) {
  return hashString(`${dateKey}|${timeLabel}`) % 4 === 0;
}

/**
 * Builds the list of bookable time slots for a given Date, respecting
 * office hours for that weekday and excluding times already in the past
 * for today. Each slot: { time, disabled }.
 */
export function getTimeSlotsForDate(date) {
  const windows = WEEKDAY_WINDOWS[date.getDay()] || [];
  const dateKey = toDateKey(date);
  const now = new Date();
  const isToday = toDateKey(now) === dateKey;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const slots = [];
  windows.forEach(([start, end]) => {
    for (let m = start; m < end; m += SLOT_LENGTH_MINUTES) {
      const label = minutesToLabel(m);
      const inPast = isToday && m <= nowMinutes;
      slots.push({
        time: label,
        disabled: inPast || isSlotBooked(dateKey, label),
      });
    }
  });
  return slots;
}

export { toDateKey };
