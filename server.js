
// Import the HTTP module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    // Check the URL and method
    if (req.url === '/api' && req.method === 'GET') {
        // Respond with a JSON object
        const responseObject = {
            message: 'Hello, this is your JSON response!',
            timestamp: new Date().toISOString(),
        };

        res.end(JSON.stringify(responseObject));
    } else {
        // Handle other routes
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


