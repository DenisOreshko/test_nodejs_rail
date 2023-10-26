const express = require('express')
const brain = require('brain.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const net = new brain.recurrent.LSTMTimeStep({
        inputSize: 5,
        hiddenLayers: [15,25,25],
        outputSize: 5
    });
	res.send('Server run')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})