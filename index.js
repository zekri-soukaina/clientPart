const express = require('express')
const PORT = 4000
const app = express()

function render(name) {
    const document = ` <h1>hello everyone ${name}</h1>`
    return document
}


app.get('/know/:subject', (req, res) => {
    const message = `i am ${req.params.subject}`
    const page = render(message)
        // response.send(message)
    res.send(page)

})
app.listen(PORT, () => console.log(`we are listening to ${PORT}`))