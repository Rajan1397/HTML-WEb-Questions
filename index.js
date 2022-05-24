function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  var [n, k] = input[0].trim().split(" ").map(Number);

  var arr = input[1].trim().split(" ").map(Number);
  console.log(arr);
  searchInSortedRotated(n, k, arr);
}

function searchInSortedRotated(n, k, arr) {
  var left = 0;
  var right = n - 1;

  while (right >= left) {
    var mid = Math.floor((left + right) / 2);

    // if found then return mid
    console.log(mid);
    if (arr[mid] == k) {
      console.log(mid);
      return;
    }

    // left part is sorted
    if (arr[left] <= arr[mid]) {
      if (k >= arr[left] && k <= arr[mid]) {
        right = mid - 1;
        console.log("I am in left part 1st condtion,", left, right);
      } else {
        left = mid + 1;
        console.log("I am in left part second condtion,", left, right);
      }
    }

    // right part is sorted
    else {
      if (k >= arr[mid] && k <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  console.log(arr);
  console.log(-1);
}
if (process.env.USERNAME === "HP") {
  runProgram(`15 14
10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8
`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
