function StudentCard({ name, roll, marks }) {
  return (
    <div style={{
      display: "block",
      border: "solid 1px black",
      padding: "5px",
      margin: "5px auto",
      width: "30%"
    }}>
      <p>Name: {name}</p>
      <p>Roll No: {roll}</p>
      <p>Marks: {marks}</p>
    </div>
  )
}
export default StudentCard;