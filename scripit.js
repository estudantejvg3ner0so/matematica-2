const resultado = document.getElementById("resultado");
const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
botao.addEventListener("clik", () => {
if(botao.classList.contains("numero") || botao.classList.contains("operador")){
resultado.value += botao.textContent;
} else if (botao.classList.contains("limpar")){
resultado.value = "";
} else if (botao.classList.contains("igual")){
try{
resultado.value = eval(resultado.value);
}catch{
resultado.value = "Erro";
}
}
})
})
