import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { DetailPage } from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { SearchPage } from "./pages/Search";
import { SearchListPage } from "./pages/SearchList";
import { AdminPage } from "./pages/Admin";
import { UploadPage } from "./pages/Upload";
import { New } from "./pages/Admin/new";
import { Edit } from "./pages/Admin/edit";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" />
        <Route path="/home" element={<SearchPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/new" element={<New/>}/>
        <Route path="/admin/edit" element={<Edit/>} />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/search/detail" element={<DetailPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/my/profile" />
        <Route path="/my/password" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;
