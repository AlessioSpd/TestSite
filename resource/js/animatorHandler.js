var check = false;

function logoUp () {
    
    if(!check){
        document.getElementById("mainPanel").style = `
            animation-name: logoUp, fadeIn;
            animation-duration: 2s, 2s;
            animation-delay: 0s, .5s;
            animation-fill-mode: forwards;
        `;
        
        document.getElementById("nav").style = `
            animation-name: navResize;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        `;
        
        document.getElementById("logo").style = `
            animation-name: logoResize;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;
        
        document.getElementById("rightButton").style = `
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;    
        
        document.getElementById("leftButton").style = `
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;
    }
    
}

window.addEventListener('load', (event) => {

    if(check) {
        document.getElementById("mainPanel").style = `
            animation-name: logoUp, fadeIn;
            animation-duration: 2s, 2s;
            animation-delay: 0s, .5s;
            animation-fill-mode: forwards;
        `;
        
        document.getElementById("nav").style = `
            animation-name: navResize;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        `;
        
        document.getElementById("logo").style = `
            animation-name: logoResize;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;
        
        document.getElementById("rightButton").style = `
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;    
        
        document.getElementById("leftButton").style = `
            animation-name: fadeIn;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-delay: .5;
        `;
    }
});