function perimetroCuadrado(lado){
    lado = document.getElementById("ladoCuadrado").value;
    let perimetro = lado*4;
    document.getElementById("perimetroCuadradoSalida").innerHTML=perimetro;
}
// console.log(perimetroCuadrado(4));

function areaCuadrado(lado){
    lado = document.getElementById('ladoCuadrado').value;
    let area = lado*lado;
    document.getElementById('araCuadradoSalida').innerHTML=area;
}