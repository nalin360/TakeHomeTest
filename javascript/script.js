function toggleDescription() {
    const buttonSelector = '.show-description';
    const sidebarContentSelector = '.sidebar-grid__content p:nth-last-child(-n + 3)';
    const displayNone = 'none';
    const displayBlock = 'block';

    const showDescriptionBtn = document.querySelector(buttonSelector);

    if (showDescriptionBtn) {
    
   
        showDescriptionBtn.addEventListener('click', () => {
            
            var hiddenParagraphs = document.querySelectorAll(sidebarContentSelector);
                        hiddenParagraphs.forEach(function(paragraph) {
                // Toggle the display property for discription
                paragraph.style.display = (paragraph.style.display === displayNone || paragraph.style.display === '') ? displayBlock : displayNone;
            });
            showDescriptionBtn.classList.toggle('collapsed');

            // Change the text content of the span based on the 'collapsed' class
            const toggleTextSpan = showDescriptionBtn.querySelector('.toggle-text');
            const buttonText = showDescriptionBtn.classList.contains('collapsed') ? 'Show Less' : 'Show More';
            toggleTextSpan.textContent = buttonText;
        });
    }
}



document.addEventListener('DOMContentLoaded', toggleDescription());
