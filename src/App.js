import React, { useState } from "react";
import Correccion from "./Components/correccion";
import Home from "./Components/Home";


const App = () => {
     const [pestaña, setPestaña] = useState(false);
  

  return ( 
        <>
          {pestaña === false ? (
            <Home 
              setPestaña={setPestaña} />
          ) : (
            <Correccion
              setPestaña={setPestaña}/>
          )}
        </>
   );
}
 

export default App;
