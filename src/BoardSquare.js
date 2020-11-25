import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

export const BoardSquare = ({ x, y, children, }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.PIECE,
        drop: () => { console.error(x, y) },
        collect: (monitor) => ({})
    });
    return (<div ref={drop} style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {children}
    </div>);
};

export default BoardSquare;
