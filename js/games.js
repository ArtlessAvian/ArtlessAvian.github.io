var app = angular.module("tabStuff", [])
app.controller("tabController", function($scope){
    $scope.entries = gamesData
})

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

