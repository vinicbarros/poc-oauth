import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/Home";
import SignIn from "./components/SignIn";
import { AuthenticationProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthenticationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </>
  );
}

export default App;
