

import styled from "styled-components";

import { AiOutlineQuestionCircle } from "react-icons/ai"


const Button = styled.button`
display: flex;
align-content: center;
height: 5rem;
width: 15rem;
background-color: #8A9AA2;
margin: 1rem auto;
border: none;

&:hover {
    background-color: white;
    cursor: pointer;
}

`

const Container = styled.div`

  
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
 
  overflow-x: hidden; /* Disable horizontal scroll */
 


`




const SubMainDiv = (props) => {
    const askRed = "https://www.reddit.com/r/AskReddit.json";
    const cringetopia = "https://www.reddit.com/r/cringetopia.json";
    const midlyinteresting = "https://www.reddit.com/r/midlyinteresting.json";
    const funny = "https://www.reddit.com/r/funny.json";
    const todayilearned = "https://www.reddit.com/r/todayilearned.json";

    const handleClick1 = () => {
        props.setSubRed(askRed);
        props.setClicked(true);
    }
    const handleClick2 = () => {
        props.setSubRed(todayilearned);
        props.setClicked(true);
    }
    const handleClick3 = () => {
        props.setSubRed(cringetopia);
        props.setClicked(true);
    }

    const handleClick4 = () => {
        props.setSubRed(midlyinteresting);
        props.setClicked(true);
    }

    const handleClick5 = () => {
        props.setSubRed(funny);
        props.setClicked(true);
    }





    return (
        <Container>
            <Button onClick={handleClick1}>AskReddit</Button>
            <Button onClick={handleClick2}> Today I learned</Button>
            <Button onClick={handleClick3}>Cringetopia</Button>
            <Button onClick={handleClick4}>Mildy Interesting</Button>
            <Button onClick={handleClick5}>Funny</Button>
        </Container>)
}



export default SubMainDiv;