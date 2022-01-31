import React, { useState } from 'react';

import { Icon } from '@iconify/react';
import chevronUpFill from '@iconify/icons-eva/chevron-up-fill';
import chevronDownFill from '@iconify/icons-eva/chevron-down-fill';
// material
import { Menu, Button, MenuItem, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'asc', label: 'Name: A - Z' },
  { value: 'desc', label: 'Name: Z - A' }
];

export default function BookSort({ handleSortChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    handleSortChange({ price: SORT_BY_OPTIONS[index].value });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleClickListItem}
        endIcon={<Icon icon={open ? chevronUpFill : chevronDownFill} />}
      >
        <span>Sort By:&nbsp;</span>
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {SORT_BY_OPTIONS[selectedIndex].label}
        </Typography>
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox'
        }}
      >
        {SORT_BY_OPTIONS.map((option, index) => (
          <MenuItem
            key={option.value}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
