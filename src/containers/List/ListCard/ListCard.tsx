import React from 'react';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './ListCard.module.css';

interface ListCardProps {
  data: any;
  link: any;
}

export const ListCard = ({ data, link }: ListCardProps) => {
  const { t } = useTranslation();

  const linkPath = (id: any) => `/${link.start}/${id}/${link.end}`;

  const viewDetails = (id: any) => (
    <Link to={linkPath(id)} className={styles.Link}>
      <p>{t('View Details')}</p>
    </Link>
  );
  return (
    <div className={styles.CardContainer}>
      {data.map((dataInfo: any) => (
        <Card variant="outlined" className={styles.Card} key={dataInfo.id}>
          <CardContent className={styles.CardContent}>
            <div data-testid="label">{dataInfo.label}</div>

            <Typography variant="body2" component="div" data-testid="description">
              {dataInfo.description}
            </Typography>
          </CardContent>
          <CardActions className={styles.CardActions}>
            {viewDetails(dataInfo.id)}
            {dataInfo.operations}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ListCard;
