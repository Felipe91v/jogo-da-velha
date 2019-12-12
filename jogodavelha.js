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
player.innerHTML = "<strong>agora é a vez do</strong>"
let img = document.createElement("img")
img.src="x.png"
document.getElementById("player").appendChild(img)

//função que cria as jogadas adicionando as imagens
function jogada(){ 
   play(vez)
    let casa = document.getElementById(this.id)
    let imagem = document.createElement("img")    
    if(vez%2==0){
      casa.setAttribute("jogada","x")      
       imagem.src="x.png"
      } else {
        casa.setAttribute("jogada","o")
       imagem.src="bola.png" 
    } 
    document.getElementById(this.id).appendChild(imagem)
    vencedor()
    vez++
      }
   
   //FUNÇÃO QUE VALIDA O VENCEDOR. *NOTE A FUNÇÃO É CHAMADA DENTRO DA FUNÇÃO 
   //JOGADA PARA VALIDAR A CADA JOGADA SE HOUVE VENCEDOR OU NÃO.
   async function vencedor(){
    let a1 = document.querySelector("div#casa0").getAttribute("jogada")
    let a2 = document.querySelector("div#casa1").getAttribute("jogada")
    let a3 = document.querySelector("div#casa2").getAttribute("jogada")
    
    let b1 = document.querySelector("div#casa3").getAttribute("jogada")
    let b2 = document.querySelector("div#casa4").getAttribute("jogada")
    let b3 = document.querySelector("div#casa5").getAttribute("jogada")
    
    let c1 = document.querySelector("div#casa6").getAttribute("jogada")
    let c2 = document.querySelector("div#casa7").getAttribute("jogada")
    let c3 = document.querySelector("div#casa8").getAttribute("jogada")
    
    let ganhador = ""

    if
        (((a1 == a2 && a1 == a3)||(a1 == b1 && a1 == c1)||(a1 == b2 && a1 == c3)) && a1 != ""){
         ganhador = a1
       } else if (((b2 == a2 && b2 == c2)||(b2 == b1 && b2 == b3) || (b2 == a3 && b2 == c1)) && b2 != ""){
            ganhador = b2
       } else if (((c3 == c2 && c3 == c1)||(c3 == b3 && c3 == a3)) && c3 != ""){
             ganhador = c3
       } 
     
       if(ganhador != ""){
          await sleep(50)
          alert(`o ganhador foi ${ganhador}`)
         }
      }

      function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
      }