export async function getTotalCreditedAmount() {
    const url = await fetch(`https://showaibwallet.vercel.app/api/getTransactionDetails`,{
        next : {
          revalidate : 1,
        }
    });
    const data = await url.json()
    const totalDebited = data
  .filter(tx => tx.category === 'credited')
  .reduce((sum, tx) => sum + Number(tx.amount), 0);
    return totalDebited;
  }

export async function getTotalDebitedAmount() {
    const url = await fetch(`https://showaibwallet.vercel.app/api/getTransactionDetails`,{
        next : {
          revalidate : 1,
        }
    });
    const data = await url.json()
    const totalDebited = data
  .filter(tx => tx.category === 'debited')
  .reduce((sum, tx) => sum + Number(tx.amount), 0);
    return totalDebited;
  }