/*
i guess this works

tab names should be unique.

tagging!
2^0 unfinished article
2^1 unpolished article
2^2 possibly boring article
*/
var gamesData = [
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
        "tab" : "final-lethal-league",
        "title" : "APCS Final: \"Do anything within your limits.\"",
        "metaishTag" : 1 + 2,
        "text" : [
            "First, many thanks to the group members, Ryan P. Tran and Ryan L. Tran.",
            "I'm too lazy to write anything"
        ],
        "images" : [
            "boi.PNG"
        ]
    }
//    {
//        "tab" : "copy paste me",
//        "title" : "lol",
//        "text" : [
//            "Brief Rundown",
//            "Features",
//            "Dev Cycle?",
//            "Results",
//            "Post Mortem"
//        ],
//        "images" : [
//            "boi.PNG"
//        ]
//    }
]