import { RiGroupLine, RiToolsLine } from "react-icons/ri"; // Remix Icons
import { MdGroups, MdBusinessCenter, MdHealthAndSafety, MdComputer } from "react-icons/md"; // Material Design Icons
import { FiHeart } from "react-icons/fi"; // Feather Icons
import { BsShieldCheck, BsGraphUp, BsPuzzle } from "react-icons/bs"; // Bootstrap Icons
import { FaHandsHelping, FaBriefcase, FaHeartbeat, FaShieldAlt, FaSeedling, FaMicrochip, FaChalkboardTeacher } from "react-icons/fa"; // Font Awesome Icons
import { AiOutlineTeam, AiOutlineCluster, AiOutlineLineChart, AiOutlineBulb } from "react-icons/ai"; // Ant Design Icons
import { GiGearHammer, GiSpaceship, GiFactory } from "react-icons/gi"; // Game Icons
import { HiOutlineChartBar } from "react-icons/hi"; // Hero Icons

  export const categories = [
    { title: "Collaboration", icons: [<RiGroupLine />, ] },
    { title: "Commitment", icons: [<FiHeart />] },
    { title: "Cooperation", icons: [<FaHandsHelping />, ] },
    { title: "Manufacturing", icons: [<GiGearHammer />] },
    { title: "Business Services", icons: [<MdBusinessCenter />,] },
    { title: "Health Care", icons: [<FaHeartbeat />, ] },
    { title: "Aerospace and Defense", icons: [<GiSpaceship />, ] },
    { title: "Industrial Services", icons: [<GiFactory />, ] },
    { title: "Growth", icons: [<BsGraphUp />, <FaSeedling />] },
    { title: "Technologies", icons: [<MdComputer />, ] },
    { title: "Integration", icons: [<AiOutlineCluster />, ] },
    { title: "Graph", icons: [<HiOutlineChartBar />, ] },
    { title: "Methodologies", icons: [<FaChalkboardTeacher />, ] },
  ];
