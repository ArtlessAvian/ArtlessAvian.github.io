---
layout : project
title : Can Balls Meow?
github-repo : https://github.com/johanaldrictan/CanBallsMeow
description : Competitor Project to Ballistic
rough-start : 2019/01
status : Completed
playable : https://johantan.itch.io/can-balls-meow
---

In UCI's VGDC club, everyone who was not accepted to a pitched project gets placed on a Wildcard Team,
where they are free to do anything. Sometimes they are encouraged to make a project similar to one that was pitched,
which is what happened to the team I was assigned to.

The original pitch was a "bouncy ball smash-like game" where you use a dash to crash into other players
with the goal to bounce the other off the map.
Our design for our game was similar. We intended the game to be the same, working around oddities we found in the original design.
The original game had balls that were always bouncing, and no form of being in the lead other than positioning.
Instead, we had cats that could platform, and food to pick up to become larger, so that the bigger cat has an advantage in pushing
the other around. The title of the game is a small jab at the original team that stuck.

During development, I wrote the behavior of food and its collection, then a movement script for the cat.
Towards the end, all the programmers were in each others code so there isn't any strong delegations there.

A questionable decision I made was that I rewrote a state machine instead of using one built into Unity. At the benefit of
not needing to learn the built in state machine and time, it was a bit cruder and harder to work with
than it could have been.

In all, this was my first strong project in a large(ish) group. I believe that I used Git well. There definitely still were some
hiccups, but then I got experience fixing up some merge conflicts.

(This was written on 9/24/19.)