import { ReactElement, ReactNode, Fragment } from "react";

export type Theme = {
  title: string;
  checked: boolean;
  handleClick?: (title: string) => void;
};

interface ListViewProps<T> {
  items: Theme[];
  render: (item: Theme) => ReactNode;
}

export default function ListView<T>({
  items,
  render,
}: ListViewProps<T>): ReactElement {
  return (
    <ul>
      {items.map((item, index) => (
        <Fragment key={item.title}>
          <li>{render(item)}</li>
          {index !== items.length - 1 && (
            <div className="divider mt-0 mb-0 h-min"></div>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

export function ListViewItem({
  title,
  checked,
  handleClick = () => null,
}: Theme): ReactElement {
  return (
    <div
      onClick={() => handleClick(title)}
      data-theme={title}
      className="bg-base-100 hover:bg-base-200 active:bg-base-300 cursor-pointer py-2 px-4 flex flex-row item-center justify-between gap-4"
    >
      <span className="text-lg uppercase">{title}</span>
      <input
        type="radio"
        className="radio radio-secondary"
        checked={checked}
        readOnly
      />
    </div>
  );
}
