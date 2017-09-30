
var messages = [
    "wondering whens melee",
    "did someone say starcraft 2",
    "probably should sleep more",
    "upcoming chess grandmaster",
    "what's an airport again",
    "fixing horrendous posture",
    "is it the weekend yet"
]

var period = 7000;
var lastRun = 0;

var coolThing = function()
{
    var now = Date.now();
    $("#cool-thing").css("opacity", Math.abs(Math.sin(now / period * Math.PI)));
    if (lastRun % period > now % period)
    {
        $("#cool-thing").text(messages[Math.floor(now / period) % messages.length]);
    }

    lastRun = now;
}

$("#cool-thing").text(messages[Math.floor(Date.now() / period) % messages.length]);
setInterval(coolThing, 1000/60);