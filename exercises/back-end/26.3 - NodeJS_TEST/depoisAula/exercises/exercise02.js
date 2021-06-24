function exercise02(number) {
  if (typeof(number) != "number") return "O valor deve ser um número";
  if (number > 0) return "Positivo";
  if (number < 0) return "Negativo";
  return "Neutro";
};

module.exports = exercise02;