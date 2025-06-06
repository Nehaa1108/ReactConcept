
import './App.css';
import ClassbasedComponents from './components/ClassbasedComponents';
import Functionalbasedcomponent from './components/Functionalbasedcomponent';
import ProductList from './components/products/Index';

function App() {
  return (
    <div className="App">
     {/* <ClassbasedComponents/>
     <Functionalbasedcomponent/> */}


     <ProductList  name="Neha" city="ABC"/>
     {/* name is key  , Neha is value (props) */}
    </div>
  );
}

export default App;
