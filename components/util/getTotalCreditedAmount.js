export async function getTotalCreditedAmount() {
    const url = await fetch(`https://showaibwallet.vercel.app/api/getTransactionDetails`,{
        cache: 'no-store'
    });
    const data = await url.json()
    const today = new Date()
    const totalDebited = data


  return totalDebited
    .filter(tx => {
      if (tx.category !== "credited") return false;

      const createdDate = new Date(tx.createdAt);

      return (
        createdDate.getDate() === today.getDate() &&
        createdDate.getMonth() === today.getMonth() &&
        createdDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

export async function getTotalDebitedAmount() {
  const url = await fetch(`https://showaibwallet.vercel.app/api/getTransactionDetails`,{
        cache: 'no-store'
    });
    const data = await url.json()
    const today = new Date()
    const totalDebited = data


  return totalDebited
    .filter(tx => {
      if (tx.category !== "debited") return false;

      const createdDate = new Date(tx.createdAt);

      return (
        createdDate.getDate() === today.getDate() &&
        createdDate.getMonth() === today.getMonth() &&
        createdDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}