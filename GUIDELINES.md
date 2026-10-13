# Design & Build Guidelines

Rules to follow before performing any task on the design or UI in this project. Read this file first, every time.

---

## 1. Always ask before taking any action

Never assume. Never infer. Never add work beyond what was explicitly requested.

- Before creating, editing, moving, or deleting any file — ask.
- Before running any command that changes state — ask.
- If the request is ambiguous (location, naming, scope, which component to use, which token to apply) — ask.
- A green light on one task is not a green light on the next. Confirm per task.

If the user has not explicitly asked for something, do not do it.

---

## 2. Use the existing design tokens — do not invent new ones

Location: `/Users/ghaniya.usmani/Downloads/Flagstaff/design-tokens`

Before writing any styles, colors, spacing, typography, radii, shadows, or motion values:

1. Open the `design-tokens` folder and read what is defined there.
2. Use those tokens directly — reference them by their defined name.
3. Do **not** hardcode raw hex values, pixel sizes, font families, or any other design primitive that a token already covers.
4. Do **not** create new tokens unless the user explicitly asks for one. If a needed token appears to be missing, stop and ask — do not improvise a value.

If a design calls for something the tokens do not cover, surface that gap to the user and wait for direction.

---

## 3. Use the existing components — do not build from scratch

Location: `/Users/ghaniya.usmani/Downloads/Flagstaff/Flagstaff/apps/web/components`

Before building any UI:

1. Open the `components` folder and check what already exists.
2. Compose the UI from those components. Import and reuse them as-is.
3. Do **not** rewrite, re-implement, or duplicate a component that already exists.
4. Do **not** create a new component unless the user has explicitly asked for one, or has confirmed that nothing suitable exists after you flagged it.

If an existing component is close but not quite right, stop and ask whether to extend it, wrap it, or build something new — do not decide unilaterally.

---

## 4. Order of operations for any design task

Follow this sequence every time, without skipping steps:

1. **Read the request.** Confirm scope. Ask clarifying questions if anything is unclear.
2. **Check design tokens.** Identify which tokens apply.
3. **Check components.** Identify which components to compose.
4. **Confirm the plan with the user** before writing any code.
5. **Implement**, using only tokens from step 2 and components from step 3.
6. **Report back** with what was done — nothing more.

---

## 5. What not to do

- Do not add features, polish, refactors, or "nice-to-haves" that were not requested.
- Do not substitute a hand-rolled style for a defined token.
- Do not substitute a hand-rolled component for a prebuilt one.
- Do not make design decisions on the user's behalf — surface options and let them choose.
- Do not skip the "ask first" step because the task seems small or obvious.

---

## 6. When in doubt

Stop. Ask. Wait for an answer.

That is always the correct move.
