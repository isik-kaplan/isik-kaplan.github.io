(function () {
    let html =  document.getElementsByTagName("html")[0];
    let darkModeToggler = document.getElementsByClassName("invert-button")[0];
    darkModeToggler.addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            html.classList.toggle("dark");
            if (html.classList.contains("dark")) {
                window.localStorage.setItem("mode", "dark")
            } else {
                window.localStorage.setItem("mode", "light")
            }
        }
    )
}());