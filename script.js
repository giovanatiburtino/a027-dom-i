const frutas = ["laranja", "limão", "uva"];

let lista = document.getElementsByTagName("li")

for(let i = 0; i < frutas.length; i++){
    lista[i].innerHTML = frutas[i]
}

const adicionarFruta = () => {
    const adicionarFruta = document.getElementById("fruta")
    console.log(adicionarFruta.value)

    const itemFruta = document.getElementById("fruta-4")
    itemFruta.innerHTML = adicionarFruta.value
}
