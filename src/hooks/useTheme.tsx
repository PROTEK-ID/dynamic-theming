import { useEffect, useState } from "react";
import { Theme } from "../components/ListView";
import themesData from "../assets/themes.json";

export default function useTheme() {
  const [themes, setThemes] = useState<Theme[]>(themesData);

  useEffect(() => {
    const loadedThemeTitle: string =
      localStorage.getItem("theme") || themes[0].title;
    if (loadedThemeTitle) {
      // load theme from localStorage
      const iteratedThemes: Theme[] = themes.map((theme) => {
        if (loadedThemeTitle === theme.title) {
          return {
            ...theme,
            checked: true,
          };
        } else {
          return {
            ...theme,
            checked: false,
          };
        }
      });
      setThemes(iteratedThemes);
    } else {
      // load theme from state
      setThemes((allThemes) => {
        return allThemes.map((theme, index) =>
          index === 0 ? { ...theme, checked: true } : theme
        );
      });
    }
    localStorage.setItem("theme", loadedThemeTitle);
  }, []);

  useEffect(() => {
    // save current theme to localStorage
    const selectedTheme: string | null =
      themes.filter((item) => item.checked)[0]?.title ||
      localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", selectedTheme || "");
  }, [themes]);

  return { themes, setThemes };
}
