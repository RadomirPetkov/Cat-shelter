const http = require(`http`)
const port = 3000
const fs = require("fs/promises")




const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if (req.url == "/content/styles/site.css") {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        let css = await fs.readFile(`./content/styles/site.css`, `utf-8`)
        res.write(css)
        res.end()
    }
    else if (req.url == '/add-breed') {
        let addBreedView = await fs.readFile(`./views/addBreed.html`, `utf-8`)

        res.write(addBreedView)
        res.end()
    }
    else if (req.url == '/add-cat') {
        let addCatView = await fs.readFile(`./views/addCat.html`, `utf-8`)
        res.write(addCatView)
        res.end()
    }

    else {
        let homeView = await fs.readFile(`./views/catShelter.html`, `utf-8`)
        res.write(homeView)
        res.end()
    }


}).listen(port, () => console.log(`Server is listening on port 3000...`))