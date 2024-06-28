import './App.css';
import { Content } from './pages/Content';
import { Home } from './pages/Home';
import { SubscriptionContent } from './pages/Subscriptions';
import { GlobalStyles } from './styles/globaystyles';
function App() {
  return (
   <>
   <GlobalStyles /> 

   <Home />

   <Content /> 

   <SubscriptionContent />
   </>
  );
}

export default App;
