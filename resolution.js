function orderWeight (list) {
    return list.split(/\s+/).map(x => ({
        value: x,
        weight: x.split('').reduce((a, b) => a + Number(b), 0)
    })).sort((a, b) => a.weight === b.weight ?
        a.value.localeCompare(b.value) : a.weight - b.weight
    ).map(x => x.value).join(' ')
}

module.exports = { orderWeight }
// ----------------
var msg = '56 65 74 100 99 68 86 180 90'

function somaDigito(valor) {
  return valor.split('').reduce(function(acc, value) {
    return acc + Number(value);
  }, 0);
}

function sortCustom(a, b) {
  var pesoA = somaDigito(a);
  var pesoB = somaDigito(b);

  if (pesoA - pesoB !== 0) {
    return pesoA - pesoB;
  } else {
    return a.localeCompare(b);
  }
}

function orderWeight (list) {
    var result = list.split(/\s+/).sort(sortCustom).join(' ');
    console.log(result);
    return result;
}
// --------------
function sumDigits(string) {
    return string.split('').reduce(function(acc, curr) { return acc + parseFloat(curr)}, 0)
};

function sortWeight() {
   return WEIGHTS.split(/\s+/g).sort((a, b) => {
        var curr = sumDigits(a);
        var next = sumDigits(b);
        if (curr === next ) {
            var aGreaterThanB = a > b ? 1 : - 1;
            return aGreaterThanB;
        }
        return curr - next
    }).join(' ')
}