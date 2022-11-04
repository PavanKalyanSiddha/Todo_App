import React from "react";
import LoginPage from "./components/loginPage/LoginPage";
import Todo from "./components/todo/todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import history from "./components/history";

const App = () => {
  // const [loginPage, setLoginPage] = useState(true)
  // useEffect(() => {
  //   if (history.location.pathname) {
  //     window.location.reload();
  //   }
  // }, [history.location.pathname]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/dashboard" element={<Todo />} />
        {/* // </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
