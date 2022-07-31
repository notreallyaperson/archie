export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Presents</h2>
          <img 
          style={{maxWidth:'100%'}}
          src ='./img/1amx.gif'/>
          <p>
            I already have so many toys in my house, I don't think I need anymore. Instead donate below and I will be giving it to <a href="https://fobk.org/" style={{color: 'white', textDecoration: 'underline'}}>FoBK</a> and <a href="https://sibiam.my/" style={{color: 'white', textDecoration: 'underline'}}>SIBIAM</a> to run programs for children who are less fortunate than me.
          </p>
        </div>
        <a href="https://checkout.stripe.com/pay/cs_live_a175jLTQsls4KrUzVK2vTAIB6n5OsbLdCzpiwJjaqTIIO7aHBhaXShVMdP#fidkdWxOYHwnPyd1blppbHNgWjA0SVU9S19CVXNOM0luVElhZF9xbm9mNH1%2Fcm9SdGhnYXR8X0xjc1ZvT1FHTEZvfzJkZ2h9V3Q2TksyakhvQ38xTW8xbDZTbG1UXDBcYFZ2M1RTQTV8XDBVNTV8fDRDPEFtSScpJ3VpbGtuQH11anZgYUxhJz8nPXJIY19BMmEwPHM1YDB8PEREJ3gl"
          className="donate-button"
          target="_blank"
        >
          Donate Now
        </a>
      </div>
    </div>
  )
}
