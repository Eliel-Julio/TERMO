// var palavra_chave = 'carne'
const hoje = new Date().toISOString().split('T')[0];
fetch("palavras_termo.txt")
    .then(response => response.text())
    .then(texto => {
    var tentativa = 1
    palavras = texto.split('\n')

    var rng = new Math.seedrandom(hoje);
    var palavra_chave = palavras[Math.floor(rng() * palavras.length)]
    console.log(' data:' ,hoje,
                '\n resposta do dia:', palavra_chave)



const inputs = document.querySelectorAll("input");

inputs[0].focus()

function sprt_palavra(str){
    palavra_vet = [
        str.charAt(0),
        str.charAt(1),
        str.charAt(2),
        str.charAt(3),
        str.charAt(4)
    ]
    return palavra_vet
}

function get_palavra(){
    palavra_vetor=[
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
        inputs[4].value]
    if (palavra_vetor.includes('')){
        window.alert('preencha todos os campos')
    }else{
        definir_palavra()
        console.log(" Input:",palavra_vetor)
        inputs[0].value=''
        inputs[1].value=''
        inputs[2].value=''
        inputs[3].value=''
        inputs[4].value=''

        inputs[0].focus()   
}}
function definir_palavra(){
    if(tentativa>6){
        window.alert("tentativas esgotadas")
    }else if((true || palavras.includes(palavra_vetor.join('')))){
        // var palavra = window.prompt('escolha a palavra')
        // var palavra = 'teste'
            // palavra_vetor=sprt_palavra(palavra)
            // //atribuindo as letras no html  
            const letras = document.getElementById("line"+tentativa).querySelectorAll(".letter")
            letras.forEach((letra, index) =>{
                
                letra.innerHTML = palavra_vetor[index];
                
                if( palavra_chave.includes(palavra_vetor[index])){
                    letra.className="letter s_right"
                }else{
                    letra.className="letter wrong"
                }
                if(palavra_vetor[index]==palavra_chave[index]){
                    letra.className="letter right"
                }
                })        
            var  input_box = document.getElementById('input_box')
            if (tentativa<6){
                input_box.style.top = (8+(78*tentativa))+'px'
                console.log(" Tentativa: ",tentativa, 
                            "\n posição:" , (8+(78*tentativa))+'px'
                            )
                // console.log('${tentativa} - ${input_box.style.top}')
            }else{
                input_box.style.display='none'
            }
    
            tentativa++
    
        
    }else{
        window.alert('palavra não existe')
    }
}
function focarProximoVazio(atualIndex) {
    for (let j = atualIndex + 1; j < inputs.length; j++) {
        if (inputs[j].value === "") {
            inputs[j].focus();
            return;
        }
    }
}

addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        get_palavra();
    }})

inputs.forEach((input, index) => {


    input.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "Enter":
            get_palavra();
            break;
            case "Backspace":
            if (this.value.length === 0){
                inputs[index-1].value='';}
            this.value = "";
            inputs[index-1].focus();
            event.preventDefault();
            break;default:break;
        }
        if (event.key.length === 1) {
            event.preventDefault(); // Impede comportamento padrão
            this.value = event.key;
            if (this.value.length === this.maxLength) {
                if (index < inputs.length - 1) {
                    focarProximoVazio(index); // Foca no próximo input vazio
                } else {
                    this.blur(); // Remove focus from the last input
                }
            }}
        
        });

})
    
})