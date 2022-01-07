import styled from "styled-components";


const H2 = styled.h2`
font-size: 120%;

@media only screen and (max-width: 768px) {
  font-size: 80%;

}
 
`


const ContentTitle = (props) => {


    return (
        <H2>{props.title}</H2>
    )
};

export default ContentTitle;