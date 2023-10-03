import "./App.css";
import CustomPageDelimiter from "./components/CustomContentDelimiter/CustomContentDelimiter";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import HistoryContent from "./components/HistoryContent/HistoryContent";
import Navigation from "./components/Navigation/Navigation";
import TeamContent from "./components/TeamContent/TeamContent";
import { APP_DELIMITER_CONTENT, APP_DELIMITER_URL } from "./AppConstants";

/**
 * Main application component.
 *
 * @component
 * @returns {JSX.Element} The main application component JSX.
 */


function App() {
  return (
    <div className="App">
      <Head />
      <Navigation color="#414f6b" showName />
      <HistoryContent />
      <CustomPageDelimiter content={APP_DELIMITER_CONTENT} url={APP_DELIMITER_URL} />
      <TeamContent />
      <Footer />
    </div>
  );
}

export default App;
