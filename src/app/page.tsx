import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Oferring from "./components/offerring";
export default function Home() {
  return (
    <div className="flex flex-col h-screen  ">
      <Navbar />
      <Main />
      <Oferring />
      <Footer />
    </div>
  );
}
