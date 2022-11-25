# EJLX Advent Calendar 2021

The advent calendar is a yearly event on the EJLX server (discord invite is [here](https://discord.gg/japanese)). Applicants join on a first-come-first-server basis, and are assigned a certain day to post about anything. This website is an archive of all the entries submitted for 2021.

However, if a person has trouble coming up with ideas for topics, the following guideline topics for this year are given:

- Your New Year's Resolution

What do you want to achieve the following year?

- Your Hobbies

What are your favourite hobbies? It can be something
picked up during this year or something you've been doing for longer.

- Experiences

What interesting experiences did you have this year?
What made it so memorable?

-  Your Favourite Thing

What is something that you like?
This can be a movie, dish, book, etc.

## Technical Details

If you want to build this project yourself for some strange reason, then read the following.

The project uses Preact to logically manage components. Normally the website can be statically prerendered, but the particles.js dependency used currently make it more difficult to render server-side due to its slightly outdated style of polluting the global namespace and prototypes instead of using a module system. This can be fixed by manually changing the dependency and removing references to "window", which I might do later.

The entries directly import their images and emojis (unlike last year) just to make the process of converting entries to page component instances a bit simplier but less elegant. Entries also include metadata regarding their discord information and index which is used for links (or sorting entries if needed). However, entries are currently ordered by passing in a list of file names representing each entry (i.e. '1.js', '2.js', etc).

### Build Instructions

1. Clone this repository.
2. `npm install`
3. `npm run build`
