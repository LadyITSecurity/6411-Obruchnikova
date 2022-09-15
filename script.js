function buttonClicker() {
    let selectedElement = document.getElementById("select");
    console.log(selectedElement.value);

    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = parseFloat(value1);

    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))) {
        result = "Ой! Вы ошиблись! Попробуйте еще раз!";
        console.log(results);
        document.getElementById("results").innerHTML += result + "<br/>";
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
                result = "Делить на ноль нельзя!";
            break;
        default:
            result = "Невалидные данные!";
    }
    if (result != 0)
        result = value1 + " " + selectedElement.value + " " + value2 + " " + "=" + " " + result;
    document.getElementById("results").innerHTML += result + "<br/>";
    console.log(value1, value2);
}