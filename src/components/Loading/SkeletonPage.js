import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';

const SkeletonPage = () => {
  return (
    <Card>
      <CardHeader
        title={
            <Skeleton
              animation="wave"
              height={10}
              width="100%"
              style={{ marginBottom: 6 }}
            />
        }
        subheader={
            <Skeleton animation="wave" height={10} width="40%" />
        }
      />
      <Skeleton sx={{ height: 1240 }} animation="wave" variant="rectangular" />
    </Card>
  );
}

export default SkeletonPage; 