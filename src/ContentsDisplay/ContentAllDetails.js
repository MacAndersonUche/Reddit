import styled from "styled-components"
import ContentAuthor from "./ContentAuthor"
import ContentComments from "./ContentComments"
import ContentMedia from "./ContentMedia"
import ContentTime from "./ContentTime"
import ContentTitle from "./ContentTitle"
import ContentVotes from "./ContentVotes"




const MainContentBottom = styled.div`
  display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid black;
    margin: 0 auto;
    text-align: center;

    @media only screen and (max-width: 768px) {
   font-size: 8px;

}

`

const MainDiv = styled.div`

 height: 40%;
    width: 50vw;
   
    margin: 5rem auto 2rem auto;
    display: grid;
    background-color: rgb(  255, 255, 255);
   border-radius: 1rem;
   display: grid;
   grid-template-columns: 20px 1fr;

    @media only screen and (max-width: 768px) {
  margin: 4rem auto 0 auto;

}
`

const MainContentTop = styled.div`
 margin-bottom: 0;
  text-align: center;

   @media only screen and (max-width: 768px) {
   font-size: 10px;

}


`

const ContentAllDetails = (props) => {


    return (
        <div>

            <MainDiv>
                <ContentVotes votes={props.votes} />
                <div>
                    <MainContentTop>
                        <ContentTitle title={props.title} />
                        <ContentMedia url={props.url} />
                    </MainContentTop>
                    <MainContentBottom>

                        <ContentAuthor author={props.author} />
                        <ContentTime time={props.time} />
                        <ContentComments comments={props.comments} />
                    </MainContentBottom>

                </div>




            </MainDiv>


        </div>


    )
};

export default ContentAllDetails;