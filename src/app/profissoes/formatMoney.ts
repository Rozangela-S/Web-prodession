export function FormatMoney(salary: string | number | null) {
  if (salary === null) {
    return "R$ 0,00";
  } 
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(salary));
}
