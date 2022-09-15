function buttonClicker() {
    let selectedElement = document.getElementById("select");
    console.log(selectedElement.value);

    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = document.getElementById("lastresult").value;
    let last = document.getElementById("lastresult").value;
    
    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))) {
        result = "Что-то пошло не так! Попробуйте еще раз! :)";
        console.log(results);
        document.getElementById("lastresult").innerHTML = result + "<br/>";
        document.getElementById("memory").innerHTML += result + "<br/>";
        return;
    }
    switch (selectedElement.value) {
        case "+":
            result = parseFloat(value1) + parseFloat(value2);
            break;
        case "-":
            result = parseFloat(value1) - parseFloat(value2);
            break;
        case "*":
            result = parseFloat(value1) * parseFloat(value2);
            break;
        case "/":
            if (parseFloat(value2) > 0)
                result = parseFloat(value1) / parseFloat(value2);
            else
                result = "Делить на ноль нельзя! :)";
            break;
        default:
            result = "Невалидные данные! :(";
    }
    if (!isNaN(result))
        result = value1 + " " + selectedElement.value + " " + value2 + " " + "=" + " " + result;
    document.getElementById("memory").innerHTML += result + "<br/>";
    document.getElementById("lastresult").innerHTML = result + "<br/>";

    console.log(result, "<br/>", memory);
}