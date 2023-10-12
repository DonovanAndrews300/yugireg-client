import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader/FileUploader';

export default function App() {
  return (
    <main>
      <header className="home-banner">
        <h1>Yugi-Reg</h1>
      </header>

      <div className='main'>
        <div className='file-uploader'>
          <div className="file-uploader-container">
            <FileUploader />
          </div>
        </div>
        <div className='instructions-container'>
          <img src="https://i.redd.it/sj6oha0on3a11.jpg" />
          <ol className='how-to-list'>
            <h3>Instructions</h3>
            <li>Retrieve the YDK file for your decklist.</li>
            <li>Drag and drop your YDK file into the white area above.</li>
            <li>You can alternatively click inside the white area to manually select your YDK file.</li>
          </ol>
        </div>
      </div>

      <div className='faq'>
        <div className='qa-container'>
          <h2 className='faq-header'>Frequently Asked Questions</h2>

          <div>
            <h3 className='question-header'>Why don't some of my cards appear in the completed form?</h3>
            <p className='answer'>
              This issue arises because Yugi-Reg may not fully support or recognize alternative art cards at the moment.
            </p>
          </div>

          <div>
            <h3 className='question-header'>What happens if my decklist exceeds the allotted slots?</h3>
            <p className='answer'>
              If your decklist exceeds the allocated slots, Yugi-Reg will create new card form slots to accommodate the additional cards.
            </p>
          </div>

          <div>
            <h3 className='question-header'>How can I obtain a YDK file of my deck?</h3>
            <p className='answer'>
              You can obtain a YDK file of your deck by using a deck exporter. For Dueling Nexus, I recommend using this Chrome extension: [Dueling Nexus Deck Exporter](https://chrome.google.com/webstore/detail/duelingnexus-deck-exporte/aaloejogbofkmmonaddiaogjjjdjlpcd).
            </p>
          </div>
        </div>
      </div>
      <footer className='footer'>Copyright © 2023 All rights reserved.</footer>
    </main>
  );
}
