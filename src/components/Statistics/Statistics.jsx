import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <table className={styles['stat-table']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr className={styles.item} key={stat.id}>
              <td className={styles.label}>{stat.label}</td>
              <td className={styles.percentage}>{`${stat.percentage}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Statistics;
