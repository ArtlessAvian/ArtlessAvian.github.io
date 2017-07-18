/*
i guess this works

tab names should be unique.

tagging!
2^0 unfinished article
2^1 unpolished article
2^2 possibly boring article
2^5 unimpressive
*/
var gamesData = [
    {
        "tab" : "PewPewPew",
        "title" : "Try Number 9997",
        "metaishTag" : 1 + 2 + 32,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "TestPlatformer",
        "title" : "First \"Product\" with LibGDX",
        "metaishTag" : 2 + 4,
        "text" : [
            "My friend and I had an discussion about D-Pads for mobile games. He was for using them, and I was against. " +
            "I said that they should be replaced with something more suited for touchscreens. So, I wrote a platformer " +
            "around what I would call a virtual joystick. The controls are still bad. The game was only playable by me.",

            "The game features touch handling, basic physics, tile based collision, external files. " +
            "The controls are based around swipes, making it resemble more of a joystick. However, the center of the " +
            "joystick would move to the initial touch point. The angle and the magnitude of the swipe would be used for controls. " +
            "The input method is shown by two circles. Inside the inner circle is the deadzone. The character will move when " +
            "touching outside the inner circle, and moving past the outer circle would rotate all velocity to that direction. " +
            // rotate?
            "Physics is fairly simple. An object would just add its velocity to its position, and its acceleration to its velocity. " +
            "Based on the controls, the character would accelerate sluggishly. Jumping is fine, but the low gravity made " +
            "the game a bit floaty. The time step is based on the time between frames, instead of being fixed. " +
            "For tile based collision, I knew that because the character was so small compared to the tiles, I would only " +
            "need to check the 8 tiles around it. Also, I knew that some tiles could be ignored if not moving towards it. " +
            "Also, I made it possible to fall through platforms, by ignoring the bottom tile if it was \"soft.\" The player's collision " +
            "is 4 rectangles, offset from the center. I took this from a Youtube series \"Reconstructing Cave Story,\" where" +
            "a remake of the engine from Cave Story is made. " +
            "Lastly, the tiles in the map would be created from a text file. There's nothing too special about it. " +
            "I did have fun with it though, adding a happy face, a representation of Battlefield from Super Smash Bros, " +
            "and an obstacle course using the velocity change mechanic.",

            "Also featured in the game is another control stick on the right half of the screen. Using that side would call " +
            "random functions for debugging (but mostly for fun). Up and right zooms the game out, and up and left zooms in. " +
            "Down Right adds a lot of clones of the character, which uses the same class, but with automated controls. " +
            "They make random inputs, and occasionally hold a coordinated \"dance party.\" Down Left removes them. " +
            "Any input toggles the collision debug drawing.",

            "LibGDX lets me deploy to android devices, which I did. I showed my friend, and he couldn't control it." +
            "I handed it to others in the circle of friends, and they couldn't either. Any time I showed people the stuff I made " +
            "on my phone, they would have trouble with controls. Also, everyone recommended I added coins."
        ],
        "images" : [
            "TestPlatformer/Init.PNG",
            "TestPlatformer/debug_collision.PNG",
            "TestPlatformer/happy_face.PNG",
            "TestPlatformer/map.PNG",
            "TestPlatformer/clones.PNG"
        ]
    },
    {
        "tab" : "tetris-attack-clone",
        "title" : "Not Actually by Me",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "subpar-smash",
        "title" : "Subpar! Smaaaaaaaaaaaaaaash Brooootheeeerrrsss!",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "psuedo-three-dee",
        "title" : "Not really a game, but its pretty cool.",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "pre-test-procrastination",
        "title" : "Not Terraria",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "boolet-hell",
        "title" : "Try number 10000",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "whats-an-airport",
        "title" : "Control Schemes are Hard",
        "metaishTag" : 1 + 2,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "school-blackjack",
        "title" : "EZ $$$",
        "metaishTag" : 1 + 2 + 32,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "raycast-engine-js",
        "title" : "Doesn't Actually Use Rays",
        "metaishTag" : 1 + 2 + 32,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "highly-unresponsive",
        "title" : "Boolet Hell 2: Highly Unresponsive Code (not really)",
        "metaishTag" : 1 + 2 + 32,
        "text" : [""],
        "images" : []
    },
    {
        "tab" : "final-lethal-league",
        "title" : "APCS Final: \"Do anything within your limits.\"",
        "metaishTag" : 1 + 2,
        "text" : [
            "First, many thanks to the group members, Ryan P. Tran and Ryan L. Tran. Together, we built a clone of Lethal League, " +
            "a non-traditional fighter. I would consider it the most complete project I have made as of now (July 2017). " +
            "I hope that the others have learned much from working with the codebase, which in my opinion is structured decently. " +
            "There is still room for improvement, and I might poke around and refurbish it.",

            "When I heard that the final project would be of our choice, I knew I wanted to do a game. I didn't know what game to make, " +
            "or who to team with. Also, they would have to pick up LibGDX or I would have to make a facade, using our limited time. " +
            "Ryan, Ryan, and I (Ryan) teamed up again (from the project school-blackjack) and decided to write Lethal League, " +
            "which I had been playing too much in class.",

//            "There were several pitfalls which slowed projects. The most harmful was school computers and their inflexibility. " +
//            "The classroom had desktops with the bare necessities. They would delete local files on logout. " +
//            "Installing other programs is restricted, and only BlueJ was installed for students to use for their IDE." +
//            "While I understand it is used because it is consistent and inflexible, friendly to beginners, and lightweight, I feel those features " +
//            "stopped being useful early on in the class. It would not work with libraries, and would only work well with its own file structure. " +
//            "Working in a group mostly meant crowding around a computer with one person doing the heavy lifting. " +
//            "I used Sublime Text 3 instead, placed in my student drive. While not as strong as an IDE, it was better for me. " +
//            "However, the network was not reliable. The network would repeatedly go down, removing access to project files " +
//            "and also Sublime Text for me. All this was remedied by just bringing my laptop to school, which is what I normally use anyways.",
//
//            "The next issue was the learning curve for others. The other two weren't familiar with how to write a game, " +
//            "how to use LibGDX, and how to use Github. Because no engine is provided, we tried to cobble together an engine, " +
//            "without autoimport and suggestions. This meant that they were floundering around with Javadocs, wasting time unnecessarily.
//            "The project barely built on my computer. I only knew how to open CMD (bypassing restrictions) by accident, " +
//            "trying to make a build script with ST3, and I had to learn to use Gradle. " +
//            "Then, we tried to work together using Github's web client, which was awkward to work with. They had not much experience," +
//            "and made mistakes. This could have been avoided if we used the desktop client (which I still use instead of the command line), " +
//            "but there can't be any persisting files on the school computers.",

            "At first, we failed to make an engine on school computers. We were using plain java objects, without much structure in mind. " +
            "After being tired of the poor code quality, we agreed that I could trash the code.",
            // look at the commit log u fool
            "(I should write outlines for these instead of jumping in.)"

        ],
        "images" : []
    }
//    {
//        "tab" : "copy paste me",
//        "title" : "lol",
//        "text" : [
//            "Brief Rundown",
//            "Dev Cycle?",
//            "Features",
//            "Results",
//            "Post Mortem"
//        ],
//        "images" : [
//            "boi.PNG"
//        ]
//    }
]