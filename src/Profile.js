function Profile({ name, age = 18, city = "Mumbai" }) {
  return (
    <div style={{
      display: "block",
      border: "solid 1px black",
      padding: "5px",
      margin: "5px auto",
      width: "30%"
    }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}
export default Profile;