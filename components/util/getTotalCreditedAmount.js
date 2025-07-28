export default async function getTotalCreditedAmount() {
    const url = await fetch(`http://localhost:3000/api/getTransactionDetails`);
    const data = await url.json()
    const totalDebited = data
  .filter(tx => tx.category === 'debited')
  .reduce((sum, tx) => sum + Number(tx.amount), 0);
    return totalDebited;
  }