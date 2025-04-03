function toggleHeart() {
    var paper = document.getElementById("paper");
    var text = document.getElementById("text");
    if (paper.classList.contains("show")) {
        paper.classList.remove("show");
        text.style.display = "block";
    } else {
        paper.classList.add("show");
        text.style.display = "none";
    }
}
setTimeout(() => {
    const congratulationsDiv = document.querySelector('.Congratulations');
    congratulationsDiv.style.display = 'block';
}, 3000);