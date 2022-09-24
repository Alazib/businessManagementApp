function WorkerIndexCard({ workerDetail }) {
  const { first_name, last_name, age, phone, email, address, active } =
    workerDetail

  const name = `${first_name} ${last_name}`

  return (
    <>
      <div className="name-age-number-email-adress-state">
        <div>
          <b>Name:</b>
          <br></br>
          {name}
        </div>
        {/*<div>
          <b>Name:</b>
          // En vez de br's, puedes al title darle un margin-top, es mejor practica
          <br></br>
          // Las palabras o textos en general no van sueltos dentro de los DIV, ponlos siempre dentro de un span o p, según corresponda.
          <span className="title">{name}</span>
        </div> */}
        <br></br>
        <div>
          <b>Age:</b>
          <br></br>
          {age}
        </div>
        <br></br>
        <div>
          <b>Phone number:</b>
          <br></br>
          {phone}
        </div>
        <br></br>
        <div>
          <b>Email:</b>
          <br></br>
          {email}
        </div>
        <br></br>
        <div>
          <b>Address:</b>
          <br></br>
          {address}
        </div>
        <br></br>
        <div>
          <b>Worker state:</b>
          <br></br>
          {active ? "Active" : "Non active"}
        </div>
        <br></br>
      </div>
    </>
  )
}

export default WorkerIndexCard
