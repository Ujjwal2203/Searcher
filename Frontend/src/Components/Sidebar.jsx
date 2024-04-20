import React, { useState, useEffect } from "react";
import { IconButton, List, ListItem, ListItemPrefix, Drawer, Card } from "@material-tailwind/react";
import { FaHome, FaBars, FaPowerOff } from "react-icons/fa";
import { HiOutlineX} from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export function SidebarWithBurgerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Close drawer when route changes
  useEffect(() => {
    closeDrawer();
  }, [location.pathname]);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <HiOutlineX className="stroke-2 text-gray-5" />
        ) : (
          <FaBars className=" stroke-2 text-gray-5" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} size={250} onClose={closeDrawer} transition={{type: "tween", duration: 0.2 }}>
        <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] px-2 py-4">
          <List className="">
            <hr className="my-2 w-full border-blue-gray-50 " />
            <Link to="/Home">
              <ListItem>
                <ListItemPrefix>
                  <FaHome className="w-4" />
                </ListItemPrefix>
                Home
              </ListItem>
            </Link>
            <Link to="Integrations">
              <ListItem>
                <ListItemPrefix>
                  <MdDashboardCustomize className="w-4" />
                </ListItemPrefix>
                Integrations
              </ListItem>
            </Link>
            <ListItem className="hover:bg-red-400 hover:text-gray-5">
              <ListItemPrefix>
                <FaPowerOff className="w-4" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}
