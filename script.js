async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const headerHtml = await response.text();
        document.getElementById('header-container').innerHTML = headerHtml;
        setActiveLink();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}
loadHeader();


function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split('/').pop(); // Get the current page name
    const links = document.querySelectorAll('.button-container a');
    
    links.forEach(link => {
        const button = link.querySelector('button');
        if (link.getAttribute('href') === page) {
            button.classList.add('active');
        }
    });

    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    
    dropdownLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}