import TransactionItem from '../TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
