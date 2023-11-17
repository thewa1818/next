type Color = "red" | "blue";

export interface NewsData {
  id: string;
  title: string;
  color?: Color;
}
