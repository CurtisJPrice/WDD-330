const sharedImages = { 
    alderwood: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=alderwood1120920.jpg&park=59&fit=cover&w=1200&h=600"
};

const temples = [
    {
        templeName: "Alderwood State Wayside",
        imageUrl: sharedImages.alderwood // Reference the shared image
    },
    {
        templeName: "Park Information",
        location: "Oregon Parks and Recreation Department 725 Summer Street NE Suite C Salem OR",
        describe: "Large trees characterize this forested park along Hwy 36 between Junction City and Triangle Lake. There's a picnic area, restroom, and short trail along the Long Tom River. Bring a lunch and relax!",
        dedicated: "1939",
        area: 0.022,
    },
    {
        templeName: "Source Link",
        sourceUrl: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=59",
        descriptionLink: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=59",
    },
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

        // Optionally set the title (commented out for now)
        // const titleElement = document.querySelector('main h2');
        // titleElement.textContent = 'All Parks List';

        // Display all temples
        temples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            // Only create the image link if an imageUrl exists
            if (temple.imageUrl) {
                const imageLink = document.createElement('a');
                imageLink.href = temple.sourceUrl || '#'; // Fallback to '#' if no sourceUrl
                imageLink.target = '_blank';

                const templeImage = document.createElement('img');
                templeImage.src = temple.imageUrl;
                templeImage.alt = temple.templeName || 'Temple Image';
                templeImage.loading = 'lazy';

                imageLink.appendChild(templeImage);
                templeCard.appendChild(imageLink);
            }

            const templeName = document.createElement('h3');
            const nameLink = document.createElement('a');
            nameLink.href = temple.sourceUrl || '#'; // Fallback to '#' if no sourceUrl
            nameLink.target = '_blank';
            nameLink.textContent = temple.templeName || 'Unnamed Temple'; // Fallback text

            templeName.appendChild(nameLink);
            templeCard.appendChild(templeName);

            // Additional details (only append if the property exists)
            if (temple.location) {
                const templeLocation = document.createElement('p');
                templeLocation.textContent = `Park Location: ${temple.location}`;
                templeCard.appendChild(templeLocation);
            }

            if (temple.describe) {
                const templeDescribe = document.createElement('p');
                templeDescribe.textContent = `Park Description: ${temple.describe}`;
                templeCard.appendChild(templeDescribe);
            }

            if (temple.dedicated) {
                const templeDedicated = document.createElement('p');
                templeDedicated.textContent = `Park Founded: ${temple.dedicated}`;
                templeCard.appendChild(templeDedicated);
            }

            if (temple.area) {
                const templeArea = document.createElement('p');
                templeArea.textContent = `Area: ${temple.area} miles`;
                templeCard.appendChild(templeArea);
            }

            // Create a link for the Source Link section without a label
            if (temple.descriptionLink && temple.sourceUrl) {
                const linkElement = document.createElement('p');
                const link = document.createElement('a');
                link.href = temple.sourceUrl;
                link.textContent = temple.descriptionLink; // Adjust text if needed
                link.target = '_blank';
                linkElement.appendChild(link);
                templeCard.appendChild(linkElement);
            }

            templeContainer.appendChild(templeCard);
        });
    }

    // Call displayTemples to show the temples
    displayTemples();
});
