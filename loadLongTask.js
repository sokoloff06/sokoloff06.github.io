var startTime = Date.now();
console.log("Start Long Task");
array = new Array(100000000);
for (let index = 0; index < array.length; index++) {
  array[index] = index;
}
console.log(`Finish Long Task that took ${Date.now() - startTime}ms`);
