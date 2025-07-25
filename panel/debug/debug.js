Array.from(document.querySelectorAll("div.button")).forEach(element => {
    element.setAttribute("tabindex", "0");
    element.setAttribute("role", "button");
    element.setAttribute("onkeydown", "if (event.key === 'Enter' || event.key === ' ') this.click();");
    element.addEventListener("mouseenter", () => {
        element.innerText = element.innerText.replace(/^\[/g, ">").replace(/\]$/g, "<");
    });
    element.addEventListener("mouseleave", () => {
        element.innerText = element.innerText.replace(/^\>/g, "[").replace(/\<$/g, "]");
    });
    element.addEventListener("click", () => {
        element.blur();
    });
});
Array.from(document.querySelectorAll("div.checkbox")).forEach(element => {
    element.setAttribute("tabindex", "0");
    element.setAttribute("role", "button");
    element.setAttribute("onkeydown", "if (event.key === 'Enter' || event.key === ' ') this.click();");
    element.addEventListener("click", () => {
        if (element.classList.contains("on")) {
            element.classList.remove("on");
            element.querySelector(":scope>span>span").innerText = element.querySelector(":scope>span>span").innerText.replace("x", " ");
        } else {
            element.classList.add("on");
            element.querySelector(":scope>span>span").innerText = element.querySelector(":scope>span>span").innerText.replace(" ", "x");
        }
        element.blur();
    });
});