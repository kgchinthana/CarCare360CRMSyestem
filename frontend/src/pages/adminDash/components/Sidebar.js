import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../../appStore';

import DashboardIcon from '@material-ui/icons/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import RecommendIcon from '@mui/icons-material/Recommend';
import MessageIcon from '@mui/icons-material/Message';
import ForumIcon from '@mui/icons-material/Forum';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={50} />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary='Dashboard'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard/booking');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PendingActionsIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary='Book a service'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard/register-vehicle');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CarRentalIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary='Vehicle Registration'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard/manufacturer-recommendation');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <RecommendIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary='Manufacture Recommendation'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard/message-system');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <MessageIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary='Message System'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate('/Admindashboard/forum');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <ForumIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText primary='Forum' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              // Navigate to the Send Email page
              navigate("/Admindashboard/sendEmail");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SendIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary="Send Email"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              // Navigate to the Create User Groups page
              navigate("/Admindashboard/createMailGroups");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GroupIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText
                primary="Manage Groups"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <ExitToAppIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
              <ListItemText primary='Log out' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}