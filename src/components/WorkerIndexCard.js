import "../styles/WorkerIndexCard.css"

function WorkerIndexCard({ workerDetail }) {
  const { first_name, last_name, age, phone, email, address, active } =
    workerDetail

  const name = `${first_name} ${last_name}`

  return (
    <>
      <div className="name-age-number-email-adress-state">
        <div>
          <span>
            <b>Name:</b>
          </span>
          <p>{name}</p>
        </div>
        <div>
          <span>
            <b>Age:</b>
          </span>
          <p>{age}</p>
        </div>
        <div>
          <span>
            <b>Phone number:</b>
          </span>
          <p>{phone}</p>
        </div>
        <div>
          <span>
            <b>Email:</b>
          </span>
          <p>{email}</p>
        </div>
        <div>
          <span>
            <b>Address:</b>
          </span>
          <p>{address}</p>
        </div>
        <div>
          <span>
            <b>Worker state:</b>
          </span>
          <p>{active ? "Active" : "Non active"}</p>
        </div>
      </div>
    </>
  )
}

export default WorkerIndexCard
