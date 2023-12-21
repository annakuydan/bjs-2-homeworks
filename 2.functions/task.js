function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = infinity;
  max = -infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    else if (arr[i] < min) {
      min = arr[i]
    }
    sum = arr[i]
    avg = (min + max + sum) / 3;
    avg.toFixed();
    avg - Number(avg);
  }
  return { min: min, max: max, avg: avg };
}
getArrayParams([1, 5, 8, -100, 10]);

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
