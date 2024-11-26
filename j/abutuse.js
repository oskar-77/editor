function toggleSubMenu(mainPoint) {
    const subMenu = mainPoint.querySelector("ul");
    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
}

function showContent(contentId) {
    document.querySelectorAll(".content").forEach(content => {
        content.style.display = "none";
    });
    document.getElementById(contentId).style.display = "block";
}
function word(){
    document.getElementById('1.1').textContent = "HTML Code Editor and Viewer";
    document.getElementById('1.3').textContent = "Note : This is a beta version, contact us for your feedback.";
    document.getElementById('1.2').textContent = "Now an editor and a direct view of HTML, CSS and JavaScript codes on your phone.";


}
word();