export interface partnerFormData {
  email: string;
  password: string;
}

export interface foodPartner {
  _id: string;
  name: string;
  email: string;
  contactName: string;
  phone: string;
  address: string;
  role: string;
}

export interface partnerAuthState {
  partner: foodPartner | null;
  isPartnerAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
