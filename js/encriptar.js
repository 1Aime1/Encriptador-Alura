
/* VARIABLE------------------------------------------------*/
var btnEncripta = document.getElementById("btnEncripta");
var btnDesencripta = document.getElementById("btnDesencripta");

var contenedor = document.getElementById("contenedor");
var texto = document.getElementById("encripta");/*EncriptaTextArea */
var resultado = document.getElementById("resultado");

var iconCopy = document.getElementById("iconCopy");
var tooltipContainer = document.getElementById("tooltipContainer");
var iconDelete = document.getElementById("iconDelete");


/*Texto encriptado*/
var remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

document.addEventListener("DOMContentLoaded", () => {
    var textarea = document.getElementById("encripta");

    textarea.addEventListener("input", () => {
        var inputValue = textarea.value;
        var regex = /^[a-z\s]+$/;

        if (!regex.test(inputValue)) {
            mostrarAviso();
            textarea.value = inputValue.replace(/[^a-z\s]/g, '');
        }
    });
});

const mostrarAviso = () => {
    alert("Solo se permiten letras minúsculas y espacios. Los caracteres no permitidos serán eliminados.");
}

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

/*ICONO COPIAR-------------------------------------------------*/
iconCopy.addEventListener("click", () => {
    const text = resultado; 
    const range = document.createRange();/*rango dde seleccion*/
    range.selectNode(text);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');/*copiar*/
    window.getSelection().removeAllRanges();

    mostrarTooltip();
})

const mostrarTooltip = ()=>{
    tooltipContainer.classList.add("iconVisible");
    setTimeout(() => {
        tooltipContainer.classList.remove("iconVisible");
    }, 2000);
}

/*ICONO ELIMINAR*/
iconDelete.addEventListener("click", () => {
    texto.value = "";
})

