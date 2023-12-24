import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Services = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 option1 text-center pt-5'>
                   <LocalShippingIcon />
                   <h6 className='pt-2'>Super Fast and Free Delivery</h6> 
                </div>
                <div className='col-md-4 option2'>
                    <div className='double'>
                        <div className='double1'>
                            <SafetyCheckIcon />
                            Non-Contact Shipping
                        </div>
                        <div className='double2'>
                            <AccountBalanceWalletIcon />
                            Money-Back Guranted
                        </div>
                    </div>
                </div>
                <div className='col-md-4 option3 text-center pt-5'>
                    <AccountBalanceIcon />
                    <h6 className='pt-2'>Super Secure Payment-System</h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services