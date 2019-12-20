import React from 'react';
import List from './List/List';
import ListCard from './ListCard/ListCard';


export default {
  title: 'Components|List',
}

export const All = () => {
  return <List/>
}

export const Card = () => {
  return <ListCard/>
}