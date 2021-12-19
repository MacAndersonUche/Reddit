import ContentAllDetails from "./ContentAllDetails"
import '../Css/ContentsCss.css'

const ContentContainer = (props) => {

    return (
        // <ul >
        //     {props.item.map(obj => (
        //         <ContentAllDetails
        //             key={obj.id}
        //             title={obj.title}
        //             comments={obj.comments}
        //             date={obj.date}
        //             votes={obj.votes}
        //             author={obj.name}
        //             time={obj.time}
        //             media={obj.imgUrl}
        //         />
        //     ))}
        // </ul>
        <ContentAllDetails
            key={props.id}
            title={props.title}
            comments={props.comments}
            votes={props.votes}
            author={props.author}
            //Convert time to days create logic for that
            time={props.time}
            //Fix the media url
            media={props.imgUrl} />
    )

}

export default ContentContainer