import Header from './components/Header/Header';
import HomeMainContent from './components/HomeMainContent/HomeMainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <HomeMainContent />
      <Footer />
    </div>
  );
}

export default App;
