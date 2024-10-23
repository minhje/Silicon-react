import React from 'react'

const Features2 = () => {
  return (
    <section id="features-2">
 <div className="container">

    <div className="transfer">
        <h2>Make your money transfer simple and clear</h2>
        <div className="transfer-content">
            <i className="fa-regular fa-circle-check"><span>Banking transactions are free for you</span></i>
            <i className="fa-regular fa-circle-check"><span>No monthly cash commission</span></i>
            <i className="fa-regular fa-circle-check"><span>Manage payments and transactions online</span></i>
            
           
        </div> 
        
        <a id="learn-more" href="#" className="btn-primary btn-learn-more">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
             </a>
    </div>

    <div className="transfer-img">
        <img src="images/transfer-send.svg" alt=""/>
    </div>

    <div className="contacts.img">
        <img src="images/transfer-contacts.svg" alt=""/>
    </div>

        <div className="payments">
        <h2>Receive payment from international bank details</h2>

        <div className="payments-content">
        <div className="box-1">
            <img src="images/card-icon.svg" alt=""/>
                <div className="text-content">
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
        </div>

        <div className="box-2">
            <img src="images/wallet-icon.svg" alt=""/>
                <div className="text-content">
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
        </div></div>

        <a id="learn-more-2" href="#" className="btn-primary btn-learn-more">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
         </a>
    </div>
</div>

</section>
  )
}

export default Features2