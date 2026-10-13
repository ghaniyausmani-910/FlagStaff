# Flagstaff — Agent Mascot: Logo Blob & Mood States

_Last updated 2026-10-12._

## Decision
**The logo blob (Direction 1) is the final mascot** (Ghanii, 2026-10-12). The visor helmet (Direction 2) was explored but not chosen; it is kept in `flagstaff-overview.md` for reference.

**Final look:** a soft four-lobed indigo body (top, left, right and bottom lobes), two white vertical pill eyes, and an indigo pill line below it.

## Product context (affects how the moods are used)
- **Launch platform:** X only. Other platforms will come later.
- **The agent acts proactively:** it drafts, schedules and publishes posts, and suggests what to post and what to avoid. The moods should make it clear what the agent is doing, especially when it acts without the user.
- **Multi-account:** one user can manage several fan accounts, so the mascot may need to show a separate state for each account (for example, a small mascot next to each account in the switcher).
- **Campaigns:** a set of posts scheduled around an upcoming event or toward a goal.

## Rule
**Mascot body fills stay within the brand palette and read as indigo, not blue** (Ghanii, 2026-10-12). Red accents (the anger mark and siren rays) are fine.

## Formation animation — `flagstaff-mascot-motion-v1.html`
- The four logo circles spin 405° and land at 45°, so they sit at top, left, right and bottom.
- They grow until they overlap and connect into one body. Per Ghanii's feedback, no fifth circle appears in the middle.
- The eyes blink open, the base line draws in, and the mascot then floats while idle.

## Mood system — `flagstaff-mascot-moods-v1.html`
There is a playground with smooth transitions between any two moods, plus a card for each mood. Every mood is made from the same parts:
- **Lobes:** they can breathe, ripple, pump, sag or tense, split back into the logo dots, or pinch off a dot.
- **Eyes:** pills, ^ ^ arcs, slants, closed curves, a visor, or dots.
- **Base line:** a shadow, a smile or frown, or a progress bar.
- **Color:** brand indigo by default, pastel for sad, deep indigo for mad and grey for sleep.
- **Extras:** small effects only where they add meaning.

| Mood | Looks | Used when |
|---|---|---|
| Idle | Floats, breathes, blinks; the line acts as a shadow | Dashboard at rest |
| Processing | Splits back into the 4 logo dots, which turn a quarter at a time; eyes hidden | Connecting an X account, syncing, loading analytics |
| Thinking: orbit (recommended) | The top lobe pinches off as a dot and swings over the head like a pendulum; the eyes follow it; it merges back. The side lobes shift up so the head stays round. | Generating ideas, finding the best time to post |
| Thinking: dots | The eyes become 3 bouncing dots, like a chat typing indicator | Inside the chat, e.g. drafting a post or caption |
| Thinking: v1 | Eyes glance up, lobes ripple, thought dots rise. Ghanii asked for alternatives; kept for comparison. | — |
| Working | Eyes narrow in focus, lobes pump, the base line becomes a progress bar | Scheduling or publishing posts, running a campaign |
| Happy | ^ ^ eyes, squash-and-stretch bounce, smile line, sparkles | A post went live, engagement went up, a campaign goal was hit |
| Cool | Eyes merge into a dark sunglasses visor, head tilt, smirk | A post going viral, a winning streak |
| Alert: rings | Tall, wide eyes, a hop, signal rings | A trend alert or a new suggestion |
| Alert: siren | The same wide eyes and hop, with 7 red beacon rays fanned around the top of the head, like the lines on an alarm light (Ghanii's reference). The rays flash in alternating sets and shoot outward on each hop. | Urgent: a trend peaking now, or a post or campaign that needs approval |
| Blushing | Eyes glance down and away with a quick peek back; pink cheeks with blush strokes; shy tilt and sway; small smile | The user says thanks or praises the agent |
| Sad | Droopy eyes, sagging body, deflated top lobe, pastel color, frown | Engagement dropped, a post is underperforming |
| Mad | Slanted scowl eyes, deep indigo body (#3D40A8; it used to be navy #1F2399, which read as blue), shakes in bursts, and a red anger mark (💢) that throbs on the forehead | Errors only, such as a failed post, a disconnected X account or a rate limit. It should never seem aimed at the user. |
| Sleep | Closed curved eyes, grey color, floating z's | The agent is paused, an account is offline, or quiet hours |

## Colors used (estimates)
Brand indigo #5A5DD9 · Mad deep indigo #3D40A8 · Pastel (sad) #7277C4 · Sleep grey #8E91B8 · Accent red #F26B6B (anger mark and siren rays) · Blush pink #FF9EC4 with #E9659B strokes

## Open
- Which thinking option to use: orbit or dots?
- Which alert option to use: rings, siren, or both, split by urgency?
- Should "mad" be renamed "frustrated" or "blocked"?
- Do we need a mood for when the agent is waiting for approval?
- Which handoff format: Lottie, Rive, or video?
