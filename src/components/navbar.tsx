import * as React from 'react';
import * as S from '../pages/Home/styled';

type MenuProps = {
    funcao: Function;
}

export const Menu = ({ funcao }: MenuProps) => {
    return (
        <S.Menu>
            <S.Input onChange={funcao} placeholder="Digite o nome do pokémon" />
            <S.ButtonStore>Pesquisar</S.ButtonStore>
        </S.Menu>
    )
}
