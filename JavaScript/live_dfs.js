// Object type declaration (using class keyword)
class Graph {

  // constructor declaration (init adjacencyList attribute)
  constructor(){
    this.adjacencyList = new Map()
  }  

  // method to add a Node `n` to the graph (if it does not exist yet)
  addNode(n){
    if(!this.adjacencyList.has(n)){
      this.adjacencyList.set(n, []);
    }
  }
  
  // method to add edge n1 -> n2
  addEdge(n1, n2){
    this.addNode(n1);
    this.addNode(n2);
    this.adjacencyList.get(n1).push(n2);
  }

  // method to traverse the graph in DFS fashion
  dfs(startNode){
    // Initializes relevant data structures
    let stack = [ startNode ]; // a stack initialized with the startNode
    let visited = new Set(); // a set that tracks nodes already visited
    let result = [];  // the output to be returned

    
    // iterate over each node to be visited (in the stack)
    while(stack.length != 0){
      // pop node from the stack
      let current = stack.pop();
      // check if node is visited
      if (!visited.has(current)){
        // add node to the output
        result.push(current);
        // mark node as visited
        visited.add(current);
        // traverse children nodes (left-to-right--reversed)
        let children = this.adjacencyList.get(current); 
        for(let i = children.length - 1 ; i >= 0  ; i--){
          stack.push(children[i]);
        }
      }
    }
    // return the results (list of nodes)
    return result;
  }
  // method to traverse the graph in a BFS fashion
  bfs(startNode){
    // Initializes relevant data structures
    let queue = [ startNode ]; // a stack initialized with the startNode
    let visited = new Set(); // a set that tracks nodes already visited
    let result = [];  // the output to be returned

    
    // iterate over each node to be visited (in the stack)
    while(queue.length != 0){
      // pop node from the stack
      let current = queue.shift();
      // check if node is visited
      if (!visited.has(current)){
        // add node to the output
        result.push(current);
        // mark node as visited
        visited.add(current);
        // traverse children nodes (left-to-right--reversed)
        let children = this.adjacencyList.get(current); 
        for(let i = 0; i < children.length;++i ){
          if (!visited.has(children[i])){
            queue.push(children[i]);
          }
        }
        
      }
    }
    // return the results (list of nodes)
    return result;
  }

  // digraph G {
  //   "+" -> "*"
  //   "+" -> "3"
  //   "*" -> "2"
  //   "*" -> "7"
  // }


  // toString method
  toString(){
    let result = [ "digraph G { "]
    this.adjacencyList.forEach((v, k) =>{
      for(let i = 0 ; i < v.length ; i++){
        result.push(`"${k}" -> "${v[i]}"`);
      }
    });
    result.push("}");

    return result.join("\n");// string?
  }
}

// Test cases:
let g1 = new Graph();
g1.addEdge("+", "*");
g1.addEdge("+", 3);
g1.addEdge("*", 2);
g1.addEdge("*", 7);

console.log(g1.dfs("+"));
console.log(g1 + "");



let g2 = new Graph();
g2.addEdge(0, 1);
g2.addEdge(0, 3);
g2.addEdge(1, 2);
g2.addEdge(1, 3);
g2.addEdge(2, 3);
g2.addEdge(2, 1);
g2.addEdge(3, 0);
g2.addEdge(3, 1);

console.log(g2.bfs(0));



