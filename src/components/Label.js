function Label({ text, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      <b>{text}</b>
    </label>
  )
}

export default Label
