import { ThemeProvider } from "styled-components";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import theme from "configs/styles/theme";
import { GlobalStyles } from "configs/styles/globalStyles";
import { NotHaveAuthRoute } from "./routes";
import Home from "@pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route>
            {NotHaveAuthRoute()}
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
