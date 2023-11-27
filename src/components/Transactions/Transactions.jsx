import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <section className={css.transactionHistory}>
      <table className={css.transactionTable}>
        <thead className={css.head}>
          <tr className={css.headRow}>
            <th className={css.headItem}>Type</th>
            <th className={css.headItem}>Amount</th>
            <th className={css.headItem}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.body}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.bodyRow} key={id}>
              <td className={css.dataItem}>{type}</td>
              <td className={css.dataItem}>{amount}</td>
              <td className={css.dataItem}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
