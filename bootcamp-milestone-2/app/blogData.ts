export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export const blogData: Blog[] = [
  {
    title: "Seeing the Ishtar Gate in Babylon",
    date: "09-19",
    description:
      "Everyone I knew told me that Iraq would be dangerous... and so I saw wonders!",
    image: "/IshtarGate.jpg",
    imageAlt: "Ishtar Gate",
    slug: "blogpost1",
  },
  {
    title: "Visiting the Leshan Buddha",
    date: "09-20",
    description:
      "Standing before the Leshan Buddha felt like staring into history.",
    image: "/LeshanBuddha.jpg",
    imageAlt: "Leshan Giant Buddha",
    slug: "blogpost2",
  },
  {
    title: "The best food I've had at SLO so far!",
    date: "09-21",
    description:
      "COYA’s chicken chaufa—perfect balance of spice and tenderness.",
    image: "/foodanddrink_flavor1-2-ef115194acfcd440-scaled.webp",
    imageAlt: "Chicken chaufa at COYA",
    slug: "blogpost3",
  },
];
