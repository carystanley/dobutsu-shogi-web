import BoardSquare from './BoardSquare';
import Piece from './Piece';

import boardImage from './images/board/doubutsuboard.svg';

const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundImage: `url(${boardImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '600px 800px',
    backgroundPosition: 'center'
}

const BOARD_WIDTH = 3;
const BOARD_HEIGHT = 4;

function Board(props) {
    function renderSquare(i) {
        const x = i % BOARD_WIDTH;
        const y = Math.floor(i / BOARD_WIDTH);
        return (<div key={i} style={{
            width: ((1/BOARD_WIDTH) * 100).toFixed(3)+'%',
            height: ((1/BOARD_HEIGHT) * 100).toFixed(3)+'%'
        }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y)}
            </BoardSquare>
        </div>);
    }

    function renderPiece(x, y) {
        if ( x === 1 && y === 2 ) {
            return <Piece />
        }
        return null;
    }

    const squares = [];
    for (let i = 0; i < BOARD_WIDTH * BOARD_HEIGHT; i += 1) {
        squares.push(renderSquare(i));
    }

    return (
        <div className="Board" style={boardStyle}>
            {squares}
        </div>
    );
}

export default Board;
