import React from "react";
import { useRouter } from "next/router";

const useRoutes = () => {
  const router = useRouter();

  const handleHomeRoute = () => {
    return router.push("/");
  };
  const handleOnboardingRoute = () => {
    return router.push("/onboarding");
  };
  const handleTaskWalcrRouteX = () => {
    return router.push("/become_taskwalcr");
  };
  const handleFindServicesRoute = () => {
    return router.push("/find_service");
  };
  const handleRegisterRoute = () => {
    return router.push("/register");
  };
  const handleLoginRoute = () => {
    return router.push("/login");
  };
  const handleForgotPasswordRoute = () => {
    return router.push("/forgot-password");
  };
  const handleOtpRoute = () => {
    return router.push("/forgot-password/otp");
  };
  const handleDashboardRoute = () => {
    return router.push("/dashboard");
  };
  const handleAddCashRoute = () => {
    return router.push("/add-cash");
  };
  const handleTaskWorkerRoute = () => {
    return router.push("/find_taskworker");
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
  };
};

export default useRoutes;
