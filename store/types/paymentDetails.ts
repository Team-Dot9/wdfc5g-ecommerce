export enum PaymentDetailsOptionValues {
  NONE = 'NONE',
  CREDIT_CARD = 'CREDIT_CARD',
  PAYPAL = 'PAYPAL',
  PAYNOW = 'PAYNOW',
  GRABPAY = 'GRABPAY',
  ATOME = 'ATOME',
}

export enum BillingAddressOptionValues {
  SAME_AS_SHIPPING_ADDRESS = 'SAME_AS_SHIPPING_ADDRESS',
  USE_A_DIFFERENT_BILLING_ADDRESS = 'USE_A_DIFFERENT_BILLING_ADDRESS',
}

export interface Address {
  firstName: string,
  lastName: string,
  streetAddress: string,
  additionalInfo: string,
  postalCode: string,
  country: string,
}

export interface PaymentDetailsOption {
  id: number,
  value: PaymentDetailsOptionValues,
  text?: string,
  icon: React.FC
  disabled: boolean,
}

export interface BillingAddressOption {
  id: number,
  value: BillingAddressOptionValues,
  text: string,
}

export interface PaymentDetailsState {
  paymentDetails: any;
  paymentOptions: PaymentDetailsOption[];
  activePaymentOption: PaymentDetailsOptionValues;
  billingAddressOptions: BillingAddressOption[];
  activeBillingAddressOption: BillingAddressOption;
  billingAddress: Address;
  promoCode: string;
  loading: boolean;
  error: null | string;
}

export enum PaymentDetailsActionTypes {
  CHANGE_ACTIVE_PAYMENT_OPTION = 'CHANGE_ACTIVE_PAYMENT_OPTION',
  CHANGE_ACTIVE_BILLING_ADDRESS_OPTION = 'CHANGE_ACTIVE_BILLING_ADDRESS_OPTION',
  CHANGE_BILLING_ADDRESS = 'CHANGE_BILLING_ADDRESS',
  CHANGE_PROMOCODE = 'CHANGE_PROMOCODE',
  CLEAR_PAYMENT_OPTION = 'CLEAR_PAYMENT_OPTION',
}

export interface changeActivePaymentOption {
  type: PaymentDetailsActionTypes.CHANGE_ACTIVE_PAYMENT_OPTION;
  payload: PaymentDetailsOptionValues;
}

export interface changeActiveBillingAddressOption {
  type: PaymentDetailsActionTypes.CHANGE_ACTIVE_BILLING_ADDRESS_OPTION;
  payload: BillingAddressOption;
}

export interface changeBillingAddress {
  type: PaymentDetailsActionTypes.CHANGE_BILLING_ADDRESS;
  payload: Address;
}

export interface changePromoCode {
  type: PaymentDetailsActionTypes.CHANGE_PROMOCODE;
  payload: string;
}

export interface changePromoCode {
  type: PaymentDetailsActionTypes.CHANGE_PROMOCODE;
  payload: string;
}

export interface ClearPaymentOption {
  type: PaymentDetailsActionTypes.CLEAR_PAYMENT_OPTION;
}

export type PaymentDetailsAction = changeActivePaymentOption | changeActiveBillingAddressOption | changeBillingAddress | changePromoCode | ClearPaymentOption;