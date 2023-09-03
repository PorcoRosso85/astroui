import G6 from "@antv/g6";

export const graphConfig = {
  container: "mountNode",
  width: 800,
  height: 600,
};

export const graphData = {
  nodes: [
    { id: "node1", label: "Node 1" },
    { id: "node2", label: "Node 2" },
    { id: "node3", label: "Node 3" },
  ],
  edges: [
    { source: "node1", target: "node2" },
    { source: "node2", target: "node3" },
  ],
};

export class SimpleGraph {
  private graph: G6.Graph;

  constructor(data: any, config: any) {
    this.graph = new G6.Graph(config);
    this.graph.data(data);
    this.graph.render();
  }
}
