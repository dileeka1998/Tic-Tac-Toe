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
        checkScore()
    }

    function checkScore(){
        const allSquares = document.querySelectorAll('.square')
        
        const winnigCombos=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        winnigCombos.forEach(array=>{
            const circleWins=array.every(cell=>allSquares[cell].firstChild?.classList.contains('circle'))
            if(circleWins) {
                information.textContent='Circle Wins!'
                allSquares.forEach(element=>element.replaceWith(element.cloneNode(true)))
                return
            }
        })
        winnigCombos.forEach(array=>{
            const crossWins=array.every(cell=>allSquares[cell].firstChild?.classList.contains('cross'))
            if(crossWins) {
                information.textContent='Cross Wins!'
                allSquares.forEach(element=>element.replaceWith(element.cloneNode(true)))
                return
            }
        })
    }
})