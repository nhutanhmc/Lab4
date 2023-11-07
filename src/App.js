import "./App.css";

import Navigation from "./components/Navigation";
import PlayersPresentation from "./components/Player";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Flims from "./components/Flims";
import Contact from "./components/Contact";
import Pagination from "./components/Pagination";
import Bill from "./components/Bill";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Loginpage from "./components/Loginpage";
import { Route, Routes } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AuthContextProvider } from './context/AuthContext';
function App() {
  const appStyle = {
    backgroundImage: 'url("assets/images/hehe.jpg")',
    backgroundSize: "cover", // Chỉnh để ảnh nền bao phủ hết phần giao diện
    backgroundRepeat: "no-repeat", // Loại bỏ lặp lại
    backgroundAttachment: "fixed", // Cố định ảnh nền
    minHeight: "100vh", // Đảm bảo nền bao phủ toàn bộ chiều cao của màn hình
  };

  const footerStyle = {
    width: "100%", // Đảm bảo phần Footer chiếm toàn bộ chiều rộng của trang
  };

  return (
    <div style={appStyle}>
      <AuthContextProvider>
      <Navigation className="App" />
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        color="#7FFF00"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
          paddingTop: "20vh",
        }}
      >
        Web xem phim của Xavia
      </Typography>
      <div className="midle">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginpage" element={<Loginpage />}></Route>
          <Route path="/add" element={<Add />} />
          <Route path="/bill/:id" element={<Bill />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route
            path="/home"
            element={
              <>
                <Flims />
                <Pagination />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Flims />
                <Pagination />
              </>
            }
          />
        </Routes>
      </div>
        <Footer style={footerStyle} />
        </AuthContextProvider>
    </div>
  );
}

export default App;
