const $ = (selector) => document.querySelector(selector)

const resultado = $(".resultado")

const longitud12 = $("#longitud12")
const longitud9 = $("#longitud9")
const longitud6 = $("#longitud6")

const soloLetras = $("#letras")
const soloNum = $("#nums")
const todos = $("#todos")

const mayusculas = $("#mayus")
const minusculas = $("#minus")
const numeros = $("#numeros")
const simbolos = $("#simbolos")

const btn = $("#btn")
const btnCopia = $(".btn-copia")
const p = $(".copiar")
const recargar = $(".recargar")

const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const caracteresNums = "1234567890";
const signos = "#$%&/()*[]{]¨@";
const opcionesSeleccionadas = []

//***************************************************EVENTOS*******************************************************************//
mayusculas.addEventListener("click", (e) => {
    (mayusculas.checked) ? opcionesSeleccionadas.push(letrasMayusculas) : opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMayusculas), 1)
})

minusculas.addEventListener("click", (e) => {
    (minusculas.checked) ? opcionesSeleccionadas.push(letrasMinusculas) : opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMinusculas), 1)
})

numeros.addEventListener("click", (e) => {
    (numeros.checked) ? opcionesSeleccionadas.push(caracteresNums) : opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(caracteresNums), 1)
})

simbolos.addEventListener("click", (e) => {
    (simbolos.checked) ? opcionesSeleccionadas.push(signos) : opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(signos), 1)
})

soloLetras.addEventListener("click", () => {
    soloNum.disabled = true; todos.disabled = true; numeros.disabled = true; simbolos.disabled = true; mayusculas.checked = opcionesSeleccionadas.push(letrasMayusculas); (minusculas.checked) = opcionesSeleccionadas.push(letrasMinusculas);
})

soloNum.addEventListener("click", () => {
    soloLetras.disabled = true; todos.disabled = true; mayusculas.disabled = true; minusculas.disabled = true; simbolos.disabled = true; numeros.checked = opcionesSeleccionadas.push(caracteresNums);
})

todos.addEventListener("click", () => {
    soloLetras.disabled = true; soloNum.disabled = true; mayusculas.checked = opcionesSeleccionadas.push(letrasMayusculas); (minusculas.checked) = opcionesSeleccionadas.push(letrasMinusculas); numeros.checked = opcionesSeleccionadas.push(caracteresNums); simbolos.checked = opcionesSeleccionadas.push(signos);
})

longitud12.addEventListener("click", () => {
    longitud9.disabled = true; longitud6.disabled = true;
})

longitud9.addEventListener("click", () => {
    longitud12.disabled = true; longitud6.disabled = true;
})

longitud6.addEventListener("click", () => {
    longitud12.disabled = true; longitud9.disabled = true;
})
//**************************************LONGITUDES Y BUCLE*****************************************************************//

btn.addEventListener("click", () => {

    if (longitud12.checked) length = longitud12.value;
    if (longitud9.checked) length = longitud9.value;
    if (longitud6.checked) length = longitud6.value;

    let contrasenia = opcionesSeleccionadas.join('')
    let contraseniaFinal = "";
    for (let i = 0; i < length; i++) {
        contraseniaFinal += contrasenia.charAt(Math.floor(Math.random() * contrasenia.length));
    }
    resultado.innerHTML = contraseniaFinal
})

//*******************************************COPIADO Y REFRESCAR***************************************************************//

btnCopia.addEventListener("click", () => {
    let textoCopiado = resultado.innerText
    navigator.clipboard.writeText(textoCopiado)
    alert("¡Contraseña copiada!")
})

recargar.addEventListener("click", () => {
    let contrasenia = opcionesSeleccionadas.join('')
    let contraseniaFinal = "";
    for (let i = 0; i < length; i++) {
        contraseniaFinal += contrasenia.charAt(Math.floor(Math.random() * contrasenia.length));
    }
    resultado.innerHTML = contraseniaFinal
})

