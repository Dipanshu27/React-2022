import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  ReactDOM.render(<App/>,document.getElementById("root"))
})
