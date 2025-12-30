const current = document.querySelector('.current a');
if (current) {
    current.setAttribute('role', 'button');
}


/* nav mobile */

const headerMobileBtn = document.querySelector('.header-mobile-btn');
const headerNav = document.querySelector('.header-nav');

headerMobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerNav.classList.toggle('hide-mobile');
});


/*dropdown icon */

const media = window.matchMedia("(min-width: 1200px)");


if (document.querySelector('.wSub')) {

    if (media.matches) {
        document.querySelectorAll('.wSub').forEach(menuItem => {

            menuItem.querySelector('a').insertAdjacentHTML('beforeend', '<i class="fas fa-chevron-down fa-xs" style="margin-left:5px"></i>');

        })
    } else {

        document.querySelectorAll('.wSub').forEach(menuItem => {

            menuItem.querySelector('a').insertAdjacentHTML('afterend', '<button class="showDropdown"><i class="fas fa-chevron-down fa-xs"></i></button>');

        })

    };


};



if (document.querySelector('.showDropdown')) {

    document.querySelectorAll('.showDropdown').forEach((x, i) => {


        x.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.querySelectorAll('.subMenu')[i].style.display === 'none' || document.querySelectorAll('.subMenu')[i].style.display === '') {
                document.querySelectorAll('.subMenu')[i].style.display = "flex";
            } else {
                document.querySelectorAll('.subMenu')[i].style.display = "none";
            }
        })


    });

};

/* Glossary Definition System */
(function() {
    // Create definition panel HTML
    const panelHTML = `
        <div class="definition-panel-overlay"></div>
        <div class="definition-panel">
            <button class="definition-close" aria-label="Close definition">&times;</button>
            <div class="definition-term"></div>
            <div class="definition-content"></div>
        </div>
    `;
    
    // Add panel to body
    document.body.insertAdjacentHTML('beforeend', panelHTML);
    
    const panel = document.querySelector('.definition-panel');
    const overlay = document.querySelector('.definition-panel-overlay');
    const closeBtn = document.querySelector('.definition-close');
    const termEl = document.querySelector('.definition-term');
    const contentEl = document.querySelector('.definition-content');
    
    // Open definition
    function openDefinition(term, definition) {
        termEl.textContent = term;
        contentEl.textContent = definition;
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close definition
    function closeDefinition() {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Click handlers for definition terms
    document.addEventListener('click', function(e) {
        if (e.target.closest('.def-term')) {
            e.preventDefault();
            const term = e.target.closest('.def-term');
            const termText = term.textContent.trim();
            const definition = term.getAttribute('data-definition');
            openDefinition(termText, definition);
        }
    });
    
    // Close button
    closeBtn.addEventListener('click', closeDefinition);
    
    // Click overlay to close
    overlay.addEventListener('click', closeDefinition);
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closeDefinition();
        }
    });
})();
