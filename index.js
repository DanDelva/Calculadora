document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado correctamente.");

    const convertButton = document.getElementById("convertButton");
    const conversionType = document.getElementById("conversionType");
    const inputNumber = document.getElementById("inputNumber");
    const resultDisplay = document.getElementById("result");

    convertButton.addEventListener("click", () => {
        console.log("Botón presionado.");
        const type = conversionType.value;
        const number = inputNumber.value.trim();
        let result = "";

        console.log(`Tipo de conversión: ${type}, Número ingresado: ${number}`);

        if (!validateInput(number, type)) {
            let errorMessage = "⚠ Número inválido para la conversión seleccionada.";
            if (type === "bin-dec") {
                errorMessage = "⚠ Solo se aceptan los dígitos 1 y 0 en binario.";
            }
            resultDisplay.innerText = errorMessage;
            resultDisplay.style.color = "red";
            return;
        }

        switch (type) {
            case "dec-bin":
                result = parseInt(number, 10).toString(2);
                break;
            case "dec-oct":
                result = parseInt(number, 10).toString(8);
                break;
            case "dec-hex":
                result = parseInt(number, 10).toString(16).toUpperCase();
                break;
            case "bin-dec":
                result = parseInt(number, 2).toString(10);
                break;
            case "oct-dec":
                result = parseInt(number, 8).toString(10);
                break;
            case "hex-dec":
                result = parseInt(number, 16).toString(10);
                break;
            default:
                result = "Conversión no soportada";
        }

        console.log(`Resultado: ${result}`);
        resultDisplay.innerText = `✅ Resultado: ${result}`;
        resultDisplay.style.color = "lightgreen";
    });

    function validateInput(number, type) {
        const regex = {
            "dec-bin": /^\d+$/, 
            "dec-oct": /^\d+$/, 
            "dec-hex": /^\d+$/, 
            "bin-dec": /^[01]+$/,  
            "oct-dec": /^[0-7]+$/, 
            "hex-dec": /^[0-9A-Fa-f]+$/ 
        };
        return regex[type].test(number);
    }
});
