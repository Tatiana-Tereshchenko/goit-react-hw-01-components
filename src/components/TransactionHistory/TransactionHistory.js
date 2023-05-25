import PropTypes from 'prop-types'; 
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <div className={css.container_transaction}>
          <span className={css.title}>TransactionHistory</span>
          <table className={css.transaction_history}>
          <thead className={css.transaction_title}>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
          </thead>

          <tbody> {items.map((transaction) => (
                <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
                </tr>
        ))}       
          </tbody>
          </table>
        </div>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })
  ).isRequired
}; 


export default TransactionHistory;