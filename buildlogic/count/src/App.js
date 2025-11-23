import logo from './logo.svg';
import './App.css';
import Project1_count from './components/Project1_count';
import Project2_password from './components/Project2_password';
import Project3_character_counter from './components/Project3_character_counter';
import Project4_inputname_show from './components/Project4_inputname_show';
import { Todolist } from './components/Todolist';

function App() {
  return (
   <div>
   <Project1_count/>
   <Project2_password/>
   <Project3_character_counter/>
   <Project4_inputname_show/>
   <Todolist/>
   </div>
  );
}

export default App;
