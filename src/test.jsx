import Navigation from "./component/navigation";
import Footer from "./component/layout/footer";
import Header from "./component/layout/header";

import Harbrel from "./page/harbrel";
import Test2 from "./test2";
import { useState } from "react";

function Test() {
  const [t, setT] = useState(0);

  function aa() {
    console.log("가자고" + t);
    setT(1);
  }

  return (
    <>
      <Header />
      <Navigation />
      {/* <button onClick={aa}>hi</button> */}
      <Harbrel />
      <Footer />
      {/* <Test2 test={t} setTest={setT} /> */}
    </>
  );
}

export default Test;
