import { useEffect, useState } from "react";
import styled from "styled-components";
import ContentContainer from "./ContentsDisplay/ContentContainer";
import { endPoint } from "./Extra/Dummy";
import Header from './Header/Header'
import SubMainDiv from "./SubReddit/SubMainDiv";


const Content = styled.div`
margin-top: 5rem;

`

const Main = styled.div`
display: flex;
justify-content: space-evenly;
align-content: center;
`




function App() {

  const [display, setDisplay] = useState('');
  const [clicked, setClicked] = useState(false);
  const [subred, setSubRed] = useState('')


  var myUrl;

  const fetchApp = async (url) => {

    try {
      const response = await fetch(url);

      if (response.ok) {
        const responseObj = await response.json();


        const data = responseObj.data.children;

        console.log(data)

        setDisplay(data);


      } else {
        throw new Error('Error')
      }

    } catch (e) {
      console.log(e)
    }
  };

  if (clicked) {
    console.log('Run Now')
    myUrl = subred;
  }
  else {
    myUrl = endPoint;
  }
  useEffect(() => {

    fetchApp(myUrl)


  }, [myUrl])


  return (
    <div>
      <Header setDisplay={setDisplay} />

      <Main>

        <div>
          {Object.keys(display).map(index => (

            <ContentContainer
              key={display[index].data.title}
              author={display[index].data.author}
              title={display[index].data.title}
              id={display[index].data.id}
              comments={display[index].data.num_comments}
              time={display[index].data.created}
              votes={display[index].data.ups + display[index].data.downs}
              url={display[index].data.url}
            />))}
        </div>

        <Content>

          <SubMainDiv setClicked={setClicked} setSubRed={setSubRed} />
        </Content>


      </Main>








    </div>

  );
}
export default App;
