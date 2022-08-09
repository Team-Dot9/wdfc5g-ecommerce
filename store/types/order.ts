export enum StepTypes {
  SERVICE_LOCATION = 'SERVICE_LOCATION',
  BOOK_CONSULTATION = 'BOOK_CONSULTATION',
  BOOK_CLINIC_VISIT = 'BOOK_CLINIC_VISIT',
  BOOK_BLOOD_COLLECTION = 'BOOK_BLOOD_COLLECTION',
  SHIPPING = 'SHIPPING',
  PERSONAL_INFO = 'PERSONAL_INFO',
  DELIVERY_DETAILS = 'DELIVERY_DETAILS',
  PAYMENT_DETAILS = 'PAYMENT_DETAILS',
  REVIEW_ORDER = 'REVIEW_ORDER',
}

export enum ServiceLocationType {
  HOME = 'home',
  CLINIC = 'in-clinic',
}

export interface OrderProduct {
  id: number,
  name: string,
  image: string,
  price: number,
  count: number,
}

export interface OrderID {
  id: string | null;
}

export interface OrderState {
  step: StepTypes | null,
  serviceLocation: ServiceLocationType | null,
  products: OrderProduct[],
  orderID: OrderID | null,
}

export enum OrderActionTypes {
  CHANGE_STEP = 'CHANGE_STEP',
  CLEAR_STEP = 'CLEAR_STEP',
  SET_SERVICE_LOCATION = 'SET_SERVICE_LOCATION',
  CLEAR_SERVICE_LOCATION = 'CLEAR_SERVICE_LOCATION',
  CHANGE_ORDER_ID = 'CHANGE_ORDER_ID',
}

interface ChangeStepAction {
  type: OrderActionTypes.CHANGE_STEP;
  payload: StepTypes,
}
interface ClearStepAction {
  type: OrderActionTypes.CLEAR_STEP;
}
interface ChangeOrderIDAction {
  type: OrderActionTypes.CHANGE_ORDER_ID;
  payload: OrderID,
}

interface SetServiceLocationAction {
  type: OrderActionTypes.SET_SERVICE_LOCATION;
  payload: ServiceLocationType
}

interface ClearServiceLocationAction {
  type: OrderActionTypes.CLEAR_SERVICE_LOCATION;
}

export type OrderAction = ChangeStepAction | ClearStepAction | SetServiceLocationAction | ClearServiceLocationAction | ChangeOrderIDAction;