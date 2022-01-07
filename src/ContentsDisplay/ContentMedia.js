import styled from "styled-components";

const Image = styled.img`
height: 20rem;
width: 20rem;

@media only screen and (max-width: 768px) {
  height: 8rem;
width: 8rem;

}




`


const ContentMedia = (props) => {

    return (
        <Image src={props.url} className="image" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.ctfassets.net/lzny33ho1g45/how-to-post-to-reddit-p-img/e1199d1cec4ddd74c5a9ef46a3890b8b/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" }} />








    )
};

export default ContentMedia;