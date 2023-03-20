import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { HomeCineme } from "./Pages/HomeCineme";
import { Mylist } from "./Pages/Mylist";
import { Tendances } from "./Pages/Tendances";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCineme />} />
        <Route path="/myliste" element={<Mylist />} />
        <Route path="/tendances" element={<Tendances />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<HomeCineme />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
