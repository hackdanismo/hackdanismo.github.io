// Ensure the page content does not get hidden below the Navigation/Header
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header")
    const main = document.querySelector("main")

    function adjustMainPadding() {
        const headerHeight = header.offsetHeight
        main.style.paddingTop = `${headerHeight}px`;
    }

    // Run on page load
    adjustMainPadding()

    // Run on window resize to adjust dynamically
    window.addEventListener("resize", adjustMainPadding)
})

// Navigation/Header scroll
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0
    const header = document.querySelector("header")
    const scrollThreshold = 50 // Only hide header when scrolling down past 50 pixels

    window.addEventListener("scroll", function() {
        let currentScroll = window.scrollY || documentElement.scrollTop

        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // Scroll down
            header.classList.add("header-hide")
        } else if (currentScroll < lastScrollTop) {
            // Scroll up
            header.classList.remove("header-hide")
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll // Prevent negative values
    }, false)
})

// Toggle Switch
const toggleSwitch = document.querySelector(".js-theme-toggle");

// Check if the user has already selected a theme before
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

// Toggle the theme on checkbox change
toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Store preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        document.body.removeAttribute("class");
    }
})