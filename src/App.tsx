import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import { SearchPage } from "./pages/Search";
import { SearchListPage } from "./pages/SearchList";
<<<<<<< HEAD
import { Login } from "./pages/Login";
import { FirstLogin } from "./pages/first_Login";
=======
import { AdminPage } from "./pages/Admin";
import { UploadPage } from "./pages/Upload";
>>>>>>> Login

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
<<<<<<< HEAD
        <Route path="/Login" element={<Login/>} />
        <Route path="/FirstLogin" element={<FirstLogin/>} />
        <Route path="/home" />
        <Route path="/admin" />
=======
        <Route path="/" />
        <Route path="/home" element={<SearchPage />} />
        <Route path="/admin" element={<AdminPage />} />
>>>>>>> Login
        <Route path="/admin/new" />
        <Route path="/admin/edit" />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/search/detail:id" element={<DetailPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/my/profile" />
        <Route path="/my/password" />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;