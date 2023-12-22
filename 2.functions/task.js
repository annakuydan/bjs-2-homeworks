function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
     if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
getArrayParams([1, 2, 3, -100, 10]);

function summElementsWorker(...arr) {

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
}
summElementsWorker([1, 2, 3, -100, 10])

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}
differenceMaxMinWorker([1, 2, 3, -100, 10])

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sumEvenElement[i] % 2) {
      sumEvenElement +1;
    }
    else {
      sumOddElement +1;
    }
  }
  return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker([1, 2, 3, -100, 10])

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sumEvenElement[i] % 2) {
      sumEvenElement +i;
    }
    else {
      countEvenElement +1;
    }
  }
  let sum = sumEvenElement + countEvenElement;
  return sum / arr.length;
}
averageEvenElementsWorker([1, 2, 3, -100, 10])

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }

  return maxWorkerResult
}