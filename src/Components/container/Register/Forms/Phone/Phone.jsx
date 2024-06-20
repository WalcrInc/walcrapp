import { BackIcon, Spinner, USA } from "@/Assets";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { ForgotStyle } from "./Phone.style";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/features/Redux/authSlice";

const Phone = ({ handlePrev }) => {
  const dispatch = useDispatch();
  const { user, isSuccess, isError, isLoading } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phone_number: "+1",
    },
    validate: (values) => {
      const errors = {};

      if (!values.phone_number === "") {
        errors.phone_number = "Required";
      } else if (!/^\+1\d{10}$/.test(values.phone_number)) {
        errors.phone_number = "Invalid US number";
      }
    },
  });

  const formDataStep1 = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("formDataStep1")
  );
  const address =
    typeof window !== "undefined" && localStorage.getItem("address");

  const mergedData = {
    ...formDataStep1,
    address,
    ...formik.values,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formik.isValid) {
      console.log(mergedData);
     await dispatch(register(mergedData))
    }
  };

  useEffect(() => {
    if (isSuccess && user) {
      router.push("/dashboard");
    }
  }, [isError, isSuccess, user, router]);

  return (
    <ForgotStyle>
      <span onClick={handlePrev}>
        {" "}
        <BackIcon />
      </span>

      <div className="header">
        <h1> Enter your number</h1>
        <p>We’ll send a code for verification</p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Phone number
          </FormLabel>
          <Box display={"flex"} gap={"10px"}>
            <Box
              display={"flex"}
              width={"20%"}
              gap={"10px"}
              padding={" 12px"}
              alignItems={"center"}
              borderRadius={"4px"}
              border={
                formik.errors.phone_number
                  ? "1px solid #FB2047"
                  : "1px solid  #CDD1DC"
              }
            >
              <USA />
            </Box>
            <Input
              padding={"25px 14px"}
              type="tel"
              placeholder="Enter phone number"
              border={
                formik.errors.phone_number
                  ? "1px solid #FB2047"
                  : "1px solid  #CDD1DC"
              }
              {...formik.getFieldProps("phone_number")}
            />
          </Box>
        </FormControl>
        <Button
          border={"none"}
          outline={"none"}
          color={"#fff"}
          background={"#1A1A1A"}
          padding={"25px 14px"}
          borderRadius={"16px"}
          type="submit"
        >
          {isLoading ? <Spinner /> : "Continue"}
        </Button>
      </form>
    </ForgotStyle>
  );
};

export { Phone };
