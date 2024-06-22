import "../css/image.css"

const Image = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="superhero-name" />
        </div>
    )
}

export default Image

