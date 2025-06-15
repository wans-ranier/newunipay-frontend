import styled from 'styled-components';
// A palheta de cores (SITE:  https://colorhunt.co/palette/0118d81b56fde9dfc3fff8f8)
// color: 0118D8
// color: 1B56FD
// color: E9DFC3
// color: FFF8F8
export const HeaderComponent = styled.header`
    text-align: center;
    text-transform: uppercase;
    height: 7rem;
    background-color: #E9DFC3;
    color: #FFF8F8;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const UnsortedList = styled.ul`
    display: grid;
    width: 90%;
    margin: 0 0 0 5%;
    padding: 0;
    grid-template-columns: 200px 200px 200px 200px;
    font-size: 1.5em;
    background-color: #FFF8F8;
    justify-content: center;
`;


export const LinkItem = styled.li`
    display: inline-block;
    margin-right: 1.5%;
    font-size: 16px;
    position: relative;
    border: 0.35em solid #0118D8;
    // border-image: linear-gradient(90deg,#0118D8,#1B56FD) 1;
    border-radius: 0.5em;
    min-width: 4.75em;
    min-height: 2.25em;
    font-family: 'Secular One', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
`;

 // &:hover {
    //     cursor: pointer;    
    //     border-radius: 1.1em;
    //     background: linear-gradient(90deg, #1B56FD, #0118D8);
    //     color: #FFF8F8; /* Letras brancas */
    //     -webkit-text-fill-color: #FFF8F8;
    //     background-clip: border-box;
    //     -webkit-background-clip: border-box;
    //     transition: 0.6s;
    //     border: none;
    // }
//Link -->  display: inline-block, width: 100%

export const Content = styled.div`
    display: grid;
    justify-content: center;
    font-size: 2em;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    background-color: #0118D8;
    color: #FFF8F8;
    width: 60%;
    margin: 0 auto;
    border-radius: 1.5%;
`;

export const FooterElement = styled.footer`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 7rem;
    color: #FFF8F8;
    background-color:  #0118D8;
`;