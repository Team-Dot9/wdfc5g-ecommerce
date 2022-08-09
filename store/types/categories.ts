export interface Category {
    id: number,
    name: string,
    Summary: string,
    content: string,
    slug: string,
    position_number: number,
}

export interface CategoriesState {
    categories: Category[];
    loading: boolean;
    error: null | string;
}

export enum CategoriesActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
}

interface FetchCategoriesAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: Category[];
}

interface FetchCategoriesErrorAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string;
}

export type CategoriesAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction;