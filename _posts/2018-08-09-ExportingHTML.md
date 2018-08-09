---
layout : blog
title : Exporting Old Projects to HTML5
tags : libgdx old-projects documentation
---

I was working on my project, [parmpreet-fighter](https://github.com/ArtlessAvian/parmpreet-fighter/)
when I realized I could export to HTML5. Just to try it out, I exported an old (but fun!) branch.
To my surprise, it was just a bunch of plain files: HTML, Javascript, a big binary blob (.pck for pack?), and Web Assembly.
Using Python's simple web server, I was able to share the game with some friends with no setup on their end.

This got me thinking about my LibGDX projects. I knew they could export to a format that can be run by browsers.
I didn't try it, because back then I thought it was some wizardry. I saw something about a web server, and jumped
to thinking that building the project would be the actual web server. However, it turns out that the exported files are also
just a bunch of static files, servable by any kind of web server. In fact, it compiles to Javascript only!
I was confusing running a development build, which allowed for debugging features, with a plain old build.

So, this brings up a big opportunity, immensely simplifiying documenting my old projects.
I could make a very accessible porfolio, when earlier I would have to rely on pictures or program downloads.
The only issue that remains is where I should host these builds. Maybe here, on the personal site, to prevent
disturbing the old repositories. I could also serve it on each repository's own github page, for clarity.

I'm looking forward to building my portfolio.

<small>(how was my first blog post? i think its a bit off, but its nbd)<small>
