import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';

function generateRandomColor() {
    const red = Math.floor(Math.random() * 250)
    const blue = Math.floor(Math.random() * 250)
    const green = Math.floor(Math.random() * 250)
    const alpha = 0.2
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}


const Statistics = ({ title, stats  }) => {
    return (
        <div className={css.container_stat}>
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : null}
            <ul className={css.stat_list}> 
                {stats.map((stat, index) => (
                    <li className={css.item} style={{ backgroundColor: generateRandomColor() }} key={index}>
                        <span className={css.label}>
                            {stat.label}
                        </span>
                        <span className={css.percentage}>
                            {stat.percentage}%
                        </span>
                    </li>
                ))}

            </ul>
            </section>
            </div>
   )
    
}



Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired
            }
        ).isRequired
    )
  
};
export default Statistics;