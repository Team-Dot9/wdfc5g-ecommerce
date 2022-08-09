import { Product } from './product';

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: null | string;
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

export type ProductsAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction;