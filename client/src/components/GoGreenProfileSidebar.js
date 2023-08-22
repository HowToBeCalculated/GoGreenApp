import {
  Box,
  IconButton,
  Typography,
  createTheme,
  useTheme,
  Avatar,
  ListItemButton,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import userprofile from "../pages/user.png";
import { Link, NavLink } from "react-router-dom";

const data = [
  { icon: <PersonOutlineRoundedIcon />, label: "Profile" },
  { icon: <MailOutlineRoundedIcon />, label: "Notifications" },
  { icon: <HistoryRoundedIcon />, label: "ActivityLog" },
  { icon: <SettingsRoundedIcon />, label: "Settings" },
];

const array = ["Profile", "Notifications", "ActivityLog", "Settings"];
const GoGreenProfileSidebar = () => {
  const [value, setValue] = useState();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        marginLeft: "50px",
        marginRight: "20px",
        marginTop: "40px",
        paddingBottom: "40px",
        width: "100%",
        textDecoration: "none",

      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" marginTop="40px">
        <Box
          width="100px"
          height="100px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
            marginTop: '30px'
          }}
        >
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={userprofile}
            style={{ cursor: "pointer", borderRadius: "50%"}}
          />
        </Box>
      </Box>

      <Box textAlign="center">
        <Typography
          variant="h6"
          color="secondary"
          fontWeight="bold"
          sx={{ m: "20px 0 0 0" }}
        >
          Dante Lucca
        </Typography>
      </Box>

      <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />

      {data.map((item) => (
        <NavLink
          key={item.label}
          to={`/${item.label}`}
          activeClassName="Mui-selected"
          style={{ textDecoration: 'none' }}
          
          sx={{
            py: 0,
            minHeight: 50,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#202020", 
            fontWeight: "bold", 
            "&:hover": {
              color: "grey", 
              textDecoration: "none",
            },
            "&.Mui-selected": {
              fontWeight: "bold", 
              textDecoration: "none", 
              
            },
          }}
        >
          <ListItemButton
            sx={{
              color: "#202020",
              marginLeft: "20px",
              padding: "10px",
            
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                marginLeft: "10px",
                padding: "0px",
                
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 14,
                margin: "0px",
                padding: "0px",
                color: "inherit",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            />
          </ListItemButton>
        </NavLink>
      ))}
    </Box>
  );
};

export default GoGreenProfileSidebar;

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   //const theme = useTheme();
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: "#000000",
//         listStyleType: "none",
//         margin: 0,
//         padding: 0,
//         display: "flex",
//         alignItems: "center",
//       }} //color of the text
//       onClick={() => setSelected(title)}
//     >
//       <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         {icon}
//         <Typography sx={{ fontSize: '15px' }}>{title}</Typography>
//       </span>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const GoGreenProfileSidebar = () => {
//   //const theme = useTheme();
//   const [selected, setSelected] = useState("GoGreenProfileSidebar");
//   return (
//     <ProSidebar >
//       <Box
//         sx={{
//           //   "& .pro-sidebar": {
//           //     backgroundColor: "#FF0000 !important",
//           //   },
//           //   "& .pro-inner-list": {
//           //     backgroundColor: "#FF0000 !important",
//           //   },
//           //   "& .pro-icon-wrapper": {
//           //     backgroundColor: "transparent !important",
//           //   },
//           "& .pro-inner-item": {
//             padding: "30px 10px 5px 20px !important",
//           },
//           "& .pro-inner-item:hover": {
//             color: "#868dfb !important",
//           },
//           "& .pro-menu-item.active": {
//             color: "#6870fa !important",
//           },
//           //   "& .pro-menu-item:last-child": {
//           //     marginBottom: "200px",
//           //   },
//           backgroundColor: "white",
//           borderRadius: "10px",
//           padding: "20px",
//           boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
//           marginTop: "20px",
//           marginLeft: "30px",

//         }}
//       >

//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             gap="20px"
//           >

//             <Box
//             width="100px"
//             height="100px"
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               borderRadius: '50%',
//               backgroundColor: 'white',
//               boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
//             }}
//           >
//             <img
//               alt="profile-user"
//               width="100px"
//               height="100px"
//               src={userprofile}
//               style={{ cursor: 'pointer', borderRadius: '50%' }}
//             />
//           </Box>

//         </Box>

//           <Box textAlign="center" >
//             <Typography
//               variant="h6"
//               color="secondary"
//               fontWeight="bold"
//               sx={{ m: "20px 0 0 0" }}
//             >
//               Dante Lucca
//             </Typography>
//           </Box>

//         <Box paddingLeft="15%" >
//           <Item
//             title="Profile"
//             to="/"
//             icon={<PersonOutlineRoundedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Notifications"
//             to="/notification"
//             icon={<MailOutlineRoundedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Activity Log"
//             to="/activity"
//             icon={<HistoryRoundedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Settings"
//             to="/settings"
//             icon={<SettingsRoundedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//         </Box>
//       </Box>
//     </ProSidebar>
//   );
// };

// export default GoGreenProfileSidebar;
