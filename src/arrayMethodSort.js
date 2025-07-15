'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < vet.length; i++) {
      for (let j = i; j < vet.length; j++) {
        if (compareFunction(vet[i], vet[j]) > 0) {
          let temp = vet[i];
          vet[i] = vet[j];
          vet[j] = temp;
        }
      }
    }
  };
}

module.exports = applyCustomSort;
