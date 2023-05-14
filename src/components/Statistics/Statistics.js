import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <div className={css.statsDiv}>
                <ul className={css.statsList}>
                    {stats.map(element => {
                        return (
                            <li
                                style={{ backgroundColor: getRandomHexColor()}}
                                className={css.item}
                                key={element.id}
                            >
                                <span className={css.label}>{element.label}</span>
                                <span className={css.percentage}>{element.percentage}%</span>
                            </li>
                        )
                    })}
            
                </ul>
            </div>
               
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
            percentage: PropTypes.string
        })
    ),
}

export default Statistics;