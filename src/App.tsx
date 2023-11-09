import { ThemeProvider } from "styled-components";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import theme from "configs/styles/theme";
import { GlobalStyles } from "configs/styles/globalStyles";
import { NotHaveAuthRoute } from "./routes";
import Home from "@pages/Home";
import { ROUTES } from "@constants/routes";
import Favourite from "@pages/Feed/Favourite";
import Trending from "@pages/Feed/Trending";
import LayoutFeed from "layouts/LayoutFeed";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route>
            {NotHaveAuthRoute()}
            <Route path="/" element={<Home />} />
            <Route element={<LayoutFeed />}>
              <Route path={ROUTES.FEED} element={<Trending />} />
              <Route path={ROUTES.FAVOURITE} element={<Favourite />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
