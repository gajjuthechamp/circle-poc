import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner'
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  return (
      <>
        <Header />
        <Banner />
        <ContentSection />
        <ContentSection redBackground={true}/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
  );
}

export default App;
