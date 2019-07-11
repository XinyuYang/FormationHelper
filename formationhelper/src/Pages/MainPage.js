import React from 'react';
import '../css/MainPage.css';

function MainPage() {
    return (
        <div>
            <div id="top-bar" className="box">
                <p>This is the top bar</p>
            </div>

            <div id="side-bars">
                <div id="left-side-bar" className="box">
                    <p>This is the left bar</p>
                </div>

                <div id="right-side-bar" className="box">
                    <p>This is the right bar</p>
                </div>
            </div>

            <div id="bottom-bar" className="box">
                <p>This is the bottom bar</p>
            </div>
        </div>
    );
}

export default MainPage;