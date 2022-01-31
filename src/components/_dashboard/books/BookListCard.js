import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import BookDetail from './BookDetail';
// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%'
});

// ----------------------------------------------------------------------

BookListCard.propTypes = {
  product: PropTypes.object
};

export default function BookListCard({ product }) {
  const { name, author, genre, imageUrl, priceSale = 99, price = 100 } = product;
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Card onClick={toggleVisible}>
      <BookDetail isVisible={visible} toggleVisible={toggleVisible} data={product} />
      <Grid container>
        <Grid
          xs={12}
          sm={2}
          md={2}
          lg={2}
          item
          sx={{
            maxHeight: 300
          }}
        >
          <ProductImgStyle alt={name} src={imageUrl} />
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Stack spacing={2} sx={{ p: 3 }}>
            <Link to="#" color="inherit" underline="hover" component={RouterLink}>
              <Typography variant="subtitle2" noWrap>
                {name}
              </Typography>
            </Link>
            <Typography>{author}</Typography>
            <div>
              <Label variant="outlined" color="primary">
                {genre}
              </Label>
            </div>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1">
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    color: 'text.disabled',
                    textDecoration: 'line-through'
                  }}
                >
                  {priceSale && fCurrency(priceSale)}
                </Typography>
                &nbsp;
                {fCurrency(price)}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
