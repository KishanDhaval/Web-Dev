let keys = document.querySelectorAll(".key");
let display = document.querySelector(".display");
let num1, num2, operator;

keys.forEach((key) => {
    key.addEventListener("click", () => {
        let id = key.getAttribute("id");
        if (!isNaN(id)) {
            // If it's a number
            num1 = id;
            set_display(key.innerText);
        } else if (id === "+" || id === "-" || id === "/" || id === "*") {
            // If it's an operator
            operator = id;
            set_display(key.innerText);
        } else if (id === "=") {
            getResult();
        } else {
            clearDisplay();
        }
        add_shadow(key);
        remove_shadow(key);
    });
});

let add_shadow = (key) => {
    key.classList.add("keyshadow");
};

let remove_shadow = (key) => {
    setTimeout(() => {
        key.classList.remove("keyshadow");
    }, 10);
};

let set_display = (id) => {
    display.innerText += id;
};

let getResult = () => {
    // Split the display text into parts based on the operator
    let parts = display.innerText.split(operator);

    // Parse the numbers
    num1 = parseFloat(parts[0]);
    num2 = parseFloat(parts[1]);

    // Perform the operation based on the operator
    switch (operator) {
        case "+":
            display.innerText = num1 + num2;
            break;
        case "-":
            display.innerText = num1 - num2;
            break;
        case "*":
            display.innerText = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                display.innerText = num1 / num2;
            } else {
                display.innerText = "Error";
            }
            break;
        default:
            display.innerText = "Error";
            break;
    }
};

let clearDisplay = () => {
    display.innerText = "";
};
let stepBack=()=>{
    display.innerText = display.innerText.slice(0, -1);
}

// Event listener for keyboard input
window.addEventListener("keydown", function (event) {
    // Check if the key pressed is a number key (0-9)
    if (!isNaN(event.key)) {
        set_display(event.key);
    } else if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*") {
        operator = event.key;
        set_display(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        getResult();
    }
    else if(event.key==="Backspace"){
        if(display.innerText==="Error" || display.innerText==="NaN"){
            clearDisplay()
        }else{
            stepBack()
        }
    }

});
