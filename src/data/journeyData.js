import firstCard from "../assets/images/column-1.avif";
import secondCard from "../assets/images/column-2.avif";
import thirdCard from "../assets/images/column-3.avif";

export const journeyData = [
  {
    id: "card-1",
    step: "01",
    title: "Going Zero to One",
    description:
      "If you're navigating a new business unit, or a new venture entirely, or breaking into a new market.",
    image: firstCard,
    bgColor: "bg-[#b2b2b2]",
    textColor: "text-black",
  },
  {
    id: "card-2",
    step: "02",
    title: "Scaling from One to N",
    description:
      "If you've achieved Product/Service Market Fit, and are looking to scale your business to new heights.",
    image: secondCard,
    bgColor: "bg-[#ce2017]",
    textColor: "text-white",
  },
  {
    id: "card-3",
    step: "03",
    title: "Need Quick Solutions",
    description:
      "If you know exactly what you want and need a team that can step in and quickly help you with it.",
    image: thirdCard,
    bgColor: "bg-[#2f2f2f]",
    textColor: "text-white",
  },
];
