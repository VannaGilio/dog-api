'use strict'

async function pesquisarFotos(raca) {
    const url=`https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const date= await response.json()

    return date.message
}

function criarImagem(link){
    const galeria=document.getElementById('galeria')
    const novaImg=document.createElement('img')
    novaImg.src=link
    
    galeria.appendChild(novaImg)
}

async function preencherFotos() {
    const raca = document.getElementById('raca').value
    const fotos= await pesquisarFotos(raca)
    const galeria=document.getElementById('galeria')
    galeria.replaceChildren('')

    fotos.forEach(criarImagem)
    console.log(fotos)
}



document.getElementById('pesquisar').addEventListener('click', preencherFotos)