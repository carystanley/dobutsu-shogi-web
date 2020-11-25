import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import Board from './Board';
import './App.css';

function App() {
  return (
    <div className="App">
        <DndProvider backend={TouchBackend} options={{
            enableMouseEvents: true
        }}>
            <div style={{ width: 520, height: 800 }}>
                <Board />
            </div>
        </DndProvider>
    </div>
  );
}

export default App;
