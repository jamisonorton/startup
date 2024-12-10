import { NavigateFunction } from "react-router-dom";

/**
 * Deletes the user session by calling the logout endpoint.
 * @param endpoint - The API endpoint for logout.
 */
async function deleteUser(endpoint: string): Promise<void> {
  try {
    await fetch(endpoint, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    localStorage.removeItem("userName");
  }
}

/**
 * Logs out the user and navigates to the homepage.
 * @param navigate - React Router's navigate function.
 */
export async function logoutUser(navigate: NavigateFunction): Promise<void> {
  await deleteUser(`/api/auth/logout`);
  navigate("/"); // Redirect to the homepage
}
