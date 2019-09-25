
// var MESSAGES = [
//     "Also playing competitive Smash Bros!",
//     "Grandmaster Calculator APM!",
//     "How's my personal website?",
//     "Uses Bootstrap 4, Jquery, and Jekyll!"
// ];
// var ANIMATION_TIME = 400;
// var currentMessage = Math.floor(Math.random() * MESSAGES.length);

// var translateThing = function(now, start)
// {
//     if (now - start > ANIMATION_TIME)
//     {
//         return 1;
//     }

//     return Math.abs(Math.cos((now-start) * Math.PI/ANIMATION_TIME));
// }

// var doAnimation = function(start, lastRun)
// {
//     now = Date.now()    
//     $("#cool-flair").css("transform", "translateY(" + (100 - translateThing(now, start) * 100) + "%)");
//     $("#cool-flair").css("opacity", translateThing(now, start));
    
//     if ((lastRun - start - ANIMATION_TIME/2) * (now - start - ANIMATION_TIME/2) <= 0)
//     {
//         currentMessage = (currentMessage + 1) % MESSAGES.length;
//         $("#cool-flair").text(MESSAGES[currentMessage]);
//     }

//     if (now - start < ANIMATION_TIME)
//     {
//         setTimeout(doAnimation, 1000/60, start, now);
//     }
// }

// var startAnimation = function()
// {
//     doAnimation(Date.now(), -1)
// }

// $("#cool-flair").text(MESSAGES[currentMessage]);
// setInterval(startAnimation, 7000);
