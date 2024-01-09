document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadImages = document.querySelectorAll(".lazy-load");
  
    function lazyLoad() {
      lazyLoadImages.forEach(function(img) {
        if (img.getBoundingClientRect().top < window.innerHeight && !img.classList.contains("loaded")) {
          img.src = img.getAttribute("data-src");
          img.classList.add("loaded");
        }
      });
    }
  
    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  
    // Trigger lazy load on initial load
    lazyLoad();
  });
  
