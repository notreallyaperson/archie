import christian from './christian-palencia.jpeg'

export const Header13 = (props) => {
  return (
    <header id='header'>
      <div className='intro birthday-concert'>
        <div className="featuring-image"><img style={{width: '100%', borderRadius: '50%'}}src={christian}/></div>
        <div className='overlay'>
          <div className='col-md-8 col-md-offset-2 intro-text'>
            <div style={{ paddingTop: '81px' }}>
              <h1>
                Archie's Birthday Concert
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph2 : 'Loading'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
