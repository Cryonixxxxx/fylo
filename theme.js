const toggle = document.getElementById("themeToggle");

// check opgeslagen theme
const savedTheme = localStorage.getItem("theme");

// APPLY THEME
if (savedTheme === "light") {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}

// SYNC SLIDER MET THEME (BELANGRIJK)
if (toggle) {
    toggle.checked = (savedTheme === "light");

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.body.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    });
}