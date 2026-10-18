# Tailr

## Overview

Next.js tool that analyses job listings (pasted text or URL) and uses the Claude API to extract ranked skills, qualifications, and tone signals so candidates can tailor their resume. Designed and shipped end-to-end.

**Stack:** Next.js, TypeScript, Claude API, Cheerio, Mammoth, Claude Code  
**Mode:** Design + Engineering  
**URL:** https://tailr.russal.dev  
**Status:** Live.

---

## The Idea

- Built while actively applying for jobs
- Kept struggling to isolate the right keywords from listings — what actually matters versus boilerplate
- First time using Next.js — learning the framework while solving a real problem
- Used it the entire time while building it, so the feedback loop was immediate and personal

---

## The Problem

- Every job listing reads differently
- Some bury the real requirements in a wall of text, others front-load buzzwords that don't reflect the role
- Manually pulling out what to emphasise on a resume takes too long and it's easy to miss things
- Wanted something that surfaces the signal, cuts the noise, and ranks by how much it matters for the role

---

## Engineering

### Keyword Extractor

- Structured prompt to the Claude API returning a consistent JSON shape:
  - Technical skills, soft skills, required qualifications, nice-to-haves, industry domain
  - Bonus: company name and job title extracted from the listing
- URL input: Cheerio scrapes the page, strips nav, headers, and footers, then cascades through CSS selectors to isolate the job description before sending it to the model
- Same structure every time, so the front end renders it with no post-processing guesswork

### Resume Analyser

- Gap became obvious from using the extractor: still had to manually compare the results against a resume
- Upload a resume, Tailr scores it against the extracted keywords with a weighted breakdown:
  - Required qualifications — 40%
  - Technical skills — 30%
  - Soft skills — 15%
  - Nice-to-haves — 10%
  - Industry domain — 5%
- Returns three to five concrete suggestions, not just a number
- Feature came directly from using the product

### PDF and DOCX Handling

- First attempt used pdfparser — failed to process PDFs at all
- Switched to the Claude API's native document support: PDFs are base64-encoded and sent directly, no extraction layer
- DOCX takes a different path: Mammoth extracts raw text, sent as plain text in the prompt
- Two-path approach handles the formats people actually use without forcing a conversion

---

## Key Decisions

1. **Structured JSON output over free-form text** — predictable shape meant the front end could be built without parsing or sanitising unpredictable output.
2. **Cheerio for URL scraping** — stripping nav and boilerplate kept the context clean and reduced noise in extraction.
3. **Weighted scoring over a flat score** — a single number hides where the gaps are. per-category breakdown with suggestions makes it actionable.
4. **Native PDF reading over text extraction** — sending base64 directly was more reliable than any extraction library and needed far less code.
5. **Dogfooding throughout** — using Tailr on real listings shaped every feature. the resume analyser only exists because of a gap felt personally.
