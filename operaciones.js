function calc(){
    const inputA = document.querySelector("#valorA")
    const inputB = document.querySelector("#valorB")
    const textoSuma = document.querySelector("#resultadoSuma")
    const textoResta = document.querySelector("#resultadoResta")
    const textoMultip = document.querySelector("#resultadoMultip")
    const textoDiv = document.querySelector("#resultadoDiv")
    const textoModulo = document.querySelector("#resultadoModulo")
    const textoMenorque = document.querySelector("#resultadoMenorque")
    const textoMayorque = document.querySelector("#resultadoMayorque")
    const textoMayoroigualque = document.querySelector("#resultadoMayoroigualque")
    const textoMenoroigualque = document.querySelector("#resultadoMenoroigualque")
    
    const valorA = parseFloat(inputA.value)
    const valorB= parseFloat(inputB.value)
    
    const resultadoSuma = valorA + valorB
    const resultadoResta = valorA - valorB
    const resultadoMultip = valorA * valorB
    const resultadoDiv = valorA / valorB
    const resultadoModulo = valorA % valorB
    const resultadoMenorque = valorA < valorB
    const resultadoMayorque = valorA > valorB
    const resultadoMayoroigualque = valorA >= valorB
    const resultadoMenoroigualque = valorA <= valorB
    
    
    
    textoSuma.innerHTML = `${valorA} + ${valorB} = ${resultadoSuma}`
    textoResta.innerHTML = `${valorA} - ${valorB} = ${resultadoResta}`
    textoMultip.innerHTML = `${valorA} * ${valorB} = ${resultadoMultip}`
    textoDiv.innerHTML = `${valorA} / ${valorB} = ${resultadoDiv}`
    textoModulo.innerHTML = `${valorA} % ${valorB} = ${resultadoModulo}`
    textoMenorque.innerHTML = `${valorA} < ${valorB} = ${resultadoMenorque}`
    textoMayorque.innerHTML = `${valorA} > ${valorB} = ${resultadoMayorque}`
    textoMayoroigualque.innerHTML = `${valorA} >= ${valorB} = ${resultadoMayoroigualque}`
    textoMenoroigualque.innerHTML = `${valorA} <= ${valorB} = ${resultadoMenoroigualque}`
    
    
  }