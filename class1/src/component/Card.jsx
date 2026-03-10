import '../style/Card.css'


function Card(props) {

    return (
        <>
        <div className="card">
            <img src={props.img} alt={props.alt} />
            <h2>{props.name}</h2>
            <p>{props.para}</p>

        </div>
        </>
    )
}
export default Card

