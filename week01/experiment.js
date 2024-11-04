function calculateSum(){
    const numb1 = parseFloat(document.getElementById("num1").value);
    const numb2 = parseFloat(document.getElementById("num2").value);
    const results = numb1 + numb2;
    document.getElementById("result").innerText=` ${results}`;
}