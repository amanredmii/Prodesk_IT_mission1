const theme = document.getElementById("theme");

theme.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.innerText = "change theme ☀️";
    } else {
        theme.innerText = "change theme 🌙";
    }
});





