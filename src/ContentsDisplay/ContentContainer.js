import ContentAllDetails from "./ContentAllDetails"


const ContentContainer = (props) => {

    return (
        <ul>
            {props.item.map(obj => (
                <ContentAllDetails
                    key={obj.id}
                    title={obj.title}
                    comments={obj.comments}
                    date={obj.date}
                    votes={obj.votes}
                    author={obj.name}
                    time={obj.time}
                    media={obj.imgUrl}
                />
            ))}
        </ul>
    )

}

export default ContentContainer