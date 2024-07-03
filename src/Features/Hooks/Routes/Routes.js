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
  const handleEarningsRoute = () => {
    return router.push("/earnings");
  };
  const handleCancelRoute = () => {
    return router.push("/cancel");
  };
  const handleHoursRoute = () => {
    return router.push("/hours");
  };
  const handleTasksRoute = () => {
    return router.push("/tasks");
  };
  const handleWalcrOnboardingRoute = () => {
    return router.push("/taskwalcr")
  };
  const handleSelfieRoute = () => {
    return router.push("/taskwalcr/selfie")
  };
  const handleIdentityRoute = () => {
    return router.push("/taskwalcr/identity")
  }
  const handleLiscenseRoute = () => {
    return router.push("/taskwalcr/liscense")
  }
  const handleCerificateRoute = () => {
    return router.push("/taskwalcr/cerificate")
  }
  const handleVerificationRoute = () => {
    return router.push("/taskwalcr/verification")
  }
  const handlePreviewRoute = () => {
    return router.push("/taskwalcr/preview")
  }
  const handleReviewRoute = () => {
    return router.push("/taskwalcr/review")
  }

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
    handleEarningsRoute,
    handleCancelRoute,
    handleHoursRoute,
    handleTasksRoute,
    handleWalcrOnboardingRoute,
    handleSelfieRoute,
    handleIdentityRoute,
    handleLiscenseRoute,
    handleCerificateRoute,
    handleVerificationRoute,
    handleReviewRoute,
  };
};

export default useRoutes;
