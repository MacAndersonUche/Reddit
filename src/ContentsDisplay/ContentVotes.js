import react from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import styled from "styled-components";


const VotesDiv = styled.div`


@media only screen and (max-width: 768px) {
   font-size: 10px;

}

`




const ContentVotes = (props) => {


    return (
        <VotesDiv>
            <BiUpArrow />
            {props.votes}
            <BiDownArrow />

        </VotesDiv>
    )
};

export default ContentVotes