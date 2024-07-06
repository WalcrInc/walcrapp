import { USA } from "@/Assets/index";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useFormik } from "formik";

const Number = () => {
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

  return (
      <form>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"}>
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
      </form>
  );
};

export { Number };