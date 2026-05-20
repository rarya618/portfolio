# GDG Check-In App

## Overview

Real-time event check-in system built for Google Developer Groups. Replaces the painful Bevy check-in process with a faster, self-service flow that works for both pre-registered and walk-in attendees. Three surfaces from one codebase: a staff admin panel, a public self-service check-in form, and a kiosk QR display.

**Stack:** React, TypeScript, Material UI, Firebase (Realtime Database + Auth), Claude Code  
**Mode:** Engineering  
**URL:** https://gdgcheckin.com  
**GDG Sydney:** https://gdg.community.dev/gdg-sydney/  
**Status:** Live and in active use. In discussions to expand to GDG Melbourne.

---

## The Idea

- A friend at GDG Sydney was talking about how painful the Bevy check-in process was
- Bevy's process: staff scans each attendee's individual QR code from a PDF they have to download from their email
- Problems: meetup.com signups have no QR code and need manual check-in, walk-ins also need manual registration, attendees spend a long time hunting for the QR code in their inbox
- Was exploring Claude Code at the time and saw this as a good problem to solve with it
- Came up with the idea and had the core working within two hours
- The fix was to flip the process: instead of staff scanning attendees, attendees scan a QR code and enter their email. the app checks the database and either checks them in or registers them on the spot

---

## Scope & Evolution

- **First two hours:** core database system and dashboard. the main check-in functionality, real-time data, basic UI.
- **Added after:** Google sign-in auth, role-based access, Material UI (regretted this), Bevy CSV import, walk-in registration with atomic ticket numbering, team management
- **Post-launch iteration:** noticed real issues when using the app at actual events (see Engineering section)
- **Merch draw:** added as a way to incentivise check-in. now a fun thing done at the end of every event
- **Domain:** got gdgcheckin.com specifically to avoid location-restricting the app as it grows

---

## Data Flow

### Event Setup
- Admin creates an event (name, date, description)
- Bevy CSV export is imported via the app — deduplicated by ticket number, stored atomically in one Firebase update call
- Teams assigned to the event via checkboxes

### Day-of Check-In
Three paths:

1. **Pre-registered:** attendee scans QR code, enters email, app looks up the database and checks them in. confirmation screen shows their name in large text so staff can find the name badge quickly.
2. **Walk-in:** email not found, attendee fills in name and email, app registers and checks them in with an auto-incremented ticket number (GDGWALKIN0001, etc.) using a Firebase transaction to prevent race conditions across simultaneous check-ins
3. **Self-service:** public QR display at the entrance, attendees scan and check themselves in with no staff involvement

### Post-Event
- CSV export of all attendees
- Merch draw: random picker from checked-in attendees only

---

## Engineering

### Flipping the Check-In Process
The key insight was inverting the Bevy flow. Instead of staff hunting for each person's QR code, one QR code covers everyone. Attendees enter their email, the app does the lookup. Much faster at the door.

### Atomic Walk-In Ticket Numbering
Multiple staff devices can check in walk-ins simultaneously without duplicate ticket numbers. Firebase transactions on a shared counter guarantee sequential assignment even under concurrent writes.

### Bevy CSV Import
Hand-rolled RFC-4180 CSV parser to handle Bevy's specific quoting style without external dependencies. Deduplication on import means re-uploading the same CSV is safe — new tickets added, duplicates skipped.

### Three Surfaces, One Codebase
URL params determine which UI loads:
- No params: staff admin panel (auth required)
- `?event=<id>`: public self-service check-in form
- `?event=<id>&display=qr`: kiosk QR display for the entrance

### Real-World Iteration
Issues spotted at the first real event:
- Pre-registered check-in was a two-step process. confused some users. redesigned to a single step.
- Staff struggled to match attendees to name badges. the confirmation screen now shows the attendee's name in large text with an instruction to show it to staff. made badge handoff much faster.

### Material UI
Used it as a challenge — had never tried it before. won't use it again. it complicates things that tailwind handles in a straightforward way.

---

## Role-Based Access

| Role | What they can do |
|---|---|
| superadmin | Everything. manage all events, teams, organisers. |
| organiser | Create and manage events, add team members, run check-in and dashboard. |
| team_member | Check-in only. sees events their team is assigned to. |

Public check-in form requires no auth at all.

---

## Scaling

- Set up teams per GDG chapter. each chapter creates and manages their own events.
- GDG Melbourne in discussions to onboard — not live yet.
- gdgcheckin.com was chosen specifically so the app isn't tied to any one city.
- Plan is to keep adding chapters the same way.

---

## Key Decisions

1. **Flip the QR flow** — one QR at the door instead of one per attendee. eliminated the PDF email problem entirely.
2. **Firebase transactions for walk-in numbering** — prevents duplicate ticket numbers when multiple staff devices check in simultaneously.
3. **Hand-rolled CSV parser** — no external dependency, handles Bevy's quoting edge cases reliably.
4. **Team-scoped access** — each GDG chapter sees only their events. the same model scales to any number of chapters.
5. **Name on confirmation screen** — small UX detail that made badge handoff significantly faster in practice.
6. **Material UI (regret)** — used it as a learning challenge. tailwind would have been faster and simpler.
