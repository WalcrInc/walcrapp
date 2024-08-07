import React from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { CheckIcon, ProfileIcon, UserIcon } from "@/assets";
import SelectInput from "@/components/Input/SelectInput";
import style from "@/app/TaskWalcr/Gig/Pages/Style.module.css";

const PersonalInfo = () => {
  const OptionLg = [{ value: "Option 1", options: "Option 1" }];
  const OptionSm = [{ value: "Option 1", options: "Option 1" }];

  const OptionLg1 = [{ value: "Option 1", options: "Option 1" }];
  const OptionSm1 = [{ value: "Option 1", options: "Option 1" }];

  return (
    <div style={{ marginBottom: "40px" }} className={style.Container}>
      <div>
        <h1 style={{ fontSize: "25px", fontWeight: "700" }}>Personal Info</h1>
        <p>Avoid requesting that communication and payments take place.</p>
      </div>

      <div>
        <FormControl>
          <h1>Full name</h1>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <UserIcon />
            </InputLeftElement>
            <Input placeholder="Brandon, Joe" />
            <InputRightElement>
              <CheckIcon />
            </InputRightElement>
          </InputGroup>

          <h1>Address</h1>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <UserIcon />
            </InputLeftElement>
            <Input placeholder="Dallas, Texas" />
            <InputRightElement>
              <CheckIcon />
            </InputRightElement>
          </InputGroup>

          <h1>DOB</h1>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <Input placeholder="Select Date" size="md" type="date" />
          </InputGroup>
          <div>
            <SelectInput
              OptionLg={OptionLg}
              OptionSm={OptionSm}
              selectLg={"Select Language"}
              selectSm={"Language Level"}
              title={"Language"}
            />
          </div>

          <div>
            <SelectInput
              OptionLg={OptionLg1}
              OptionSm={OptionSm1}
              selectLg={"Assembling"}
              selectSm={"Sub Catergory"}
              title={"Your Skills"}
              text={
                "What are you really good at communication and payments take place."
              }
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default PersonalInfo;
