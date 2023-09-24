import React from 'react'
import sms from './images/sms.jpg'
import appointment from './images/appointment.jpg'
import labtest from './images/labtest.jpg'
import order from './images/order.jpg'
import payment from './images/payment.jpg'
import setting from './images/setting.jpg'
import dash from './images/dashboard.jpg'
import active from './images/Active.jpg'


function Sidebar() {
  return (
    <>
 <div className="d-flex" id="wrapper">
         
            <div className= "bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading">Medico Sales</div>
                <div className="list-group list-group-flush">
                
                <div className="list-group-item-light p-3 dashboard" ><img className="active" src={active}/><img className="dash" src={dash}/>Dashboard</div>
                <div className="list-group-item-light p-3" ><img className="lab" src={labtest}/>Lab Test</div>
                    <div className="list-group-item-light p-3" ><img className="appointment" src={appointment}/>Appointments</div>
                    <div className="  list-group-item-light p-3"><img className="order" src={order}/>Medicine Order</div>
                    <div className="  list-group-item-light p-3" ><img className="sms" src={sms}/>Message</div>
                    <div className="  list-group-item-light p-3" ><img className="payment" src={payment}/>Payment</div>
                    <div className="  list-group-item-light p-3" ><img className="setting" src={setting}/>Settings</div>
                </div>
                <div className="sidebar-footer"><i class="fa-regular fa-circle-question help"></i>Help</div>
            </div>
            </div>
    </>
  )
}

export default Sidebar