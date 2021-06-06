import React from 'react';
import ReactDOM from 'react-dom';
import Render from './Render';
import reportWebVitals from './reportWebVitals';

const catArray: string[] = ["https://today.tamu.edu/wp-content/uploads/2020/03/Cc-1180413342-scaled.jpg","https://cdn.vox-cdn.com/thumbor/FnkGvXbx1mKIzIx8hL9V2r-L144=/0x0:2560x1536/1200x800/filters:focal(1076x564:1484x972)/cdn.vox-cdn.com/uploads/chorus_image/image/69113629/fake_cats.0.jpg","data:image/jpeg;base64,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","data:image/jpeg;base64,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", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5yFZhxhotOzFfKsnl_6ZOc80l4rrvZyi6w&usqp=CAU"]

const fetchFunc = (url: string, callBack: (data: string | object[]) => void) => {
  fetch(url)
    .then(res => res.json())
    .then(output => callBack(output))
}

ReactDOM.render(
  <React.StrictMode>
    <Render catArray={catArray} fetchFunc={fetchFunc}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
