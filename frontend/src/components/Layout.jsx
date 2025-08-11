// src/components/Layout.jsx
import Footer from './Footer';
import Navbar from './Navbar'; // optional

export default function Layout({ children }) {
  return (
    <>
      <Navbar /> {/* Keep navbar here if you want it on all pages */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
