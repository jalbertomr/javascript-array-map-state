let squares0 = [null,null,null,null,null,null];
let squares1 = ['X',null,null,null,null,null];
let squares2 = ['X','O',null,null,null,null];
let squares3 = ['X','O','X',null,null,null];
let squares4 = ['X','O','X','O',null,null];
let squares5 = ['X','O','X','O','X',null];
let squares6 = ['X','O','X','O','X','O'];
let squaresAll = ['A','B','C','D','E','F'];

var state = {
  history: [{squares: Array(9).fill(null)}],
  stepNumber: 0,
};

state = { ...state, newMember: 'valueofnewmember' };
console.log(state);
console.log("squares0: " + squares0);
console.log("state.stepNumber: " + state.stepNumber);
console.log("state.history.length: " + state.history.length);
console.log("state.history:" + state.history);
console.log("state.history[0]:" + state.history[0]);
console.log("state.history[0].squares: " + state.history[0].squares);

console.log("state.history.length: " + state.history.length);
let history = state.history.slice(0, state.history.length);
console.log("history[0].squares: " + history[0].squares);
var current = history[history.length - 1];
var squarePaso = current.squares.slice();
console.log("current: " + current);
console.log("history[0]: " + history[0]);
history = history.concat({squares: squares1});
history = history.concat({squares: squares2});
history = history.concat({squares: squares3});
history = history.concat({squares: squares4});
history = history.concat({squares: squares5});
history = history.concat({squares: squares6});

console.log("history[5].squares:" + history[5].squares);

board = history.map((curr, idx, arr) => {
    console.log("curr.squares:" + curr.squares);
  return curr.squares;
});

console.log(board);

 board = squares5.map((curr, idx, arr)=>{
     console.log("idx: " + idx + " curr: " + curr + " arr: " + arr);
    return curr;
});
console.log("board: " + board);