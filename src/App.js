import React from 'react';
import './App.css';

const externalBoard = [9, null, null, 6, 7, null, null, null, null, null, null, 6, 8, null, null, 4, 7, null, 8, null, null, null, 1, null, null, null, 3, null, null, 3, null, null, null, null, null, 1, null, null, 5, 4, null, 6, 9, null, null, 6, null, null, null, null, null, 3, null, null, 3, null, null, null, 6, null, null, null, 8, null, 6, 8, null, null, 5, 2, null, null, null, null, null, null, 8, 2, null, null, 6];
const initialPositions =[0, 3, 4, 11,12,15,16,18,22,26,29,35,38,39,41,42,45,51,54,58,62,64,65,68,69,76,77,80];

const SquareButton = (props) => {
  return (
    <form className="square">
      {props.value}
    </form>
  );
}


const Square = (props) => {
  const currentPostion = props.row*9 + props.col

  const handleChange = (event) => {
    const intValue = parseInt(event.target.value)
    const squares = props.val.squares.slice();
    squares[currentPostion] = intValue;
    props.setVal({
      squares: squares
    });
    console.log(squares)
  }

  return (
    <form className="square">
      {/* <input type="text" className="square" value={props.val[props.row*9 + props.col]} onChange={handleChange}/> */}
      <input type="text" className="square" onChange={handleChange}/>

    </form>
  );
}

const Board = () => {

  const [values, setValues] = React.useState(
    // {squares: Array(81).fill(null)},
    {squares: externalBoard},
  );

  //to do - some type of validation of values - 
  //  is it a valid value (1-9)
  //  is it a valid entry given the board
  //  is the game over
  //  sudoku status
  //  some type of way of getting random boards for sudoku 
  //    flask app?
  //    input that matches the board

  const renderSquare = (i, v) => {
    const currentPostion = i*9 + v

    if (initialPositions.includes(currentPostion)) {
      console.log(externalBoard[currentPostion])
      return( 
        <>
          <SquareButton value={externalBoard[currentPostion]}/>
        </>
      );
    } else {
      console.log('no output')
      return( 
        <>
          <Square row={i} col={v} val={values} setVal={setValues}/>
        </>
      );
    }
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, 0)}
        {renderSquare(0, 1)}
        {renderSquare(0, 2)}
        {renderSquare(0, 3)}
        {renderSquare(0, 4)}
        {renderSquare(0, 5)}
        {renderSquare(0, 6)}
        {renderSquare(0, 7)}
        {renderSquare(0, 8)}
      </div>
      <div className="board-row">
        {renderSquare(1, 0)}
        {renderSquare(1, 1)}
        {renderSquare(1, 2)}
        {renderSquare(1, 3)}
        {renderSquare(1, 4)}
        {renderSquare(1, 5)}
        {renderSquare(1, 6)}
        {renderSquare(1, 7)}
        {renderSquare(1, 8)}
      </div>
      <div className="board-row">
        {renderSquare(2, 0)}
        {renderSquare(2, 1)}
        {renderSquare(2, 2)}
        {renderSquare(2, 3)}
        {renderSquare(2, 4)}
        {renderSquare(2, 5)}
        {renderSquare(2, 6)}
        {renderSquare(2, 7)}
        {renderSquare(2, 8)}
      </div>
      <div className="board-row">
        {renderSquare(3, 0)}
        {renderSquare(3, 1)}
        {renderSquare(3, 2)}
        {renderSquare(3, 3)}
        {renderSquare(3, 4)}
        {renderSquare(3, 5)}
        {renderSquare(3, 6)}
        {renderSquare(3, 7)}
        {renderSquare(3, 8)}
      </div>
      <div className="board-row">
        {renderSquare(4, 0)}
        {renderSquare(4, 1)}
        {renderSquare(4, 2)}
        {renderSquare(4, 3)}
        {renderSquare(4, 4)}
        {renderSquare(4, 5)}
        {renderSquare(4, 6)}
        {renderSquare(4, 7)}
        {renderSquare(4, 8)}
      </div>
      <div className="board-row">
        {renderSquare(5, 0)}
        {renderSquare(5, 1)}
        {renderSquare(5, 2)}
        {renderSquare(5, 3)}
        {renderSquare(5, 4)}
        {renderSquare(5, 5)}
        {renderSquare(5, 6)}
        {renderSquare(5, 7)}
        {renderSquare(5, 8)}
      </div>
      <div className="board-row">
        {renderSquare(6, 0)}
        {renderSquare(6, 1)}
        {renderSquare(6, 2)}
        {renderSquare(6, 3)}
        {renderSquare(6, 4)}
        {renderSquare(6, 5)}
        {renderSquare(6, 6)}
        {renderSquare(6, 7)}
        {renderSquare(6, 8)}
      </div>
      <div className="board-row">
        {renderSquare(7, 0)}
        {renderSquare(7, 1)}
        {renderSquare(7, 2)}
        {renderSquare(7, 3)}
        {renderSquare(7, 4)}
        {renderSquare(7, 5)}
        {renderSquare(7, 6)}
        {renderSquare(7, 7)}
        {renderSquare(7, 8)}
      </div>
      <div className="board-row">
        {renderSquare(8, 0)}
        {renderSquare(8, 1)}
        {renderSquare(8, 2)}
        {renderSquare(8, 3)}
        {renderSquare(8, 4)}
        {renderSquare(8, 5)}
        {renderSquare(8, 6)}
        {renderSquare(8, 7)}
        {renderSquare(8, 8)}
      </div>
    </div>
  );
}


const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
