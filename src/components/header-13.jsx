export const Header13 = (props) => {
  return (
    <header id='header'>
      <div className='intro birthday-concert'>
        <div className='overlay'>
          <div className='col-md-8 col-md-offset-2 intro-text'>
            <div style={{ paddingTop: '81px' }}>
              <h1>
                Archie's Birthday Concert
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : 'Loading'}</p>
            </div>
          </div>
        </div>
        </div>
    </header>
  )
}
