import { useQuery } from 'react-query';
import { useState } from 'react';
// material
import { Container, IconButton, Stack, Typography } from '@mui/material';
// components
import { Icon } from '@iconify/react';
import gridIcon from '@iconify/icons-eva/grid-fill';
import listIcon from '@iconify/icons-eva/list-fill';

import Page from '../components/Page';
import { BookSort, BookList, Searchbar } from '../components/_dashboard/books';
//
import BookService from '../services/BookService';

// ----------------------------------------------------------------------

export default function Books() {
  const [searchVal, setSearchVal] = useState('');
  const [sortValue, setSortValue] = useState({ price: 'asc' });

  const {
    isLoading,
    data: BooksData = [],
    refetch
  } = useQuery(['get-books', searchVal, sortValue], () =>
    BookService.getBooks(searchVal, sortValue)
  );
  const [grid, setGrid] = useState(false);
  const handleChangeLayout = () => {
    setGrid(!grid);
  };
  const handleSortChange = (val) => {
    setSortValue(val);
  };

  return (
    <Page title="Books 📖 ">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Books
        </Typography>

        <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ my: 1 }}>
          <Searchbar
            handleSubmitSearch={(val) => {
              setSearchVal(val);
              refetch();
            }}
          />
          <BookSort handleSortChange={handleSortChange} />
          <IconButton
            onClick={handleChangeLayout}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Icon icon={!grid ? gridIcon : listIcon} width={22} height={22} />
          </IconButton>
        </Stack>

        {isLoading ? 'Loading...' : <BookList books={BooksData} grid={grid} />}
      </Container>
    </Page>
  );
}
