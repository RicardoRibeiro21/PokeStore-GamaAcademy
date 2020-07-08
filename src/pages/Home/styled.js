import styled from 'styled-components';

// Carrinho 
export const Input = styled.input`
height: 1.5rem;
padding: 0 .5rem; 
border: 1px solid #ddd;
border-radius: .25rem 0 0 .25rem;
margin: 8% 0;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const Body = styled.div`
    width: 100vw;    
    display: flex;        
    justify-content: center;
    flex-direction: column;   
    align-items: center;
`

// Seção dos Cards
export const Content = styled.div`
    width: 100vw;
    display: flex;    
    justify-content: center;    
    flex-direction: row;    
    margin: 2% 0;
`;

export const ContainerCards = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 240px);
    grid-auto-flow: row;
`;

export const Card = styled.div`
    margin: 0 5%;
    border-bottom: #EB2049 groove 2px;
    &:hover {
        opacity: 75%;        
    };
    &:focus {
        background: #333;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 45%;
`;

export const Button = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;
    margin: 5% 15% 10%;
    height: 1.8rem;    
    color: #fff;
    background: #333;
    cursor: pointer;
    &:focus {
        cursor: pointer;
    };
    &:active {
        outline: none;
        box-shadow: none;        
    }
`;

// Estilizações do Carrinho
export const Carrinho = styled.div`
    width: 25%;
    background-color: rgba(24,251,110,0.7);    
`;