function CustomButton({ buttonName, handleButtonClick }) {
  return (
    <button onClick={handleButtonClick}>
      {buttonName}
    </button>
  )
}
export default CustomButton;