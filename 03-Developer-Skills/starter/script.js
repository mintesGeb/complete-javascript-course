// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temp = [4, 4, 5, 64, 4, 5, 'error', 6, 2, 4];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temp = t1.concat(t2);
//   console.log(temp);

//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const temp2 = [1, 4, 5, 6, 4, 2, 5, 4, 5, '56565'];
// const amplitudeNew = calcTempAmplitudeNew(temp, temp2);

// console.log(amplitudeNew);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// const temp1 = [4, 4, 5, 64, 4, 5, 'error', 6, 2, 4];
// const temp2 = [1, 4, 5, 6, 4, 2, 5, 4, 5, '56565'];

// const calcTempAmplitude = function (t1, t2) {
//   const temp = t1.concat(t2);
//   console.log(temp);

//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temp1, temp2);
// console.log(amplitude);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const temp1 = [4, 4, 5, 64, 4, 5, 'error', 6, 2, 4];
// const temp2 = [1, 4, 5, 6, 4, 2, 5, 4, 5, '56565'];

// const calcTempAmplitude = function (t1, t2) {
//   const temp = t1.concat(t2);
//   console.log(temp);

//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < min) min = temp[i];
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temp1, temp2);
// console.log(amplitude);

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

// ... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const printForecast = function (arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + string);
};

console.log(printForecast(temp1));
console.log(printForecast(temp2));
