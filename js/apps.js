/********image gallery lightbox********/
//make an overlaying lightbox
var $lightbox = $('<div id="lightbox"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add img to lightbox
$lightbox.append($image);

//add caption to lightbox after img
$lightbox.append($caption);

//add the whole thing to the document
$("body").append($lightbox);

//when user clicks a picture
$("#gallery a").click(function(event){
  
    //do not follow deadend link
    event.preventDefault();
  
    //get the link for the lightbox
    var href = $(this).attr("href");
  
    //update the image with the href link
    $image.attr("src", href);
    
    //get the image's alt attribute to set the caption
    var caption = $(this).children("img").attr("alt");
    
    //set the caption to the image's alt attribute
    $caption.text(caption);
    
    //now it is ready, show the lightbox!
    $lightbox.show();
})

//when user clicks the lightbox
$($lightbox).click(function(){

    //hide the lightbox
    $($lightbox).hide();
})
