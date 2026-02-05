import founderFirst from "../assets/images/founder-1.avif";
import founderSecond from "../assets/images/founder-2.avif";

import { Instagram } from "../assets/icons/Instagram";
import { LinkedIn } from "../assets/icons/LinkedIn";
import { Twitter } from "../assets/icons/Twitter";

export const founders = [
  {
    name: "Lori Harvey",
    role: "Co-Founder, Head of Marketing",
    image: founderFirst,
    rotation: -6,
    hoverRotate: -4,
    socials: [
      { Icon: LinkedIn, href: "#", label: "LinkedIn" },
      { Icon: Instagram, href: "#", label: "Instagram" },
      { Icon: Twitter, href: "#", label: "Twitter" },
    ],
    imageScale: 1.4,
    top: "18%",
    left: "-7%",
  },
  {
    name: "Damson Idris",
    role: "Co-Founder, Head of Design",
    image: founderSecond,
    rotation: 4,
    hoverRotate: 5,
    socials: [
      { Icon: LinkedIn, href: "#", label: "LinkedIn" },
      { Icon: Instagram, href: "#", label: "Instagram" },
      { Icon: Twitter, href: "#", label: "Twitter" },
    ],
    top: "5%",
    left: "-1%",
  },
];
