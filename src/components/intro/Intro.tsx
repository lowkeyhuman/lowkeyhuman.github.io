import './Intro.scss';

interface IconLink {
  href: string,
  imgSrc: string,
  id: string,
  altText: string
}

const Intro = () => {
  const iconLinks: IconLink[] = [
    {
      href: 'https://twitch.tv/lowkey_human',
      imgSrc: 'twitch.svg',
      id: 'twitch-icon',
      altText: 'twitch icon'
    },
    {
      href: 'https://lowkey-human.itch.io',
      imgSrc: 'itchdotio.svg',
      id: 'itchdotio-icon',
      altText: 'itch.io icon'
    }
  ]

  const icons = iconLinks.map(iconLink => (
    <a key={iconLink.id} href={iconLink.href} target='_blank'>
      <img src={iconLink.imgSrc} alt={iconLink.altText} className='link-icon' id={iconLink.id} />  
    </a>
  ));

  return (
    <div id='intro-container'>
      <img id='portrait' src='avatar.png' alt="Profile Picture" />

      <div id='intro-words'>
        <h1 id='intro-heading'>lowkey_human</h1>

        <p id='intro-description'>
          probably coding, gaming, or eating
        </p>

        <div id='intro-icon-links-container'>
          {icons}
        </div>
      </div>
    </div>
  )
}

export default Intro