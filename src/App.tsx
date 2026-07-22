import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';;

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Header />

      <div style={{ flex: '1' }}></div>

      <Footer />
  
    </div>
  );
}

export default App;
