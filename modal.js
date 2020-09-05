var section = document.querySelector("section"),
    modal = document.querySelector(".modal"),
    close = document.querySelector(".close"),
    btn = document.querySelector(".open");

btn.addEventListener("click", modalAppear);

function modalAppear() {
    modal.style.display = "block";
    section.style.filter = "blur(4px)";
}

close.addEventListener("click", modalDisappear);

function modalDisappear() {
    modal.style.display = "none";
    section.style.filter = "blur(0px)";
}