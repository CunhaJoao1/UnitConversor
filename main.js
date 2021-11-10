function converter(){
    var num1 = document.querySelector('.medida1-txt').value;
    var resultadoTxt = document.querySelector(".resultado");

    var verificacao = true;

    var select = document.getElementById('primeira-medida').value
    console.log(select)

    var select2 = document.getElementById('segunda-medida').value
    console.log(select2)

    if(select == 'mtr' && select2 == 'pol2' ){

    }

    switch (select){
        case 'mtr':
            if(select2 == 'pol2'){
                resultado = num1 * 39.3701
                resultadoTxt.textContent = num1 + " metros equivale a " + resultado + " polegadas!  :)"
                break;
            }
            else if(select2 == 'mlh2'){
                resultado = num1 *0.000621371
                resultadoTxt.textContent = num1 + " metros equivale a " + resultado + " milhas!  :)"
                break;
            }
            else if(select2 == 'mtr2'){
                resultado = num1
                resultadoTxt.textContent = num1 + " metros sempre será " + num1 + " metros rsrs! :D" 
                break;
            }
        case 'mlh':
            if(select2 == 'mtr2'){
                resultado = num1 * 1609.34
                resultadoTxt.textContent = num1 + " milhas equivale a " + resultado + " metros!  :)"
                break;
            }  
            else if(select2 == 'pol2'){
                resultado = num1 * 63360
                resultadoTxt.textContent = num1 + " milhas equivale a " + resultado + " polegadas!  :)"
                break;
            }
            else if(select2 == 'mlh2'){
                resultadoTxt.textContent = num1 + " milhas sempre será " + num1 + " milhas! rsrs :D"
                break;
            }

        case 'pol':
            if(select2 == 'mtr2'){
                resultado = num1 * 0.0254
                resultadoTxt.textContent = num1 + " polegadas equivale a " + resultado + " metros!  :)"
                break;
            }
            else if(select2 == 'mlh2'){
                resultado = num1 * 0.00001578
                resultadoTxt.textContent = num1 + " polegadas equivale a " + resultado + " milhas!  :)"
                break;
            }
            else if(select2 == 'pol2'){
                resultadoTxt.textContent =  num1 + " polegadas sempre será " + num1 + " polegadas! rsrs :D"
                break;
            }
    }




   /*  if(num1 == '' || num1 <0 ){
        resultadoTxt.textContent = "Digite um valor maior que zero"
        verificacao = false;
    }
    
    if(num1 ==0){
    resultadoTxt.textContent = "Zero é zero em qualquer unidade de medida rsrs"
    verificacao = false;
    }

    const resultado = num1 * 39.3701

    resultadoTxt.textContent = resultado

    console.log(resultado)

    

 */

}