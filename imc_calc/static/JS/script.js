const button = document.getElementById('button_calcular');
const result = document.getElementById('resultado');
const classificacao = document.getElementById('classificação');

button.addEventListener('click', () => {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    let peso1 = parseFloat(peso.value); //parsefloat garante que os valores sejam numéricos
    let altura1 = parseFloat(altura.value);
    if (peso1 && altura1){
        let imc = (peso1 / (altura1 * altura1)).toFixed(2); //calcula o imc e .toFixed(2) limita a duas casas decimais
        console.log(imc);
        result.innerText = `Seu IMC é: ${imc}`; //usei crase (``) ao invés de aspas para facilitar a inserção do valor de imc
        if(imc < 18.5){
            classificacao.innerText = 'Você está Magro!';
        }
        else if (imc >= 18.5 && imc < 25) {
            classificacao.innerText = 'Você está Normal!';
        }
        else if (imc >= 25 && imc < 30){
            classificacao.innerText = 'Você está com Sobrepeso!';
        }
        else if (imc >= 30 && imc < 40){
            classificacao.innerText = 'Você está Obeso!';
        }
        else if (imc > 40){
            classificacao.innerText = 'Você está com Obesidade Grave!';
        }  
    }
    else{
        result.innerText = 'Preencha os Campos Corretamente!';
    }
});


//IMC=peso(kg)/​(altura(m))²