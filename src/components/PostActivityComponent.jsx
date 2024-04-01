import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { useState } from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import postActivity from "../assets/postActivity.svg";
import eye from "../assets/eye.svg";

export default function PostActivityComponent({ text, date, rate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem sx={{ margin: "0px 0px ", padding: "9px 20px 9px 20px" }} alignItems="flex-start">
        <ListItemAvatar sx={{ margin: "0px 0px " }}>
          <Avatar className="Post-activity-image" alt="Remy Sharp" src={postActivity} sx={{ borderRadius: '4px' }} />
        </ListItemAvatar>
        <ListItemText className="list-text-post-box" sx={{ flex: "3", margin: "0px 0px ", alignSelf: "baseline" }}

          secondary={
            <>
              {/* <Typography className="list-text-post"
                sx={{ display: 'inline' }}
                component="span"

                color="text.primary"
              >

              </Typography> */}
              {text}
            </>
          }
        />
        <Box sx={{ flex: "1", alignSelf: "center" ,marginLeft:"20px" }}>
          <Typography className="date-text"sx={{ textAlign: "center" }}>{date}</Typography>
        </Box>
        <Box sx={{ flex: "1", alignSelf: "center", display: "flex", justifyContent: "center" }}>
          <IconButton sx={{ background: "#0FA44A", alignSelf: "center", textAlign: "center",width:"23px",height:"23px" }}>
            <img src={eye} className='post-visbale-img' sx={{ textAlign: "center" }} />
          </IconButton>
          <span  className="rate-text"sx={{ textAlign: "center", alignSelf: "center" }}>{rate}</span>
        </Box>

        <Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <IconButton>
            <MoreHorizIcon aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} />
          </IconButton>

          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
            <MenuItem onClick={handleClose}>View Details</MenuItem>
          </Menu>
        </Box>
      </ListItem>
      <Divider component="li" sx={{marginBottom:"20px"}} />

    </>
  );
}