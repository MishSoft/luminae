export interface CategoriesLinksType {
  label: string;
  link: string;
}

export interface CategoryType {
  title: string;
  links: CategoriesLinksType[];
  colStart?: number;
  rowStart?: number;
  rowSpan?: number;
}

export interface CategoryProps {
  id: number;
  label: string;
  slug: string;
  categories?: CategoryType[];
}
