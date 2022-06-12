const haversine = require('haversine-distance')
const a = { latitude:-6.917528333333333, longitude: 106.91032166666666}
const b = { latitude:-6.917253333333333, longitude: 106.90961833333333}

// const c = [106.94607833333333,-6.95105]
// const d = [106.935795,-6.919791666666667]
 
console.log(haversine(a, b)) 
console.log(haversine(a, b)/1000)
// console.log(haversine(c, d))
// console.log(haversine(c, d)/1000)  
