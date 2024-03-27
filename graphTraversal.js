// The data
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
};

// Add edge (undirected)
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

// Create the Graph
airports.forEach(addNode);
// for each element of the airport list, add to the adjecency list with the add node function
routes.forEach((route) => addEdge(route[0], route[1]));
// for each array element (route) in the routes array, add the edge with two arguments, the first and second element of the array
// Can also be written with the spread sintax like this: routes.forEach(route => addEdge(...route))

console.log(adjacencyList);