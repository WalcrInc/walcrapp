import { Button } from '@chakra-ui/react'
import React from 'react'

const WalletCard = ({balance}) => {
  return (
    <div style={{padding:"20px", width:"97%", margin:"auto", borderRadius:"10px", background:"#F183411A", marginTop:"15px", fontSize:"14px", color:"#5B6178"    }}>
        <p>Balnce</p>
        <h1 style={{fontSize:"33px", fontWeight:"700", color:"black", margin:"5px 0"}}>$ {balance}</h1>
        <p> Your payouts is scheduled for Fri, 10 May</p>

        <Button
        variant="default"
        style={{background:"#000", color:"#fff", marginTop:"15px"}}
        >
            Withdraw
        </Button>
    </div>
  )
}

export default WalletCard