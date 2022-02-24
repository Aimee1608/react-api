import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    const FID = entry.processingStart - entry.startTime

    console.log('FID:', FID)
  }
})

// Start observing first-input entries.

observer.observe({
  type: 'first-input',

  buffered: true
})

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
