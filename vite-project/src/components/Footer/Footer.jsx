import React from 'react'
import {CDBFooter,CDBBox} from 'cdbreact'

const Footer = () => {
  return (
    <CDBFooter className="shadow">
    <CDBBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="mx-auto py-4 flex-wrap"
    //   style={{ width: '80%' }}
    >
      <CDBBox display="flex" alignItems="center">
      </CDBBox>
      <CDBBox>
        <small className="ml-2">&copy; Rahul Saini, 2022. All rights reserved.</small>
      </CDBBox>     
    </CDBBox>
  </CDBFooter>
  )
}

export default Footer
