/**
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */

function contemTodosCaracteres(str1, str2) {
  // Converte para minúsculo e cria conjuntos (sem caracteres repetidos)
  const set1 = new Set(str1.toLowerCase());
  const set2 = new Set(str2.toLowerCase());

  // Verifica se todos os caracteres de um estão no outro
  const subset1 = [...set1].every(char => set2.has(char));
  const subset2 = [...set2].every(char => set1.has(char));

  return subset1 && subset2;
}

console.log(contemTodosCaracteres("Amor", "Roma"));     
console.log(contemTodosCaracteres("Python", "typhon")); 
console.log(contemTodosCaracteres("Casa", "Casado"));   
console.log(contemTodosCaracteres("abc", "cabx"));      
