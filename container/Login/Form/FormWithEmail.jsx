import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import Link from "next/link";

const FormWithEmail = () => {
  return (
    <form>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Email address
        </FormLabel>
        <Input
          box-shadow={"0px 0px 0px 1px #CDD1DC"}
          padding={"25px 14px"}
          type="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Password
        </FormLabel>
        <Input
          box-shadow={"0px 0px 0px 1px #CDD1DC"}
          padding={"25px 14px"}
          type="password"
        />
      </FormControl>
      <Box display={"flex"} justifyContent={"space-between"}>
        <div className="checkbox">
          <input type="checkbox" /> Keep me signed in
        </div>
        <span className="span">
          <Link href={"/forgot-password"}>Forgot password</Link>
        </span>
      </Box>
      <Button
        border={"none"}
        outline={"none"}
        color={"#fff"}
        background={"#1A1A1A"}
        padding={"25px 14px"}
        borderRadius={"16px"}
      >
        Continue
      </Button>
    </form>
  );
};

export  { FormWithEmail };
