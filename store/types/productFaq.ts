export interface ProductFaq {
  questions: Array<{
    question: string,
    answer: string,
  }>,
}

export interface ProductFaqState {
  faqList: [] | ProductFaq;
  loading: boolean;
  error: null | string;
}

export enum ProductFaqActionTypes {
  FETCH_PRODUCT_FAQ = 'FETCH_PRODUCT_FAQ',
  FETCH_PRODUCT_FAQ_SUCCESS = 'FETCH_PRODUCT_FAQ_SUCCESS',
  FETCH_PRODUCT_FAQ_ERROR = 'FETCH_PRODUCT_FAQ_ERROR'
}

interface FetchProductFaqAction {
  type: ProductFaqActionTypes.FETCH_PRODUCT_FAQ;
}

interface FetchProductFaqSuccessAction {
  type: ProductFaqActionTypes.FETCH_PRODUCT_FAQ_SUCCESS;
  payload: ProductFaq;
}

interface FetchProductFaqErrorAction {
  type: ProductFaqActionTypes.FETCH_PRODUCT_FAQ_ERROR;
  payload: string;
}

export type ProductFaqAction = FetchProductFaqAction | FetchProductFaqSuccessAction | FetchProductFaqErrorAction;