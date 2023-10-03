import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";
import { LOGO_CITY_TITLE, LOGO_CITY_SUBTITLE } from "./LogoConstants";

describe("Logo Component", () => {
  it("renders the logo image", () => {
    const { getByAltText } = render(<Logo showName={false} />);
    const logoImage = getByAltText("webpage-logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the logo title and subtitle when showName is true", () => {
    const colorTitle = "red";
    const colorSubtitle = "blue";

    const { getByText } = render(
      <Logo
        showName={true}
        colorTitle={colorTitle}
        colorSubtitle={colorSubtitle}
      />
    );

    const titleElement = getByText(LOGO_CITY_TITLE);
    const subtitleElement = getByText(LOGO_CITY_SUBTITLE);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle("color: red");
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveStyle("color: blue");
  });

  it("does not render the logo title and subtitle when showName is false", () => {
    const { queryByText } = render(<Logo showName={false} />);
    const titleElement = queryByText(LOGO_CITY_TITLE);
    const subtitleElement = queryByText(LOGO_CITY_SUBTITLE);
    expect(titleElement).toBeNull();
    expect(subtitleElement).toBeNull();
  });
});
