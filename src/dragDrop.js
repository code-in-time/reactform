// import { Routes, Route, Link } from "react-router-dom";
import Example from './dragdrop/Example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// https://react-dnd.github.io/react-dnd/examples/dustbin/single-target
function DragDrop() {
  return (
    <div className="DragDrop">
      DragDrop
      <DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
    </div>
  );
}

export default DragDrop;
