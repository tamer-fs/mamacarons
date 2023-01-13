function toggleDropdown() {
    let dropdown = document.getElementById("dropdown-content");
    if (dropdown.style.left === "0px") {
        dropdown.style.left = "-200vw";
    } else {
        dropdown.style.left = "0px";
    }
}

function home() {
    let dropdown = document.getElementById("dropdown-content");
    dropdown.style.left = "-200vw";
}