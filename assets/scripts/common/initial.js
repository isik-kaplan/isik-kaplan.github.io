(function () {
    let html = document.getElementsByTagName("html")[0];
    let mode = window.localStorage.getItem("mode");
    if (mode === "dark") {
        html.classList.add("dark")
    } else if (mode === "light") {
        html.classList.remove("dark")
    }
}());