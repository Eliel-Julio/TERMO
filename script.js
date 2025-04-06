var tentativa = 1
var palavra_chave = 'sagaz'

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
function contem(elemeto,vetor){
    for (const i in vetor) {
        if(i==elemeto){
            return true
            break
    }
    return false
}
}
function definir_palavra(){
    if(tentativa>6){
        window.alert("tentativas esgotadas")
    }else{
        // var palavra = window.prompt('escolha a palavra')
        var palavra = 'teste'
        if (palavra.length!=5){
            window.alert('palavra não conforme')
        }else{
            palavra_vetor=sprt_palavra(palavra)
            {//atribuindo as letras no html  
            var l1 = document.getElementById('letter1_'+tentativa)
                l1.innerHTML=palavra_vetor[0]
            var l2 =document.getElementById('letter2_'+tentativa)
                l2.innerHTML=palavra_vetor[1]
            var l3 =document.getElementById('letter3_'+tentativa)
                l3.innerHTML=palavra_vetor[2]
            var l4 =document.getElementById('letter4_'+tentativa)
                l4.innerHTML=palavra_vetor[3]
            var l5 =document.getElementById('letter5_'+tentativa)
                l5.innerHTML=palavra_vetor[4]
            }
            {
                if( palavra_chave.includes(palavra_vetor[0])){
                    l1.className="letter s_right"
                }else{
                    l1.className="letter wrong"
                }
                if(palavra_vetor[0]==palavra_chave[0]){
                    l1.className="letter right"
                }
                if(palavra_chave.includes(palavra_vetor[1])){
                    l2.className="letter s_right"
                }else{
                    l2.className="letter wrong"
                }
                if(palavra_vetor[1]==palavra_chave[1]){
                    l2.className="letter right"
                }
                if(palavra_chave.includes(palavra_vetor[2])){
                    l3.className="letter s_right"
                }else{
                    l3.className="letter wrong"
                }
                if(palavra_vetor[2]==palavra_chave[2]){
                    l3.className="letter right"
                }
                if(palavra_chave.includes(palavra_vetor[3])){
                    l4.className="letter s_right"
                }else{
                    l4.className="letter wrong"
                }
                if(palavra_vetor[3]==palavra_chave[3]){
                    l4.className="letter right"
                }
                if(palavra_chave.includes(palavra_vetor[4])){
                    l5.className="letter s_right"
                }else{
                    l5.className="letter wrong"
                }
                if(palavra_vetor[4]==palavra_chave[4]){
                    l5.className="letter right"
                }
            }
            var  input_box = document.getElementById('input_box')
            if (tentativa<6){
                input_box.style.top = (8+(78*tentativa))+'px'
                console.log(tentativa, " - " , ((90*tentativa))+'px')
            }else{
                input_box.style.display='none'
            }
    
            tentativa++
    }
        
    }
}
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");

input1.addEventListener("input", function () {
    if (this.value.length === this.maxLength) {input2.focus();
    }else if(this.value.length === 0){input1.focus();}});
input2.addEventListener("input", function () {
    if (this.value.length === this.maxLength) {input3.focus();
    }else if(this.value.length === 0){input1.focus();}});
input3.addEventListener("input", function () {
    if (this.value.length === this.maxLength) {input4.focus();
    }else if(this.value.length === 0){input2.focus();}});
input4.addEventListener("input", function () {
    if (this.value.length === this.maxLength) {input5.focus();
    }else if(this.value.length === 0){input3.focus();}});
input5.addEventListener("input", function () {
    if (this.value.length === this.maxLength) {input5.focus();
    }else if(this.value.length === 0){input4.focus();}});