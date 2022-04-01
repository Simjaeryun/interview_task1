//main
import { Top } from "./components/Top";
import { Mid } from "./components/Mid";
import { Bottom } from "./components/Bottom";
//common
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";

import './scss/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Mid />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
