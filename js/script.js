imprime = (msg) => console.log(msg);

fazerSorteio = () => {
    num1 = document.getElementById("inicio").value;
    num2 = document.getElementById("fim").value;
    let sorteio = Math.floor(Math.random() * (Number(num2) - Number(num1)) );
    document.getElementById("resultado").innerHTML = sorteio;

}