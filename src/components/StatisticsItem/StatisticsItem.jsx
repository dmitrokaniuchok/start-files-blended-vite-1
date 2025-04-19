import style from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <li className={style.item}>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </li>
  );
};

export default StatisticsItem;
