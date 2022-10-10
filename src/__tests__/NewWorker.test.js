import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewWorker from "../../src/components/NewWorker"
import user from "@testing-library/user-event"



// Esto Lo he sacado de buscar: "mock react-router-dom"
// Si solo mockeaba useNavigate() me reventaba.
jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: jest.fn()
  };
});

test("should mock fetch and call it", async () => {
  // global.fetch = jest.fn()
  //¿Por qué esto me da un error: "UnhandledPromiseRejection:.....""?

  const jestSpy = jest
    .spyOn(global, "fetch")
    .mockImplementationOnce(() => Promise.resolve()) // ¿Por qué esto sí que funciona? ¿Qué es el error
  // act(()=>{} que me da?)

  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NewWorker />}></Route>
      </Routes>
    </BrowserRouter>
  )
  const inputFirstName = screen.getByRole("textbox", { name: "First name:" })
  const saveButton = screen.getByRole("button", { name: "Save" })

  await screen.findByRole("textbox", { name: "First name:" })
  user.type(inputFirstName, "Ulises")
  user.click(saveButton)
  expect(jestSpy).toBeCalled()
})

test("should call mock fetch with 'apiUrl' and 'newData'", () => {
  const apiUrl = "https://reqres.in/api/users?page=1"
  const newData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name: "Ulises" }),
  }
  const jestSpy = jest
    .spyOn(global, "fetch")
    .mockImplementationOnce(() => Promise.resolve())

  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NewWorker />}></Route>
      </Routes>
    </BrowserRouter>
  )

  const inputFirstName = screen.getByRole("textbox", { name: "First name:" })
  const saveButton = screen.getByRole("button", { name: "Save" })

  user.type(inputFirstName, "Ulises")
  user.click(saveButton)
  expect(jestSpy).toBeCalledWith(apiUrl, newData)
})
