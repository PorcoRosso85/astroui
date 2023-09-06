// Initialize sigma.js and bind it to the existing container
const s = new sigma({
  graph: {
    nodes: [],
    edges: [],
  },
  renderer: {
    container: document.getElementById("container"),
    type: "canvas",
  },
  settings: {
    defaultNodeColor: "#ec5148",
  },
});

// Add a single node at the origin
s.graph.addNode({
  id: "n1",
  label: "Node 1",
  x: 0,
  y: 0,
  size: 1,
  color: "#f00",
});

// Add another node
s.graph.addNode({
  id: "n2",
  label: "Node 2",
  x: 3,
  y: 1,
  size: 1,
  color: "#00f",
});

// Add an edge connecting the nodes
s.graph.addEdge({
  id: "e1",
  source: "n1",
  target: "n2",
  size: 1,
  color: "#0f0",
});

// Refresh the graph to reflect the changes
s.refresh();
