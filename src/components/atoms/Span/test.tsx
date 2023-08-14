
import { render } from "@testing-library/react";
import Span from "."; 
import { ReactElement } from "react";

interface SpanProps {
    children: ReactElement
}

jest.mock("./styles", () => ({
  SpanStyled: ({ children }: SpanProps) => <div>{children}</div>,
}));

describe("Span Component", () => {
  it("renders the label text correctly", () => {
    const labelText = "Hello, world!";
    const { getByText } = render(<Span label={labelText} />);


    expect(getByText(labelText)).toBeInTheDocument();
  });

  it("applies the error style when error prop is true", () => {
    const labelText = "An error occurred";
    const { getByText } = render(<Span label={labelText} error={true} />);


    expect(getByText(labelText)).toBeInTheDocument();

  });
});