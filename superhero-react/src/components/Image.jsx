import "../css/image.css"

const Image = ({ imageUrl, name }) => {
    return (
        <div className="image-container">
            <img src={imageUrl} alt="superhero-name" />
            <h3>{name}</h3>
        </div>
    )
}

export default Image

