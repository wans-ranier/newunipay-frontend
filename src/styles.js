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
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-size: 1.5em;
`;

export const LinkItem = styled.li`
    text-decoration: none;
    color: #1B56FD;
    &:hover {
        background-color: #FFF8F8;
    }
`;

export const Content = styled.div`
    font-size: 2em;
    text-align: center;
    padding: 10px;
    background-color: #0118D8;
    color: #FFF8F8;
`;

export const FooterElement = styled.footer`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 7rem;
    color: #FFF8F8;
    background-color:  #0118D8;
`;

// export const FooterElement = styled.footer`
//     bottom: 0;
//     position: absolute;
//     width: 100%;
//     height: 7rem;
//     color: #FFF8F8;
//     background: linear-gradient(
//         180deg,
//         #0118D8 0%,
//         #1B56FD 60%,
//         #E9DFC3 100%
//     );
// `;
