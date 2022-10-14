export const logout = () => {
  localStorage.removeItem("userData");
  window.location.pathname = "/landing";
};
