import ContentAuthor from "./ContentAuthor"
import ContentComments from "./ContentComments"
import ContentMedia from "./ContentMedia"
import ContentTime from "./ContentTime"
import ContentTitle from "./ContentTitle"
import ContentVotes from "./ContentVotes"


const ContentAllDetails = (props) => {


    return (
        <div>
            <ContentTitle title={props.title} />
            <ContentAuthor author={props.author} />
            <ContentComments comments={props.comments} />
            <ContentMedia media={props.media} />
            <ContentVotes votes={props.votes} />
            <ContentTime time={props.time} />
        </div>
    )
};

export default ContentAllDetails;