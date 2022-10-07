import "../styles/Input.css"

function Input({ id, placeholder, name, onChange }) {
  return (
    <input
      className="worker-input"
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    ></input>
  )
}

export default Input
