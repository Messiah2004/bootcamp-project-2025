type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Seeing the Ishtar Gate in Babylon",
    date: "09-19",
    description:
      "Everyone I knew told me that Iraq would be dangerous, and that for safety reasons, I shouldn't go. Safe to say, that made me want to go more. And so I saw wonders! The Ishtar Gate is the monumental blue-glazed eighth gate of ancient Babylon, built by Nebuchadnezzar II and now reconstructed in both Berlin’s Pergamon Museum and Iraq's Hillah (formerly Babylon).",
    image: "IshtarGate.jpg",
    imageAlt: "image of nothing",
    slug: "blogpost1",
  },
  {
    title: "Visiting the Leshan Buddha",
    date: "09-20",
    description:
      "Standing before the Leshan Buddhaa felt as if I staring into the the most eternal aspect of history. Faith. Built in 803 A.D., this great statue has maintained its status as a symbol of Leshan and a holy pilgrimage site for Chinese Buddhists. In the great view of things, as a Western tourist, I feel incredibly grateful to live in a time where I can experience cultures and wonders that I might have otherwise not been able to in the past.",
    image: "LeshanBuddha.jpg",
    imageAlt: "image of something",
    slug: "blogpost2",
  },

  {
    title: "The best food I've had at SLO so far!",
    date: "09-21",
    description:
      "It's been about a month since I moved into San Luis Obispo, and I'm already in awe of the variety of cuisines that SLO has to offer. The city where I'm from has a few common fast food chains and one incredibly overpriced restautrant that nobody goes to. So SLO feels like a breathe of fresh air! My favorite food spot in SLO has to be COYA. So far, that is! Their chicken chaufa is the best chicken and rice in town! In my view, it has the perfect combination of spiciness and tenderness. The service was incredible, and the entire place had these really cute larger-than-life wool llamas. As a broke college student, I probably won't be going to this place very often, but I will definitely be coming back here on special occasions.",
    image: "foodanddrink_flavor1-2-ef115194acfcd440-scaled.webp",
    imageAlt: "image of something",
    slug: "blogpost3",
  },
];

const blogContainer = document.getElementById(
  "blog-container"
) as HTMLDivElement;

blogs.forEach((blog) => {
  const blogDiv = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = blog.title;
  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  const description = document.createElement("p");
  description.textContent = blog.description;
  blogDiv.append(image, header, description);
  blogContainer.append(blogDiv);
});

export {};
