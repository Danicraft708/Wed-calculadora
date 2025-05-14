// Variables
let displayValue = "";

// Función para agregar caracteres a la pantalla
function appendToDisplay(value)
{
	displayValue += value;
	document.getElementById("display").value = displayValue;
}

// Función  para borrar toda la pantalla
function clearDisplay()
{
	displayValue = "";
	document.getElementById("display").value = displayValue;
}

// Función para borrar una entrada (CE)
function clearEntry()
{
	displayValue = displayValue.slice(0, -1);
	document.getElementById("display").value = displayValue;
}

// Función para calcular el porcentaje
function handlePercentage(value)
{
	if (value.includes('%'))
    {
        // Si el valor contiene el porcentaje; lo manejamos como una multiplicación
		let parts = value.split('*');
	    if (parts.length === 2)
        {
    	     let num1 = parseFloat(parts[0]);
    	     let num2 = parseFloat(parts[1].replace('%','')); 
    	     return (num1 * (num2 / 100)).toString();
        }
    }       
    return value;
}

// Función para realizar el cálculo
function calculate()
{
	try
	{
		// Primero, manejamos el porcentaje si está presente
		let valueToCalculate = handlePercentage(displayValue);

		// Ahora, evaluamos la expresión con eval() 
		displayValue = eval(valueToCalculate).toString();
		document.getElementById("display").value = displayValue;
	}
    
    catch (error)
    {
    	document.getElementById("display").value = "Error";
    }
}

// Función para calcular la raíz cuadrada
function squareRoot()
{
    displayValue = Math.sqrt(eval(displayValue)).toString();
    document.getElementById("display").value = displayValue;
}

// Función para calcular el cuadrado
function square()
{
	displayValue = Math.pow(eval(displayValue), 2).toString();
	document.getElementById("display").value = displayValue;
}

// Función para calcular el recíproco
function reciprocal()
{
	displayValue = (1 / eval(displayValue)).toString();
	document.getElementById("display").value = displayValue;
}

document.querySelector("button").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


