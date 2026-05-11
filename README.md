# fytfil
vegan social platform

I want to build a social platform, which orients alot on how reddit works, solely for vegans ofc. Features include groupchats, an optional carbon-output measurement scale for comparisons and a open-source-map with good places to go to.

GPTs opinion:
A simple version is a normal webapp; a real X-like service becomes a distributed systems problem fast.

Why it gets hard
The hardest core feature is the home timeline. X-like systems often need a hybrid of fan-out on write for many users and pull/merge on read for huge accounts, because pushing every post to every follower becomes too expensive for celebrity-scale users.

Other hard parts pile on:

real-time notifications and live updates,

media storage and delivery,

caching and timeline reconstruction,

search and recommendation systems,

trust, safety, moderation, and abuse prevention, which are product-critical even before massive scale.

What one developer could build
One good full-stack dev can build a respectable MVP with:

user accounts,

posting,

follows,

replies/likes,

a simple chronological feed,

maybe notifications and search.
