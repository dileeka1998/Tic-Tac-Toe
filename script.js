document.addEventListener('DOMContentLoaded',()=>{
    const gameBoard = document.querySelector('#game-board')
    const information = document.querySelector('#info')
    
    const boardCells = [
        "","","","","","","","",""
        ]
        function createBoard() {
            boardCells.forEach((cell,index)=>{
                const element = document.createElement('div')
                element.classList.add('square')
                gameBoard.append(element)
            })
        }
    
    createBoard()
})