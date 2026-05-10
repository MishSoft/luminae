import { CategoryProps } from "@/app/components/features/Hero/type";

export const categoryLinks: CategoryProps[] = [
  {
    id: 1,
    label: "Woman",
    slug: "womens-dresses",
    categories: [
      {
        title: "shoes & bag",
        links: [
          {
            label: "casual shoes",
            link: "/casualshoes",
          },
          {
            label: "boots",
            link: "/boots",
          },
          {
            label: "sandals",
            link: "/sandals",
          },
          {
            label: "slippers",
            link: "/slippers",
          },
        ],
        colStart: 1,
      },

      {
        title: "home & textile",
        links: [
          {
            label: "bedding",
            link: "/bedding",
          },
          {
            label: "pillows",
            link: "/pillows",
          },
          {
            label: "handkerchief towels",
            link: "/towels",
          },
          {
            label: "curtain",
            link: "/curtain",
          },
        ],
        colStart: 2,
      },

      {
        title: "party supplies",
        links: [
          {
            label: "event & party",
            link: "/event-party",
          },

          {
            label: "christmas",
            link: "/christmas",
          },

          {
            label: "artificial decorations",
            link: "/artificial-decorations",
          },
          {
            label: "wedding",
            link: "/wedding",
          },
        ],
        colStart: 3,
      },

      {
        title: "clothes",
        links: [
          {
            label: "bottoms",
            link: "/bottoms",
          },

          {
            label: "women's clothing",
            link: "/women-clothing",
          },

          {
            label: "t-shirts and tops",
            link: "/t-shirts-tops",
          },
          {
            label: "dresses",
            link: "/dresses",
          },
          {
            label: "outerwear",
            link: "/outerwear",
          },
          {
            label: "formal wear",
            link: "/formal-wear",
          },
          {
            label: "casual wear",
            link: "/casual-wear",
          },
          {
            label: "seasonal collections",
            link: "/seasonal-collections",
          },
          {
            label: "sports bras",
            link: "/sports-bras",
          },
          {
            label: "workout tops",
            link: "/workout-tops",
          },
          {
            label: "fall wardrobe",
            link: "/fall wardrobe",
          },
        ],
        colStart: 4,
      },

      {
        title: "luxury & designer",
        links: [
          {
            label: "towels",
            link: "/towels",
          },

          {
            label: "bathroom scales",
            link: "/bathroom-scales",
          },

          {
            label: "bath mats",
            link: "/bath-mats",
          },

          {
            label: "shower caps",
            link: "/shower-caps",
          },
        ],
        colStart: 1,
      },

      {
        title: "cosmetics",
        links: [
          {
            label: "shampoo and conditioner",
            link: "/shampoo-conditioner",
          },

          {
            label: "styling products",
            link: "/styling-products",
          },

          {
            label: "hair accessories",
            link: "/hair-accessories",
          },

          {
            label: "men's grooming",
            link: "/men-grooming",
          },
        ],
        colStart: 2,
      },

      {
        title: "support & outdoors",
        links: [
          {
            label: "team sports",
            link: "/team-sports",
          },

          {
            label: "water sports",
            link: "/water-sports",
          },

          {
            label: "outdoor recreation",
            link: "/outdoor-recreation",
          },

          {
            label: "fitness equipment",
            link: "/fitness-equipment",
          },
        ],
        colStart: 3,
      },
    ],
  },
  { id: 2, label: "Male", slug: "mens-shirts" },
  { id: 3, label: "Mother-Child", slug: "baby-accessories" },
  { id: 4, label: "Home & Furniture", slug: "furniture" },
  { id: 5, label: "Super market", slug: "groceries" },
  { id: 6, label: "Cosmetics", slug: "beauty" },
  { id: 7, label: "Shoe & Bag", slug: "womens-shoes" },
  { id: 8, label: "Electronic", slug: "laptops" },
  { id: 9, label: "Sport & Outdoor", slug: "sports-accessories" },
  { id: 10, label: "Best seller", slug: "tops" },
];
