import { Route, Routes } from "react-router-dom";
import AllTopics from "./routes/AllTopics";
import Biology from "./routes/Biology";
import Chemistry from "./routes/Chemistry";
import Physics from "./routes/Physics";
import Space from "./routes/Space";
import Tech from "./routes/Tech";
import About from "./routes/About";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./routes/NotFound";
import { useContext } from "react";
import DarkModeContext from "./contexts/DarkModeContext";
import AuthContext from "./contexts/AuthContsxt";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllTopics />} />
        <Route path="/home" element={<AllTopics />} />
        {/* for logged-in users */}
        {isLoggedIn && <Route path="/about" element={<About />} />}
        {isLoggedIn && <Route path="/biology" element={<Biology />} />}
        {isLoggedIn && <Route path="/chemistry" element={<Chemistry />} />}
        {isLoggedIn && <Route path="/physics" element={<Physics />} />}
        {isLoggedIn && <Route path="/space" element={<Space />} />}
        {isLoggedIn && <Route path="/tech" element={<Tech />} />}
        {/* for non-logged-in users */}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
