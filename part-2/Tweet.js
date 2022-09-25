function Tweet(props) {
    return (
        <div>
            <li>username : @{props.username}</li>
            <li>name : {props.name}</li>
            <li>date : {props.date}</li>
            <p>{props.tweet}</p>
        </div>
    );
}
