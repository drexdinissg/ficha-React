function Card({ name, attack, type }) {
    return (
        <li className="card">
            <b>{name}</b>
            <p>{attack}</p>
            <p>{type}</p>
            {attack >= 6 && <span>Gordo</span>}
        </li>

    );
}

export default Card;