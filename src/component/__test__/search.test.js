import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import bodyCardMock from "../mocks/bodyCardMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(bodyCardMock);
    },
  });
});

it("should render body component", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "KFC" } });
  const btnSearch = screen.getByTestId("searchBtn");
  fireEvent.click(btnSearch);
  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(1);
});
