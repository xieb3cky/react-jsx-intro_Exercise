function Person(props) {
    let text = props.age >= 18 ? "Go vote" : " Must be 18"
    let hobbies = props.hobbies.map(h => <li>{h}</li>)

    return (
        <div>
            <p>"Learn some information about this person</p>
            <ul>
                <li>
                    Name: {props.name.slice(0, 6)}
                </li>
                <li> Age: {props.age}</li>
                <ul>Hobbies: {hobbies}</ul>
            </ul>
            <h3>{text}</h3>
        </div>
    );
}