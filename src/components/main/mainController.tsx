import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDiscover, changeTrend } from '../../store/slices/mainSlice';
import { RootState } from '../../store/store';
interface Props {
  menu: {
    title: string;
    class: string;
    key: string;
  }[];
}

const mainController = ({ menu }: Props) => {
  const mediaTypes: { [key: string]: any } = {
    trendType: useSelector((state: RootState) => state.media),
    discoverType: useSelector((state: RootState) => state.media),
  };
  const dispatch = useDispatch();

  return (
    <ul className='flex w-full media-list '>
      {menu.map((item, index) => (
        <li
          key={index}
          className={
            mediaTypes[item.key][item.key] === item.class ? 'selected' : ''
          }
        >
          <a
            className='cursor-pointer'
            onClick={() =>
              dispatch(
                item.key === 'trendType'
                  ? changeTrend(item.class)
                  : changeDiscover(item.class)
              )
            }
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default mainController;
