import { Product } from './product';

export interface ProductsCategoryState {
    list: Product[];
    loading: boolean;
    error: null | string;
}

export enum ProductsCategoryActionTypes {
    FETCH_PRODUCTS_CATEGORY = 'FETCH_PRODUCTS_CATEGORY',
    FETCH_PRODUCTS_CATEGORY_SUCCESS = 'FETCH_PRODUCTS_CATEGORY_SUCCESS',
    FETCH_PRODUCTS_CATEGORY_ERROR = 'FETCH_PRODUCTS_CATEGORY_ERROR'
}

interface FetchProductsCategoryAction {
    type: ProductsCategoryActionTypes.FETCH_PRODUCTS_CATEGORY;
}

interface FetchProductsCategorySuccessAction {
    type: ProductsCategoryActionTypes.FETCH_PRODUCTS_CATEGORY_SUCCESS;
    payload: Product[];
}

interface FetchProductsCategoryErrorAction {
    type: ProductsCategoryActionTypes.FETCH_PRODUCTS_CATEGORY_ERROR;
    payload: string;
}

export type ProductsCategoryAction = FetchProductsCategoryAction | FetchProductsCategorySuccessAction | FetchProductsCategoryErrorAction;