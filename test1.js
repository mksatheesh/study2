function toCelsius(fahrenheit) {
    var c2 = (5 / 9) * (fahrenheit - 32);
    return (c2);
}
var c = toCelsius(10);
console.log("celsius=" + c);
c = toCelsius(32);
console.log("celsius=" + c);
c = toCelsius(40);
console.log("celsius=" + c);
c = toCelsius(50);
console.log("celsius=" + c);