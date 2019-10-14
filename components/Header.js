import Link from 'next/link'
import styled from 'styled-components'

const linkStyle = {
  marginRight: 15
}

const HeaderStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  background: transparent;
  font-size: 16px;
  color: palevioletred;
  margin: 0;
  padding: .25em;
`

const Header = () => (
  <HeaderStyle>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>

    <Link href="/favorites">
      <a style={linkStyle}>Favorites list</a>
    </Link>

    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>
  </HeaderStyle> 
)



export default Header