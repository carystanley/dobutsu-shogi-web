import pieceImage from './images/pieces/0FU.svg';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes';

function Piece({ id, left, top, hideSourceOnDrag = true, children }) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIECE },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.5 : 0.999;

    return (
        <div ref={drag} style={{width: '80%', backgroundColor: '#fff', borderRadius: '20px', opacity }}>
            <img src={pieceImage} alt="piece" style={{width: '100%'}} />
        </div>
    );
}

export default Piece;
