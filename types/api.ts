// types/api.ts
export interface ApiError {
  status: number;
  data: {
    message: string;
    success?: boolean;
  };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatar?: string;
    isVerified: boolean;
  };
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
  };
}

export interface ActivateUserResponse {
  success: boolean;
  message: string;
  user?: {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
  };
}

export interface ActivateUserRequest {
  email: string;
  activationCode: string;
}