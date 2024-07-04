import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import game from "../assets/game.png";
import data from "../assets/data.png";
import gis from "../assets/gis.png";
import cyber from "../assets/cyber.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import prj1 from "../assets/prj1.png";
import prj2 from "../assets/prj2.png";
import prj3 from "../assets/prj3.png";



export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "fields",
    title: "Fields",
  },
  {
    id: "contacts",
    title: "Contact",
  },
  {
    id: "profile",
    title: "Profile",
  },
];


export const fields = [
  {
    id: "field-1",
    description:
      "Unlock the potential of your data with our Big Data consulting services. We help you gather, analyze, and leverage vast amounts of information to make informed decisions, improve operations, and drive innovation.",
    name: "Big Data",
    image: data,
  },
  {
    id: "field-2",
    description: "Ensure the safety of your digital assets with our comprehensive cybersecurity services. We provide robust solutions to protect your systems, data, and networks from cyber threats, ensuring your business operates securely and efficiently.",
    name: "Cyber Security",
    image: cyber,
  },
  {
    id: "field-3",
    description:
      "Transform your game ideas into reality with our expertise in game technology. From development to deployment, we provide end-to-end solutions to create engaging and immersive gaming experiences",
    name: "Game Tech",
    image: game,
  },
   {
    id: "field-4",
    description:
      "Harness the power of location-based data with our GIS services. We offer advanced mapping and spatial analysis solutions to help you visualize and understand geographic patterns, making your business more strategic and data-driven.",
    name: "GIS (Geographic Information Systems)",
    image: gis,
  },
];


export const project = [
  {
    id: "project-1",
    description:"An assessment project held specifically for vocational school students to measure student competency in their major. This Website is using PHP and CI4 framework. ",
    name: "Laporin",
    image: prj1,
  },
  {
    id: "project-2",
    description:"An intership project at PT. FAHOVE (GOSMSGATEAWAY). The online shop is web base application using PHP and laravel 9 framework. ",
    name: "Online Shop",
    image: prj2,
  },
  {
    id: "project-3",
    description:"An annual project of the WebDev division in Dasar Komputer Laboratory. The website is using laravel 9 framework and tailwind for the frontend.",
    name: "Web DLOR 2024",
    image: prj3,
  },
];

export const contact = [
  {
    id: "contact-1",
    name: "Alice",
    email: "alice@bigdata.com",
    phone: "+1 234 567 8902",
    title: "Big Data Analyst",
    img: person1, // Ensure person1 is a valid image path or import
  },
  {
    id: "contact-2",
    name: "Bob",
    email: "bob@cybersecurity.com",
    phone: "+1 234 567 8903",
    title: "Cybersecurity Engineer",
    img: person2, // Ensure person2 is a valid image path or import
  },
  {
    id: "contact-3",
    name: "Charlie",
    email: "charlie@gametech.com",
    phone: "+1 234 567 8904",
    title: "Game Developer",
    img: person3, // Ensure person3 is a valid image path or import
  },
  {
    id: "contact-4",
    name: "Diana",
    email: "diana@gis.com",
    phone: "+1 234 567 8905",
    title: "GIS Specialist",
    img: person4, // Ensure person4 is a valid image path or import
  },
  {
    id: "contact-3",
    name: "Charlie",
    email: "charlie@gametech.com",
    phone: "+1 234 567 8904",
    title: "Game Developer",
    img: person3, // Ensure person3 is a valid image path or import
  },
  {
    id: "contact-4",
    name: "Diana",
    email: "diana@gis.com",
    phone: "+1 234 567 8905",
    title: "GIS Specialist",
    img: person4, // Ensure person4 is a valid image path or import
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

