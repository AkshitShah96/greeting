function ControlPut({ name, email, setName, setEmail, handleSubmit }) {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <br /><br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default ControlPut
