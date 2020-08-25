const {frutas, dinero} = require('./frutas');
const cowsay = require("cowsay");
console.log(cowsay.say({
  text : "I am a module",
  e : "oO",
  T : "U "
}));

frutas.forEach(item => {
  console.count(item)
});
console.log(dinero);
