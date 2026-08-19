function sublist() {
    const opener = document.querySelector(".colSubList")
    const menu = document.querySelector("#colleges");

    opener.addEventListener('mouseover', () => {
        menu.style.display = "flex";
    });
}

sublist();