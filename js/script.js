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
    (mayusculas.checked) ? opcionesSeleccionadas.push(letrasMayusculas) :
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMayusculas), 1);
})

minusculas.addEventListener("click", (e) => {
    (minusculas.checked) ? opcionesSeleccionadas.push(letrasMinusculas) :
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMinusculas), 1);

})

numeros.addEventListener("click", (e) => {
    (numeros.checked) ? opcionesSeleccionadas.push(caracteresNums) :
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(caracteresNums), 1)
})

simbolos.addEventListener("click", (e) => {
    (simbolos.checked) ? opcionesSeleccionadas.push(signos) :
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(signos), 1)

})

// ******************************************REGLAS****************************************
soloLetras.addEventListener("click", () => {
    opcionesSeleccionadas.length = 2;
    opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(caracteresNums), 1)
    simbolos.checked = false; opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(signos), 1)
    mayusculas.checked = true; opcionesSeleccionadas.push(letrasMayusculas)
    minusculas.checked = true; opcionesSeleccionadas.push(letrasMinusculas)
    soloNum.checked = false;
    todos.checked = false;
    numeros.checked = false;
    signos.checked = false;

    if (mayusculas.checked && !minusculas.checked) {
        opcionesSeleccionadas.push(letrasMayusculas)
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMinusculas), 1);
    }
    if (minusculas.checked && !mayusculas.checked) {
        opcionesSeleccionadas.push(letrasMinusculas)
        opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMayusculas), 1);
    }
}
)
soloNum.addEventListener("click", () => {
    opcionesSeleccionadas.pop();
    opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMayusculas), 1)
    opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(letrasMinusculas), 1)
    opcionesSeleccionadas.splice(opcionesSeleccionadas.indexOf(signos), 1)
    numeros.checked = true; opcionesSeleccionadas.push(caracteresNums)
    simbolos.checked = false;
    mayusculas.checked = false;
    minusculas.checked = false;
    todos.checked = false;
    signos.checked = false;
    soloLetras.checked = false;
}
)
todos.addEventListener("click", () => {
    opcionesSeleccionadas.shift()
    opcionesSeleccionadas.shift();
    numeros.checked = true; opcionesSeleccionadas.push(caracteresNums);
    mayusculas.checked = true; opcionesSeleccionadas.push(letrasMayusculas);
    minusculas.checked = true; opcionesSeleccionadas.push(letrasMinusculas);
    simbolos.checked = true; opcionesSeleccionadas.push(signos);
    soloNum.checked = false;
    soloLetras.checked = false; 
}
)

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

btn.addEventListener("click", () => {
    if (!mayusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked) {
        return alert(`¡Hey! Debes seleccionar una longitud y al menos un caracter para generar una contraseña 😅`)
    }
})
