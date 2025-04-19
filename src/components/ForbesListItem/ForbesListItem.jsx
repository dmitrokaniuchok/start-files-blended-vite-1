import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';

const ForbesListItem = (avatar, name, capital, isIncrease) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt="Mark Zuckerberg" />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>
        35.7 <BiDollarCircle color="#2196f3" size={22} />
        {/* Тут має бути необхідна іконка зміни статку */}
      </span>
    </>
  );
};

export default ForbesListItem;
