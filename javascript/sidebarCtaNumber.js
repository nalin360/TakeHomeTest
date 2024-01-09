
const fonstsizetoogle = ()=> {
    
    const numberElement = document.querySelector('.sidebar-cta__number');
    var observer = new IntersectionObserver(function(entries) {
    
        numberElement.style.fontWeight = '800'; // Increase font weight

        setTimeout(() => {
          numberElement.style.fontWeight = '700'; // Revert to normal font weight
        }, 2000); 
        
    }, { threshold: 0.5 });

    observer.observe(numberElement);
  };



 
document.addEventListener("DOMContentLoaded", fonstsizetoogle);