import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import user from "@testing-library/user-event"

describe("when the user create a new worker", () => {
  it("fetch should send the input data", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewWorker />}></Route>
        </Routes>
      </BrowserRouter>
    )

    jest.mock("react-router-dom", () => {
      const originalModule = jest.requireActual("react-router-dom")

      return {
        __esModule: true,
        ...originalModule,
        useNavigate: jest.fn(),
      }
    })
    // 1) ¿Por qué me sigue dando el error de Act después de hacer esto?

    const apiUrl = "https://reqres.in/api/users?page=1"
    const newData = {
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
    }

    const spyFetch = jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => Promise.resolve(apiUrl, newData))
    // 1) El mockImplementationOnce no está bien así ¿no?. No entiendo muy bien el rollo de las promesas
    //2)Si no pongo .mockImplementationOnce funciona igualmente ¿es porque, al usar spyOn, se sigue conservando la implementación
    // original y, entonces, está llamando a reqrest?

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

    expect(spyFetch).toHaveBeenCalledWith(apiUrl, newData)
  })
})
