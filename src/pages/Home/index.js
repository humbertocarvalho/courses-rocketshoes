import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FF">
              3
            </MdAddShoppingCart>
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            {/* TODO Verificar por que não consigo adicionar a quantidade como texto aqui */}
            <MdAddShoppingCart size={16} color="FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
