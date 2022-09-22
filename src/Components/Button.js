import "../styles/Button.css"

function Button({ onClick, label, size }) {
  return (
    <button className={size} onClick={() => onClick()}>
      {label}
    </button>
  )
}

export default Button
