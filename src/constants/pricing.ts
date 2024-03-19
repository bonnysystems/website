export let PRICING_PLANS = {
  basic: {
    title: "Basic",
    setupFee: 20,
    monthlyCost: 0,
    description:
      "For those who need barebones help with their domain and want to know what to improve.",
    features: [
      "setup of proper domain name",
      "full audit of website (technical, SEO, accessibility)",
    ],
  },
  fresh: {
    title: "Fresh",
    setupFee: 80,
    monthlyCost: 15,
    description:
      "For those who would like a freshened up website with the essentials of a great site.",
    features: [
      "hosting and management of site",
      "basic design",
      "mobile responsiveness",
      "video embeds",
      "basic search engine optimization",
      "24 / 7 support",
    ],
  },
  modern: {
    title: "Modern",
    setupFee: 250,
    monthlyCost: 25,
    description:
      "For those who are looking for a sleek up-to-date website with modern CTA mechanisms.",
    features: [
      "updated design",
      "forms",
      "call to actions",
      "social media integrations",
      "blogs",
    ],
  },
  pro: {
    title: "Pro",
    setupFee: 500,
    monthlyCost: 50,
    description:
      "For those who want more autonomy, access to data, and the most unique in design.",
    features: [
      "specialized design",
      "advanced search engine optimization",
      "admin dashboard access",
    ],
  },
};
