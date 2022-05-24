const http = require(`http`)
const port = 3000
const homeView = require(`./homeView`)
const css = require(`./content/styles/site`)

const server = http.createServer((req, res) => {
    if (req.url == "/content/styles/site.css") {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(css)
    }

    else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.write(homeView)
    }
    res.end()

}).listen(port, () => console.log(`Server is listening on port 3000...`))