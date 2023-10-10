
var btnEncripta = document.getElementById("btnEncripta");
var btnDesencripta = document.getElementById("btnDesencripta");

var contenedor = document.getElementById("contenedor");
var iconCopy = document.getElementById("iconCopy");

var texto = document.getElementById("encripta");
var resultado = document.getElementById("resultado");

/*Texto encriptado*/
var remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]



const alEncriptar = (nuevoValor)=>{
    contenedor.classList.add("ocultar");
    iconCopy.classList.remove("ocultar");

}

const alDesencriptar = ()=>{
    contenedor.classList.remove("ocultar");
    iconCopy.classList.add("ocultar");
}

btnEncripta.addEventListener("click", () => {
    const text = texto.value; /*capturando text de textarea*/
    // console.log(text);

    if (text !=""){
        const encriptarTexto = (nuevoText)=>{
            for(var i=0; i<remplazar.length; i++){
                if(nuevoText.includes(remplazar[i][0])){
                    nuevoText = nuevoText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
            };
            return nuevoText;
        } 
        resultado.innerHTML = encriptarTexto(text); 
        alEncriptar();
    } else {
        alert("Ingrese texto para encriptar")
        alDesencriptar();
    }
});

btnDesencripta.addEventListener("click", () => {
    const text = texto.value;
    // console.log(text);

    if(text != ""){
        const desencriptarTexto = (nuevoText)=>{
            for(var i=0; i<remplazar.length; i++){
                if(nuevoText.includes(remplazar[i][1])){
                    nuevoText = nuevoText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return nuevoText;
        };
        resultado.innerHTML = desencriptarTexto(text);
        alEncriptar()
    } else {
        alert("Ingrese texto para encriptar")
        alDesencriptar();
    }
});   


iconCopy.addEventListener("click", copiar = ()=>{
    const text = resultado; 
    const range = document.createRange();/*rango dde seleccion*/
    range.selectNode(text);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');/*copiar*/
    window.getSelection().removeAllRanges();
})

const mostrarTooltip = ()=>{
    iconCopy.style.visibility = "visible";
    setTimeout(() => {
        iconCopy.style.visibility = "hidden";
    }, 2000); 
}

