
var messages = [
    "competitive Super Smash Bros!",
    "fake Starcraft 2 apm!",
    "chess fradulence!",
    "... what's an airport again?",
    "improving bad posture!",
    "BOOM. Tetris for Jeff!",
    "reinventing the wheel!",
    "mostly competent gamedev!",
    "awful webdev!",
    "impostor syndrome!",
    "poor color schemes!"
]

var period = 7000;
var lastRun = -1;

var coolThing = function()
{
    var now = Date.now();
    $("#cool-thing").css("opacity", Math.min(1, 3 * Math.abs(Math.sin(now / period * Math.PI))));
    if (lastRun % period > now % period || lastRun === -1)
    {
        $("#cool-thing").text(messages[Math.floor(now / period) % messages.length]);
    }

    lastRun = now;
}

$("#cool-thing").text(messages[Math.floor(Date.now() / period) % messages.length]);
setInterval(coolThing, 1000/24);