const container = document.getElementsByTagName("body")[0];
const formAdd = document.getElementById("tableBtn");

let count = 3;
let i = 0 ;
function addStructures() {
    count = count === 3 ? 2 : 3;
    i = i + 1;
    console.log("valor de i", i);
    console.log("valor de count", count);
    if(count == 2){
        formAdd.classList.remove("hiddenForm")
        formAdd.classList.add("showForm")
        
    }else if(count == 3){
        formAdd.classList.remove("showForm")
        formAdd.classList.add("hiddenForm")
    }else{
        console.log("invalido")
    }

}


/*

    if (count == 2){
        const novaEstrutura2 = `
            <section class="section2">
                <div class="container2">
                    <article>
                        <div class="positionElements">
                            <div class="positionImg area-1">
                                <div class="imagem1">
                                    <!-- img here in css -->
                                </div>
                            </div>
                            <div class="positionDescricao">
                                <div class="descricao area-2">
                                    <div class="title"><h1>Home Office</h1></div>
                                    <div class="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quae, error quis repudiandae,
                                        voluptate cupiditate, vitae molestias inventore quos cum.
                                        Aliquid dignissimos eum molestiae ducimus ad recusandae, cum cupiditate?</p></div>
                                    <div class="button">
                                        <a href="contact.html"><button class="btn btn-dark btn-lg">Contate-nos</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        `;
        container.innerHTML += novaEstrutura2;
    }else if(count == 3){
        const novaEstrutura3 = `
            <section class="section3">
                <div class="containerReverse">
                    <article>
                        <div class="positionElementsReverse">
                            <div class="positionDescricaoReverse">
                                <div class="widthDescricao">
                                    <div class="descricaoReverse area-2">
                                        <div class="title text-center">
                                            <h1>Banheiro Retro</h1>
                                        </div>
                                        <div class="text text-center">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime quae, error quis repudiandae,
                                                voluptate cupiditate, vitae molestias inventore quos cum.
                                                Aliquid dignissimos eum molestiae ducimus ad recusandae, cum cupiditate?</p>
                                        </div>
                                        <div id="button" class="d-flex justify-content-center">
                                            <a href="contact.html"><button class="btn btn-dark btn-lg">Contate-nos</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="positionImgReverse area-1">
                                <div class="widthImgReverse ">
                                    
                                    <div class="imagemReverse1">
                                    <!-- img here in css -->
                                    </div>
                                    <div class="gap" style="width: 20px; height: 100%;"></div>
                                    <div class="imagemReverse2">
                                        <!-- img here in css -->
                                    </div>
                                </div>
                                <div class="click"><h3>Clique na imagem</h3></div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        `;
        container.innerHTML += novaEstrutura3;
    }else {
        console.log("erro no valor")
    }

*/


