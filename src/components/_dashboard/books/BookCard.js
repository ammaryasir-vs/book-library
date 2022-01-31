import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
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
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

BookCard.propTypes = {
  product: PropTypes.object
};

export default function BookCard({ product }) {
  const { name, author, genre, imageUrl, priceSale = 99, price = 100 } = product;
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Card onClick={toggleVisible}>
      <BookDetail isVisible={visible} toggleVisible={toggleVisible} data={product} />
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {genre && (
          <Label
            variant="filled"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {genre}
          </Label>
        )}
        <ProductImgStyle alt={name} src={imageUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            {name}
          </Typography>
        </Link>
        <Typography variant="subtitle4">{author}</Typography>

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
    </Card>
  );
}
