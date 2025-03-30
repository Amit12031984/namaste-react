import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RESCARD_MOCK from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";
import { withRestaurantCardLabel } from "../RestaurantCard";

it("should render restaurant card component with props", () => {
  render(<RestaurantCard data={RESCARD_MOCK} />);
  const resName = screen.getByText("Wow! Momo");
  expect(resName).toBeInTheDocument();
});

it("should render withRestaurantCardLabel component with props", () => {
  const RestaurantCardLabel = withRestaurantCardLabel(RestaurantCard);
  render(<RestaurantCardLabel data={RESCARD_MOCK} />);
  const resName = screen.getByText("Wow! Momo");
  expect(resName).toBeInTheDocument();
});
