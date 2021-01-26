const dino = document.getElementById('dino')
document.addEventListener('keydown', pegarTecla)

function pegarTecla(tecla){
    if(tecla.keyCode === 32){
        console.log('Espaço pressionado')
    }
}