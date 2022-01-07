

const ContentTime = (props) => {


    function unixTime(unixtime) {

        var u = new Date(unixtime * 1000);



        return ('0' + u.getUTCDate()).slice(-2) +
            '-' + ('0' + u.getUTCMonth() + 1).slice(-2) +
            '-' + u.getUTCFullYear()
    }
    return (
        <p>{

            unixTime(props.time)


        }</p>
    )
};

export default ContentTime