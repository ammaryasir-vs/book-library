import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  borderRadius: '25px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};

const BookImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '25px'
});

export default function BookDetail({ isVisible, toggleVissible, data }) {
  const { name, author, genre, imageUrl, priceSale = 99, price = 100 } = data;
  return (
    <div>
      <Modal
        sx={{ border: 0, borderRadius: 40 }}
        open={isVisible}
        onClose={toggleVissible}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} justify-content="center" alignItems="center">
          <BookImgStyle src={imageUrl} alt="img" />
          <Typography id="modal-modal-description" variant="h3">
            {name}
          </Typography>
          <Typography id="modal-modal-description" variant="subtitle1">
            {author}
          </Typography>
        </Stack>
      </Modal>
    </div>
  );
}
