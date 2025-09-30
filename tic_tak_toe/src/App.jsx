import { useState } from "react"
import { Square } from "./Square"
import { ResetButton } from "./ResetButton";

export const App = () =>{
  const [board , setBoard] = useState(Array(9).fill(null))
  const [isNext , setIsNext] = useState(true);

  const handleOnClick = (i) =>{
   if(board[i]) return;
   const updatedBoard = [...board];
   updatedBoard[i] = isNext ? 'X' : 'O';
   setBoard(updatedBoard);
   setIsNext(!isNext);
  }

  const calculateWinner = (board) =>{
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
    ]
    for(let [a,b,c] of lines){
      if(board[a] && board[a] == board[b] && board[b] == board[c]){
        return board[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const isDraw = board.every(cell => cell != null) && !winner; 
  const status = winner ? `Winner = ${winner}` : isDraw ? `It is draw!` : `Next player turn : ${!isNext ? 'X' : 'O'}`
   
  const resetFunction = () =>{
    setBoard(Array(9).fill(null));
    setIsNext(true)
  }

  return(
    <>
    <div className="flex flex-col items-center min-h-screen bg-green-200">
    <h1 className="text-5xl font-bold pt-2 pb-2">Tic Tac Toe</h1>
    <div className="grid grid-cols-3 gap-5">
     {
      board.map((value , i) =>{
        return(
        <Square key={i} value={value} onClick={()=>handleOnClick(i)} disabled={!!winner}/>
        )
      })
     }
    </div>
    <p className="text-3xl pt-3 font-medium">{status}</p>
    <ResetButton onClick={() => resetFunction()} />
    </div>
    
    </>
  )
}