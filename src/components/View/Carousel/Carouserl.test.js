import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

const sampleItems = [
    { id: 1, url: "/images/image1.jpg" },
    { id: 2, url: "/images/image2.jpg" },
    { id: 3, url: "/images/image3.jpg" },
];

describe("Carousel Component", () => {
    it("renders the carousel with images and allows navigation", () => {
        const slidesToShow = 1;

        const { getByAltText, getByTestId } = render(
            <Carousel items={sampleItems} slidesToShow={slidesToShow} />
        );





        const firstImage = getByAltText("Image 1");
        expect(firstImage).toBeInTheDocument();

        const dot1 = getByTestId("dot 1");
        const dot2 = getByTestId("dot 2");
        const dot3 = getByTestId("dot 3");
        expect(dot1).toBeInTheDocument();
        expect(dot2).toBeInTheDocument();
        expect(dot3).toBeInTheDocument();

        fireEvent.click(dot2);
        const secondImage = getByAltText("Image 2");
        expect(secondImage).toBeInTheDocument();
    });
});
