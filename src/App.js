import logo from './logo.svg';
import './App.css';
import FruitContainer from './Components/FruitContainer'

function App() {
  
    const fruits = ['banana', 'strawberry', 'grapes', 'apples', 'avocado']
  return (
      <div className="App">
        <FruitContainer fruits={fruits} />
      </div>
  
  
  );
}

export default App;
