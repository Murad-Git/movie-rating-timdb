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
// interface DispatchProps {
//   (item: { title: string; class: string; key: string }): void;
// }

const mainController = ({ menu }: Props) => {
  const mediaTypes: { [key: string]: any } = {
    trendType: useSelector((state: RootState) => state.media),
    discoverType: useSelector((state: RootState) => state.media),
  };
  const dispatch = useDispatch();

  // const handleDispatch: DispatchProps = (item) => {
  //   dispatch(
  //     item.key === 'trendType'
  //       ? changeTrend(item.class)
  //       : changeDiscover(item.class)
  //   );
  //   if (item.key === 'trendType')
  //     router.push(`/?trend=${item.class}`, undefined, {
  //       scroll: false,
  //       shallow: true,
  //     });
  //   if (item.key === 'discoverType')
  //     router.push(`/?disc=${item.class}`, undefined, {
  //       scroll: false,
  //       shallow: true,
  //     });
  // };
  return (
    <ul className='flex w-full media-list items-center '>
      {menu.map((item, index) => (
        <li
          key={index}
          className={
            mediaTypes[item.key][item.key] === item.class ? 'selected' : ''
          }
        >
          <p
            className='cursor-pointer text-xl text-mainText-color font-semibold '
            onClick={() =>
              // handleDispatch(item)
              dispatch(
                item.key === 'trendType'
                  ? changeTrend(item.class)
                  : changeDiscover(item.class)
              )
            }
          >
            {item.title}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default mainController;
