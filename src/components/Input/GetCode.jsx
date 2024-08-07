import React from "react";
import {
    InputGroup,
    Input,
    FormLabel,
    FormControl,
    InputRightElement,
} from "@chakra-ui/react";

const GetCode = ({text,notice}) => {
    return (
        <div>
            <FormControl>
                <FormLabel>{text} Verification Code</FormLabel>
                <InputGroup
                    boxShadow={" 0px 0px 0px 1px #CDD1DC"}
                    borderRadius={"8px"}
                    size={"lg"}
                >
                    <Input />
                    <InputRightElement style={{ cursor: "pointer", width:"20%", color:"orange", fontWeight:"700" }}>
                        Get Code
                    </InputRightElement>
                </InputGroup>
                <p style={{fontSize:"14px"}}>{notice}</p>
            </FormControl>
        </div>
    )
}

export default GetCode
