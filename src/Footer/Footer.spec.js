import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";


describe("Footer component tests", () => {
    test("render correclty", async () => {
        render(<Footer />)
        expect(await screen.getByText(/rights belons to me/i)).toBeInTheDocument();
    })
})