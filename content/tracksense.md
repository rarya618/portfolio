# TrackSense

## Overview

iOS and web music app powered by Apple Music. Started as a stats tracker, evolved into a full music player experience. Solo-designed and built end-to-end.

**Stack:** SwiftUI, MusicKit, React, Vite, Tailwind, Firebase (Realtime Database + Auth + Cloud Functions), Claude Code  
**Mode:** Design + Engineering  
**URL:** https://tracksense.fm  
**Status:** Live on App Store. Remote play feature in testing, update pending.

---

## The Idea

- Had the idea about three years ago, frustrated with having to open the Mac app just to check listening stats
- Existing stats apps on the App Store were old, slow, and unmaintained
- Apple's own MusicKit already exposed good stats natively, no need for last.fm-style scrobbling
- Only got around to building it last September (2024)
- Was also the excuse to learn Swift — process to learn anything is by doing
- Meant to be a short project, kept evolving

---

## Research

- Used a lot of stats apps before building
- Most were years out of date, too slow, felt abandoned
- Last.fm scrobbling was an option but added an unnecessary dependency
- MusicKit exposed the data directly and kept things consistent with iOS
- Mac app had the data but was overkill for a quick check

---

## Design

- Jumped straight into Figma before writing any Swift
- First screen designed: landing page
  - Originally a 3x3 grid for recents and top songs
  - Picker at the top to switch between views
  - Looked clunky, caused loading issues, required UI workarounds
  - Redesigned as vertical scroll with 6 items per section + see all button
  - One change that enabled system defaults, improved loading, and removed workarounds
- Stats page was favourite design for the longest time
- Now playing page was what inspired going for the full Apple Music experience

---

## Engineering

### The Pivot: System Player → Application Player

- Built v1 around the system player
- Hit a hard wall: MusicKit doesn't expose queue items through the system player
- Switching to the application player runs a sandboxed environment inside the app, separate from the system player
- Was disappointing at first, turned out to be a blessing in disguise:
  - Full control over playback and queue
  - Completely distinct experience from every other music app
  - Tapping a song from the Dynamic Island or Lock Screen opens TrackSense, not Apple Music — no other app does this
- Evolved from a stats app into a music app powered by Apple Music

### Real-Time Sync

- Built on Firebase Realtime Database
- Chosen for low latency (sub-100ms), free tier scales well, already knew the SDK
- Integrating Firebase into Swift was harder than expected — sparse documentation and community support

### Auth

- Started with Firebase anonymous sign in — no login, no passwords, no friction
- Multi-device support wasn't planned until users asked for it (wanted to control music from other devices)
- Built auth codes in response: short codes to sign in on a new device without a password
  - Codes are hashed and never stored in plain text
  - Hash is compared when the user enters the code
  - Code is only visible once when created, disappears when the screen is closed
  - Can be regenerated, but that revokes the old one
- Recovery emails set up for users who lose access
- Share codes: scoped access to an account so someone else can control playback — like permissions in Google Docs but for music

---

## Key Decisions

1. **Anonymous auth over traditional login** — no passwords, no friction at sign up. auth codes and recovery emails handle edge cases.
2. **Application player over system player** — disappointing to switch, but gave full queue control and made the app genuinely distinct.
3. **Firebase Realtime Database over Firestore for live sync** — latency matters when syncing playback state in real time.
4. **MusicKit directly over last.fm scrobbling** — faster, more accurate, consistent with iOS.
5. **Vertical scroll over grid layout** — fixed loading, removed workarounds, made everything feel native.

---

## What's Next

- Remote play feature: stable build, in testing, pending App Store update
- Scaling to support more users
