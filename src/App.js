import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { HomeCineme } from "./Pages/HomeCineme";
import { Mylist } from "./Pages/Mylist";
import { Tendances } from "./Pages/Tendances";
import { PrivateRoute } from "./Utils/PrivateRoute";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeCineme />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute>
          <HomeCineme />
        </PrivateRoute>} />
        <Route path="/myliste" element={<PrivateRoute>
          <Mylist />
        </PrivateRoute>} />
        <Route path="/tendances" element={<PrivateRoute>
          <Tendances />
        </PrivateRoute>} />
      </Routes>
     
    </BrowserRouter>
    </AuthProvider>
    
    </>
  );
}

export default App;
