import ContentAuthor from "./ContentAuthor"
import ContentComments from "./ContentComments"
import ContentMedia from "./ContentMedia"
import ContentTime from "./ContentTime"
import ContentTitle from "./ContentTitle"
import ContentVotes from "./ContentVotes"


const ContentAllDetails = (props) => {


    return (
        <div className="mainDiv">
            <div>
                <div className="mainContentTopContainer">
                    <ContentTitle title={props.title} />
                    <ContentMedia media={props.media} />
                </div>
                <div className="mainContentBottomContainer">

                    <ContentAuthor author={props.author} />
                    <ContentTime time={props.time} />
                    <ContentComments comments={props.comments} />
                </div>

            </div>


            <ContentVotes votes={props.votes} />

        </div>
    )
};

export default ContentAllDetails;