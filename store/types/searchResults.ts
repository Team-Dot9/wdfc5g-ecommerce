import { Product } from './product';

export interface SearchResultsState {
    search: Product[];
    text: string;
    loading: boolean;
    error: null | string;
}

export enum SearchResultsActionTypes {
    FETCH_SEARCH_PRODUCTS = 'FETCH_SEARCH_PRODUCTS',
    FETCH_SEARCH_PRODUCTS_SUCCESS = 'FETCH_SEARCH_PRODUCTS_SUCCESS',
    FETCH_SEARCH_PRODUCTS_ERROR = 'FETCH_SEARCH_PRODUCTS_ERROR'
}

interface FetchSearchProductsAction {
    type: SearchResultsActionTypes.FETCH_SEARCH_PRODUCTS;
}

interface FetchSearchProductsSuccessAction {
    type: SearchResultsActionTypes.FETCH_SEARCH_PRODUCTS_SUCCESS;
    text: string;
    payload: Product[];
}

interface FetchSearchProductsErrorAction {
    type: SearchResultsActionTypes.FETCH_SEARCH_PRODUCTS_ERROR;
    payload: string;
}

export type SearchResultsAction = FetchSearchProductsAction | FetchSearchProductsSuccessAction | FetchSearchProductsErrorAction;