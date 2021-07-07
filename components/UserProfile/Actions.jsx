export default function Actions({
  buttons,
  onClick,
  selectedMenu,
  showPicUpload,
}) {
  const menuKeys = Object.keys(buttons);
  return (
    <div className='flex flex-col self-center items-center justify-center w-full lg:w-80 '>
      <h6 className='font-semibold mt-2 text-lg'>Actions</h6>
      <ul className='w-full my-2'>
        {Object.values(buttons).map((menuItem, index) => {
          const key = menuKeys[index];
          return (
            <li
              key={key}
              role='menuitem'
              onClick={() => onClick(key)}
              className={`  flex w-full px-4 py-2 text-sm leading-5 text-left justify-center ${
                selectedMenu === key
                  ? 'bg-brand-purple-light text-white'
                  : 'text-gray-700 hover:bg-gray-100  cursor-pointer'
              }`}>
              {menuItem.buttonText}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
