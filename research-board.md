# Flagstaff Social Discovery — Research Board

**Figma file:** https://www.figma.com/design/nh0mVDoVY16tP8yYNqkCa0/Flagstaff-Social-Discovery?node-id=6740-25789
**Owner:** ghaniya.usmani@camp1.tkxel.com
**Last updated:** 2026-10-13

> Research goal: train a proactive marketing agent that can recommend growth-boosting actions per platform. This board collects how each platform's algorithm works, with sourced evidence, so the agent can reason about reach, format, timing, and policy.

---

## 1. Scope & Questions

- How does Instagram rank content on each surface (Feed, Reels, Stories, Explore)?
- Which signals carry the most weight, and which have shifted recently?
- What format, timing, and frequency choices demonstrably move reach?
- What platform policies (originality, hashtags) can cap or kill a campaign's reach?
- What primary vs. secondary sources should the agent trust?

---

## 2. Instagram — How It Actually Works

### 2.1 There is no single "Instagram algorithm"
Meta runs **separate ranking systems per surface** — Feed, Feed Recommendations, Stories, Explore, and Reels — each with its own inputs and weights. System details are published in Meta's Transparency Center as "system cards," not on the Instagram blog.
- Source: [Instagram Feed Ranking System Card — Meta AI](https://ai.meta.com/tools/system-cards/instagram-feed-ranking/)
- Source: [Shedding More Light on How Instagram Works — about.instagram.com](https://about.instagram.com/blog/announcements/shedding-more-light-on-how-instagram-works)

### 2.2 The three signals Mosseri confirmed matter most (Jan 2025, still cited through 2026)
1. **Watch time** — how long people engage with the content
2. **Likes per reach** — engagement quality from viewers who saw it
3. **Sends per reach** — DM shares, treated as the strongest discovery signal

Mosseri qualified: **likes matter more for content from accounts you follow; sends matter more for content from accounts you don't**. So the lever changes depending on whether you're nurturing followers or chasing new reach.
- Source: [Sprout Social — How the Instagram Algorithm Works (updated 2026)](https://sproutsocial.com/insights/instagram-algorithm/)
- Source: [Later — Instagram algorithm in 2026](https://later.com/blog/how-instagram-algorithm-works/)

### 2.3 Surface-by-surface mechanics

**Feed** (mostly accounts you follow)
- The Feed system gathers candidates from accounts you follow, filters policy violations, then predicts likelihood of like / save / tap / watch and combines these into a single score.
- A lightweight model shortlists ~700 candidates; a heavier model scores ~500 of them.
- Source: [Instagram Feed Ranking System Card](https://ai.meta.com/tools/system-cards/instagram-feed-ranking/)
- Source: [Coruzant — Instagram Algorithm 2026 Guide](https://coruzant.com/analytics/instagram-algorithm-2026-guide/)

**Stories** — ranked by:
- Viewing history (how often you watch this author)
- Engagement history (DMs, reactions)
- Closeness (how connected you likely are)
- Source: [about.instagram.com announcement](https://about.instagram.com/blog/announcements/shedding-more-light-on-how-instagram-works)

**Reels & Explore** (mostly accounts you *don't* follow — this is the discovery engine)
- Signals: user activity, user history with poster, info about the reel/post, poster popularity, and Recommendations Guidelines eligibility.
- Reels specifically weigh: **watch time + completion → sends per reach → likes per reach**, in that order of impact.
- **Skip rate** is now reported as a 2026 ranking signal — weak first seconds cap distribution.
- Source: [SocialPilot — Instagram Reels Algorithm 2026](https://www.socialpilot.co/blog/instagram-reels-algorithm)
- Source: [Mosseri 2023 explainer via Creator Handbook](https://www.creatorhandbook.net/instagram-reveals-how-it-recommends-content/)

**Mosseri's "basics" checklist to be eligible for Reels recommendations** (publish this as a hard gate the agent enforces before any Reel ships):
1. **Add a strong hook** — first 1–3 seconds are decisive
2. **Turn on captions** — accessibility + silent-autoplay comprehension
3. **Include audio** — silent Reels are deprioritized
4. **Post non-watermarked, original content** — no TikTok/CapCut/etc. watermarks
5. **Keep Reels ≤ 3 minutes** — longer Reels face reduced distribution to non-followers
6. **Check Account Status** — penalties/strikes silently cap reach; verify before every push
- Source: [Instagram @creators / Mosseri "hit these basics"](https://creators.instagram.com/grow)

### 2.4 "Your Algorithm" user control (2025–2026)
Instagram shipped a feature letting users see and edit the topics Instagram thinks they care about. Launched for Reels Dec 2025, extended to Explore Apr 2026, to Feed by mid-2026.
- Implication for the agent: users can now **actively deselect topics**, so broad topical targeting is less reliable. Being specific and consistent in topical signals helps the agent stay inside users' kept topics.
- Source: [Autoposting.ai — Instagram algorithm in 2026](https://autoposting.ai/blog/instagram-algorithm-guide)

### 2.5 Originality enforcement — April 30, 2026 policy
Instagram **removes reposting accounts from recommendations** (not takedown) when they repeatedly post others' content without meaningful transformation.
- Threshold cited: ≥10 unoriginal posts in the last 30 days (pre-2026 wording — may have changed).
- Qualifying transformations: voiceover, green screen, your own text/commentary, a Collab with the original creator.
- **Does NOT qualify:** watermark, crop, or crediting in the caption.
- Followers still see your posts; discovery dies. Fix the mix for 30 days to recover eligibility.
- Implication: the agent must flag/refuse "repost this trending clip" style suggestions unless meaningful transformation is added.
- Source: [Tubefilter — Instagram new penalty for unoriginal content aggregators](https://tubefilter.com/2026/04/30/instagram-removes-algorithm-recommendations-repost-content-aggregator)
- Source: [PetaPixel — New Instagram Policies Target Reposted Content](https://petapixel.com/2026/04/30/new-instagram-policies-target-reposted-content/)
- Source: [Planoly — Instagram Updates its Original Content Policy](https://webflow.planoly.com/blog/instagram-updates-its-original-content-policy)

### 2.6 Hashtag limit change
Instagram announced via @creators (Dec 2025): **max 5 hashtags per post/Reel**. Legacy advice of 10–30 is now a reach drag.
- Source: [Autoposting.ai — Instagram algorithm in 2026](https://autoposting.ai/blog/instagram-algorithm-guide)

### 2.7 Watermark detection
Instagram detects watermarks from other platforms (TikTok, etc.) and demotes those posts. Export clean, re-edit natively.
- Source: [SocialPilot — Reels Algorithm 2026](https://www.socialpilot.co/blog/instagram-reels-algorithm)

### 2.8 Native tools the agent should surface (from creators.instagram.com)

**Trial Reels** — publish a Reel to **non-followers first** to test performance before pushing to your audience. Direct implication: the agent can recommend A/B-ing hooks and openings this way without burning follower trust.

**Multi-track audio on Reels** — up to **20 audio tracks** per Reel, with alignment to text, stickers, and clips in the editor. Opens up sound-driven storytelling the agent can lean on for Reels briefs.

**Expanded text tools** — more flexible on-screen text / typography; useful for retention beats and silent-view comprehension.

Instagram's own framing of engagement: *"Engagement means how many people interact with your content, through likes, comments, saves, and shares."* And: *"Engagement is a two-way street."* — i.e. the agent should budget time for reply/DM engagement, not only posting.
- Source: [Instagram @creators — Engagement best practices](https://creators.instagram.com/best-practices)

**Note on primary-source gaps:** `/best-practices/reach`, `/best-practices/engagement`, and `/best-practices/instagram` sub-URLs returned **404** on 2026-10-13. The best-practices content appears to live only as expandable sections on the main hub page, which doesn't render well via plain fetches. For deepest primary content, the agent (or we) should load that page in a browser and capture the expanded sections manually.

---

## 3. Format Strategy — What Reach Looks Like by Format (2026)

| Format | Engagement rate (Socialinsider) | Notes |
|---|---|---|
| Carousels | 0.55% | Highest overall; **9× more saves** than single-image (Metricool 24M-post study) |
| Reels | 0.52% | Discovery engine; best for small accounts chasing new reach |
| Single image | 0.37% | Weakest; use sparingly |

- **Account-size effect:** Reels drive higher reach for accounts <50K followers; carousels dominate for the largest accounts. (HypeAuditor 2025)
- Watch time per Reel **more than doubled year-over-year** per Metricool's 2026 study of 24M+ posts across 375K+ accounts.
- Volume shifted in 2026: +12% single-image, +24% carousels, +35% Reels published.
- Source: [Metricool — 2026 Instagram Study](https://metricool.com/instagram-research-study/)
- Source: [Netinfluencer — Instagram Carousels Outperform Reels for Larger Accounts](https://www.netinfluencer.com/instagram-carousels-outperform-reels-for-larger-accounts-content-performance-benchmarks-show/)

---

## 4. Posting Time — Best Windows (2026)

Studies disagree on exact hours but agree on patterns:

**Consistent across sources:**
- **Midweek (Tue–Thu)** is strongest.
- **Saturday is weakest** — Buffer, Sprout Social, and SocialPilot all flag it.
- Times are **audience-local**, not poster-local.

**Per-study specifics:**
| Source | Dataset | Best window |
|---|---|---|
| Buffer | 9.6M posts | Thu 9 AM, Wed 12 PM |
| Sprout Social | ~2B engagements | Mon–Fri, 9 AM–4 PM |
| Later | 6M+ posts | **5 AM audience-local** (outlier — late-night / early-morning sweet spot); Reels peak at 12 AM |
| Metricool | 24M posts | 8–9 PM |
| SocialChamp | 5M posts | Fri 11 PM |

**Agent takeaway:** Start with midweek late-morning→evening, then let the account's own Insights override. One-size-fits-all time recommendations are unreliable.
- Source: [Metricool — Best Times to Post on Instagram 2026](https://metricool.com/best-time-to-post-on-instagram/)
- Source: [Sendible — When Is the Best Time to Post on Instagram 2026](https://www.sendible.com/insights/when-is-the-best-time-to-post-on-instagram)
- Source: [SocialChamp — Best Time To Post on Instagram 2026 Data](https://www.socialchamp.com/blog/best-time-to-post-on-instagram/)

---

## 5. Frequency Guidance

- Small accounts (<50K): **4–5 high-impact posts/week**, Reels + shareable carousels.
- Larger accounts: feed posts can drop to **2–3/week**; let evergreen Reels run their 3–4 week discovery tail.
- Over-posting Reels can cannibalize your own Explore reach — space them.
- Source: [ihitthebutton.com — How to Grow Your Instagram Following in 2026](https://ihitthebutton.com/5-tips-grow-instagram-following/)
- Source: [truefuturemedia — Instagram Reach in 2026](https://www.truefuturemedia.com/articles/instagram-reach-2026-algorithm-reels-carousels-caption-seo)

---

## 6. Agent-Ready Rules of Thumb (Instagram)

Derived from the above — these are the heuristics the agent should encode:

1. **Optimize for sends per reach**, not likes, when chasing new audiences. Hooks and CTAs should prompt "send this to someone who..."
2. **First 1–3 seconds decide survival** — build cold-open hooks; defer branding.
3. **Carousel for saves, Reels for reach, Stories for closeness.** Pick format from the campaign's objective.
4. **Never repost without meaningful transformation** (voiceover, commentary, remix, Collab).
5. **Cap hashtags at 5**, topical > brand-vanity.
6. **Export clean** — no watermarks from other platforms.
7. **Space Reels** so each gets its 3–4 week discovery tail.
8. **Default to midweek audience-local late-morning→evening**; override from each account's Insights after 2–3 cycles.
9. **Track skip-rate / completion**, not just likes — these are now causal to distribution.
10. **Flag "Your Algorithm" opt-outs** — if a brand's topic has broad opt-out signals, lean into narrower sub-topics.

---

## 7. Open Questions / To Verify

- [ ] Pull current Meta Transparency Center system cards directly (Feed card last cited as updated 2026-06-29; need to verify).
- [ ] Confirm Mosseri's Sept 2026 remarks on originality + "smaller creator chance" signal from a primary video/post, not a secondary blog.
- [ ] Get full Metricool 2026 study PDF for frequency-vs-growth data.
- [ ] Verify "sends weighted 3–5× likes" multiplier — currently only in third-party blogs with no primary citation.
- [ ] Decide whether the agent should ingest Instagram Insights API data directly for per-account calibration.

---

## 8. X (formerly Twitter) — How It Actually Works

### 8.1 The algorithm is partly open-source — and partly not
- xAI publishes the For You feed ranking code at **github.com/xai-org/x-algorithm** (Apache 2.0). First opened January 2026, significantly expanded August 2026 to include the core ranking engine and a "did my post get suppressed" tool.
- **What's public:** the pipeline, model architecture, feature list, and the "primary production values" settings file (last synced Sept 2026).
- **What's NOT public:** trained model weights, live weightings. Any specific multiplier claim ("replies worth 27× likes") is a third-party reading of the code, not from X.
- Source: [TechCrunch — X open-sources ranking algorithm (Aug 2026)](https://techcrunch.com/2026/08/13/x-open-sources-its-ranking-algorithm-letting-users-see-if-theyve-been-shadowbanned/)
- Source: [opentweet — What the open-sourced code actually says](https://opentweet.io/blog/x-algorithm-open-source-github-2026)

### 8.2 Pipeline — how a post gets ranked
1. **Candidate sourcing:** ~1,500 posts shortlisted — roughly **50% in-network** (people you follow), **50% out-of-network** (recommendations).
2. **Scoring:** A transformer model called **Phoenix** (Grok-derived) replaced the older "heavy ranker" in early 2026. It reads post text and watches videos semantically — understands meaning/context, not just keyword match.
3. **Prediction:** scores likelihood of each action (like, reply, retweet, bookmark, share, report, link-click, dwell) and blends into one ranking score per post.
4. **Negative weights:** `report`, `block`, `mute`, `hide` carry heavy negative weights (reports in particular — crowd-reports can tank distribution).
- Source: [petalie.ai — X Algorithm from the code](https://petalie.ai/learn/x-algorithm)
- Source: [posteverywhere — Twitter/X Algorithm 2026 (Source Code)](https://posteverywhere.ai/blog/how-the-x-twitter-algorithm-works)

### 8.3 Signal weight hierarchy (third-party reads of the code — treat as directional, not exact)
Most-cited ordering, strongest → weakest:
1. **Reply from the author to the reply** — massive multiplier (one reading: 75–150× a like). Author-engaged conversation = top signal.
2. **Reply** — consistently cited as ~20–27× a like.
3. **Retweet / repost** — ~20× a like.
4. **Bookmark** — ~10–15× a like. Underrated private signal.
5. **Like** — baseline (1×).
6. **Dwell / profile-click / link-click** — positive but minor.

**Caveat:** Different blogs read the same code and give different multipliers. The *ordering* is consistent; the *magnitudes* aren't verified.
- Source: [opentweet — 10 X Algorithm Secrets](https://opentweet.io/blog/x-algorithm-secrets-2026)
- Source: [teract — X Algorithm 2026](https://www.teract.ai/resources/twitter-algorithm-2026)

### 8.4 The link-in-post question — disputed
- **Musk (July 2026):** said X had not penalized external links "for over a year."
- **Independent testing (PPC Land, Jan 2026):** posts with a link in the body got ~**94% fewer views**.
- **Code audit (Aug 2026):** no explicit "link flag" input — but opening a link carries a positive weight. Any demotion is **learned by the transformer**, not written as a rule.
- **Common practice:** put the link in a **reply**, not the main post. Low-cost, hedges against the uncertainty.
- Agent heuristic: never put the primary link in the main post for a reach-chasing campaign; always drop it as the first reply.
- Source: [kompozy — Musk says no link penalty — what actually drives reach](https://kompozy.io/news/x-algorithm-link-penalty-posting-signals)
- Source: [ickas — August 2026 open-source algorithm breakdown](https://ickas.dev/writing/x-algorithm-update-august-2026)

### 8.5 Premium / verification boost — real but smaller than hype
- **Reliable effect:** Premium replies get **reply prioritization** — your reply appears higher in a thread. Premium+ gets the largest reply boost, then Premium.
- **General feed boost:** code-based readings describe it as a **modest TweepCred credibility bump** — enough to reduce the friction the algorithm applies to new/small accounts, not enough to compensate for weak content.
- **Hype claims:** "6–10× more impressions" numbers come from SEO/vendor blogs without methodology. Treat as unverified.
- Agent heuristic: for cold-start/small brand accounts chasing reach, Premium is worth it; for established brands with history, lower marginal lift.
- Source: [tryordinal — Is X Premium Worth It? 2026](https://www.tryordinal.com/blog/is-x-premium-worth-it-a-complete-guide-for-creators-and-brands)
- Source: [fireply — The X Algorithm in 2026, the Grok Era](https://fireply.ai/blog/x-algorithm-2026-explained)

### 8.6 Grok-powered semantic ranking — what changed
- Since early 2026, Phoenix (the Grok-based transformer) ranks posts by **meaning and context**, not keywords. Implications:
  - Keyword stuffing stopped working.
  - Topical consistency across your post history helps — the model builds a profile of what you're known for.
  - Semantic duplicates of trending topics get down-ranked as "shallow engagement" (claimed April 2026 update).
- Agent heuristic: write for a specific angle on a trending topic, not generic takes. Build and maintain topical authority per account.
- Source: [posteverywhere — Twitter/X Algorithm 2026](https://posteverywhere.ai/blog/how-the-x-twitter-algorithm-works)

### 8.7 Posting time — best windows (2026)
**Where studies agree:**
- Midweek (Tue–Thu) outperforms.
- Saturday is weakest (OpenTweet names Sunday instead).
- Weekday mornings in **audience-local time** are the common sweet spot.

| Study | Dataset | Best window |
|---|---|---|
| Buffer | 8.7M posts | Tue 9 AM, Wed 10 AM, Wed 9 AM |
| Sprout Social | ~2B engagements | Tue–Fri, 12–6 PM (Tue–Thu strongest) |
| Hootsuite | 1M+ posts | Wed–Fri, 9–11 AM |
| SocialPilot | 700K+ posts | Wed 9 AM; 8–11 AM & 3 PM weekdays |
| OpenTweet | 50K+ tweets | Tue–Thu, 9–11 AM audience-local |
| SocialChamp | 3.5M posts | Sun 9–10 AM (outlier) |

**Agent heuristic:** start Tue–Thu, 9–11 AM audience-local; override from the account's own analytics after 2 cycles.
- Source: [Buffer — Best Time to Post on Twitter/X in 2026 (1M posts)](https://buffer.com/resources/best-time-to-post-on-twitter-x/)
- Source: [Sprout Social — Best Times to Post on Twitter (X) 2026](https://sproutsocial.com/insights/best-times-to-post-on-twitter/)
- Source: [OpenTweet — Best Time to Post 2026 (50K tweets)](https://opentweet.io/blog/best-time-to-post-on-twitter-data-study)

### 8.8 Frequency guidance
- X is high-cadence: multiple posts/day are expected without reach cannibalization (unlike Reels).
- Replies to larger accounts in the first 15–30 min of their post = cheapest discovery lever.
- Thread posts win on dwell + bookmarks; single tweets win on reach spikes.

### 8.9 Agent-Ready Rules of Thumb (X)

1. **Reach is bought with replies, bookmarks, and retweets** — not likes. Design CTAs to prompt saves and "tag who needs this."
2. **Put links in the first reply**, not the main post.
3. **Author-engagement loop:** reply to your own commenters quickly — this triggers the highest-weighted signal (reply-to-reply).
4. **Thread for depth, single posts for reach spikes.** Bookmarks correlate with thread format.
5. **Topical consistency** — the Grok ranker rewards accounts that stay in a lane.
6. **Avoid shallow pile-ons** of trending topics; add a specific angle.
7. **Negative signals compound fast** — reports/mutes/blocks weigh heavy. Even one mass-report event can suppress for days.
8. **Default Tue–Thu, 9–11 AM** audience-local; override from Insights.
9. **Premium helps cold-start accounts**; marginal for mature brands.
10. **Check Account Status** — X now exposes a tool showing suppression state (Aug 2026). Agent should query this before major campaigns.

### 8.10 Open Questions / To Verify (X)
- [ ] Read xai-org/x-algorithm repo directly to confirm current feature list and settings.
- [ ] Verify the exact production weights (not available — but ratios may be inferrable from recent code).
- [ ] Confirm the suppression-check / "shadowban" tool and whether there's an API for it.
- [ ] Test link-in-post vs link-in-reply head-to-head on a controlled brand account.
- [ ] Measure Premium boost magnitude via a before/after controlled experiment.

---

## 9. Next Platforms to Research

- [ ] TikTok (For You Page ranking, creator fund signals)
- [ ] LinkedIn (dwell time + comment-chain weighting)
- [ ] YouTube Shorts (watch time ratio, swipe-away)
- [ ] Threads (if in scope)

---

## 10. Source Reliability Legend
- **Primary** (Meta/Instagram/Mosseri direct): Transparency Center system cards, about.instagram.com, Mosseri's own posts.
- **High-trust secondary**: Sprout Social, Later, Buffer, Metricool, SocialPilot — they publish datasets and quote primary sources.
- **Treat with caution**: standalone marketing blogs with specific weightings but no primary citation.
