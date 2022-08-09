import { Address } from './shipping';

export interface Details {
  id: number,
  value: string,
  label: string,
}

export enum DeliveryDetailsOptionValues {
  STANDARD_DELIVERY = 'STANDARD_DELIVERY',
  HASSLE_FREE_DELIVERY = 'HASSLE_FREE_DELIVERY',
}

export interface DeliveryDetails {
  type: 'details',
  id: number,
  name: string,
  address: string,
  disabledDates: {
    [key: string]: {
      [key: string]: string[],
    },
  },
}

export interface DeliveryDetailsOption {
  id: number,
  price: number,
  value: string,
  text: string,
}

export interface DeliveryDetailsState {
  details: Details[];
  activeDate: string,
  activeTime: string | null,
  address: Address;
  loading: boolean;
  error: null | string;
  activeDeliveryOption: DeliveryDetailsOption | null,
}

export enum DeliveryDetailsActionTypes {
  FETCH_DELIVERY_DETAILS = 'DELIVERY_DETAILS',
  FETCH_DELIVERY_DETAILS_SUCCESS = 'DELIVERY_DETAILS_SUCCESS',
  FETCH_DELIVERY_DETAILS_ERROR = 'DELIVERY_DETAILS_ERROR',
  CHANGE_ACTIVE_DELIVERY_DETAILS_OPTION = 'CHANGE_ACTIVE_DELIVERY_DETAILS_OPTION',
  CHNAGE_ACTIVE_DATE = 'CHNAGE_ACTIVE_DATE',
  CHNAGE_ACTIVE_TIME = 'CHNAGE_ACTIVE_TIME',
  CHANGE_SHIPPING_ADDRESS = 'CHANGE_SHIPPING_ADDRESS',
  CLEAR_DELIVERY_DETAILS = 'CLEAR_DELIVERY_DETAILS',
}

export interface FetchDeliveryDetailsAction {
  type: DeliveryDetailsActionTypes.FETCH_DELIVERY_DETAILS;
}

export interface FetchDeliveryDetailsSuccessAction {
  type: DeliveryDetailsActionTypes.FETCH_DELIVERY_DETAILS_SUCCESS;
  payload: Details[];
}

export interface FetchDeliveryDetailsErrorAction {
  type: DeliveryDetailsActionTypes.FETCH_DELIVERY_DETAILS_ERROR;
  payload: string;
}

export interface ChangeActiveDeliveryDetailsOption {
  type: DeliveryDetailsActionTypes.CHANGE_ACTIVE_DELIVERY_DETAILS_OPTION;
  payload: DeliveryDetailsOption | null;
}

export interface ChangeActiveDate {
  type: DeliveryDetailsActionTypes.CHNAGE_ACTIVE_DATE;
  payload: string;
}

export interface ChangeActiveTime {
  type: DeliveryDetailsActionTypes.CHNAGE_ACTIVE_TIME;
  payload: string | null;
}

export interface ChangeShippingAddress {
  type: DeliveryDetailsActionTypes.CHANGE_SHIPPING_ADDRESS;
  payload: Address;
}

export interface ClearDeliveryDetails {
  type: DeliveryDetailsActionTypes.CLEAR_DELIVERY_DETAILS;
}

export type DeliveryDetailsAction = FetchDeliveryDetailsAction | FetchDeliveryDetailsSuccessAction | FetchDeliveryDetailsErrorAction | ChangeActiveDeliveryDetailsOption | ChangeActiveDate | ChangeActiveTime | ChangeShippingAddress | ClearDeliveryDetails;