qtvis
=====

Quadtree visualization system.

Web-based visualization of any quadtree implementation.

Initial design:

- Use D3.js in browser to render quadtree
- Use Socket.io to communicate from brower to node.js quadtree server
- Quadtree server is between browser and quadtree implementation
- Use ZeroMQ to communicate between quadtree server and quadtree implementation

Steps for development:

1. Install socket.io and test simple communication
2. Use D3.js in browser to test simple link between socket.io and drawing
3. Develop API for quadtree rendering
4. Install ZeroMQ and test connection to node.js server
5. Figure out asynchrony involved
6. Develop API for quadtree implementation --> node.js server
