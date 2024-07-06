import React from "react";
import { EmailIcon,} from "Src/Assets/index";
import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const IconInput = () => {
  return (
    <div>
      <FormControl>
          <FormLabel>New email address</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <EmailIcon />
            </InputLeftElement>
            <Input />
          </InputGroup>
        </FormControl>
    </div>
  )
}

export default IconInput
