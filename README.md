# knight-travails

An Odin Project Learning about the Graph Data Structure 
using BFS algorithm.

This project implements Graphs + BFS using  
modern JavaScript (ES6 modules) and Node v22. 

## Project Understanding

The `Knight Travails` includes the following  
concepts:

- `Knight Movement`  
  Given enough turns, a knight on a standard 8x8 chess board can
  move from any square to any other square. Its basic move is two
  steps forward and one step to the side or one step forward and 
  two steps to the side. It can face any direction.  

- `Chessboard and problem`  
  Each square on the board is a node (or vertex). A knight’s valid
  moves from any square represent the edges (or connections) between
  the vertices. Thus, the problem of finding the shortest path for the
  knight’s movement becomes a graph traversal problem. The goal is to 
  traverse the graph (the chessboard) to find the shortest route between
  two nodes (the start and end positions).   

- `Vertices and Edges`  
  The vertices in this graph are each of the possible positions on the 
  chessboard, represented by a pair of coordinates like [x, y], where x 
  and y are between 0 and 7. The edges are the valid knight moves between 
  vertices. For example, from [0,0], a knight can move to [2,1], [1,2], and 
  so on. Each of these moves represents a connection between the vertex [0,0] 
  and the other reachable vertices.  

- `Graph Respresentation`  
   While solving this problem, you don’t need to explicitly create a graph 
   object with vertices and edges. Instead, you can think of the graph as 
   implicit. The knight starts on a specific vertex, and the algorithm will 
   dynamically explore all possible moves (edges) to other vertices (positions on the board) 
   as it traverses the board.  

## Assignment

* Your task is to build a function knightMoves that shows the shortest possible way to get 
from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Calling your function would 
therefore look like:

`knightMoves([0,0],[1,2]) // returns [[0,0],[1,2]]`

## Testing

Run `node knihtTravail.js`.

Currently script is testing three inputs as following: 

1) `console.log(knightMoves([0,0],[3,3]))`;

2) `console.log(knightMoves([3,3],[0,0]))`;

3) `console.log(knightMoves([0,0],[7,7]))`;