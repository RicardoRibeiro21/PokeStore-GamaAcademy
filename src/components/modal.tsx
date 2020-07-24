import React from 'react';
import { Pokemon } from '../interfaces/interfaces';
import { Modal, Button } from 'react-bootstrap';

const ModalPokemon = (pokemon: Pokemon) => {
    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p>{pokemon.name}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex' }}>
                        <img style={{ width: '30%' }} src={pokemon.img}></img>
                        <div style={{ width: '50%' }}>
                            <p>{pokemon.weight}</p>
                            <p>Preço: {pokemon.price}</p>
                        </div>
                        {/* <p>Carrinho ({props.car === null ? 0 : props.car.length}) </p> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button> Fechar</Button>
                    <Button> Adicionar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalPokemon;
