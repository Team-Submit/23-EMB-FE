import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { DetailPage } from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { SearchPage } from "./pages/Search";
import { SearchListPage } from "./pages/SearchList";
import { AdminPage } from "./pages/Admin";
import { UploadPage } from "./pages/Upload";
import { Edit } from "./pages/Admin/edit";
import { New } from "./pages/Admin/new";
import { Profile } from "./pages/My/profile";
import { PassWord } from "./pages/My/password";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" />
        <Route path="/home" element={<SearchPage />} />
        <Route path="/admin/new" element={<New />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/edit" element={<Edit />} />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/search/detail/:id" element={<DetailPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/my/profile" element={<Profile/>}/>
        <Route path="/my/password" element={<PassWord/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
