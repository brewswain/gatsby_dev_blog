---
title: "Designing a Static Website"
date: "Jan 24th, 2020"
---

# Today, I got my first potential website request.

This marks the first time so far that I've been asked to do something like this, so it's pretty exciting! Let's move onto the mentality of how I want to approach this website, as a roadmap for me to see if my thought process is solid.

## Tech Stack

So, the first step was deciding what technologies I'd use to create this website. Upon getting further details, the client simply wanted some form of static website, so i'm thinking that for now I'll use Vanilla JS, HTML, and CSS. This way I'll ensure that it's performant, especially if it's essentially going to be a Simple Page Application.

With that settled, the next consideration was hosting. At first, since it was a simple static hosted website, Netlify seemed really appealing. But, upon further consideration and some discussion with a friend, I'm leaning more to AWS using their Static hosting option through their S3 bucket.

## Design Considerations

First thing first, we obviously want to make the site as performant as possible. However, we also want to use images etc. As the client will want to use this as a consultation platform, so media is definitely important. This also means that UX needs to be heavily considered since i technically want users to enter the site, and get contact information etc within a few seconds. For that i'll prob utilize some form of visual hierarchy to draw the users' attention to the contact me section on the header.

I considered using a mobile-first design on this page, but again, due to potential clientele, I think the standard approach of making media queries for mobile view to be the best option. Plus this way I could quicker show my client the desktop view which would obviously look more impressive from a pure visual aspect.

Either way, I'm beginning to waste time writing this post up so I'll report back in when I have a basic skeleton of this site worked out.
