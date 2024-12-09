let imagem1 = document.getElementById("image1")
let imagem2 = document.getElementById("image2")

imagem1.innerHTML = "<img id='img1' class='img-fluid' src='sources/img/logoGrande.png' alt=''>"
imagem2.innerHTML = "<img id='img2' class='img-fluid' src='sources/img/Transforme seu espaço.png' alt=''>"

function exec(){
    return imagem1,imagem2
}

exec()