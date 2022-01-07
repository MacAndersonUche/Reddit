import ContentAllDetails from "./ContentAllDetails"
import '../Css/ContentsCss.css'


const ContentContainer = (props) => {

    return (


        <ContentAllDetails
            key={props.id}
            title={props.title}
            comments={props.comments}
            votes={props.votes}
            author={props.author}
            time={props.time}
            //Fix the media url
            url={props.url} />



    )


}

export default ContentContainer