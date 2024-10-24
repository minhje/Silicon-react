import React from 'react'
import IconCard from '../images/Icons/card-icon.svg'
import IconSecurity from '../images/Icons/security-icon.svg'
import IconStatistics from '../images/Icons/stat-icon.svg'
import IconSupport from '../images/Icons/support-icon.svg'
import IconWallet from '../images/Icons/wallet-icon.svg'
import IconSmile from '../images/Icons/smile-icon.svg'

const AppFeatures = () => {
  return (
    <section id="features-content">
        <div className="app-features">
            <img src={IconCard} alt="Credit card icon"/>
         <div className="text-content">
             <h3 className="features-title">Easy Payments</h3>
             <p>Id mollis consectetur congue egestas
            egestas suspendisse blandit justo.</p>
         </div></div>

        <div className="app-features">
             <img src={IconSecurity} alt="Shield icon"/>    
         <div className="text-content">
             <h3 className="features-title">Data Security</h3>
            <p>Augue pulvinar justo, fermentum
            fames aliquam accumsan vestibulum
            non.</p>
         </div></div>

        <div className="app-features">
        <img src={IconStatistics} alt="Statistics icon"/>    
        <div className="text-content">
        <h3 className="features-title">Cost Statistics</h3>
        <p>Mattis urna ultricies non amet, purus
            in auctor non. Odio vulputate ac nibh.</p>
        </div></div>

        <div className="app-features">
        <img src={IconSupport} alt="Questionmark icon"/>
        <div className="text-content">    
        <h3 className="features-title">Support 27/7</h3>
        <p>A elementum, imperdiet enim, pretium
            etiam facilisi in aenean quam mauris.</p>
    </div></div>

    <div className="app-features">
        <img src={IconWallet} alt="Wallet icon"/>
        <div className="text-content">
        <h3 className="features-title">Regular Cashback</h3>
        <p>Sit facilisis dolor arcu, fermentum
            vestibulum arcu elementum imperdiet
            eleifend.</p>
        </div></div> 

        <div className="app-features">
        <img src={IconSmile} alt="Smiley icon"/>
        <div className="text-content">
        <h3 className="features-title">Top Standards</h3>
        <p>Faucibus cursus maecenas lorem
            cursus nibh. Sociis sit risus id. Sit
            facilisis dolor arcu.</p>
        </div></div>
</section>
  )
}

export default AppFeatures