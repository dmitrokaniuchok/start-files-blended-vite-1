import { style } from './ForbesList.module.css';

const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}></span>
          <span className={style.titleBottom}></span>
        </h2>
      </div>

      <ul className={style.list}>
        {/* Довільна кіл-сть
        <li className={style.item}>
           <ForbesListItem/>
        </li>
     */}
      </ul>
    </div>
  );
};

export default ForbesList;
