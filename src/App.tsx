import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" />
        <Route path="/home" />
        <Route path="/admin" />
        <Route path="/admin/new" />
        <Route path="/admin/edit" />
        <Route path="/search" />
        <Route path="/search/detail" />
        <Route path="/upload" />
        <Route path="/my/profile" />
        <Route path="/my/password" />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
