import { useEffect, useState } from "react";
import ContentContainer from "./ContentsDisplay/ContentContainer";
import { endPoint, DUMMY_OBJArry } from "./Extra/Dummy";
import Header from './Header/Header'




function App() {

  const [display, setDisplay] = useState('');

  useEffect(() => {
    const fetchApp = async (url) => {

      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseObj = await response.json();

          const data1 = responseObj.data.children[0].data;

          // console.log(responseObj.data.children)

          // console.log(typeof (data1))

          console.log(data1)

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

      }</ul>

      {/* 
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => (<ContentContainer
        author={display[x].data.author}
        title={display[x].data.title}
        id={display[x].data.id}
        comments={display[x].data.num_comments}
        time={display[x].data.created}
        votes={display[x].data.ups + display[x].data.downs}

      />))} */}
      {/* {<ContentContainer
        author={display[0].data.author}
        title={display[0].data.title}
        id={display[0].data.id}
        comments={display[0].data.num_comments}
        time={display[0].data.created}
        votes={display[0].data.ups + display[0].data.downs}

      />} */}

      {<ContentContainer
        author={display.author}
        title={display.title}
        id={display.id}
        comments={display.num_comments}
        time={display.created}
        votes={display.ups + display.downs}

      />}






      {/* <ContentContainer item={display} /> */}


    </div>

  );
}
export default App;
