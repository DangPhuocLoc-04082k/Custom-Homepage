// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['background.js']
//     });
// });
import React from 'react';
import hahaloloIcon from './assests/Hahalolo_icon.png'
import halomeIcon from './assests/Halome_icon.png'
import './index.css'
const { render } = require("react-dom");

function Index() {

    return (
        <div className='link_list'>
            <p className='title'>Hakgok Ecosystem</p>
            <a className='hahalolo_link' href='https://www.hahalolo.com/' target="_blank">
                <img src={hahaloloIcon} alt="logo" />
                Hahalolo</a>
            <a href='https://halome.com/welcome' target="_blank">
                <img src={halomeIcon} alt="logo" />
                Halome</a>
        </div>
    )
}

render(<Index />, document.getElementById("root"));