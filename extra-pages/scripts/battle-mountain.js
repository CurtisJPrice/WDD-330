const sharedImages = { 
    mountain: "https://stateparks.oregon.gov/index.cfm?do=image.get&name=DSCN1409.JPG&park=173&fit=cover&w=1200&h=600"
};

const temples = [
    {
        templeName: "Battle Mountain Forest State Scenic Corridor",
        imageUrl: sharedImages.mountain // Reference the shared image
    },
    {
        templeName: "Park Information",
        location: "Historic Columbia River Hwy, Cascade Locks, OR",
        describe: "Battle Mountain Forest State Scenic Corridor -- located on U.S. 395 nine miles north of Ukiah -- was purchased to protect the forest of ponderosa pine, larch, Douglas fir and spruce. It provides prime habitat for all kinds of wildlife. The name commemorates one of the last battles between native Americans and settlers in eastern Oregon. This confrontation took place near the park. The park also served as a Civilian Conservation Corps camp, whose members constructed the water system, installed picnic tables and built the large granite stone fireplace still available for use in the park. The park offers a convenient place to gather for summer visitors. Spring brings with it the beauty of abundant wildflowers and wildlife. Many people enjoy the many species of birds in the park throughout the spring and summer. Whether you are traveling the highway and need a place to stretch your legs, or are looking for a place to have a family reunion or get together for a large group, be sure and consider Battle Mountain.",
        dedicated: "1975",
        area: 2,
    },
    {
        templeName: "Source Link",
        sourceUrl: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=173",
        descriptionLink: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=173",
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
