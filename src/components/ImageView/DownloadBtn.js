import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export const DownloadBtn = ({ image }) => (
  <a
    className="download-link"
    href={image.largeImageURL}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="contained"
      color="default"
      size="large"
      style={{ textTransform: 'none', fontWeight: 'bold' }}
      startIcon={<SaveIcon />}
    >
      Download
    </Button>
  </a>
);
