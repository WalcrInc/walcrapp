// hooks/useRoutes.js
import { useHistory } from "react-router-dom";

const useRoutes = () => {
  // const history = useHistory();

  const handleHomeRoute = () => {
    return history.push("/");
  };
  const handleOnboardingRoute = () => {
    return history.push("/onboarding");
  };
  const handleTaskWalcrRouteX = () => {
    return history.push("/become_taskwalcr");
  };
  const handleFindServicesRoute = () => {
    return history.push("/find_service");
  };
  const handleRegisterRoute = () => {
    return history.push("/register");
  };
  const handleLoginRoute = () => {
    return history.push("/login");
  };
  const handleForgotPasswordRoute = () => {
    return history.push("/forgot-password");
  };
  const handleOtpRoute = () => {
    return history.push("/forgot-password/otp");
  };
  const handleDashboardRoute = () => {
    return history.push("/dashboard");
  };
  const handleAddCashRoute = () => {
    return history.push("/add-cash");
  };
  const handleTaskWorkerRoute = () => {
    return history.push("/find_taskworker");
  };
  const handleWalcrOnboardingRoute = () => {
    return history.push("/taskwalcr");
  };

  return {
    handleHomeRoute,
    handleTaskWalcrRouteX,
    handleOnboardingRoute,
    handleLoginRoute,
    handleOtpRoute,
    handleRegisterRoute,
    handleForgotPasswordRoute,
    handleDashboardRoute,
    handleAddCashRoute,
    handleTaskWorkerRoute,
    handleFindServicesRoute,
    handleWalcrOnboardingRoute,
  };
};

export default useRoutes;
