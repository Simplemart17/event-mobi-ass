import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders page", async () => {
  const { asFragment } = render(<App />);
  const element = screen.getByText((content, element) =>
    content.startsWith("Enter")
  );

  await userEvent.type("Simple");
  userEvent.click(screen.getByTestId("searchIcon"));

  await waitFor(() => {
    expect(screen.queryByText(/searching/i)).not.toBeInTheDocument();
});


  expect(element).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
