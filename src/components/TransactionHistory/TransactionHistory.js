import PropTypes from 'prop-types'; 
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className='container'>
             <span className='title'>TransactionHistory</span>
    <table className="transaction-history">
        <thead className='transaction-title'>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>

        <tbody>
        {items.map((transaction) => (
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




export default TransactionHistory;