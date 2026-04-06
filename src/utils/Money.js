export function formatMoney(amountInCents) {
  const isNegative = amountInCents < 0;
  const absoluteValue = Math.abs(amountInCents);
  const formattedString = `$${(absoluteValue / 100).toFixed(2)}`;

  return isNegative ? `-${formattedString}` : formattedString;
}