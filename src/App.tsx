import { Route, Routes, useNavigate } from "react-router-dom";
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
import { useContext, useEffect } from "react";
import AuthContext from "./contexts/AuthContsxt";
import PostArticle from "./routes/PostArticle";
import Article from "./routes/Article";
import { useQuery } from "react-query";
import NewsContext from "./contexts/NewsContext";
import { allNewsRequest } from "./services/news-service";
import Spinner from "./components/spinner/Spinner";
import EditArticle from "./routes/EditArticle";
import UserProfile from "./routes/UserProfile";
import Footer from "./components/footer/Footer";
import AdminHeader from "./components/adminControls/AdminHeader";
import Terms from "./routes/Terms";

const App = () => {
  const { isLoading, data: res } = useQuery("get-articles", allNewsRequest);
  const { setArticles } = useContext(NewsContext);
  const { isLoggedIn, isAdmin, profilePic } = useContext(AuthContext);

  useEffect(() => {
    if (res && res.data && isLoggedIn) {
      setArticles(res.data);
      if (profilePic && profilePic.length > 1) {
      }
    }
  }, [res]);

  return (
    <div className="dark:bg-slate-950 min-h-screen">
      <Navbar />
      {isLoggedIn && isLoading && <Spinner />}
      {isLoggedIn && isAdmin && <AdminHeader />}

      <Routes>
        {/* <Route path="/" element={<AllTopics />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />

        {isLoggedIn && (
          <>
            <Route path="/home" element={<AllTopics />} />
            <Route path="/biology" element={<Biology />} />
            <Route path="/chemistry" element={<Chemistry />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/space" element={<Space />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/news/:id" element={<Article />} />
            <Route path="/userInfo" element={<UserProfile />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/news/:id/edit" element={<EditArticle />} />
            <Route path="/post" element={<PostArticle />} />
          </>
        )}

        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}

        {!isLoggedIn && <Route path="/home" element={<Login />} />}
        <Route path="/" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
