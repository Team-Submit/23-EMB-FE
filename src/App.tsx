import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" />
      </Route>
    </Routes>
  );
}

export default App;
