import { ReactElement, useState, useEffect } from "react";
import ListView, { Theme, ListViewItem } from "../components/ListView";
import useTheme from "../hooks/useTheme";

export default function Settings(): ReactElement {
  const { themes, setThemes } = useTheme();

  const handleClick = (title: string) => {
    const iteratedThemes: Theme[] = themes.map((theme) => {
      if (theme.title === title) {
        // selected theme
        localStorage.setItem("theme", title);
        return {
          ...theme,
          checked: true,
        };
      } else {
        // unselected theme
        return {
          ...theme,
          checked: false,
        };
      }
    });
    setThemes(iteratedThemes);
  };

  return (
    <div className=" max-w-md my-4 mx-4 md:mx-auto border-2 rounded overflow-visible">
      <ListView
        items={themes}
        render={(item: Theme) => (
          <ListViewItem
            title={item.title}
            checked={item.checked}
            handleClick={handleClick}
          />
        )}
      />
    </div>
  );
}
