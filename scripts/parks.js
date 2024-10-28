const temples = [
    {
        templeName: "Ainsworth State Park",
        sourceUrl: "extra-pages/ainsworth.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=ainsworth-0006083505.jpg&park=105&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Alderwood State Wayside",
        sourceUrl: "extra-pages/alderwood.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=alderwood1120920.jpg&park=59&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Agate Beach State Recreation Site",
        sourceUrl: "extra-pages/agate.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=IMG_4295.jpg&park=152&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Angel's Rest Trailhead",
        sourceUrl: "extra-pages/angels-rest.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=Angel_s_Rest112050.jpg&park=219&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Battle Mountain Forest State Scenic Corridor",
        sourceUrl: "extra-pages/battle-mountain.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=DSCN1409.JPG&park=173&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Bolon Island Tideways State Scenic Corridor",
        sourceUrl: "extra-pages/bolon-island.html",
        imageUrl: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=Untitled-1071756.jpg&park=80&fit=cover&w=1200&h=600"
    }
];




document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModifiedDate;

    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    nav.prepend(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.textContent = nav.classList.contains('open') ? '✖' : '☰';
    });

    const templeContainer = document.getElementById('temple-container');

    function displayTemples() {
        // Clear the existing content
        templeContainer.innerHTML = '';

        // Update title
        const titleElement = document.querySelector('main h2');
        titleElement.textContent = 'All Parks List';

        // Display all temples
        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            const imageLink = document.createElement('a');
            imageLink.href = temple.sourceUrl; // Use the sourceUrl for the link
            imageLink.target = '_blank';

            const templeImage = document.createElement('img');
            templeImage.src = temple.imageUrl; // Use the imageUrl
            templeImage.alt = temple.templeName; // Alt text from templeName
            templeImage.loading = 'lazy';

            imageLink.appendChild(templeImage);
            templeCard.appendChild(imageLink);

            const templeName = document.createElement('h3');
            const nameLink = document.createElement('a');
            nameLink.href = temple.sourceUrl; // Same sourceUrl for the name link
            nameLink.target = '_blank';
            nameLink.textContent = temple.templeName; // Use templeName

            templeName.appendChild(nameLink);
            templeCard.appendChild(templeName);

            templeContainer.appendChild(templeCard);
        });
    }

    // Call displayTemples to show the temples
    displayTemples();
});
