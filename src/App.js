import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeCineme } from "./Pages/HomeCineme";
import { Mylist } from "./Pages/Mylist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCineme />} />
        <Route path="/myliste" element={<Mylist />} />
        <Route path="/*" element={<HomeCineme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
