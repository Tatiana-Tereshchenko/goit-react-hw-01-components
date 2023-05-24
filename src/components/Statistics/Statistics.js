import PropTypes from 'prop-types'; 
import './Statistics.css'

function generateRandomColor() {
    const red = Math.floor(Math.random() * 250)
    const blue = Math.floor(Math.random() * 250)
    const green = Math.floor(Math.random() * 250)
    const alpha = 0.2
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}


const Statistics = ({ title, stats  }) => {
    return (
        <div className='container_stat'>
        <section className='statistics'>
            {title ? <h2 className='title'>{title}</h2> : null}
            <ul className='stat-list'> 
                {stats.map((stat, index) => (
                    <li className='item' style={{ backgroundColor: generateRandomColor() }} key={index}>
                        <span className='label'>
                            {stat.label}
                        </span>
                        <span className='percentage'>
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