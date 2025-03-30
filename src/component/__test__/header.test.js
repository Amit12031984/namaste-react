import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load the login button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btnLogin = screen.getByText("Login");
  expect(btnLogin).toBeInTheDocument();
});

it("should load the cart button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should load the cart button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btnLogin = screen.getByRole("button", { name: "Login" });
  fireEvent.click(btnLogin);
  const btnLogout = screen.getByRole("button", { name: "Logout" });
  expect(btnLogout).toBeInTheDocument();
});
