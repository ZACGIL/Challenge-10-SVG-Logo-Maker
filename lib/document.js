function createDocument(text) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Logo</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container">
            <div class="shape">
                <h1>${text}</h1>
            </div>
        </div>
    </body>
    </html>`
}

module.exports = { createDocument };