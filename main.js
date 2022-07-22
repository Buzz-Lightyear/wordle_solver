function new_game() {
    text_boxes = document.getElementsByClassName("box");
    for (var i = 0; i < text_boxes.length; i++) {
        text_boxes[i].value="";
        text_boxes[i].style.backgroundColor="white";
    }
}