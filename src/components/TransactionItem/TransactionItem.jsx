import PropTypes from 'prop-types';
import './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
