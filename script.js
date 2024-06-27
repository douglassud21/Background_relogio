

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia!!!
        img.src = 'manha.jpg'
        document.body.style.background = '#48f3ff'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!!!
        img.src = 'tarde.jpg'
        document.body.style.background = '#dd9000'
    } else {
        //Boa Noite!!!
        img.src = 'noite.jpg'
        document.body.style.background = '#0e0d0d'
    }

}


