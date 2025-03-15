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