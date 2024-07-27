import { render, screen } from "@testing-library/react";
import { Menu } from "./Menu";
import { expect } from "playwright/test";
import { mock } from "node:test";

describe("Menu Component tests", () => {
    it("render correctly", async () => {
        render(<Menu menuItems={[]} />)
        const ulRef = await screen.getByTestId('menu')
        expect(ulRef).toBeInTheDocument();
    })
    it("render with props", async () => {
        const mockData = [
            {
                id: 'home',
                path: 'home',
                text: 'Home'
            }]
        render(<Menu menuItems={mockData} />)
        const listItems = await screen.getAllByRole("listitem")
        expect(listItems).toHaveLength(1);
        expect(mockData[0]['path']).toBe('home')
        expect(listItems[0].textContent).toBe("Home")
    })
})