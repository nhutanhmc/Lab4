import './App.css';

import Navigation from './components/Navigation';
import PlayersPresentation from './components/Player';
import Footer from './components/Footer';
import Main from './components/Main';
import Flims from './components/Flims';
import Contact from './components/Contact';
import Pagination from './components/Pagination';
import { Route, Routes } from 'react-router-dom';

function App() {
  const appStyle = {
    backgroundImage: 'url("assets/images/bg.jpg")',
    backgroundSize: 'cover', // Chỉnh để ảnh nền bao phủ hết phần giao diện
    backgroundRepeat: 'no-repeat', // Loại bỏ lặp lại
    backgroundAttachment: 'fixed', // Cố định ảnh nền
    minHeight: '100vh', // Đảm bảo nền bao phủ toàn bộ chiều cao của màn hình
  };

  const footerStyle = {
    width: '100%', // Đảm bảo phần Footer chiếm toàn bộ chiều rộng của trang
  };

  return (
    <div style={appStyle}>
      <Navigation className="App" />
       <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Flims />} />
        <Route path='/*' element={<Flims />} />
       </Routes>

       <Pagination/>
      <div>
      <Footer style={footerStyle}/>
      </div>
      
    </div>
  );
}

export default App;
