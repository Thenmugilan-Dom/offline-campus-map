export function findShortestPath(points, startId, endId) {
    const graph = {};
    
    // Create a graph from the points
    points.forEach((p) => {
        graph[p.id] = {};
        points.forEach((q) => {
            if (p.id !== q.id) {
                const distance = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2);
                graph[p.id][q.id] = distance;
            }
        });
    });

    const distances = {};
    const prev = {};
    const queue = Object.keys(graph);

    // Initialize distances
    queue.forEach((node) => {
        distances[node] = Infinity;
    });
    distances[startId] = 0;

    while (queue.length) {
        queue.sort((a, b) => distances[a] - distances[b]);
        const smallest = queue.shift();

        // If we reached the endId, build the path
        if (smallest === endId) {
            const path = [];
            let current = endId;
            while (current) {
                path.unshift(current);
                current = prev[current];
            }
            console.log("Shortest Path: ", path); // Log the calculated route
            return path; // Return the path found
        }

        if (distances[smallest] === Infinity) break;

        for (let neighbor in graph[smallest]) {
            let alt = distances[smallest] + graph[smallest][neighbor];
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                prev[neighbor] = smallest;
            }
        }
    }

    return []; // Return an empty array if no path is found
}