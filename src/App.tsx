import ButtonGradient from "../public/assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.24rem] overflow-hidden">
        <Header />
        <Hero />
        
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
