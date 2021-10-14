import React from 'react';
import { renderWithProviders } from '../../data_tets/MyProvider/RenderMyProvider';
import Button from '../../Components/Button/Button';
import { fireEvent } from '@testing-library/dom';



test("BUTTON START WATCHING", () => {
    const onclick = jest.fn();

    const RenderButton = () => {
        return renderWithProviders(<Button onClick={onclick} >
            START WATCHING
        </Button>);
    }
    const rendered = RenderButton();

    fireEvent.click(rendered.getByText("START WATCHING"));

})
