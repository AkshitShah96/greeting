function Task({ name, isCompleted }) {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>
        Completed:
        {isCompleted
          ? <span style={{ color: "green" }}> Completed</span>
          : <span style={{ color: "orange" }}> Pending</span>}
      </li>
    </ul>
  )
}

export default Task;    