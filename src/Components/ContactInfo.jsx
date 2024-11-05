import React from 'react'

const ContactInfo = () => {
  return (
    <> 
    
    <h3 className='med-center-1'>Medical Center 1</h3>

    <i className="fa-solid fa-location-dot"> <span>4517 Washington Ave. Manchester, Kentucky 39495</span></i>
    <i className="fa-solid fa-phone"><span>(406) 555-0120</span></i>
    <i className="fa-solid fa-clock"><span><b>Mon – Fri:</b> 9:00 am – 22:00 am<br/><b className='weekend'>Sat – Sun:</b> 9:00 am – 20:00 am</span></i>

    <h3 className='med-center-2'>Medical Center 2</h3>

    <i className="fa-solid fa-location-dot"> <span>2464 Royal Ln. Mesa,New Jersey 45463</span></i>
    <i className="fa-solid fa-phone"><span>(406) 544-0123</span></i>
    <i className="fa-solid fa-clock"><span><b>Mon – Fri:</b> 9:00 am – 22:00 am<br/><b className='weekend'>Sat – Sun:</b> 9:00 am – 20:00 am</span></i>
  </>
 )
}

export default ContactInfo