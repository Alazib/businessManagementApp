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
