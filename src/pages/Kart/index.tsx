import React, { useState, useEffect, ChangeEvent, FormEvent} from 'react';
import api from '../../services/api';


interface Pokemon {
    name: string,
    url: string
}
const Kart = () => {
  return (
      <div>
          <p> Bem vindo ao carrinho!</p>
      </div>
  )
}

export default Kart;