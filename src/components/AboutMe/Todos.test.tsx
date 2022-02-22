import React from 'react'
import {TodoItemType, todos, Todos} from "./index";
import axios from "axios";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as RouterDom from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>


// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useRouteMatch: () => ({ url: '/todos' }),
// }));

describe("<Todos/>", () => {
    it("fetches todo", async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({data: todos}))

        render(<BrowserRouter><Todos/></BrowserRouter>)

        const items = await screen.findAllByRole("todoItem")
        expect(items).toHaveLength(2)
    })
})