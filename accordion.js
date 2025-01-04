const headers = document.querySelectorAll(".card-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const currentlyOpen = document.querySelector(".card-body[style*='display: block']");

        if (currentlyOpen && currentlyOpen.previousElementSibling !== header) {
            currentlyOpen.style.display = "none";
        }

        const body = header.nextElementSibling;
        const isBodyOpen = body.style.display === "block";

        body.style.display = isBodyOpen ? "none" : "block";
    });
});
