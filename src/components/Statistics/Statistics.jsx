import PropTypes from 'prop-types';
import { StatisticItem } from '../../components/Statistics/StatisticItem';
import css from './Statistics.module.css';
import { getRandomColor } from 'helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <div style={{ backgroundColor: getRandomColor() }}>
              <StatisticItem key={id} label={label} percentage={percentage} />
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: '',
};
