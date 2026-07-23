import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeMainContent from './components/HomeMainContent/HomeMainContent';
import TrainSelection from './components/TrainSelection/TrainSelection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        <Header />

        <main style={{ flexGrow: 1 }}>
          <Routes>
            
            <Route path="/" element={<HomeMainContent />} /> 
  
            <Route path="/trains" element={<TrainSelection />} />

            {/* 3. Страница пассажиров */}
            <Route path="/passengers" element={
              <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>
                Здесь будет ввод данных пассажиров
              </div>
            } />

            {/* 4. Страница оплаты */}
            <Route path="/payment" element={
              <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>
                Здесь будет форма оплаты
              </div>
            } />

            {/* 5. Страница проверки */}
            <Route path="/verification" element={
              <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>
                Здесь будет проверка и подтверждение заказа
              </div>
            } />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
