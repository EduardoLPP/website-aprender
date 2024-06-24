import './App.css';
import { Content } from './pages/Content';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/globaystyles';
function App() {
  return (
   <>
   <GlobalStyles /> 

   <Home />

   <Content /> 
   </>
  );
}

export default App;
