import Dashboard from "views/Dashboard/Dashboard";
import Notifications from "views/Notifications/Notifications";
import Icons from "views/Icons/Icons";
import Typography from "views/Typography/Typography";
import TableList from "views/TableList/TableList";
import Maps from "views/Maps/Maps";
import UserPage from "views/UserPage/UserPage";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
