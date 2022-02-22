import '@testing-library/jest-dom';
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter, Routes} from 'react-router-dom';
import App from './App';


describe("<App/>", () => {

    it("should render the home page and more more more", () => {
        render(<BrowserRouter><App /></BrowserRouter>)

        expect(screen.getByTestId("location-title").innerHTML).toBe("Корневая страница")
        fireEvent.click(screen.getByTestId("link_to_counter"), {shiftKey: true})
        expect(screen.getByTestId("location-title").innerHTML).toBe("Корневая страница")
        fireEvent.click(screen.getByTestId("link_to_counter"))
        expect(screen.getByTestId("location-title").innerHTML).toBe("Counter")
    })

})