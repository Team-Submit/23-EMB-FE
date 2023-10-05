import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import { SearchPage } from "./pages/Search";
import { SearchListPage } from "./pages/SearchList";
import { Login } from "./pages/Login";
import { FirstLogin } from "./pages/first_Login";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/Login" element={<Login/>} />
        <Route path="/FirstLogin" element={<FirstLogin/>} />
        <Route path="/home" />
        <Route path="/admin" />
        <Route path="/admin/new" />
        <Route path="/admin/edit" />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/detail" element={<SearchListPage />} />
        <Route path="/upload" />
        <Route path="/my/profile" />
        <Route path="/my/password" />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;