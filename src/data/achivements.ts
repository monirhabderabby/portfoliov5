import cf from "../../public/certificates/cf.webp";
import el from "../../public/certificates/el.webp";
import hackerRank from "../../public/certificates/hackerRank.webp";
import lws from "../../public/certificates/lws.webp";
import ostad from "../../public/certificates/ostad.webp";
import ph from "../../public/certificates/ph.webp";
import ra from "../../public/certificates/ra.webp";

const certificateData = [
  {
    id: Math.floor(Math.random() * 100000),
    school: "Learn With Sumit",
    certificate: ra,
    name: "Reactive Accelerator",
  },
  {
    id: Math.floor(Math.random() * 100000),
    school: "Ostad",
    certificate: ostad,
    name: "Mastering on Next JS & Prisma",
  },
  {
    id: Math.floor(Math.random() * 100000),
    school: "Learn With Sumit",
    certificate: lws,
    name: "Think In a Redux Way",
  },
  {
    id: Math.floor(Math.random() * 100000),
    school: "Programming-Hero",
    certificate: ph,
    name: "Complete Web Development",
  },
  {
    id: Math.floor(Math.random() * 100000),
    school: "LinkedIn",
    certificate: el,
    name: "Effective Listening",
  },

  {
    id: Math.floor(Math.random() * 100000),
    school: "LinkedIn",
    certificate: cf,
    name: "Communication Foundations",
  },
  {
    id: Math.floor(Math.random() * 100000),
    school: "Hacker Rank",
    certificate: hackerRank,
    name: "CSS(BASIC)",
  },
];

export default certificateData;
