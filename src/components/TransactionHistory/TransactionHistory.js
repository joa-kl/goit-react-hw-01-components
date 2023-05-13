import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionsHistory = ({ items }) => {
    // const { type, amount, currency } = items;
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string
        })
    ),
}