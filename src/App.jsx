import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './components/AppLayout';
import Homepage from './pages/Homepage';
import Men from './pages/Men';
import Women from './pages/Women';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: '8px',
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            durration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </>
  );
}

export default App;
