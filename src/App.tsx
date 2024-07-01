import './App.css';
import { Content } from './pages/Content';
import { Home } from './pages/Home';
import { SubscriptionContent } from './pages/Subscriptions';
import { GlobalStyles } from './styles/globaystyles';
import i18n from './configuration/translator';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
   <>
    <I18nextProvider i18n={i18n}>
      <GlobalStyles /> 

      <Home />

      <Content /> 

      <SubscriptionContent />
   </I18nextProvider>
   </>
  );
}

export default App;
