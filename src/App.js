import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeCineme } from "./Pages/HomeCineme";
import { Mylist } from "./Pages/Mylist";
import { Tendances } from "./Pages/Tendances";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCineme />} />
        <Route path="/myliste" element={<Mylist />} />
        <Route path="/tendances" element={<Tendances/>} />
        <Route path="/*" element={<HomeCineme />} />
      
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
