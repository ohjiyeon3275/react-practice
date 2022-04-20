import React, { useState } from 'react';
import { useQuery } from 'react-query';

//components
import { Drawer } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { AddShoppingCart, DataObjectOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

//styles (styled component)
import { Wrapper } from './App.styles';

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

// https://fakestoreapi.com/
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json()
  // the reason why i put `await` twice : json

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  );

  console.log(data)

  const getTotalItems = () => null

  const handleAddToCart = () => null

  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress/>

  if (error) return <div> something went wrong :( </div>

  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
