
var messages = [
    "whens melee",
    "did someone say starcraft 2",
    "chess grandmaster",
    "what's an airport again",
    "fixing horrendous posture",
    "boom tetris for jeff",
    "stop stalking me",
    "i write games!"
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