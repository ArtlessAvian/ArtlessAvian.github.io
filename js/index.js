
var messages = [
    "competitive Super Smash Bros!",
    "improving bad posture!",
    "constructing additional pylons!",
    "BOOM. Tetris for Jeff!",
    "reinventing the wheel!",
    "grandmaster level calculator APM!",
    "mostly competent gamedev!",
    "taking redstone too seriously!",
    "awful webdev!",
    "impostor syndrome!",
    "poor color schemes!"
]

var period = 7000;
var swooce_offset = 6600;

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
        $("#cool-thing2").css("margin-top", 100 - 100 * help_lerp((now % period) - swooce_offset, period - swooce_offset) + "px");
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
    $("#stickyNav").attr("data-offset-top", window.innerHeight);

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


app.controller("testController", function($scope){
    $scope.aptests = [
        {name: 'Calculus BC', score: 5, year: 2017},
        {name: 'Calculus AB Subscore', score: 5, year: 2017},
        {name: 'Statistics', score: 'TBD', year: 2018},
        {name: 'Physics 1', score: 4, year: 2016},
        {name: 'Physics 2', score: 4, year: 2017},
        {name: 'Physics C Mechanics', score: 'TBD', year: 2018},
        {name: 'Physics C E&M', score: 'TBD', year: 2018},
        {name: 'Spanish', score: 'TBD', year: 2018}
    ];
});