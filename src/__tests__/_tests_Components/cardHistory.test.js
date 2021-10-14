import React from "react";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider";
import 'regenerator-runtime/runtime';

import { HISTORY } from "../../data_tets/data_USER/History";
import CardHistory from "../../Components/card/cardHistory";
import History from "../../Pages/History/History"

describe("HISTORY CARD", () => {
    const movie = HISTORY[0];

    const RenderCard = () => {
        return renderWithProviders(
            <History>
                <CardHistory
                    movie={movie}
                    key={movie.id}
                >
                </CardHistory>
            </History>
        )
    };

    test("Render history card", () => {
        const rendered = RenderCard();
        rendered.findByText(movie.title)
    })
})

