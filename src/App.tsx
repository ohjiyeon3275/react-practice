import React, { useState } from 'react';
import { useQuery } from 'react-query';

//components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Item from './Item/Item';
import Cart from './Cart/Cart'

//styles (styled component)
import { Wrapper, StyledButton } from './App.styles';

//Types
export interface CartItemType {
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

  const [ cartOpen, setCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  );

  console.log(data)

  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((ack: number, items) => ack + items.amount, 0);
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //1. is the item already add in the cart?
      // if it is -> add number
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }
      // otherwise.

      return [...prev, { ...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress/>

  if (error) return <div> our mission was to graze the dust in search of a mystery stripped of anything serious </div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}/>
      </Drawer>

      <StyledButton onClick={ () => setCartOpen(true)} >
        <Badge 
          // badgeContent={ getTotalItems(cartItems) } 
          color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
