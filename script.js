

const sumar= ()=>{
    
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let c = parseFloat(document.getElementById('num3').value);

    let d = parseFloat(document.getElementById('num4').value);
    let e = parseFloat(document.getElementById('num5').value);
    let f = parseFloat(document.getElementById('num6').value);

   

    let matriz1= [a,b,c];
    
    let matriz2= [d,e,f];
    
    
    
    
    let result = matriz1.map( (item, i) => 
    `
    <td style="color: white ;background: black;  text-align: center; border-radius: 5px"> ${item + matriz2[i]}</td>
    
    `
    );

    document.getElementById('result').innerHTML= result;

}



// console.log(result)

// let nuevaMatriz=[]

// for (let i = 0; i < matriz1.length; i++) {

//     nuevaMatriz[i] = matriz1[i] + matriz2[i];

// }

// console.log(nuevaMatriz)


