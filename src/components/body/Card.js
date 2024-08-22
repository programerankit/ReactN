import './card.css';
export const Card =(recipiObj)=>{
    const {image,name,rating,userId,ingredients}=recipiObj.recipiObj;
    //console.log(ingredients)

    return(<>
    <div className="card-body">
        <div className='card-div' key={userId}>
            <img src={image} className="card-img" />
            <h3>{name}</h3>
            <p>{ingredients.join(', ')}</p>
            <p>Rating: {rating}</p>
        </div>
    </div>
    </>)
}