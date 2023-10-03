import React from "react";
import { render } from "@testing-library/react";
import HistoryContent from "./HistoryContent";

// Mock the Carousel component
jest.mock("../View/Carousel/Carousel", () => {
    return () => <div data-testid="carousel-mock"></div>;
});

describe("HistoryContent Component", () => {
    test("renders without errors", () => {
        const { getByTestId } = render(<HistoryContent />);
        const historyContent = getByTestId("history-content");
        expect(historyContent).toBeInTheDocument();
    });

    test("renders the Carousel component", () => {
        const { getByTestId } = render(<HistoryContent />);
        const carousel = getByTestId("carousel-mock"); // Mocked Carousel component

        expect(carousel).toBeInTheDocument();
    });
});
