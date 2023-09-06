import Sigma from "sigma";
import Graph from "graphology";

// Graphologyのインスタンスを作成
const graph = new Graph();

// ノードを追加
graph.addNode("n1", {
  label: "Node 1",
  x: Math.random(),
  y: Math.random(),
  size: 1,
});
graph.addNode("n2", {
  label: "Node 2",
  x: Math.random(),
  y: Math.random(),
  size: 1,
});
//
// エッジを追加
graph.addEdge("n1", "n2", { id: "e1" });

// コンテナを取得
const container = document.getElementById("container") as HTMLElement;

// Sigmaのインスタンスを作成
const renderer = new Sigma(graph, container);

// グラフを描画（通常は不要で、レンダラが自動で描画を管理します）
renderer.refresh();

// ノードがクリックされたときのイベントハンドラを追加
renderer.on("clickNode", (event) => {
  // クリックされたノードのIDを取得
  const nodeId = event.node;

  // クリックされたノードの属性を取得
  const nodeData = graph.getNodeAttributes(nodeId);

  // ポップアップでデータを表示
  alert(
    `Node clicked:\n- ID: ${nodeId}\n- X: ${nodeData.x}\n- Y: ${nodeData.y}\n- Color: ${nodeData.color}`
  );
});
