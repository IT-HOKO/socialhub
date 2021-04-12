import React from 'react';

export const main = () => {
  return (
    <div className='main'>
      <h1>Hauptseite Telegram</h1>
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

{/* Funktion für Button-PopUp */}
function sayHello() {
  alert('You clicked me!');
}

export const deleted = () => {
  return (
    <div className='deleted'>
      <h1>Telegram/Gelöschte Nachrichten</h1>
      <button onClick={sayHello}>Senden!</button>;
    </div>
  );
};