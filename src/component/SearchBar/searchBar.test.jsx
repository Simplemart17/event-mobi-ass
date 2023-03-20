import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders search bar component", () => {
  const { asFragment } = render(<SearchBar />);
  const element = screen.getByPlaceholderText("Enter username...");

  expect(element).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
