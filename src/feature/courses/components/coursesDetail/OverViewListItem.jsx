const OverViewListItem = ({ items, icon, isBullet }) => (
    <ul className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-neutral-600 font-pm_font_size"
        >
          {isBullet ? (
            <span className="text-neutral-600">&#8226;</span>
          ) : (
            <img src={icon} alt="mark icon" />
          )}
          <span className="px-2 py-1 rounded">{item}</span>
        </li>
      ))}
    </ul>
  );

export default OverViewListItem;