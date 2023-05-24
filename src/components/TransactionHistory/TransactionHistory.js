import PropTypes from 'prop-types'; 
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className='container_transaction'>
          <span className='title'>TransactionHistory</span>
          <table className="transaction-history">
          <thead className='transaction-title'>
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