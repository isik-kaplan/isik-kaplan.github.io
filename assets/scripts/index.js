import("./common/initial.js");

function main() {
    let link = document.getElementsByClassName("representation")[0];
    Array.from(document.getElementsByClassName("connections-wrapper")[0].children).forEach(function (item) {
        item = item.children[0];
        item.addEventListener(
            'click',
            function (event) {
                event.preventDefault();
                link.innerHTML = item.getAttribute('data-href');
                link.target = item.target;
                link.href = item.href;
                link.rel = item.rel;
            }
        )
    });
}

document.addEventListener("DOMContentLoaded", function () {
    import("./common/dark_mode.js");
    main();
});
