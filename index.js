const http = require(`http`)
const port = 3000
const homeView = require(`./homeView`)

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write(homeView)
    res.end()

}).listen(port, () => console.log(`Server is listening on port 3000...`))