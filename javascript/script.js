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
                // Toggle the display property
                paragraph.style.display = (paragraph.style.display === displayNone || paragraph.style.display === '') ? displayBlock : displayNone;
            });
            showDescriptionBtn.classList.toggle('collapsed');
        });

        
    }
}



document.addEventListener('DOMContentLoaded', toggleDescription());
