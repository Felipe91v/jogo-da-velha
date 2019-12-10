//criando tabuleiro com 9 casas
let tabuleiro = document.querySelector("div#tabuleiro")
for(let contador = 0; contador <= 8; contador++){
    let casa = document.createElement("div")
    casa.className = "casa"
    casa.setAttribute ("jogada", "")
    casa.id = `casa${contador}` 
    tabuleiro.appendChild(casa)
    casa.addEventListener("click", jogada)
} 

//variavel que vai definir a vez de quem joga
let vez = 0

//função que faz a validação de quem joga e mostra a imagem no topo
function play(a){
   let jogo = a
   if(jogo%2==0){
     img.src="bola.png"
   }else {img.src="x.png"}
 }

 //div que mostra a vez do jogador
let player = document.querySelector("div#player")
player.innerHTML = "<h1><strong>agora é a vez do</strong></h1>"
let img = document.createElement("img")
img.src="x.png"
document.getElementById("player").appendChild(img)

//função que cria as jogadas adicionando as imagens
function jogada(){
    play(vez)
    let casa = document.getElementById(this.id)
    let imagem = document.createElement("img")    
    if(vez%2==0){
      casa.setAttribute("jogada","X")      
       imagem.src="x.png"
      } else {
        casa.setAttribute("jogada","O")
       imagem.src="bola.png" 
    } 
    document.getElementById(this.id).appendChild(imagem)
    vez++
    vencedor()
      }
   
   //FUNÇÃO QUE VALIDA O VENCEDOR. *NOTE A FUNÇÃO É CHAMADA DENTRO DA FUNÇÃO 
   //JOGADA PARA VALIDAR A CADA JOGADA SE HOUVE VENCEDOR OU NÃO.
   function vencedor(){
    let casa0 = document.querySelector("div#casa0").getAttribute("jogada")
    let casa1 = document.querySelector("div#casa1").getAttribute("jogada")
    let casa2 = document.querySelector("div#casa2").getAttribute("jogada")
    
    let casa3 = document.querySelector("div#casa3").getAttribute("jogada")
    let casa4 = document.querySelector("div#casa4").getAttribute("jogada")
    let casa5 = document.querySelector("div#casa5").getAttribute("jogada")
    
    let casa6 = document.querySelector("div#casa6").getAttribute("jogada")
    let casa7 = document.querySelector("div#casa7").getAttribute("jogada")
    let casa8 = document.querySelector("div#casa8").getAttribute("jogada")
    
    let ganhador

    if
        ((casa0 == casa1 && casa0 == casa2)||(casa0 == casa3 && casa0 == casa6)||
        (casa0 == casa4 && casa0 == casa8) && (casa0 != "")){
         ganhador = casa0
       } else if ((casa4 == casa3 && casa4 == casa5)||
            (casa4 == casa1 && casa4 == casa7) || (casa4 == casa2 && casa4 == casa6) && (casa4 != "")){
            ganhador = casa4
       } else if ((casa8 == casa6 && casa8 == casa7)||
            (casa8 == casa5 && casa8 == casa2) && (casa8 != "")){
             ganhador = casa8
       } 
     
       if(ganhador != ""){
          alert(`o ganhador foi ${ganhador.toUpperCase()}`)
         }
      }