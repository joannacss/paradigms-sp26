package datastructures;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Arrays;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.TreeSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class BFS {
    public List<String> traverse(String root, Map<String,List<String>> graph){
        // queue with nodes to be visited (initialized with root node)
        Queue<String> toVisit = new LinkedList<>();
        toVisit.add(root);
        // list of visited nodes
        List<String> result = new ArrayList<>();

        // set of visited nodes, to avoid getting stuck
        Set<String> visited = new HashSet<>();


        // keep visiting while there are nodes in the queue
        while(!toVisit.isEmpty()) {
            String current = toVisit.remove();
            // check node is not visited
            if (!visited.contains(current)) {
                result.add(current);
                // mark node as visited
                visited.add(current);
                // iterate over node's children and add back to queue
                List<String> children = graph.get(current);
                for (String child : children) {
                    toVisit.add(child);
                }
            }
        }
        // returns the visited nodes, in order
        return result;
    }

    
}