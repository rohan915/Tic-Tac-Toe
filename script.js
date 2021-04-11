 let controller = (function() {
    let gameboard = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]

    let winner = "nope"

    let elements = document.getElementsByClassName("w")

    let displayText = document.querySelector(".display")


   

    



    return {
        gameboard,

        display: function(text) {
            for (let i = 0; i < gameboard.length; i++) {
                elements[i].textContent = text

            }

        },
        elements,

        checkWin: function(a,b,c) {
            if (a == "x" && b == "x" && c == "x") {
                winner = 'x'

            } else if (a == "o" && b == "o" && c == "o")
            winner = 'o'

            return winner

        },

        deleteBoard: function() {
            for (let index = 0; index < gameboard.length; index++) {
                gameboard[index] = ""
            }
        },
        displayText,

        getNames: function() {
            let pro1 = prompt("what is your name")
            let pro2 = prompt("what is the oppenents name")
            return [pro1, pro2]
        }

        
    }

    
})()

const player = () => {
    let elems = controller.elements;
  let board = controller.gameboard;
  let text = controller.displayText;
  let button = document.querySelector(".reset")
  let turns = document.querySelector(".turn")
  let [name1, name2] = controller.getNames()
  console.log(name1, name2)



  button.addEventListener("click", ()=> {
      window.location.reload()
      controller.displayText("")
  })


    const handleWin = () => {
        //checks for win on all of the sqaures
        if (controller.checkWin(board[0], board[1], board[2]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"

        } else if (controller.checkWin(board[3], board[4], board[5]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[6], board[7], board[8]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[0], board[4], board[8]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[2], board[4], board[6]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[0], board[3], board[6]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[1], board[4], board[7]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[2], board[5], board[8]) == "x") {
            controller.display("")
            text.textContent = `${name1} wins`
            button.style.visibility = "visible"
        } else  if (controller.checkWin(board[0], board[1], board[2]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"

        } else if (controller.checkWin(board[3], board[4], board[5]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[6], board[7], board[8]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[0], board[4], board[8]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[2], board[4], board[6]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[0], board[3], board[6]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[1], board[4], board[7]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } else if (controller.checkWin(board[2], board[5], board[8]) == "o") {
            controller.display("")
            text.textContent = `${name2} wins`
            button.style.visibility = "visible"
        } 


    
    }

    const checkTie = () => {
        const value = board.every(elementT => {
            return elementT != ""
        })

        return value;
       


    }
    const placeMark = () => {
        
        let  currentTurn = "o"

        for (let i = 0; i < elems.length; i++) {
            elems[i].addEventListener("click", (e) => {

                if (e.target.textContent == "") {
                    if (currentTurn ==  "o") {
                        turns.textContent = `it is ${name1} turn`
                        e.target.textContent = "o"
                        board[e.target.id] = "o"
                        currentTurn = "x"
                        handleWin()
                        if (checkTie() == true) {
                            controller.deleteBoard()
                            controller.display("")
                            controller.displayText.textContent = "its a tie"
                            button.style.visibility = "visible"

                        }
                        
                    } else if (currentTurn == "x") {
                        turns.textContent = `it is ${name2} turn`
                        e.target.textContent = "x"
                        board[e.target.id] = "x"
                        currentTurn = "o"
                        handleWin()


                        if (checkTie() == true) {
                            controller.displayText.textContent = "its a tie"
                            button.style.visibility = "visible"


                            controller.deleteBoard()
                            controller.display("")

                        }
                        
                        


                       
                        
                    }
                }   
             })
        }
    }

    return {
        placeMark
    }
}

let play = player()

play.placeMark()



