let boxes = document.querySelectorAll(".box");
let empty = 4;

let doIt = (box) => {
    let id = parseInt(box.getAttribute("id"));

    if (id == 1) {
        if (empty == 2 || empty == 3) { // Allow moving to the right or down
            if (empty == 2) {
                box.style.transform = 'translateX(250px)';
            } else {
                box.style.transform = 'translateY(250px)';
            }
            let temp = id;
            box.setAttribute("id", empty);
            empty = temp;
        }
    } else if (id == 2) {
        if (empty == 1 || empty == 4) { // Allow moving to the left or down
            if (empty == 1) {
                box.style.transform = 'translateX(-250px)';
            } else {
                box.style.transform = 'translateY(250px)';
            }
            let temp = id;
            box.setAttribute("id", empty);
            empty = temp;
        }
    } else if (id == 3) {
        if (empty == 1 || empty == 4) { // Allow moving to the up or right
            if (empty == 1) {
                box.style.transform = 'translateY(-250px)';
            } else {
                box.style.transform = 'translateX(250px)';
            }
            let temp = id;
            box.setAttribute("id", empty);
            empty = temp;
        }
    }
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("clicked");
        let l = box.getAttribute("id");
        console.log(l);
        doIt(box);
    });
});
