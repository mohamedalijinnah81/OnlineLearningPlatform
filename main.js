const expand = document.getElementById("courses");
expand.style.display = "none";
function showAll() {
    console.log(expand.style.display);
    if(expand.style.display === "none") {
        expand.style.display = "";
    }
    else {
        expand.style.display = "none";
    }
}