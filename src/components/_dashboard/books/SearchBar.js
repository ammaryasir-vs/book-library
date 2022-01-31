import { Icon } from '@iconify/react';

import searchFill from '@iconify/icons-eva/search-fill';
// material
import { styled, alpha } from '@mui/material/styles';
import { Box, Input, Button, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
// components

// ----------------------------------------------------------------------

const SearchbarStyle = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`
}));

// ----------------------------------------------------------------------

export default function Searchbar({ handleSubmitSearch }) {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    handleSubmitSearch(value);
  }, [debouncedValue]);

  return (
    <SearchbarStyle>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search…"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        startAdornment={
          <InputAdornment position="start">
            <Box
              component={Icon}
              icon={searchFill}
              sx={{ color: 'text.disabled', width: 20, height: 20 }}
            />
          </InputAdornment>
        }
        sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
      />
      <Button
        variant="contained"
        onClick={() => {
          handleSubmitSearch(value);
        }}
      >
        Search
      </Button>
    </SearchbarStyle>
  );
}
