import { Product } from './product';

export interface CartProductsState {
  products: Product[];
  loading: boolean;
  error: null | string;
}

export enum CartProductsActionTypes {
  FETCH_CART_PRODUCTS = 'FETCH_CART_PRODUCTS',
  FETCH_CART_PRODUCTS_SUCCESS = 'FETCH_CART_PRODUCTS_SUCCESS',
  FETCH_CART_PRODUCTS_ERROR = 'FETCH_CART_PRODUCTS_ERROR',
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  DECREMENT_PRODUCT_FROM_CART = 'DECREMENT_PRODUCT_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

interface FetchCartProductsAction {
  type: CartProductsActionTypes.FETCH_CART_PRODUCTS;
}

interface FetchCartProductsSuccessAction {
  type: CartProductsActionTypes.FETCH_CART_PRODUCTS_SUCCESS;
  payload: any[];
}

interface FetchCartProductsErrorAction {
  type: CartProductsActionTypes.FETCH_CART_PRODUCTS_ERROR;
  payload: string;
}

interface AddProductToCartAction {
  type: CartProductsActionTypes.ADD_PRODUCT_TO_CART;
  payload: Product;
}

interface RemoveProductFromCartAction {
  type: CartProductsActionTypes.REMOVE_PRODUCT_FROM_CART;
  payload: number;
}

interface DecrementProductFromCartAction {
  type: CartProductsActionTypes.DECREMENT_PRODUCT_FROM_CART;
  payload: Product;
}

interface ClearCartAction {
  type: CartProductsActionTypes.CLEAR_CART,
}

export type CartProductsAction = FetchCartProductsAction | FetchCartProductsSuccessAction | FetchCartProductsErrorAction | AddProductToCartAction | RemoveProductFromCartAction | DecrementProductFromCartAction | ClearCartAction;