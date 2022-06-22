import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-violet-400">
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
