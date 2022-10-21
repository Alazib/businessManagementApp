import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import App from "../components/App"
import HeaderNavBar from "../components/HeaderNavBar"
import user from "@testing-library/user-event"

const mockFetch = {
  json: () =>
    Promise.resolve({
      data: [
        { first_name: "FIRST 1", last_name: "LAST 1", id: 1 },
        { first_name: "FIRST 2", last_name: "LAST 2", id: 2 },
      ],
    }),
}

const mockFetch2 = {
  json: () =>
    Promise.resolve({
      data: [
        { first_name: "FIRST 1", last_name: "LAST 1", id: 4 },
        { first_name: "FIRST 2", last_name: "LAST 2", id: 3 },
      ],
    }),
}


describe("when the user create a new worker", () => {

  beforeEach(() => {
    global.fetch = jest
    .fn()
    // Para la primera llamada a fetch, el POST de postNewWorker():
    .mockImplementationOnce(() => Promise.resolve(mockFetch))
    //Para la segunda llamada a fetch, el GET de getList1():
    .mockImplementationOnce(() => Promise.resolve(mockFetch))
    //Para la tercera llamada a fetch, el GET de getList2():
    .mockImplementationOnce(() => Promise.resolve(mockFetch2))
  })
  
  it("should create a new worker with all fields", async () => {
    
    render(
      <BrowserRouter>
      <HeaderNavBar />
      <App></App>
    </BrowserRouter>
    )
    
    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)
    
    
    const firstNameInput = screen.getByRole("textbox", { name: /first name/i })
    const lastNameInput = screen.getByRole("textbox", { name: /last name/i })
    const ageInput = screen.getByRole("textbox", { name: /age/i })
    const phoneInput = screen.getByRole("textbox", { name: /phone/i })
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const addressInput = screen.getByRole("textbox", { name: /address/i })
    const submitButton = screen.getByRole("button", { name: /save/i })
    user.type(firstNameInput, "Ulysses")
    user.type(lastNameInput, "Odysseus")
    user.type(ageInput, "45")
    user.type(phoneInput, "666 66 00 66")
    user.type(emailInput, "ulysses@gmail.com")
    user.type(addressInput, "Ithaca")
    user.click(submitButton)
    expect(fetch).toHaveBeenCalledWith("https://reqres.in/api/users?page=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: "Ulysses",
        last_name: "Odysseus",
        age: "45",
        phone: "666 66 00 66",
        email: "ulysses@gmail.com",
        address: "Ithaca",
      }),
    })
    
    await screen.findByRole("heading", { name: 'Listado de trabajadores' })
  })

  it("after send user data, useNavigate() is called to go to Worker List", async () => {

    render(
      <BrowserRouter>
        <HeaderNavBar />
        <App></App>
      </BrowserRouter>
    )

    const newWorkerLink = screen.getByRole("link", { name: /new worker/i })
    user.click(newWorkerLink)

    const submitButton = await screen.findByRole("button", { name: /save/i })
    user.click(submitButton)


    const titleWorkerList = await screen.findByRole("heading", { name: 'Listado de trabajadores' })
  
    expect(titleWorkerList).toBeInTheDocument()
  })
})
