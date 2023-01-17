module.exports = function reverse (n) {
   let result = '';
   let strN = String(n);
   if (strN[0] !== '-') {
      for (let i = 0; i < strN.length; i += 1) {
         result = `${strN[i]}${result}`;
      }
   } else if (strN[0] === '-') {
      for (let i = 1; i < strN.length; i += 1) {
         result = `${strN[i]}${result}`;
      }
   }
   return Number(result);
}
