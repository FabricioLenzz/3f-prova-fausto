import React from 'react';
import '../styles/Inicial.css';
import Album from '../pages/Album'; // Importe a página que deseja renderizar


export default function Inicial() {
  return (
    <div>

      <div class="header-inicio">
        <h1 style={{color: 'black'}}>Restaurante dos Guri
        </h1>
        <div class="descricao">
          <p> Pratos.</p>
        </div>
        <div class="botoes">
          <button class="azul">Selecionar o seu Prato</button>
          <button class="cinza">Voltar para o menu</button>
        </div>
      </div>
      <Album /> {/* Renderize o componente Album dentro do componente Inicial */}
    </div>
  );
}
