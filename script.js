var tentativa = 0
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
function add_letra(){

}
function definir_palavra(){
    var palavra = window.prompt('escolha a palavra')
    if (palavra.length!=5){
        window.alert('palavra não uniforme')
    }else{
        // palavra_vetor=sprt_palavra(palavra)
        // var linha=document.getElementById('line'+Text(tentativa))
        
        window.alert('line'+tentativa)
        tentativa++
        linha.getElementById("letter"+"1_"+tentativa).Text=palavra_vetor[0]
        linha.getElementById("letter"+"2_"+tentativa)palavra_vetor[1]
        linha.getElementById('letter'+"3_"+tentativa)palavra_vetor[2]
        linha.getElementById('letter'+"4_"+tentativa)palavra_vetor[3]
        linha.getElementById('letter'+"5_"+tentativa)palavra_vetor[4]
        // add_letra()
    }
}