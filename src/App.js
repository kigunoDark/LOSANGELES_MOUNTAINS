import './App.css';
import CustomPageDelimiter from './components/CustomContentDelimiter/CustomContentDelimiter';
import Footer from './components/Footer/Footer';
import Head from './components/Head/Head';
import History_Content from './components/HistoryContent/HistoryContent';
import Navigation from './components/Navigation/Navigation';
import TeamContent from './components/TeamContent/TeamContent';

function App() {
  return (
    <div className="App">
      <Head />
      <Navigation color="#414f6b" showName />
      <History_Content />
      <CustomPageDelimiter />
      <TeamContent />
      <Footer />
    </div>
  );
}

export default App;
