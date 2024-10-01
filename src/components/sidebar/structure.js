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
    id: "empresa",
    title: "Empresa",
    name: "empresa",
    parent: true,
    icon: <FaRegBuilding size={20} />,
    link: "empresa"
  },
  {
    id: "pessoa",
    title: "Pessoa",
    name: "pessoa",
    parent: true,
    icon: <BsFillPeopleFill size={20} />,
    link: "pessoa"
  },
];

export { sidebarStructure };
