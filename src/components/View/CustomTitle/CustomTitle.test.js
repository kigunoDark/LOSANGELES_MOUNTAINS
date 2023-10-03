import React from "react";
import { render } from "@testing-library/react";
import CustomTitle from "./CustomTitle";

describe("CustomTitle Component", () => {
  it("renders the custom title image with the correct URL and alt text", () => {
    const imageUrl = "/images/custom-title.png";

    const { getByAltText } = render(<CustomTitle url={imageUrl} />);
    const customTitleImage = getByAltText("Custom Title");

    expect(customTitleImage).toBeInTheDocument();
    expect(customTitleImage).toHaveAttribute("src", imageUrl);
  });
});
