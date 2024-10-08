import React from 'react';
import { Box } from '@mui/material';

interface IImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image: React.FC<IImageProps> = ({ src, style }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{ width: '100%', height: '190px', objectFit: 'cover', ...style }}
    />
  );
};
