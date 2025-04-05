var tentativa = 1
var palavra_chave = sprt_palavra('caixa')

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
function cont(ele,vet){
    var x = contem(ele,vet)
    window.alert(x)
}
}
function definir_palavra(){
    if(tentativa>5){
        window.alert("tentativas esgotadas")
    }
    var palavra = window.prompt('escolha a palavra')
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
            if(contem(palavra_vetor[0],palavra_chave)){
                l1.className="letter s_right"
            }else if(palavra_vetor[0]==palavra_chave[0]){
                l1.className="letter right"
            }else{
                l1.className="letter rong"
            }
            if(contem(palavra_vetor[1],palavra_chave)){
                l2.className="letter s_right"
            }else if(palavra_vetor[1]==palavra_chave[1]){
                l2.className="letter right"
            }else{
                l2.className="letter rong"
            }
            if(contem(palavra_vetor[2],palavra_chave)){
                l3.className="letter s_right"
            }else if(palavra_vetor[2]==palavra_chave[2]){
                l3.className="letter right"
            }else{
                l3.className="letter rong"
            }
            if(contem(palavra_vetor[3],palavra_chave)){
                l4.className="letter s_right"
            }else if(palavra_vetor[3]==palavra_chave[3]){
                l4.className="letter right"
            }else{
                l4.className="letter rong"
            }
            if(contem(palavra_vetor[4],palavra_chave)){
                l5.className="letter s_right"
            }else if(palavra_vetor[4]==palavra_chave[4]){
                l5.className="letter right"
            }else{
                l5.className="letter rong"
            }
        }
        
        tentativa++
        
    }
}
