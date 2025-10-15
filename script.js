const imagens = ["foto01.jpg", "foto02.jpg", "fotos/foto03.jpg", "fotos/foto04.jpg", "fotos/foto05.jpg", "fotos/foto06.jpg", "fotos/foto07.jpg", "fotos/foto08.jpg", "fotos/foto09.jpg"  ]

const img = document.getElementById("foto") //pega o elemento "img" do HTML
let i = 0 //variável que defini a imagem exibida

function trocarImagem(){
    i++ //aumenta o indice atual

    if(i >= imagens.length){ //se o indice for maior ou igual ao tamanho do array, a variável retorna a zero
     i = 0   
    }
img.src = imagens[i] //troca a imagem do elemento "img" de acordo o indice atual
}
setInterval(trocarImagem, 3500) //repete a função a cada 3s ou 3000milisegundos