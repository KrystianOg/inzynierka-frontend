import { Session, User } from '@supabase/supabase-js'

interface AuthState {
	session: Session | null;
	user: User | undefined;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials extends SignInCredentials {
    password2: string
}

interface PasswordError {
    password: string[];
}

interface Token {
    access: string;
    refresh: string;
}

interface JWTToken {
    token_Type: 'refresh' | 'access',
    exp: number,
    iat: number,
    jti: string,
    user_id: number
}

type RefreshToken = Pick<Token, 'refresh'>;

interface ConfirmData {
    hash: string,
    confirmation_token: string
}

export type {
    SignInCredentials,
    SignUpCredentials,
    PasswordError,
    Token,
    JWTToken,
    RefreshToken,
    ConfirmData,
    AuthState
}