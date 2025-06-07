
import './App.css';
import ClassbasedComponents from './components/ClassbasedComponents';
import Functionalbasedcomponent from './components/Functionalbasedcomponent';
import ProductList from './components/products/Index';
import Condition from './hooks/condition/Condition';
import 'bootstrap/dist/css/bootstrap.min.css';


//pass as props
const dummyProductData = ['Product1','Product2','Product3']


function App() {
  return (
    <div className="App">
     {/* <ClassbasedComponents/>
     <Functionalbasedcomponent/> */}


     {/* <ProductList ListOfProduct={dummyProductData}  name="Neha" city="ABC"/> */}
     {/* name is key  , Neha is value (props) */}



     <Condition/>
    </div>
  );
}

export default App;
