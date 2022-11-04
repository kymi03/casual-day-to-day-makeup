document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    var thumbnailElement1 = document.getElementById("smart_thumbnail1");
    var thumbnailElement2 = document.getElementById("smart_thumbnail2");
    var thumbnailElement3 = document.getElementById("smart_thumbnail3");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className=="small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }   
      });
    thumbnailElement1.addEventListener("click", function() {
        if (thumbnailElement1.className=="small") {
            thumbnailElement1.className = "";
        } else {
            thumbnailElement1.className = "small";
        }   
      });
    thumbnailElement2.addEventListener("click", function() {
        if (thumbnailElement2.className=="small") {
            thumbnailElement2.className = "";
        } else {
            thumbnailElement2.className = "small";
        }   
      });
    thumbnailElement3.addEventListener("click", function() {
        if (thumbnailElement3.className=="small") {
            thumbnailElement3.className = "";
        } else {
            thumbnailElement3.className = "small";
        }   
      });
    
});