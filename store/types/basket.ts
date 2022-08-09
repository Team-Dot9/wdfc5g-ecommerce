import { Product } from './product';

export interface BasketState {
  counter: number;
  products: Product[];
  loading: boolean;
  error: null | string;
}

export enum BasketActionTypes {
  FETCH_BASKET = 'FETCH_BASKET',
  FETCH_BASKET_SUCCESS = 'FETCH_BASKET_SUCCESS',
  FETCH_BASKET_ERROR = 'FETCH_BASKET_ERROR'
}

interface FetchBasketAction {
  type: BasketActionTypes.FETCH_BASKET;
}

interface FetchBasketSuccessAction {
  type: BasketActionTypes.FETCH_BASKET_SUCCESS;
  payload: number;
}

interface FetchBasketErrorAction {
  type: BasketActionTypes.FETCH_BASKET_ERROR;
  payload: string;
}

export type BasketAction = FetchBasketAction | FetchBasketSuccessAction | FetchBasketErrorAction;