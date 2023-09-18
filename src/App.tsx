import { Route, Routes } from "react-router-dom";
import { Search } from "./components/pages/Search";
import { AppLayout } from "./layouts/AppLayout";
import { SearchList } from "./pages/SearchList";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/"/>
        <Route path="/home"/>
        <Route path="/admin"/>
        <Route path="/admin/new"/>
        <Route path="/admin/edit"/>
        <Route path="/search"/>
        <Route path="/search/detail"/>
        <Route path="/upload"/>
        <Route path="/my/profile"/>
        <Route path="/my/password"/>
      </Route>
    </Routes>
  );
}

export default App;
