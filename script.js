const entrada = document.querySelector(".entrada");
const saida = document.querySelector(".saida");
const imagemFundo = document.getElementById("imagem");

entrada.focus()

function botaoCripto() {
        if(entrada.value =="") {alert("Digite um texto para criptografar")}
        else {imagemFundo.style.backgroundImage = "none";
        const textoEntrada = encriptar(entrada.value);
        saida.value = textoEntrada;
        entrada.value = "";
}
}

function botaoDescripto() {
    const textoEncriptado = desencriptar(entrada.value);
    saida.value = textoEncriptado;
    entrada.value = "";
    entrada.focus()
}

function botaoCopiar() {
    const copiarTexto = saida.value;
    entrada.value = copiarTexto;
    saida.value = "";
}

// Função para criptografar o texto de entrada
function encriptar (stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    return stringEncriptada
}

// Função para descriptografar
function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    return stringDesencriptada
}

