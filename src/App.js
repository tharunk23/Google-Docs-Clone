import Header from './components/Header';
import './App.css';
import Toolbox from './components/Toolbox';
import Sidebar from './components/Sidebar';
import Texteditor from './components/Texteditor';


function App() {
  return (
    <div className="App">
         
          <Header />
          <Toolbox />
          <div className="adjust">
          <Texteditor /> 
          <Sidebar />
        
          </div>
    </div>
  );
}

export default App;
