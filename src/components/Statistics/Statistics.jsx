import { StatisticItem } from '../../components/Statistics/StatisticItem';
import css from './Statistics.module.css';
import { getRandomColor } from 'helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
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
