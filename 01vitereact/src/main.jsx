import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  const userName="Shoaib"

  return(
    <>
      <h1>Let's go {userName} {surName}</h1>
    </>
  )
}

const surName="khan";

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
   'click me to visit google',
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp/>
);
