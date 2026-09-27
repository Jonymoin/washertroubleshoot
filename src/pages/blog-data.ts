export type BlogArticle = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  isoDate: string;
  readTime: string;
  content: string;
  /** Slug of the closest matching entry in `problems` (repair-data.ts), for contextual internal linking. */
  relatedProblemSlug?: string;
};

export const articles: BlogArticle[] = [
  {
    slug: "why-is-my-washing-machine-not-draining",
    title: "Why is my washing machine not draining?",
    summary:
      "A common issue that can often be fixed without professional help. Learn how to check your pump filter and drain hose.",
    date: "Oct 12, 2023",
    isoDate: "2023-10-12",
    readTime: "4 min read",
    content:
      "If your washing machine is full of water at the end of a cycle, the most likely culprit is a blocked pump filter. This filter catches coins, hairpins, and lint before they reach the pump. Locate the small door at the bottom front of your machine, place a towel and shallow dish underneath, and carefully unscrew the filter. Clean out any debris and replace it tightly. If this doesn't solve the issue, your drain hose might be kinked, or the pump itself may have failed, which usually requires a technician.",
    relatedProblemSlug: "not-draining",
  },
  {
    slug: "how-to-maintain-your-washing-machine",
    title: "How to maintain your washing machine",
    summary:
      "Simple monthly maintenance tips to extend the life of your washer and prevent foul odors.",
    date: "Nov 05, 2023",
    isoDate: "2023-11-05",
    readTime: "3 min read",
    content:
      "To keep your washing machine smelling fresh and running smoothly, run a hot maintenance wash (90°C) empty once a month with a specialized cleaner or white vinegar. After every wash, leave the door slightly ajar to let the drum dry out and prevent mold growth on the rubber door seal. Regularly wipe down the door seal with a damp cloth to remove detergent residue and lint. Also, occasionally remove the detergent drawer and clean it thoroughly under warm water.",
    relatedProblemSlug: "bad-smell",
  },
  {
    slug: "common-washing-machine-error-codes-explained",
    title: "Common washing machine error codes explained",
    summary:
      "What those flashing lights and numbers mean on Samsung, LG, and Bosch washing machines.",
    date: "Dec 18, 2023",
    isoDate: "2023-12-18",
    readTime: "5 min read",
    content:
      "Error codes are your machine's way of telling you what's wrong. For Samsung, '4E' or '5E' usually means a draining issue, while 'UE' means an unbalanced load. On LG machines, 'OE' indicates it can't drain, and 'LE' points to a motor lock error. For Bosch, 'E18' is a pump block, and 'E21' is a motor issue. Always check your specific manual, but knowing these basics can help you decide if it's a simple fix (like rebalancing the load) or if you need to call a professional.",
    relatedProblemSlug: "showing-an-error-code",
  },
  {
    slug: "when-to-repair-vs-replace-your-washing-machine",
    title: "When to repair vs replace your washing machine",
    summary:
      "Is it worth fixing that 8-year-old washer? A guide to making the most economical decision.",
    date: "Jan 22, 2024",
    isoDate: "2024-01-22",
    readTime: "4 min read",
    content:
      "A good rule of thumb is the 50% rule: if the repair costs more than 50% of the price of a new, comparable machine, and the washer is more than half through its expected lifespan (usually 10-12 years), it might be time to replace. Minor issues like blocked pumps, worn carbon brushes, or broken belts are almost always worth repairing. However, if the main control board dies on an old machine, or if the drum spider/bearings have failed (which requires a complete teardown), replacement is often the smarter financial choice.",
  },
];

export const findArticle = (slug?: string) => articles.find((article) => article.slug === slug);

export const findArticleByProblemSlug = (problemSlug?: string) =>
  articles.find((article) => article.relatedProblemSlug === problemSlug);
