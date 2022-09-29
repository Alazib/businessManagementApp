import "../styles/Input.css"

function Input({ placeholder, name, onChange }) {
  return (
    <input
      className="worker-input"
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    ></input>
  )
}

export default Input
