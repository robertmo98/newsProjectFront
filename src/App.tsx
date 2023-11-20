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
import { useContext, useEffect, useState } from "react";
import AuthContext from "./contexts/AuthContsxt";
import AdminBar from "./components/adminBar/AdminBar";
import PostArticle from "./routes/PostArticle";
import Article from "./components/article/Article";
import { useQuery } from "react-query";
import NewsContext from "./contexts/NewsContext";
import { allNewsRequest } from "./services/news-service";
import Spinner from "./components/spinner/Spinner";
import EditArticle from "./routes/EditArticle";
import UserProfile from "./components/UserProfile";

const App = () => {
  //todo: set the role of the user using the jwt (update the server- add the role as a parameter through the jwt and read
  //it from the front-react.js)
  const { isLoading, data: res } = useQuery("get-articles", allNewsRequest);
  const { setArticles } = useContext(NewsContext);
  const { isLoggedIn, isAdmin, profilePic } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    //effect that runs once when the component is loaded
    //AND each time res changes
    if (res && res.data && isLoggedIn) {
      setArticles(res.data);
      if(profilePic && profilePic.length>1) {

      }
    }
  }, [res]);

  
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="dark:bg-slate-950 min-h-screen">
      <Navbar />
      {isLoading && <Spinner />}
      {/* {isAdmin && <AdminBar />} */}
      <Routes>
        <Route path="/" element={<AllTopics />} />
        {isAdmin && <Route path="/post" element={<PostArticle />} />}
        <Route path="/about" element={<About />} />

        {/* for logged-in users */}
        {isLoggedIn && <Route path="/home" element={<AllTopics />} />}
        {isLoggedIn && <Route path="/biology" element={<Biology />} />}
        {isLoggedIn && <Route path="/chemistry" element={<Chemistry />} />}
        {isLoggedIn && <Route path="/physics" element={<Physics />} />}
        {isLoggedIn && <Route path="/space" element={<Space />} />}
        {isLoggedIn && <Route path="/tech" element={<Tech />} />}
        {isLoggedIn && <Route path="/news/:id" element={<Article />} />}
        {isLoggedIn && <Route path="/userInfo" element={<UserProfile />}/>}

        {/* for admin only */}
        {isAdmin && <Route path="/news/:id/edit" element={<EditArticle />} />}

        {/* for non-logged-in users */}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}

        {/* {isLoggedIn && <Route path="/posts/:id" element={<PostDetails />} />} */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
