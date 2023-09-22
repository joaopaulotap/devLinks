function toggleMode() {
    const html = document.documentElement
    /*Manual*/
    
    /*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }
    */
    
    /*Automatico*/
    
    html.classList.toggle('light')
    
    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/perfil-light.png')
        img.setAttribute('alt',"Avatar Light de Joao Paulo Santos")
    }else{
        img.setAttribute('src', './assets/perfil.png')
        img.setAttribute('alt',"Avatar Dark de Joao Paulo Santos")
    }
}