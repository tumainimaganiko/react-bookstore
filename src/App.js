import { Routes, Route, Outlet } from 'react-router-dom';
import Books from 'components/Books';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';
import './App.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />}/>
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
