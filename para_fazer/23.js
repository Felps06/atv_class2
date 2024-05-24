const formulario = document.querySelector("#formulario_aluno");

formulario.addEventListener("submit", function(event){
event.preventDefault();


let nome = document.querySelector("#nome").value;
let nota1 = parseFloat(document.querySelector("#nota1").value);
let nota2 = parseFloat(document.querySelector("#nota2").value);
let nota3 = parseFloat(document.querySelector("#nota3").value);
let nota4 = parseFloat(document.querySelector("#nota4").value);
let nota5 = parseFloat(document.querySelector("#nota5").value);

let media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

let tabela = document.querySelector("#corpo_tabela");

let linha_tabela = tabela.insertRow();

let celulanome = linha_tabela.insertCell(0);
let celulaNota1 = linha_tabela.insertCell(1);
let celulaNota2 = linha_tabela.insertCell(2);
let celulaNota3 = linha_tabela.insertCell(3);
let celulaNota4 = linha_tabela.insertCell(4);
let celulaNota5 = linha_tabela.insertCell(5);
let celulaMedia = linha_tabela.insertCell(6);



celulanome.innerHTML = nome;
celulaNota1.innerHTML = nota1;
celulaNota2.innerHTML = nota2;
celulaNota3.innerHTML = nota3;
celulaNota4.innerHTML = nota4;
celulaNota5.innerHTML = nota5;
celulaMedia.innerHTML = media.toFixed(2);

document.querySelector("#formulario_aluno").reset();

});
