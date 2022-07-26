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

    const defaultLink = "https://www.hahalolo.com/";

    function openBookmark(url) {
        chrome.tabs.update({ url: url });
    }

    const handleChangeStatus = (status) => {
        chrome.storage.local.set({
            status: status
        })
    }

    document.addEventListener('DOMContentLoaded', function () {
        chrome.storage.local.get(['status'], function (result) {
            console.log('Value currently is ' + result);
        });
        openBookmark(defaultLink);
    });

    const closePopup = () => {
        window.close();
    }

    return (
        <div className='cover__popup'>
            <div>
                <p className='title'>Do you want to use Hakgok as your default site?</p>
                <div className='button__group'>
                    <button onClick={() => { closePopup(); handleChangeStatus(true) }}>Yes</button>
                    <button onClick={() => { closePopup(); handleChangeStatus(false) }}>No</button>
                </div>
            </div>
        </div>
    )
}

render(<Index />, document.getElementById("root"));