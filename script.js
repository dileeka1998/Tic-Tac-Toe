document.addEventListener('DOMContentLoaded',()=>{
    const gameBoard = document.querySelector('#game-board')
    const information = document.querySelector('#info')
    
    let go = 'circle'
    information.textContent='circle goes first'

    const boardCells = [
        "","","","","","","","",""
        ]
        function createBoard() {
            boardCells.forEach((_cell,index)=>{
                const element = document.createElement('div')
                element.classList.add('square')
                element.id = index
                element.addEventListener('click',addGo)
                gameBoard.append(element)
            })
        }
    
    createBoard()
    function addGo(e) {
        const divCircle=document.createElement('div')
        divCircle.classList.add(go)
        e.target.append(divCircle)
        go = go === 'circle' ? 'cross' : 'circle'
        information.textContent='It is now' + go + "'s go."
        e.target.removeEventListener('click',addGo)
    }
})