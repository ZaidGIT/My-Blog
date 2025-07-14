// src/components/Breadcrumb.jsx
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import '../assets/common styles/blogs.css';

const Breadcrumb = ({ current }) => {
  return (
    <div className="breadcrumbs">
      <Breadcrumbs separator=">" className="blog-breadcrumbs" aria-label="breadcrumb">
        <Link
          underline="none"
          href="/"
          color='var(--color-breadcrumbs)'
        >
          Home
        </Link>
        <Typography className="breadcrumb-current">{current}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
