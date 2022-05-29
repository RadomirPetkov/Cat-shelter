const http = require(`http`)
const port = 3000
const fs = require("fs/promises")

const css = require(`./content/styles/site`)


const server = http.createServer(async (req, res) => {
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
        res.end()
    }
    else if (req.url == '/cats/add-cat') {
        res.write(addCatView)
        res.end()
    }

    else {
        let homeView = await fs.readFile(`./views/catShelter.html`)
        res.write(homeView)
        res.end()
    }
    

}).listen(port, () => console.log(`Server is listening on port 3000...`))