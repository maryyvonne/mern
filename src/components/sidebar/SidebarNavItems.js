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
  RiDashboard2Fill,
  RiLayoutMasonryFill,
  RiCalendar2Fill,
} from "react-icons/ri";

export const SidebarNavItems = [
  {
    title: "Project Management",
    links: [
      {
        name: "projects",
        icon: <RiDashboard2Fill />,
        display: "Projects",
      },
      {
        name: "tasks",
        icon: <RiTaskFill />,
        display: "Tasks",
      },
    ],
  },
  {
    title: "Schedule Management",
    links: [
      {
        name: "schedule",
        icon: <RiCalendarTodoFill />,
        display: "schedule",
      },
      {
        name: "calendar",
        icon: <RiCalendar2Fill />,
        display: "Calendar",
      },
    ],
  },
  {
    title: "Contact Management",
    links: [
      {
        name: "contacts",
        icon: <RiContactsBookFill />,
        display: "Contacts",
      },
    ],
  },
  {
    title: "Budgeting & Costs",
    links: [
      {
        name: "expenditures",
        icon: <RiMoneyDollarCircleFill />,
        display: "Expenditures",
      },
      {
        name: "bids",
        icon: <RiHammerFill />,
        display: "Bids",
      },
    ],
  },
];