import styled from 'styled-components';

const a = document.getElementById('root').style = `
    margin-top: -7px;    
`

export const Menu = styled.div`
    width: 90%;
    height: 3rem;
    margin-top: 0;
    background: #333;
    dispay: flex;        
`

// Carrinho 
export const Input = styled.input`
    height: 1.5rem;    
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    margin: .5rem 10%;
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
    margin: 5% 5%;
    padding: 1rem;
    border-bottom: #EB2049 groove 2px;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    &:hover {        
        transition: 0.5s;
        background: #333; 
        color: white;                 
        border-bottom: #333 groove 2px;
        button {
            background: #EB2049;
            border: #EB2049;
        }
    };
    &:focus {
        background: #333;
    };
    
`;

export const Img = styled.img`
    width: 100%;
    height: 45%;
`;

export const Button = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;
    margin: 5% 15% 10%;
    height: 2rem;    
    color: #fff;
    background: #333;
    cursor: pointer;
    // &:active {
    //     outline: none;
    //     box-shadow: none;        
    // }
`;

export const ButtonStore = styled.button`
    border: 1px solid #333;
    border-radius: .25rem ;    
    height: 2rem;    
    color: #fff;
    background: #EB2049;
    cursor: pointer;
    &:active {
        outline: none;
        box-shadow: none;                
    };
    &:hover {
        transition: 0.2s;
        height: 2.5rem;        
    };
`;

// Estilizações do Carrinho
export const Carrinho = styled.div`
    position: relative;    
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;    
    margin-left: 5%;
    padding: 5px;
    border: 2px groove rgba(255, 0, 0, .35);
    border-radius: .5rem;
    text-align: center;        
`;

export const Table = styled.table`
   width: 100%;   
   height: 250px;
   overflow-y: scroll;
   ::-webkit-scrollbar {
       border-radius: .5rem;
       width: 12px;
       background: #EBF0F6;
   };
   ::-webkit-scrollbar-thumb {
       border-radius: .5rem;
       background: #EB7075;
   };
   img {
       height: 120%;
       width: 70%;
   };
   thead, tbody{
       display: block;  
    }
`;

export const TableRow = styled.tr`
    cursor: pointer;    
    &:hover {
        opacity: 75%;            
    };
`;

export const TableColumn = styled.td`
   width: 41%;
`;

export const CarrinhoFooter = styled.div`
   display: flex;
   width: 90%;
   margin: 5% 0;
   align-items:center;
   background: red;
   color: #fff;
   background: #333;
   justify-content: space-around;
   border-radius: .5rem;
   
`;