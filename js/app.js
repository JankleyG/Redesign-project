$(document).foundation()
$('.clickOn').delegate("clickOn","click", function() {
var id = $(this).attr('thisid')
     if ( thisid == "clickImg" ) {
-webkit-filter:grayscale(0%);
       filter: grayscale(0%);
     }
 });

 var link = document.createElement('a');
 link.textContent = 'Index Page';
 link.href = 'index.html';
 document.getElementById('indexLink').appendChild(link);
