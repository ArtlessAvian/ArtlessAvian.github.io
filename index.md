---
layout: default
title: Portfolio
---

Hello!
Currently, I'm a programming officer at the Video Game Development Club at UCI (VGDC@UCI).
Of course, I write games in Godot and Unity.
Here are some notable things I have worked on.
The titles are links to where to most conveniently find the projects.

<hr>

<div style="display:flex; margin-bottom:20px">
    <div>
        <img class="hover-zoom" style="width: 50%; float: right" src="assets/images/LizardState-cropped.PNG">
        <h2 id="lizard-state"> <!-- <a href=""> --> Lizard State <!-- </a> --> </h2>
        <p>
        A roguelike in Godot.
        My current pet project over quarantine.
        </p> <p>
        Currently for this project, I'm focusing on architecting the game as cleanly as possible.
        With changing plans and lots of prototyping, I've gone through many iterations trying to best design everything.
        <!-- It feels Sisyphean to repeatedly design and scrap things, but with my effort, I now have a solid base to work on. -->
        </p> <p>
        My current architecture is based on model-view-viewmodel using an event queue to communicate.
        It can be a bit cumbersome, but I'm liking it very much.
        </p>
        Between the current iteration, previous attempts, and external experiements,
        <ul>
            <li> I've completely decoupled model and view, using an event queue to communicate between the two. </li>
            <li> I've implemented a vision and fog of war system. </li>
            <li> I've built an pathfinding AI to follow teammates and attack enemies. </li>
            <li> I've generated maps using cellular automata and perlin noise. </li>
        </ul>
    </div>
    <!-- <img class="hover-zoom" style="width: 50%; object-fit: contain" src="assets/images/LizardState-cropped.PNG"> -->
</div>

<hr>

<div style="display:flex; margin-bottom:20px">
    <div>
        <img class="hover-zoom" style="width: 30%; float: right" src="assets/images/overload.gif">
        <h2 id="overload"><a href="https://artlessavian.itch.io/overload-super-unfinished">Overload</a></h2>
        <p>
        A falling blocks puzzle game in Godot.
        This was a prototype I worked on by myself to pitch to VGDC@UCI. 
        </p> <p>
        For code, this game's design avoids excessive objects,
        an issue with
        <a href="https://github.com/kc34/tetris-attack-clone">an earlier project</a>
        I did with my brother many years ago.
        Each block is an integer in an array. Each set of falling blocks is an object.
        Keeping it simple was perfect for this game,
        and even allowed me to create unit testing as I went.
        </p> <p>
        As is, it is an exact clone of the SNES game Tetris Attack.
        I pitched the game to the game development club to get a team to help
        declone the game. However, I didn't make much progress.
        <!-- </p> <p> -->
        I chose to manage the team myself, and it didn't go so well.
        <!-- Some of it wasn't my fault, and some definitely was. -->
        <!-- The team's schedules didn't line up, so we couldn't all meet at the same time. -->
        <!-- Also, I -->
        </p> <p>
        Even so, on the management end it was a good learning experience.
        I'd like to continue working on this.
        </p>
    </div>
</div>

<hr>

<div style="display:flex; margin-bottom:20px">
    <div>
        <img class="hover-zoom" style="width: 45%; float: right" src="assets/images/Antsylvania-cropped.PNG">
        <h2 id="antsylvania"><a href="https://github.com/jaedan3/Castlevania-Fall-2019">Antsylvania</a></h2>
        <p>
        An action adventure platformer game in Unity.
        I was a programmer, acting as a bit of a tech lead.
        </p> <p>
        I experimented with making custom physics for the player controller.
        I built the camera system and a hitbox collision system.
        </p> <p>
        Unfortunately, our team decided not to submit our game to itch.io. 
        </p>
    </div>
</div>

<hr>

<div style="display:flex; margin-bottom:20px">
    <div>
        <img class="hover-zoom" style="width: 50%; float: right" src="assets/images/RogueSynthesis-cropped.PNG">
        <h2 id="rogue-synthesis"><a href="https://johantan.itch.io/rogue-synthesis">Rogue Synthesis</a></h2>
        <p>
        A turn based strategy game in Unity.
        I was a programmer, volunteering to work on systems.
        </p> <p>
        I implemented pathfinding for a directional move system with weighted tiles.
        I built a system to draw paths.
        I designed a camera that can be smoothly panned both by player controls and by code.
        </p>
    </div>
</div>