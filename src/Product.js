const Product = ({name, quantity}) => {

    return (
        <div className="product">
            <h2>{name}</h2>
            <p>{quantity}</p>
        </div>
    );
}
 
export default Product