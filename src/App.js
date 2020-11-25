import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from './Board';
import './App.css';

function App() {
  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
            <div style={{ width: 520, height: 800 }}>
                <Board />
            </div>
        </DndProvider>
    </div>
  );
}

export default App;
