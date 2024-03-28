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


// Try to determine if a route exists between PHX and BKK.

// BFS Breadth-first Search
function bfs(start) {
  
    const queue = [start];

    const visited = new Set();
    // Set of unique items to store previously visited airports
    
    while(queue.length>0) {
        const airport = queue.shift(); // mutates the queue by removing the first element of the array and returns that element as 'airport'

        const destinations = adjacencyList.get(airport)
        // returns all the destinations from the airport set above

        for (const destination of destinations){

            if (destination === 'BKK'){ // if destination value matches BKK
                console.log('BFS found Bangkok');
            }
            
            if (!visited.has(destination)){ // if the destination element returned above is not present in the 'visited' set
                queue.push(destination);  // push (add) destination to the queue 
                visited.add(destination); // add destination to the list of visited airports (to avoid infinite loop)
                console.log(destination);
            }
        }
    }
}

bfs('PHX')

// DFS Depth-first Search
function dfs(start, visited = new Set()) {
  console.log(start);

  visited.add(start); // add visited airport (start) to the set

  const destinations = adjacencyList.get(start); // get the airports array from the visited airport and sets as destinations (array)

  for (const destination of destinations) { // for each destination in the array found above
    if (destination === "BKK") { // check if matches BKK
      console.log(`DFS found Bangkok`);
      return; // stops the code execution at this step
    }

    // if a match has not been found above
    if (!visited.has(destination)) { // if destination is not on the 'visited' Set
      dfs(destination, visited); // recursevelly calls itself (the same function) with the destination as the new start airport
    }
  }
}

dfs("PHX");