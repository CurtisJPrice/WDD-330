const temples = [
    {
        templeName: "Ainsworth State Park",
        location: "Historic Columbia River Hwy, Cascade Locks, OR",
        describe: "A tract of 40 acres was donated in 1933 by John C. Ainsworth and his wife, Alice. Additional land was purchased in 1947 and 1966. Original picnic facilities and trails were constructed in 1935 by Civilian Conservation Corps workers. John Churchill Ainsworth (1870-1943) was a prominent Oregon businessman and banker (U. S. National Bank) in Portland. He served as chairman of the State Highway Commission 1931-1932 and was the son of Captain J. C. Ainsworth, pioneer steam-boatman and founder of the Oregon Steam Navigation Company.",
        sourceUrl:
            "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=105",
        dedicated: "1935",
        area: 4,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=ainsworth-0006083505.jpg&park=105&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Alderwood State Wayside",
        location: "Cheshire, OR, Lane County",
        describe: "Purchased from Lane County in 1931. Day-use picnic facilities were originally developed by the Civilian Conservation Corps around 1935. According to local lore, during the prohibition era (1920s), liquor was distilled clandestinely at a nearby location called Burp Holler. In 1961, the name was briefly considered for application to the wayside but the proposal was unsuccessful.",
        sourceUrl:
            "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=59",
        dedicated: "1931",
        area: 0.000171875,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=alderwood1120920.jpg&park=59&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Agate Beach State Recreation Site",
        location: "Agate Beach State Wayside, Newport, OR",
        describe: "Diggers, this park's for you! Razor clamming is a favorite activity as well as surfing. If you plan to visit prime Newport attractions like the Oregon Coast Aquarium and Hatfield Marine Science Center, you must stop in for a refreshing picnic at Agate Beach. Agate Beach Wayside is situated between the new and old highway 101. There is a large parking lot with room for trailer parking. The beach access trail consists of a tunnel that goes underneath the old highway 101 to a large sandy beach area.",
        sourceUrl:
            "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=152",
        dedicated: "1956",
        area: 0.172,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=IMG_4295.jpg&park=152&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Angel's Rest Trailhead",
        location: "Corbett, OR",
        describe: "Oregon State Parks owns the four miles of trail that pass through Shepperd's Dell State Natural Area, which was acquired by gift, exchange and purchase between 1940 and 1984. The original tract of land, including the dell, was given first to the city of Portland in 1915 by George G. Shepperd as a memorial to his wife. Later the city gifted the tract to the state.",
        sourceUrl: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=219",
        dedicated: "1979",
        area: 4.8,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=Angel_s_Rest112050.jpg&park=219&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Battle Mountain Forest State Scenic Corridor",
        location: "World War I Veterans Mem Hwy, Pilot Rock, OR 97868",
        describe: "Battle Mountain Forest State Scenic Corridor -- located on U.S. 395 nine miles north of Ukiah -- was purchased to protect the forest of ponderosa pine, larch, Douglas fir and spruce. It provides prime habitat for all kinds of wildlife. The name commemorates one of the last battles between native Americans and settlers in eastern Oregon. This confrontation took place near the park. The park also served as a Civilian Conservation Corps camp, whose members constructed the water system, installed picnic tables and built the large granite stone fireplace still available for use in the park. The park offers a convenient place to gather for summer visitors. Spring brings with it the beauty of abundant wildflowers and wildlife. Many people enjoy the many species of birds in the park throughout the spring and summer.",
        sourceUrl:
            "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=173",
        dedicated: "1933",
        area: 2.5,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=DSCN1409.JPG&park=173&fit=cover&w=1200&h=600"
    },
    {
        templeName: "Bolon Island Tideways State Scenic Corridor",
        location: "Bolon Island Tideways State Scenic Corridor, Reedsport, OR",
        describe: "This park is a quiet place with a hiking trail that extends half way around the island. The shoreline along the Umpqua River side of the park has been home to hundreds of Double Crested Cormorants since 1988.  The birds nest close together, each pair building a platform of sticks in the trees.  Such rookeries are usually too remote for easy viewing, which makes Bolon Island Day Use area so unique! The trail also provides a nice view of the Umpqua River.",
        sourceUrl:
            "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=80",
        dedicated: "1967",
        area: 0.01875,
        imageUrl:
            "https://stateparks.oregon.gov/index.cfm?do=image.get&name=Untitled-1071756.jpg&park=80&fit=cover&w=1200&h=600"
    },

];



document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModifiedDate;

    // Hamburger menu functionality
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
    const links = document.querySelectorAll('nav ul li a');

    function updateTitle(filter) {
        const titleElement = document.querySelector('main h2');
        const capitalizedFilter = filter.charAt(0).toUpperCase() + filter.slice(1);
        titleElement.textContent = capitalizedFilter + ' Parks List';
    }

    function displayTemples(filter) {
        templeContainer.innerHTML = '';
        let filteredTemples = temples;

        if (filter === 'old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 1970);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 3);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 1);
        }

        updateTitle(filter);

        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            const templeImage = document.createElement('img');
            templeImage.src = temple.imageUrl;
            templeImage.alt = temple.templeName;
            templeImage.loading = 'lazy';

            const templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            const templeLocation = document.createElement('p');
            templeLocation.textContent = `Park Location: ${temple.location}`;

            const templeDescribe = document.createElement('p');
            templeDescribe.textContent = `Park Description: ${temple.describe}`;

            const templeSource = document.createElement('p');
            templeSource.textContent = `Source: ${temple.sourceUrl}`;

            const templeDedicated = document.createElement('p');
            templeDedicated.textContent = `Park Founded: ${temple.dedicated}`;

            const templeArea = document.createElement('p');
            templeArea.textContent = `Area: ${temple.area} miles`;

            templeCard.appendChild(templeImage);
            templeCard.appendChild(templeName);
            templeCard.appendChild(templeLocation);
            templeCard.appendChild(templeDescribe);
            templeCard.appendChild(templeSource);
            templeCard.appendChild(templeDedicated);
            templeCard.appendChild(templeArea);

            templeContainer.appendChild(templeCard);
        });
    }

    displayTemples('home');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            displayTemples(filter);
        });
    });
});