export interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; name: string } | null;
}
