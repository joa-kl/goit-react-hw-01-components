import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionsHistory = ({ items }) => {
    // const { type, amount, currency } = items;
    return (
        <table className={css.table}>
            <thead>
                <tr className={css.tableHead}>
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
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        })
    ),
}