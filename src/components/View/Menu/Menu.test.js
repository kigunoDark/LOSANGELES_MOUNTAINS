import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";
import { HISTORY_PAGE_LINK_NAME, TEAM_PAGE_LINK_NAME } from "./MenuConstants";

describe("Menu Component", () => {
  it("renders menu items with the correct color", () => {
    const color = "red";

    const { getByText } = render(<Menu color={color} />);

    const historyMenuItem = getByText(HISTORY_PAGE_LINK_NAME);
    const teamMenuItem = getByText(TEAM_PAGE_LINK_NAME);

    expect(historyMenuItem).toHaveStyle("color: red");
    expect(teamMenuItem).toHaveStyle("color: red");
  });
});
