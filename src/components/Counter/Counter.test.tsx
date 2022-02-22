import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {counterButtonList, setCounterButtonsList} from '../../App';
import userEvent from "@testing-library/user-event";
import {Counter} from "./index";
import {BrowserRouter} from 'react-router-dom';


describe("<Counter />", () => {
    it('renders counterButtons', () => {
        render(<BrowserRouter><Counter/></BrowserRouter>);
        expect(screen.getByTestId("incCounter by 1")).toBeInTheDocument()

        counterButtonList.map(item => {
            expect(screen.getByTestId(`incCounter by ${item.value}`)).toBeInTheDocument()
        })
        setCounterButtonsList.map(item => {
            expect(screen.getByTestId(`setCounter by ${item.value}`)).toBeInTheDocument()
        })
    });

    it('check incCounterByOne', () => {
        render(<BrowserRouter><Counter/></BrowserRouter>);
        expect(screen.getByText(/Кликов по кнопкам: 0/i)).toBeInTheDocument()
        screen.getByTestId("incCounter by 1").click()
        expect(screen.getByText(/Кликов по кнопкам: 1/i)).toBeInTheDocument()
    });

    it('check setCounterByButtonValue', () => {
        render(<BrowserRouter><Counter/></BrowserRouter>);
        setCounterButtonsList.map(item => {
            userEvent.click(screen.getByTestId(`setCounter by ${item.value}`))
            expect(screen.getByText(`Кликов по кнопкам: ${item.value}`)).toBeInTheDocument()
        })
    });
    it('check status active after click on button incCounter', () => {
        render(<BrowserRouter><Counter/></BrowserRouter>);
        counterButtonList.map(item => {
            const button = screen.getByTestId(`incCounter by ${item.value}`)
            userEvent.click(button)
            expect(button.classList.contains("button-active")).toBe(true)
        })
    });
    it('check status !active after click on another button incCounter', () => {
        render(<BrowserRouter><Counter/></BrowserRouter>);

        const first_button = screen.getByTestId(`incCounter by ${counterButtonList[0].value}`)
        const second_button = screen.getByTestId(`incCounter by ${counterButtonList[1].value}`)
        userEvent.click(first_button)
        expect(first_button.classList.contains("button-active")).toBe(true)
        expect(second_button.classList.contains("button-active")).toBe(false)
    })
})
