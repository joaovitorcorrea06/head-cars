import { FaHome, FaCar, FaRegBuilding } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const sidebarStructure = [
  {
    id: "dashboard",
    title: "Dashboard",
    name: "dashboard",
    parent: true,
    icon: <FaHome size={20} />,
    link: "/dashboard"
  },
  {
    id: "vaiculos",
    title: "Veículos",
    name: "vaiculos",
    parent: true,
    icon: <FaCar size={20} />,
    link: "admin/veiculos"
  },
  {
    id: "empresas",
    title: "Empresas",
    name: "empresas",
    parent: true,
    icon: <FaRegBuilding size={20} />,
    link: "admin/empresas"
  },
  {
    id: "pessoas",
    title: "Pessoas",
    name: "pessoas",
    parent: true,
    icon: <BsFillPeopleFill size={20} />,
    link: "admin/pessoas"
  },
];

export { sidebarStructure };
