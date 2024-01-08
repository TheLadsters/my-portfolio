import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
