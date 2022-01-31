import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import { BookListCard, BookCard } from '.';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  books: PropTypes.array.isRequired,
  grid: PropTypes.bool.isRequired
};

export default function ProductList({ books, grid, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {books.map((product) =>
        grid ? (
          <Grid key={product.name} item xs={12} sm={6} md={3}>
            <BookCard product={product} />
          </Grid>
        ) : (
          <Grid key={product.name} item xs={12}>
            <BookListCard product={product} />
          </Grid>
        )
      )}
    </Grid>
  );
}
