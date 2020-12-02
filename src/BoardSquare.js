import React from 'react';
import { DropTarget } from 'react-drag-drop-container';

export const BoardSquare = ({ x, y, children, }) => {
    return (
        <DropTarget targetKey="piece" onHit={({dragData}) => {
            console.error(dragData);
            console.error(x, y);
        }}>
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {children}
            </div>
        </DropTarget>
    );
};

export default BoardSquare;
