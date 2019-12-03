//criando tabuleiro com 9 casas
let tabuleiro = document.querySelector("div#tabuleiro")
for(let contador = 0; contador <= 8; contador++){
    let casa = document.createElement("div")
    casa.className = "casa"
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

let player = document.querySelector("div#player")
player.innerHTML = "<h1><strong>agora é a vez do</strong></h1>"
let img = document.createElement("img")
img.src="x.png"
document.getElementById("player").appendChild(img)

//função que cria as jogadas adicionando as imagens
function jogada(){
    play(vez)
    let imagem = document.createElement("img")    
    if(vez%2==0){      
       imagem.src="x.png"
      } else {
       imagem.src="bola.png" 
    } 
    let casa_ = this.id
    document.getElementById(casa_).appendChild(imagem)   
      vez++
   }
     
  


 
