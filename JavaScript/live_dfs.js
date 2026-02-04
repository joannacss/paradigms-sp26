// Object type declaration (using class keyword)
class Graph {

  // constructor declaration (init adjacencyList attribute)
  

  // method to add a Node `n` to the graph
  
  
  // method to add edge n1 -> n2
  

  // method to traverse the graph in DFS fashion
  
    // Initializes relevant data structures
        // a stack initialized with the startNode
        // a set that tracks nodes already visited
        // the output to be returned

    
    // iterate over each node to be visited (in the stack)
    
      // pop node from the stack
    
      // check if node is visited
    
        // add node to the output
    
        // mark node as visited
    
        // traverse children nodes
    
    // return the results (list of nodes)
    

  // method to traverse the graph in a BFS fashion


}

// Test cases:
// let g1 = new Graph();
// g1.addEdge("+", "*");
// g1.addEdge("+", 3);
// g1.addEdge("*", 2);
// g1.addEdge("*", 7);
// console.log(g1);
// console.log(g1.dfs("+"));
// console.log(g1.bfs("+"));


// let g2 = new Graph();
// g2.addEdge(0, 1);
// g2.addEdge(0, 3);
// g2.addEdge(1, 2);
// g2.addEdge(1, 3);
// g2.addEdge(2, 3);
// g2.addEdge(2, 1);
// g2.addEdge(3, 0);
// g2.addEdge(3, 1);
// console.log(g2);
// console.log(g2.dfs(0));
// console.log(g2.bfs(0));

