import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeMainContent from './components/HomeMainContent/HomeMainContent';
import TrainSelection from './components/TrainSelection/TrainSelection';
import SeatSelection from './components/SeatSelection/SeatSelection';
import Passengers from './components/Passengers/Passengers';
import Payment from './components/Payment/Payment'; 
import Verification from './components/Verification/Verification';
import Success from './components/Success/Success';
import Footer from './components/Footer/Footer';

function AppContent() {
  const location = useLocation();
  
  // ГЛАВНЫЙ ФИКС: Проверяем, находится ли пользователь на финальной странице успеха
  const isSuccessPage = location.pathname === '/success';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Header />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomeMainContent />} /> 
          <Route path="/trains" element={<TrainSelection />} />
          <Route path="/seats" element={<SeatSelection />} />
          
          {/* 3. Страница пассажиров */}
          <Route path="/passengers" element={<Passengers />} />

          {/* 4. Страница оплаты */}
          <Route path="/payment" element={<Payment />} />

          {/* 5. Страница проверки */}
          <Route path="/verification" element={<Verification />} />

          {/* 6. Финальная страница успешного заказа */}
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>

      {/* Рендерим футер везде, кроме финальной страницы успеха */}
      {!isSuccessPage && <Footer />}
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
