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
    }
})