// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Muestra un mensaje en la consola indicando que el script ha cargado correctamente
    console.log("Script cargado correctamente.");

    // Obtiene el botón de conversión desde el HTML
    const convertButton = document.getElementById("convertButton");
    // Obtiene el elemento de selección de tipo de conversión
    const conversionType = document.getElementById("conversionType");
    // Obtiene el campo de entrada donde el usuario escribe el número
    const inputNumber = document.getElementById("inputNumber");
    // Obtiene el contenedor donde se mostrará el resultado de la conversión
    const resultDisplay = document.getElementById("result");

    // Agrega un evento al botón para ejecutar la conversión cuando se haga clic
    convertButton.addEventListener("click", () => {
        // Muestra un mensaje en la consola indicando que el botón fue presionado
        console.log("Botón presionado.");

        // Obtiene el tipo de conversión seleccionado en el <select>
        const type = conversionType.value;
        // Obtiene el número ingresado por el usuario y elimina los espacios en blanco
        const number = inputNumber.value.trim();
        // Inicializa una variable para almacenar el resultado de la conversión
        let result = "";

        // Muestra en la consola el tipo de conversión y el número ingresado
        console.log(`Tipo de conversión: ${type}, Número ingresado: ${number}`);

        // Verifica si la entrada es válida para la conversión seleccionada
        if (!validateInput(number, type)) {
            // Define un mensaje de error por defecto
            let errorMessage = "⚠ Número inválido para la conversión seleccionada.";
            // Si la conversión es de binario a decimal, personaliza el mensaje de error
            if (type === "bin-dec") {
                errorMessage = "⚠ Solo se aceptan los dígitos 1 y 0 en binario.";
            }
            // Muestra el mensaje de error en la interfaz de usuario
            resultDisplay.innerText = errorMessage;
            // Cambia el color del mensaje de error a rojo
            resultDisplay.style.color = "red";
            // Detiene la ejecución de la función para evitar continuar con la conversión
            return;
        }

        // Ejecuta la conversión según el tipo seleccionado por el usuario
        switch (type) {
            case "dec-bin":  // Decimal a binario
                result = parseInt(number, 10).toString(2);
                break;
            case "dec-oct":  // Decimal a octal
                result = parseInt(number, 10).toString(8);
                break;
            case "dec-hex":  // Decimal a hexadecimal (en mayúsculas)
                result = parseInt(number, 10).toString(16).toUpperCase();
                break;
            case "bin-dec":  // Binario a decimal
                result = parseInt(number, 2).toString(10);
                break;
            case "oct-dec":  // Octal a decimal
                result = parseInt(number, 8).toString(10);
                break;
            case "hex-dec":  // Hexadecimal a decimal
                result = parseInt(number, 16).toString(10);
                break;
            default:  // Caso no reconocido
                result = "Conversión no soportada";
        }

        // Muestra el resultado de la conversión en la consola
        console.log(`Resultado: ${result}`);
        // Actualiza el contenido del contenedor de resultados en la interfaz de usuario
        resultDisplay.innerText = `✅ Resultado: ${result}`;
        // Cambia el color del mensaje de resultado a verde claro
        resultDisplay.style.color = "lightgreen";
    });

    // Función para validar si el número ingresado es correcto para la conversión seleccionada
    function validateInput(number, type) {
        // Expresiones regulares para validar cada tipo de entrada según la base numérica
        const regex = {
            "dec-bin": /^\d+$/,    // Decimal: solo dígitos (0-9)
            "dec-oct": /^\d+$/,    // Decimal: solo dígitos (0-9)
            "dec-hex": /^\d+$/,    // Decimal: solo dígitos (0-9)
            "bin-dec": /^[01]+$/,  // Binario: solo 0 y 1
            "oct-dec": /^[0-7]+$/, // Octal: solo dígitos del 0 al 7
            "hex-dec": /^[0-9A-Fa-f]+$/ // Hexadecimal: dígitos 0-9 y letras A-F (mayúsculas o minúsculas)
        };
        // Retorna true si el número cumple con la expresión regular correspondiente, false si no
        return regex[type].test(number);
    }
});
