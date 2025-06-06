
import './App.css';
import ClassbasedComponents from './components/ClassbasedComponents';
import Functionalbasedcomponent from './components/Functionalbasedcomponent';
import Index from './components/products/Index'

function App() {
  return (
    <div className="App">
     <ClassbasedComponents/>
     <Functionalbasedcomponent/>
     <Index/>
    </div>
  );
}

export default App;
