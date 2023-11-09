const dark = (root, darkButton, lightButton) => {
    root.style.setProperty('--primary-color', "#191919");
    root.style.setProperty('--secondary-color', "#333");
    root.style.setProperty('--third-color', "#044c7c");
    root.style.setProperty('--fourth-color', "#555");
    root.style.setProperty('--fifth-color', "#dedede");

    lightButton.style.display = "none";
    darkButton.style.display = "inline";
}

const light = (root, lightButton, darkButton) => {
    root.style.setProperty('--primary-color', "#fff");
    root.style.setProperty('--secondary-color', "#dedede");
    root.style.setProperty('--third-color', "#61befb");
    root.style.setProperty('--fourth-color', "#aeaeae");
    root.style.setProperty('--fifth-color', "#000");
    root.style.setProperty('theme', 'light');

    darkButton.style.display = "none";
    lightButton.style.display = "inline";
}

export const darklight = () => {
    let root = document.querySelector(":root")
    let lightButton = document.querySelector(".nav__theme--dark");
    let darkButton = document.querySelector(".nav__theme--light");

    
    lightButton.addEventListener('click', () => {
        dark(root, darkButton,  lightButton);
    });

    darkButton.addEventListener('click', () => {      
        light(root, lightButton, darkButton);
    });

}

