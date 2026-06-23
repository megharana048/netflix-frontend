document.addEventListener("DOMContentLoaded", () => {
    // 0. SET HERO BANNER BACKGROUND IMAGE BASED ON CURRENT PAGE
    const heroBanner = document.querySelector(".hero-banner");
    const getPageKey = () => {
        const page = window.location.pathname.split("/").pop().toLowerCase();
        switch (page) {
            case "index.html":
            case "":
                return "home";
            case "tv-shows.html":
                return "tvShows";
            case "movies.html":
                return "movies";
            case "games.html":
                return "games";
            case "new-popular.html":
                return "newPopular";
            case "my-list.html":
                return "myList";
            default:
                return "home";
        }
    };

    const currentPage = getPageKey();
    if (heroBanner && window.pageHeroImages) {
        const heroImage = window.pageHeroImages[currentPage] || window.pageHeroImages.home;
        heroBanner.style.backgroundImage = `url('${heroImage}')`;
    }

    // 1. SCROLL EFFECT ON NAVBAR
    const navbar = document.getElementById("main-nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("nav-black");
        } else {
            navbar.classList.remove("nav-black");
        }
    });

    // 2. MOBILE RESPONSIVE BROWSE DROPDOWN TOGGLE
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show-mobile-menu");
        });
    }

    // 3. GENERATE ALL CAROUSEL TRACK ROWS
    const container = document.getElementById("carousel-container");
    if (!container) return;

    const categories = window.pageCategories?.[currentPage] || movieCategories;

    categories.forEach((category) => {
        const row = document.createElement("div");
        row.className = "movie-row";

        // Tripled items pool inside arrays ensures endless width track content
        const postersHTML = [...category.images, ...category.images, ...category.images].map((imgSrc) => `
            <img class="row-poster" src="${imgSrc}" alt="Movie Card" />
        `).join('');

        row.innerHTML = `
            <h2 class="row-title">${category.title}</h2>
            <div class="row-wrapper">
                <button class="slider-arrow left-arrow" aria-label="Scroll Left">&#8249;</button>
                <div class="row-posters">
                    ${postersHTML}
                </div>
                <button class="slider-arrow right-arrow" aria-label="Scroll Right">&#8250;</button>
            </div>
        `;
        container.appendChild(row);
    });

    // 4. DYNAMIC SLIDER ARROW SCROLL CONTROLLERS
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("slider-arrow")) {
            const wrapper = e.target.closest(".row-wrapper");
            const track = wrapper.querySelector(".row-posters");
            const scrollDistance = track.clientWidth * 0.75; 

            if (e.target.classList.contains("left-arrow")) {
                track.scrollBy({ left: -scrollDistance, behavior: "smooth" });
            } else {
                track.scrollBy({ left: scrollDistance, behavior: "smooth" });
            }
        }
    });
});