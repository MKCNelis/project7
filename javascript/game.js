
const textElement   =document.getElementById('text')
const optionsButtonsElement   =document.getElementById('option-buttons')

let state={}

funtion startGame() {
    state={}
    showTextNode(1)
}

funtion showTextNode(textNodeIndex)  {
 const textNode = textNodes.find(textNode => textNode.id ===
    textNodeIndex)
    textElement.innerText = textNode.text
}

Funtion selectOption(Option)  {

}

 const textNodes = [
     {
         id: 1,
         text:  'Bunny hello',

         options:[
             {
                 text:'oke',
             }
         ]
     }
 ]

StartGame()