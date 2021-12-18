import { useEffect, useState } from "react";
import ContentContainer from "./ContentsDisplay/ContentContainer";
import { endPoint } from "./Extra/Dummy";
import Header from './Header/Header'


function App() {

  const [display, setDisplay] = useState({});

  useEffect(() => {
    const fetchApp = async (url) => {

      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseObj = await response.json();

          const data1 = responseObj.data.children

          // console.log(responseObj.data)

          // console.log(typeof (data1))

          setDisplay(data1);


          return data1

        } else {
          throw new Error(response.status)
        }

      } catch (e) {
        console.log(e)
      }
    };
    fetchApp(endPoint)
  }, [])



  return (
    <div>
      <Header />
      <ul>{
        Object.keys(display).map(dog => (<li key={dog}>{dog}</li>))
      }</ul>

      <div>
        <ContentContainer item={display} />
      </div>



    </div>

  );
}
export default App;
