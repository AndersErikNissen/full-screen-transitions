//JS by Anders Erik Nissen
//UCN MMDA0920

const 
btn = document.querySelector("#button"),
t1_container = document.querySelector("#transition1__container");

btn.addEventListener("click", ()=> {
    console.log("asf")
    if (!t1_container.classList.contains("active")) {
        t1_container.classList.add("active")
        if (t1_container.classList.contains("inactive")) {
            t1_container.classList.remove("inactive")
        }
    } else {
        t1_container.classList.add("inactive")
        t1_container.classList.remove("active")
    }
})





console.log("        /\\       _______   ___    __ ")
console.log("       /  \\     |   ____| |   \\  |  |")
console.log("      / /\\ \\    |  |____  |    \\ |  |")
console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
console.log("    / /____\\ \\  |  |____  |  | \\    |")
console.log("   /_/      \\_\\ |_______| |__|  \\___|")