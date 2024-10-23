import React from 'react'

const Features = () => {
  return (
    <section id="features">
    <div className="container">

        <div id="brands">
            <div className="container">
            
            <div id="brand-1" className="brand-box">
            <img src="images/logo-1.svg" alt="Logo ipsum"/></div>

            <div id="brand-2" className="brand-box">
            <img src="images/logo-2.svg" alt="Logo ipsum"/></div>

            <div id="brand-3" className="brand-box">
            <img src="images/logo-3.svg" alt="Logo ipsum"/></div>

            <div id="brand-4" className="brand-box">
            <img src="images/logo-4.svg" alt="Logo ipsum"/></div>

            <div id="brand-5" className="brand-box">
            <img src="images/logo-5.svg" alt="Logo ipsum"/></div>

            <div id="brand-6" className="brand-box">
            <img src="images/logo-6.svg" alt="Logo ipsum"/></div>

            </div>
        </div>
        

        <div className="headline">
             <h2>App Features</h2>
             <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec
            lacus. 
             </p>
        </div>
    

     
        <div className="features-iphone">
            <img src="images/phone-card.svg" alt="iPhone with a card and transactions"/>
        </div>

        <section id="features-content">
        <div className="app-features">
            <img src="images/card-icon.svg" alt="Credit card icon"/>
         <div className="text-content">
             <h3 className="features-title">Easy Payments</h3>
             <p>Id mollis consectetur congue egestas
            egestas suspendisse blandit justo.</p>
         </div></div>

        <div className="app-features">
             <img src="images/security-icon.svg" alt="Shield icon"/>    
         <div className="text-content">
             <h3 className="features-title">Data Security</h3>
            <p>Augue pulvinar justo, fermentum
            fames aliquam accumsan vestibulum
            non.</p>
         </div></div>

        <div className="app-features">
        <img src="images/stat-icon.svg" alt="Statistics icon"/>    
        <div className="text-content">
        <h3 className="features-title">Cost Statistics</h3>
        <p>Mattis urna ultricies non amet, purus
            in auctor non. Odio vulputate ac nibh.</p>
        </div></div>

        <div className="app-features">
        <img src="images/support-icon.svg" alt="Questionmark icon"/>
        <div className="text-content">    
        <h3 className="features-title">Support 27/7</h3>
        <p>A elementum, imperdiet enim, pretium
            etiam facilisi in aenean quam mauris.</p>
    </div></div>

    <div className="app-features">
        <img src="images/wallet-icon.svg" alt="Wallet icon"/>
        <div className="text-content">
        <h3 className="features-title">Regular Cashback</h3>
        <p>Sit facilisis dolor arcu, fermentum
            vestibulum arcu elementum imperdiet
            eleifend.</p>
        </div></div> 

        <div className="app-features">
        <img src="images/smile-icon.svg" alt="Smiley icon"/>
        <div className="text-content">
        <h3 className="features-title">Top Standards</h3>
        <p>Faucibus cursus maecenas lorem
            cursus nibh. Sociis sit risus id. Sit
            facilisis dolor arcu.</p>
        </div></div>
</section>
    </div>
</section>
  )
}

export default Features