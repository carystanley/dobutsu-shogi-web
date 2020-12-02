import pieceImage from './images/pieces/0FU.svg';
import { DragDropContainer } from 'react-drag-drop-container';

function Piece({ type, x, y }) {
    const opacity = 0.999;
    return (
        <DragDropContainer targetKey="piece" dragData={{ type, x, y }}>
            <div style={{width: '100px', height: '100px', backgroundColor: '#fff', borderRadius: '20px', opacity }}>
                <img src={pieceImage} alt="piece" style={{width: '100%'}} />
            </div>
        </DragDropContainer>
    );
}

export default Piece;
