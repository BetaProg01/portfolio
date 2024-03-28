import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
  FaAngular,
  FaPhp,
  FaGitlab,
} from "react-icons/fa";

import { 
  GiMaterialsScience,
  GiGreekTemple,
} from "react-icons/gi";

import { LuBrainCircuit, 
} from "react-icons/lu";

import { 
  IoLogoGameControllerB, 
} from "react-icons/io";

import {
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandCSharp,
  TbZoomMoney,
} from "react-icons/tb";
import { 
  BiLogoPostgresql, 
  BiLogoSpringBoot, 
} from "react-icons/bi";
import {
  SiPostman,
  SiGnubash,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiApachekafka,
  SiNeo4J,
  SiOcaml,
  SiFastapi,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsGit,
} from "react-icons/bs";

export const links = [
  { text: "Accueil", path: "/" },
  { text: "À propos", path: "/about" },
  { text: "Compétences", path: "/skills" },
  { text: "Expérience", path: "/experience" },
  { text: "Education", path: "/education" },
  { text: "Projets", path: "/projects" },
  { text: "Contact", path: "/contact" },
  { text: "CV", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Ingénierie Logicielle",
    icon: BsCodeSlash,
  },
  {
    interest: "Sciences Fondamentales",
    icon: GiMaterialsScience,
  },
  {
    interest: "Intelligence Artificielle",
    icon: LuBrainCircuit,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
  {
    interest: "Enconomie et Finance",
    icon: TbZoomMoney,
  },
  {
    interest: "Développement Logiciel",
    icon: AiFillCode,
  },
  {
    interest: "Développement de Jeux",
    icon: IoLogoGameControllerB,
  },
  {
    interest: "Histoire",
    icon: GiGreekTemple,
  }   

];

export const skillsData = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    icon: BiLogoSpringBoot,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Terrafom",
    icon: SiTerraform,
  },
  {
    name: "Ansible",
    icon: SiAnsible,
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
  },
  {
    name: "Kafka",
    icon: SiApachekafka,
  },
  {
    name: "IA",
    icon: LuBrainCircuit,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "PHP",
    icon: FaPhp,
  },
  {
    name: "Angular",
    icon: FaAngular,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "NoSQL",
    icon: SiNeo4J,
  },
  {
    name: "Prog. Fonction-nelle",
    icon: SiOcaml,
  },
  {
    name: "Git",
    icon: BsGit,
  },
];

export const workData = [
  {
    company: "Equasens",
    designation: "Stagiaire Analyste Data",
    duration: "Mai 2023 - Août 2023",
    companyImg: "equasens.jpeg",
    description: (
      <>
        <ul>
          <li>
            Réalisation d’une étude de besoins DATA sur 10 applications développées par Equasens afin de déterminer les données et les outils à fort potentiel dans le pôle R&D.
          </li>
          <li>
            Compétences développées : analyse fonctionnelle et technique, autonomie, rédaction de rapports, apprentissage rapide de technologies, présentation de son travail, documentation.
          </li>
          <li>
            Technologies rencontrées : Java/Spring, SQL, JavaScript, Cloud, environnement micro-services, JIRA, Confluence, concentrateurs de données (Snowflake, Elastic, ...), data pipelines.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Med&Nov",
    designation: "Stagiaire Développeur en WinDev",
    duration: "Mai 2022 - Août 2022",
    companyImg: "med&nov.png",
    description: (
      <>
        <ul>
          <li>
            Développement et personnalisation d’une application interne d’annuaire clients, puis développement d’une application à destination de clients d’une pharmacie.
          </li>
          <li>
            Compétences développées : apprentissage en autonomie, développement objet, analyse des besoins, ergonomie des interfaces, travail à distance.
            Technologies rencontrées : WinDev, base de données HFSQL, Java, JDBC.
          </li>
        </ul>
      </>
    ),
  },
];

export const educationData = [
  {
    company: "CY Tech Pau",
    designation: "Diplôme d&apos Ingénieur en Cloud Computing",
    duration: "Septembre 2021 - Septembre 2024",
    companyImg: "logoCY.png",
    description: (
      <>
        <ul>
          <li>
            J&aposairejoint CY Tech à la suite de ma prépa Physique-Chimie afin de me spécialiser en informatique après 2 ans de cours de Python.
            J&aposy ai découvert de nombreux langages et outils, ainsi que des concepts importants dans mes projets aujourdhui.
            Avec des cours de Java, C/C++, Python, IA, Réseau, Cyber, Cloud, etc. Appliqués dans des projets de groupe et des stages.
          </li>
          <li>
            Je me suis ensuite spécialisé en Cloud Computing pendant ma dernière année afin de découvrir l&aposinfrastructure et les outils qui permettent de développer des applications et services modernes.
            J&aposeffectue actuellement mon dernier stage jusqu&aposen Septembre 2024.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Lycée Victor Hugo",
    designation: "Prépa Physique-Chimie-Sciences de l&aposIngénieur (PCSI) puis Physique-Chimie (PC)",
    duration: "Septembre 2019 - Juin 2021",
    companyImg: "logoLVH.png",
    description: (
      <>
        <ul>
          <li>
            Après mon lycée, j&aposai intégré une prépa généraliste pour approfondir les matières scientifiques telles que les Mathématiques et la Physique.
            Ce cursus comprennait également des cours de Chimie, Sciences de l&aposIngénieur, Informatique, Philosophie et Anglais.
          </li>
          <li>
            Ainsi, tout en me préparant aux concours des écoles d&aposingénieurs, j&aposai pu apprendre une nouvelle méthode de travail, renforcer mes compétences en mathématiques et en physique, et découvrir de nouvelles matières comme l&aposinformatique.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Portfolio",
    image: null,
    link: "https://benoit-verdot-portfolio.netlify.app",
    source: "https://github.com/BetaProg01/portfolio",
  },
  {
    type: "PROJECT",
    title: "Reproduction du Reddit rPlace",
    image: null,
    link: "",
    source: "https://github.com/NathanLenas/place_pfe",
  },
  {
    type: "PROJECT",
    title: "Adaptation du jeu Catan",
    image: null,
    link: "",
    source: "https://github.com/Julie-Galopeau/catan-wish/",
  },
  {
    type: "PROJECT",
    title: "CartonTracking : faux suivi GPS",
    image: null,
    link: "",
    source: "https://github.com/BetaProg01/CartonTracking",
  },
  {
    type: "PROJECT",
    title: "Quiz Paulitique",
    image: "paulitique",
    link: "",
    source: "https://github.com/Paulitique/quiz",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/BetaProg01",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/benoit-verdot/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
