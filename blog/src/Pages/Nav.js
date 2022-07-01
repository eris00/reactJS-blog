import React from 'react'
import './styles/main.css';
import { AppBar, Toolbar } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Nav({ search, setSearch }) {
  return (
    <AppBar className='appBar' position='sticky'>
      <Toolbar>

        <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                type='text'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
        </Search>

        <List sx={{ display:'flex' }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:"secondary.main" }}>
              <Link to='/'><ListItemText primary='Home' /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:"secondary.main" }}>
            <Link to='/post'><ListItemText primary='Post' /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:"secondary.main" }}>
            <Link to='/about'><ListItemText primary='About' /></Link>
            </ListItemButton>
          </ListItem>
      </List>

      </Toolbar>
    </AppBar>
  )
}

export default Nav