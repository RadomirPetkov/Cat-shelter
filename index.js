const http = require(`http`)
const port = 3000
const homeView = require(`./homeView`)
const addCatView = require(`./addCatView`)
const addBreedView = require(`./addBreedView`)
const css = require(`./content/styles/site`)

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if (req.url == "/content/styles/site.css") {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(css)
    }
    else if (req.url == '/cats/add-breed') {
        res.write(addBreedView)
    }
    else if (req.url == '/cats/add-cat') {
        res.write(addCatView)
    }

    else {
        res.write(homeView)
    }
    res.end()

}).listen(port, () => console.log(`Server is listening on port 3000...`))