export interface Address {
  [key: string]: string,
}

export enum DeliveryOptionValues {
  EXPRESS_DELIVERY = 'EXPRESS_DELIVERY',
}

export enum ShippingOptionValues {
  DURING_APPOINTMENT = 'DURING_APPOINTMENT',
  SEPARATELY_APPOINTMENT = 'SEPARATELY_APPOINTMENT',
}

export interface DeliveryOption {
  id: number,
  value: DeliveryOptionValues.EXPRESS_DELIVERY,
  text: string,
}

export interface ShippingOption {
  id: number,
  value: ShippingOptionValues.DURING_APPOINTMENT | ShippingOptionValues.SEPARATELY_APPOINTMENT,
  text: string,
}

export interface ShippingState {
  address: Address | null,
  deliveryOptions: DeliveryOption[],
  shippingOptions: ShippingOption[],
  activeDeliveryOption: DeliveryOption | null,
  activeShippingOption: ShippingOption | null,
  loading: boolean;
  error: null | string;
}

export enum ShippingActionTypes {
  FETCH_SHIPPING = 'FETCH_SHIPPING',
  FETCH_SHIPPING_SUCCESS = 'FETCH_SHIPPING_SUCCESS',
  FETCH_SHIPPING_ERROR = 'FETCH_SHIPPING_CLINICS_ERROR',
  CHANGE_ACTIVE_DATE_SHIPPING = 'CHANGE_ACTIVE_DATE_SHIPPING',
  CHANGE_ACTIVE_TIME_SHIPPING = 'CHANGE_ACTIVE_TIME_SHIPPING',
  CLEAR_SHIPPING_DATA = 'CLEAR_SHIPPING_DATA',
  CHANGE_ACTIVE_DELIVERY_OPTION = 'CHANGE_ACTIVE_DELIVERY_OPTION',
  CHANGE_ACTIVE_SHIPPING_OPTION = 'CHANGE_ACTIVE_SHIPPING_OPTION',
  CHANGE_ADDRESS_SHIPPING_OPTION = 'CHANGE_ADDRESS_SHIPPING_OPTION',
}

export interface FetchShippingAction {
  type: ShippingActionTypes.FETCH_SHIPPING;
}

export interface FetchShippingSuccessAction {
  type: ShippingActionTypes.FETCH_SHIPPING_SUCCESS;
  payload: string;
}

export interface FetchShippingErrorAction {
  type: ShippingActionTypes.FETCH_SHIPPING_ERROR;
  payload: string;
}

export interface ClearShippingData {
  type: ShippingActionTypes.CLEAR_SHIPPING_DATA;
}

export interface ChangeActiveDeliveryOption {
  type: ShippingActionTypes.CHANGE_ACTIVE_DELIVERY_OPTION;
  payload: string;
}

export interface ChangeActiveShippingOption {
  type: ShippingActionTypes.CHANGE_ACTIVE_SHIPPING_OPTION;
  payload: string;
}

export interface ChangeAddressShippingOption {
  type: ShippingActionTypes.CHANGE_ADDRESS_SHIPPING_OPTION;
  payload: Address,
}

export type ShippingAction = FetchShippingAction | FetchShippingSuccessAction | FetchShippingErrorAction | ClearShippingData | ChangeActiveDeliveryOption | ChangeActiveShippingOption | ChangeAddressShippingOption;