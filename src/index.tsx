import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContsxt";
import { QueryClient, QueryClientProvider } from "react-query";
import { NewsContextProvider } from "./contexts/NewsContext";
import App from "./App";
import DarkModeContext, { DarkModeContexProvider } from "./contexts/DarkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <NewsContextProvider>
      <DarkModeContexProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
      </DarkModeContexProvider>
    </NewsContextProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
