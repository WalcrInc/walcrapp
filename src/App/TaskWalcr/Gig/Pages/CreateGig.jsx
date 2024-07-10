import React from 'react'
import Image from 'next/image';
import {InputGroup,Input,FormLabel,FormControl} from "@chakra-ui/react";
import SelectInput from 'src/Components/Input/SelectInput';
import Upload from '@/Assets/images/uploadIcon.svg'
import style from '@/App/TaskWalcr/Gig/Pages/Style.module.css'

const CreateGig = () => {

  const OptionLg = [
    { value: "Option 1", options: "Option 1" },
  ]
  const OptionSm = [
    { value: "Option 1", options: "Option 1" },
  ]
  return (
    <div style={{ marginBottom: "40px"}} className={style.Container}>
      <div>
        <h1 style={{fontSize:"25px", fontWeight:"700"}}>
          Create Gig
        </h1>
        <p>
        Publish a Gig to the Walcr marketplace <br />
        <span>
        Add more gigs based on your skillset
        </span>
        </p>
      </div>

      <div>
        <FormLabel>Set a Gig name</FormLabel>
        <p>Name is private and will be use for your private listing..</p>
        <InputGroup
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          borderRadius={"8px"}
          size={"lg"}
        >
          <Input />
        </InputGroup>

        <FormControl>
          <div>
            <SelectInput OptionLg={OptionLg} OptionSm={OptionSm} selectLg={"Select Language"} selectSm={"Language Level"} title={"Language"} />
          </div>

        </FormControl>

        <div  style={{width:"100%", height:"100px", border:"1px solid #000", borderRadius:"10px", padding:"10px", marginTop:"25px"}}>
          <span>
          All these will be listed under this gig in the marketplace
          </span>
          <div>

          </div>
        </div>
        <span>
        Rate & Prices for each services listed will be up on the next page
        </span>

        <hr style={{marginTop:"15px", marginBottom:"15px"}} />
        <div>
        <h1>
        Search tags for (Assembling)
        </h1>
        <p>
        Name is private and will be use for your private listing..
        </p>
        <InputGroup
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          borderRadius={"8px"}
          size={"lg"}
        >
          <Input />
        </InputGroup>
      <span>
      5 tags maximum Use letters and numbers only.
      </span>
      </div>

      <div>
        <h1>
          Add more Gigs
        </h1>
        <div style={{width:"100%", height:"70px", display:"grid", placeContent:"center", border:"1px dashed #000", borderRadius:"10px"}}>
          <Image src={Upload} style={{width:"50px"}} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default CreateGig
