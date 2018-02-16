
var messages = [
    "competitive Super Smash Bros!",
//    "fake Starcraft 2 apm!",
//    "chess fradulence!",
//    "... what's an airport again?",
//    "improving bad posture!",
    "BOOM. Tetris for Jeff!",
    "reinventing the wheel!",
    "mostly competent gamedev!",
    "awful webdev!",
    "impostor syndrome!",
    "poor color schemes!"
]

var period = 7000;
var swooce_offset = 6000;

var help_lerp = function(t, a)
{
    if (t < 0) {return 0;}
    if (t > a) {return 1;}
//    return t / a;
    return 1 - (1 + Math.cos(t/a * Math.PI)) / 2;
}

var lastRun = -1;

var coolThing = function()
{
    var now = Date.now();

    if ((now % period) > swooce_offset)
    {
        $("#cool-thing").css("opacity", 1 - help_lerp((now % period) - swooce_offset, period - swooce_offset));
        $("#cool-thing2").css("opacity", help_lerp((now % period) - swooce_offset, period - swooce_offset));
        $("#cool-thing2").css("margin-top", 300 - 300 * help_lerp((now % period) - swooce_offset, period - swooce_offset) + "px");
    }
    else if (lastRun % period > now % period || lastRun === -1)
    {
        $("#cool-thing").css("opacity", 1);
        $("#cool-thing2").css("opacity", 0);
        $("#cool-thing").text(messages[Math.floor(now / period) % messages.length]);
        $("#cool-thing2").text(messages[(Math.floor(now / period) + 1) % messages.length]);
    }

    lastRun = now;
}

$("#cool-thing").text(messages[Math.floor(Date.now() / period) % messages.length]);
setInterval(coolThing, 1000/60);

var trueResizeTimeout = null;
var trueResize = function()
{
    console.log("resized")
    trueResizeTimeout = null;
    console.log(window.innerHeight);

    // the stickyness only works on the initial load, resizing breaks it
    // probably because uhh... magic.
    $("#stickyNav").attr("data-offset-top", 24 + window.innerHeight);

    $("#hipsterThing").css("padding-top", (window.innerHeight/4 - 100) + "px");
}

var fakeResize = function()
{
    if (trueResizeTimeout == null)
    {
        trueResizeTimeout = setTimeout(trueResize, 500);
    }
}

window.addEventListener("resize", fakeResize);
setTimeout(trueResize, 1);