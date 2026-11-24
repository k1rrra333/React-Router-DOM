function ProductCard(props) {
    return (
      <div>
        <img src={props.image} alt={props.name} />
  
        <h2>{props.name}</h2>
  
        <p>${props.price}</p>
  
        <p>{props.description}</p>
      </div>
    );
  }
  
  export default ProductCard;