import "./Button.css"

function Button({ onClick, label, size }) {
  function onClickExists() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button className={size} onClick={() => onClickExists()}>
      {label}
    </button>
  )
}

export default Button
