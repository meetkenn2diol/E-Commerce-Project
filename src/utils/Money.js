export function formatMoney(amountInCents){
    const absoluteCents = Math.abs(amountInCents);
    const sign = amountInCents < 0 ? '-' : '';
    return `${sign}$${(absoluteCents / 100).toFixed(2)}`;
  }