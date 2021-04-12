import React, { Component } from 'react'
import * as utils from '../components/TelegramFunctions';

export const main = () => {
  return (
    <div className='main'>
      <h1>Hauptseite Telegrm</h1>
    </div>
  );
};

export const send = () => {
  return (
    <div className='send'>
      <h1>Telegram/Gesendete Nachrichten</h1>
    </div>
  );
};

export const received = () => {
  return (
    <div className='received'>
      <h1>Telegram/Empfangene Nachrichten</h1>
    </div>
  );
};


export const deleted = () => {
  return (
    <div className='deleted'>
      <h1>Telegram/Gelöschte Nachrichten</h1>
      <button onClick={utils.sayHello}>Senden!</button>
      
    </div>
  );
};