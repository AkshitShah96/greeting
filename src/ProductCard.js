function ProductCard({ name, price, inStock }) {
  return (
    <div style={{
      display: "block",
      border: "solid 1px black",
      padding: "5px",
      margin: "5px auto",
      width: "30%"
    }}>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>
        In Stock:
        {inStock
          ? <span >Available</span>
          : <span > Not Available</span>}
      </p>
    </div>
  )
}

export default ProductCard;