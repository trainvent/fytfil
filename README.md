# fytfil
vegan social platform

I want to build a social platform, which orients alot on how reddit works, solely for vegans ofc. Features include groupchats, an optional carbon-output measurement scale for comparisons and a open-source-map with good places to go to.

GPTs strategy:
Below is a more professional, strategy-style version of the MVP plan for **fytfil**.

# fytfil MVP Strategy

## Executive summary

fytfil should launch as a **niche social platform for vegans** that combines community discussion, local discovery, and lightweight impact comparison. The initial product should not try to replicate a full social network; it should solve a specific problem: helping vegan users **find people, places, and useful local information in one place**.

The strongest positioning is a **Reddit-inspired community platform with a place layer**. That keeps the product focused, differentiates it from general social networks, and allows a smaller team to build something valuable without overengineering.

## Product vision

The long-term vision is a trusted vegan community platform with three core functions:

- Community discussion around vegan living.
- Discovery of vegan-friendly places.
- Optional comparison of environmental impact in a simple, understandable format.

The product should feel practical, local, and community-driven. It should support both online discussion and real-world action.

## Target users

The initial audience should be narrow and specific. Good early segments include:

- Vegans looking for local places and recommendations.
- Vegetarians transitioning toward veganism.
- Vegan travelers and tourists.
- Vegan students and young urban users.
- Vegan fitness, nutrition, and lifestyle communities.

The first launch should focus on one city or region rather than attempting a broad international rollout.

## Core product thesis

The product should be built around three reinforcing loops:

1. **Community loop**  
   Users join communities, read posts, comment, upvote, and return regularly.

2. **Discovery loop**  
   Users browse or contribute vegan-friendly places, creating a useful map layer.

3. **Impact loop**  
   Users compare meals, habits, or product choices through a lightweight carbon-impact tool and share results back into the community.

These loops should reinforce each other. Community discussion should drive place discovery, and place discovery should create reasons to return to the platform.

## MVP scope

The MVP should include only the minimum set of features required to validate the product.

### Must-have features
- User registration and profile.
- Community spaces similar to subreddits.
- Posts, comments, and upvotes.
- Saved posts and saved places.
- Open-source map with vegan places.
- Place submission and editing flow.
- Basic moderation and reporting tools.
- Optional simple carbon comparison tool.
- Admin dashboard for review and moderation.

### Should not be included in MVP
- Full direct messaging.
- Large-scale group chat.
- Video uploading.
- Advanced recommendation systems.
- Complex gamification.
- Graph-based social graph analytics.
- Heavy personalization.
- Multiple platform-specific feature branches.

Group chat should be limited or postponed, because it adds disproportionate complexity in moderation, abuse handling, and real-time infrastructure.

## Product structure

A clear information architecture for the MVP could look like this:

- **Home**: community feed and trending discussions.
- **Communities**: topic-based spaces for discussion.
- **Map**: vegan and vegan-friendly places.
- **Add Place**: structured submission form.
- **Impact**: simple carbon comparison tool.
- **Profile**: user activity, saves, and contributions.
- **Moderation/Admin**: reports, approvals, and content review.

This structure keeps the product understandable and ensures the three core loops remain visible.

## Content model

The MVP should support a structured set of content types:

- User
- Community
- Post
- Comment
- Vote
- Save
- Place
- Place edit submission
- Carbon comparison entry
- Report
- Notification

This model is enough to support the product’s first version without committing to unnecessary complexity.

## Feature priorities

### Priority 1: community discussion
The social layer should be the first priority. A strong discussion system creates retention, identity, and user-generated content.

### Priority 2: vegan place map
The map is the strongest differentiator. It adds practical value that a general social platform does not provide.

### Priority 3: impact comparison
The carbon feature should be lightweight, optional, and transparent. It should support sharing and discussion, but not become a scientific product in itself.

### Priority 4: chat
Chat should be treated as a later-stage enhancement. If included in MVP at all, it should be restricted to small, controlled contexts such as community rooms or place-specific discussion.

## Recommended technical approach

A modular monolith is the best starting point. The system should be simple enough to move quickly, while leaving room for later separation if needed.

### Suggested stack
- **Client app**: Flutter for mobile-first development.
- **Web/admin**: lightweight web interface for moderation and discovery.
- **Backend**: single API layer with clear modular boundaries.
- **Database**: PostgreSQL for core entities.
- **Cache/queue**: Redis for caching and background jobs.
- **Search**: basic database search first, dedicated search later.
- **Maps**: OpenStreetMap-based setup with a modern map library.
- **Storage**: object storage for images and uploads.
- **Hosting**: standard cloud hosting, not Kubernetes for MVP.

This approach avoids early platform engineering overhead.

## Architecture principles

The architecture should follow these rules:

- Keep the first version simple.
- Separate business domains logically, but not physically unless needed.
- Optimize for moderation and content integrity from day one.
- Use relational storage for core social data.
- Avoid premature microservices.
- Add specialized tools only after product-market evidence exists.

This approach mirrors how large platforms evolve: start small, then split only where scale justifies it.

## Moderation strategy

Moderation needs to be built in from the start. A community platform without moderation becomes fragile very quickly.

The MVP should include:
- Report abuse/content flow.
- Content approval queue for places.
- Community rules.
- Block and mute controls.
- Rate limiting.
- Admin dashboard for review.

This is especially important because a niche platform can be damaged quickly by spam, low-quality submissions, or ideological conflict.

## Carbon feature strategy

The carbon tool should be framed as a **comparison feature**, not a scientific accounting engine.

Good MVP behavior:
- Compare two meals or two habits.
- Show approximate values.
- Make the method visible.
- Avoid false precision.
- Allow sharing into posts or community threads.

The goal is engagement and education, not perfect measurement.

## Map strategy

The map should focus on **useful, curated vegan discovery**.

The map should support:
- Place browsing.
- Place submission.
- Manual moderation.
- Tags such as fully vegan, vegan-friendly, coffee, grocery, restaurant, and more.
- Saves/bookmarks.
- Basic search and filters.

This can become the product’s strongest differentiator if the initial database is seeded well.

## Launch strategy

The first launch should be small and intentional.

### Recommended launch approach
- Choose one city, country, or region.
- Seed the platform with initial communities and place data.
- Invite a small group of early users.
- Focus on quality over volume.
- Measure retention and contribution, not vanity signups.

A social platform fails if it launches empty. The first users must see immediate value.

## Success metrics

The MVP should be measured by real usage, not only installs or signups.

Useful metrics include:
- Weekly active users.
- Comments per active user.
- Posts per active user.
- Place saves per active user.
- Place submissions accepted.
- Repeat visits to map pages.
- Percentage of users using the carbon comparison tool.
- Retention after 7, 30, and 60 days.

These metrics show whether the platform has a real community loop.

## Roadmap

### Phase 1: foundation
- Define scope and audience.
- Finalize product structure.
- Build core community and user features.
- Build initial map and moderation tools.

### Phase 2: MVP release
- Launch to a small closed audience.
- Collect feedback.
- Improve onboarding and moderation.
- Seed more local content.

### Phase 3: growth
- Add improved search.
- Add better notifications.
- Add limited chat if needed.
- Expand into more cities or regions.
- Improve ranking and personalization only after usage proves the need.

## Strategic recommendation

The best MVP version of fytfil is:

- A Reddit-like vegan discussion platform.
- Combined with a curated vegan place map.
- Supported by a simple optional impact comparison tool.
- Built with strong moderation.
- Launched in one narrow geography first.

That version is focused, realistic, and differentiated enough to test whether the platform has genuine pull.

If you want, the next step can be a **founder-style one-page strategy memo** or a **product requirements document** in cleaner business language.
