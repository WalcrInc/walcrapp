// // components/AppRouter.js
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "@/App/Onboarding/Home/Page";
// import Onboarding from "@/App/Onboarding/Onboarding";
// import BecomeTaskWalcr from "@/App/Onboarding/TaskWalcr/TaskWalcr";
// import FindService from "@/App/Onboarding/FindService/FindService";
// import Register from "Src/App/Register/Register";
// import Login from "@/App/Login/Login";
// import ForgotPassword from "@/App/ForgotPassword/ForgotPass";
// import OTP from "../../../App/Register/Forms/OTP";
// import Dashboard from "Src/App/Dashboard/Home/Home";
// import AddCash from "Src/App/AddCash/AddCash";
// import FindTaskWorker from "@/App/Onboarding/FindService/FindService";
// import TaskWalcr from "Src/App/TaskWalcr/Onboarding/Onboarding";

// export default function AppRouter() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/onboarding" component={Onboarding} />
//         <Route path="/become_taskwalcr" component={BecomeTaskWalcr} />
//         <Route path="/find_service" component={FindService} />
//         <Route path="/register" component={Register} />
//         <Route path="/login" component={Login} />
//         <Route exact path="/forgot-password" component={ForgotPassword} />
//         <Route path="/forgot-password/otp" component={OTP} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/add-cash" component={AddCash} />
//         <Route path="/find_taskworker" component={FindTaskWorker} />
//         <Route path="/taskwalcr" component={TaskWalcr} />
//       </Switch>
//     </Router>
//   );
// }
