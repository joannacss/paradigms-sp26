// Object type declaration (using class keyword)
class Graph {

  // constructor declaration (init adjacencyList attribute)
  

  // method to add a Node `n` to the graph (if it does not exist yet)
  
  
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

        // traverse children nodes (left-to-right--reversed)

    // return the results (list of nodes)

  // method to traverse the graph in a BFS fashion
  

  // toString method
  toString(){
    return "graph";
  }
  
  

}

// Test cases:
let g1 = new Graph();
// g1.addEdge("+", "*");
// g1.addEdge("+", 3);
// g1.addEdge("*", 2);
// g1.addEdge("*", 7);

// console.log(g1.dfs("+"));
console.log(g1 + "")



let g2 = new Graph();
// g2.addEdge(0, 1);
// g2.addEdge(0, 3);
// g2.addEdge(1, 2);
// g2.addEdge(1, 3);
// g2.addEdge(2, 3);
// g2.addEdge(2, 1);
// g2.addEdge(3, 0);
// g2.addEdge(3, 1);

// console.log(g2.dfs(0));


