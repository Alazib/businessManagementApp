// Este componente deberia de ir dentro de la carpeta Button
// En esta carpeta el archivo CSS y el propio componente.

import "../styles/Button.css"

function Button({ onClick, label, size }) {
  return (
    <button className={size} onClick={() => onClick()}>
      {label}
    </button>
  )
}

export default Button
