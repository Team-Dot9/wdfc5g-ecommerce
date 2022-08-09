export interface Option {
  id: number,
  value: string,
  label: string,
}

export interface PersonalInfo {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  gender: string,
  nationality: string,
  passport: string,
  email: string,
  contact: string,
  allergies: string,
}

export interface PersonalInfoState {
  personalInfo: PersonalInfo,
  genderOptions: Option[],
  nationalityOptions: Option[],
}

export enum PersonalInfoActionTypes {
  FETCH_PERSONAL_INFO = 'FETCH_PERSONAL_INFO',
  FETCH_PERSONAL_INFO_SUCCESS = 'FETCH_PERSONAL_INFO_SUCCESS',
  FETCH_PERSONAL_INFO_ERROR = 'FETCH_PERSONAL_INFO_ERROR',
  CHANGE_PERSONAL_INFO = 'CHANGE_PERSONAL_INFO',
}

export interface FetchPersonalInfoAction {
  type: PersonalInfoActionTypes.FETCH_PERSONAL_INFO;
}

export interface FetchPersonalInfoSuccessAction {
  type: PersonalInfoActionTypes.FETCH_PERSONAL_INFO_SUCCESS;
  payload: {
    genderOptions: Option[],
    nationalityOptions: Option[],
  };
}

export interface FetchPersonalInfoErrorAction {
  type: PersonalInfoActionTypes.FETCH_PERSONAL_INFO_ERROR;
  payload: string;
}

export interface ChangePersonalInfo {
  type: PersonalInfoActionTypes.CHANGE_PERSONAL_INFO;
  payload: PersonalInfo;
}

export type PersonalInfoAction = FetchPersonalInfoAction | FetchPersonalInfoSuccessAction | FetchPersonalInfoErrorAction | ChangePersonalInfo;