export enum ProductTypes {
  TESTING_KIT = 'testing_kit',
  BLOOD_TEST =  'blood_test',
  CLINIC_VISIT = 'clinic_visit',
  ONLINE_CONSULTATION = 'online_consultation',
  PRESCRIPTION = 'prescription',
  SUPPLEMENTS = 'supplements',
}

export enum ProductFeeTypes {
  CONSULTATION_FEE = 'Consultation Fee',
  HOME_COLLECTION_FEE = 'At-home Collection Fee',
  DELIVERY_FEE = 'Delivery Fee',
}

export interface ProductFee {
  id: number;
  name: string;
  type: ProductFeeTypes;
  pivot: {[key: string]: number};
  price: number;
  work_times: [];
}
export interface Product {
  id: number,
  category_id: number,
  consultation_id: number,
  content: string,
  summary: string,
  description: string,
  preview_image: string,
  price: number,
  name: string,
  product_type: ProductTypes,
  product_variation: any[],
  min_variation_price: number,
  variations_type: string,
  main_image: string,
  fees: ProductFee[],
  question: Array<{
    id: number,
    question: string,
    answers: Array<{
      id: number,
      answer: string,
      branded: number,
    }>;
  }>;
  clinic_employees: Array<{
    id: number,
    name: string,
    image: string,
    excerpt: string,
    description: string,
    clinic_id: number,
  }>;
  faqs: Array<{
    id: number,
    title: string,
    questions: Array<{
      question: string,
      answer: string,
    }>,
  }>;
  description_points:Array<{
    id: number,
    content: string,
    image: string,
  }>;
  media: Array<{
    id: number,
    original_url: string,
    order_column: number,
  }>;
  category: {
    Summary: string,
    content: string,
    id: number,
    name: 'single_products' | 'multiple_products',
    position_number: number,
    slug: string,
  },
  consultation?: any
}

export interface ProductState {
  product: null | Product;
  loading: boolean;
  error: null | string;
}

export enum ProductActionTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
  CLEAR_PRODUCT = 'CLEAR_PRODUCT',
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: Product;
}

interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCT_ERROR;
  payload: string;
}

interface ClearProductAction {
  type: ProductActionTypes.CLEAR_PRODUCT;
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction | ClearProductAction;