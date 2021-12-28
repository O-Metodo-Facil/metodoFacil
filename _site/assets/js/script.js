
function openChapterMenu() {
    var chapterContainer= document.getElementById("chapter-container");
    if (chapterContainer.style.display == "block") {
            chapterContainer.style.display = "none";
    } else {
        chapterContainer.style.display = "block";
    }
}

function toggleNight() {
    var navNight = document.getElementById("nav-night");
    var body = document.body;

    navNight.classList.toggle('night');
    body.classList.toggle('nightmode');
    console.log(navNight);
}