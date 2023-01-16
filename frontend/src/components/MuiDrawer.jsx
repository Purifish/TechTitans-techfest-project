import React, { useState } from 'react'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const linksArr = ["home", "explore", 'skill', 'training', 'interview', 'matchmaker']

  return (
    <>
        <IconButton sx={{marginLeft: 'auto'}} size='large' color='primary' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <Menu />
        </IconButton>
        <Drawer 
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant='h6' component="div">
                    TechTitans Navigation
                </Typography>
            </Box>
            <Divider />
            <List>
                {linksArr.map((link, index) => (
                <ListItem component={Link}
                to={`${link === "home" ? "/" : link}`}
                key={link} label={link} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={link.toUpperCase()} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Drawer>
    </>
  )
}

export default MuiDrawer