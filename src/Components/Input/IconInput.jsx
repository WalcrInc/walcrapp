import React from "react";
import { EmailIcon, LocationGig,} from "Src/Assets/index";
import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import location from '../../Assets/images/location.svg'
import Image from "next/image";

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
const LocationIconInput = () => {
  return (
    <div>
      <FormControl>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
            <Image 
            src={location}
            alt="location"
            style={{}}
            />
            </InputLeftElement>
            <Input placeholder="places" style={{textAlign:'center'}}/>
          </InputGroup>
        </FormControl>
    </div>
  )
}

export {IconInput, LocationIconInput}
