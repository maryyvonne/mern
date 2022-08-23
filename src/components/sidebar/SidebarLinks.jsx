import {
  RiBuilding2Fill,
  RiDashboardFill,
  RiContactsBookFill,
  RiCalendarTodoFill,
  RiTaskFill,
  RiTodoFill,
  RiMoneyDollarCircleFill,
  RiBrush2Fill,
  RiHammerFill,
} from "react-icons/ri";

export const sidebarLinks = [
  {
    title: "Projects",
    icon: <RiBuilding2Fill />,
    name: "projects",
    section: "",
    links: [
      {
        title: "Project Dashboard",
        icon: <RiDashboardFill />,
        name: "project-dashboard",
      },
    ],
  },
  {
    title: "Contacts",
    icon: <RiContactsBookFill />,
    name: "contacts",
    section: "",
  },
  {
    title: "Schedule",
    icon: <RiCalendarTodoFill />,
    name: "schedule",
    section: "",
  },

  {
    title: "Tasks",
    icon: <RiTaskFill />,
    name: "tasks",
    section: "",
    links: [
      {
        title: "Task List",
        icon: <RiTodoFill />,
        name: "taskList",
        section: "",
      },
    ],
  },

  {
    title: "Budgeting & Costs",
    icon: <RiMoneyDollarCircleFill />,
    name: "budgeting",
    section: "",
    links: [
      {
        title: "Estimates",
        icon: <RiHammerFill />,
        name: "estimates",
        section: "",
      },
      {
        title: "Bids",
        icon: <RiBrush2Fill />,
        name: "bidding",
        section: "",
      },
    ],
  },
];
