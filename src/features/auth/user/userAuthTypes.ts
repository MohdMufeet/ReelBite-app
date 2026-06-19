export interface User {
  _id: string;
  name: string;
  email: string;
  // avatar?:string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

//login form data interface
export interface formData {
  email: string;
  password: string;
}
