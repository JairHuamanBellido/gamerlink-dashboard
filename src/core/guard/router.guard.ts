class RouteGuard {
  valid = () => localStorage.getItem("authorization");
}
export default new RouteGuard();
