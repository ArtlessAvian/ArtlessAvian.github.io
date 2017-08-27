resourceList = [
//    "js/games/games_data.js"
    "js/games/data/PewPewPew.js",
    "js/games/data/TestPlatformer.js",
    "js/games/data/tetris-attack-clone.js",
    "js/games/data/subpar-smash.js",
    "js/games/data/pseudo-three-dee.js",
    "js/games/data/pre-test-procrastination.js",
    "js/games/data/boolet-hell.js",
    "js/games/data/whats-an-airport.js",
    "js/games/data/school-blackjack.js",
    "js/games/data/raycast-engine-js.js",
    "js/games/data/highly-unresponsive.js",
    "js/games/data/final-lethal-league.js",
];


var gamesData = [];
var app = angular.module("tabStuff", []);
scope = null;
app.controller("tabController", function($scope){
    scope = $scope;
    $scope.entries = gamesData;
});

recurseLoad = function(list, data){

    if (resourceList.length != 0){
        var script = document.createElement("script");
        script.src = list[0];
        script.onload = function(){
            scope.$apply();
            list.shift();
            recurseLoad(list, data);
        }
        document.head.appendChild(script);
    }
    else
    {
        $(document).ready(function(){
            $(".nav-pills a").click(function(){
                $(this).tab('show');
            });
        });
    }
}
recurseLoad(resourceList, gamesData);

//
//
//
////
////    var gamesTab = $("#games-tab")
////    var tabContent = $("#tab-content")
////
////    for (var i = 0; i < gamesData.length; i++)
////    {
////
////        gamesTab.append(
////        '<li role="presentation">' +
////            '<a href="#' + gamesData[i].tab + '">' +
////                gamesData[i].tab +
////            '</a>' +
////        '</li>'
////        )
////
////        var contentHtml = '<div id="' + gamesData[i].tab + '" class="tab-pane fade">'
////
////        contentHtml += '<h2>' + gamesData[i].title + '</h2>'
////        contentHtml += '<hr>'
////        contentHtml += '<div class="col-md-4">'
////
////        for (var j = 0; j < gamesData[i].images.length; j++)
////        {
////            var imageString = 'res/games/' + gamesData[i].images[j]
////            contentHtml += '<img src="' + imageString + '", class="img-fluid" alt="' + imageString + '">'
////        }
////
////        contentHtml += '</div>'
////
////        contentHtml += '<div class="col-md-8">'
////
////        for (var j = 0; j < gamesData[i].text.length; j++)
////        {
////            contentHtml += '<p>' + gamesData[i].text[j] + '</p>'
////            if (j !== 0)
////            {
////                contentHtml += "<hr>"
////            }
////        }
////
////        contentHtml += '</div>'
////
////        contentHtml += "</div>"
////
////        console.log(contentHtml)
////        console.log(tabContent)
////        tabContent.append(contentHtml)
////    }
//

