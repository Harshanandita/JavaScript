function getRandomColor(flag) {
    let color = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    let opacity = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    if (flag === false) return `#${color}`;
    return `#${color}${opacity}`;
}

function applyRandomColor() {
    document.querySelectorAll(".box").forEach(element => {
        let backgroundColor = getRandomColor(true);
        let color = getRandomColor(false);
        element.style.backgroundColor = backgroundColor;
        element.children[1].style.color = backgroundColor;
        element.children[1].innerText = backgroundColor;
        element.children[0].style.color = color;
        element.children[0].innerText = color;
    });
}

function visible() {
    document.querySelectorAll(".box").forEach(box => box.classList.remove("visible"));
    document.querySelectorAll(".box")[Math.floor(Math.random() * 5)].classList.add("visible");   
}

document.querySelectorAll(".box span").forEach(span => {
    span.style.cursor = "pointer"; 
    span.addEventListener("click", () => {
        navigator.clipboard.writeText(span.innerText)
            .then(() => {
                span.classList.add("copied");
                setTimeout(() => span.classList.remove("copied"), 2000);
            })
            .catch(error => console.error(error));
    });
});

let interval;
let active = true;

function startInterval() {
    interval = setInterval(() => {
        applyRandomColor();
        visible();
    }, 1000);
}

startInterval();

function stopInterval() {
    clearInterval(interval);
}

function toggleInterval(event) {
    if (event.target.tagName === "SPAN") {
        return;
    }

    if (active) {
        stopInterval();
    } 
    else {
        startInterval();
    }
    active = !active;
}

document.addEventListener("click", toggleInterval);