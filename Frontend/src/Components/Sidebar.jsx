import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";

import {FaHome,FaBars, FaPowerOff} from "react-icons/fa";
import { HiOutlineX ,HiOutlineUser } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";


export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="sm" onClick={openDrawer}>
        {isDrawerOpen ? (
          <HiOutlineX className="w-4 stroke-2" />
        ) : (
          <FaBars className=" w-4 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-10/12 p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
         
          <List>
            <hr className="my-2 border-blue-gray-50 " />
            <Link to="/Home">
            <ListItem>
              <ListItemPrefix>
                <FaHome className="w-4" />
              </ListItemPrefix>
              Home
            </ListItem>
            </Link>
            <Link to="/Dashboard">
            <ListItem>
              <ListItemPrefix>
                <HiOutlineUser  className="w-4" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            </Link>
            <Link to="Integrations">
            <ListItem>
              <ListItemPrefix>
                <MdDashboardCustomize  className="w-4" />
              </ListItemPrefix>
              Integrations
            </ListItem>
            </Link>
            <ListItem>
              <ListItemPrefix>
                <FaPowerOff className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}