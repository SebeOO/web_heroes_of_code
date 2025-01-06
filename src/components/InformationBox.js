import React from 'react';

function InformationBox() {
    return (
        <div className="Information-Box container">
            <div className="hero-text flow">
                <h1>
                    Zadbaj o przyszłość swoich dzieci już dziś
                </h1>
                <p>
                    Kursy stworzone przez specialistów z branży, <br/>
                    idealnie dostosowane do wieku i umiejętności
                </p>
                <div>
                    <div className="Buttons special">Sprawdź więcej</div>
                </div>
            </div>

            <div className="hero-img">
            <img src="/img/hero.png" alt="Code Heroes Logo"/>
            </div>
        </div>
    );
}

export default InformationBox;
