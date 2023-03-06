import arnaldo from '../assets/itens/arnaldo.jpg';
import churrasco from '../assets/itens/churrasco.png';
import parmegiana from '../assets/itens/parmegiana.png';
import spaten from '../assets/itens/spaten.jpg';
import bonarabe from '../assets/itens/bonarabe.png';
import esfira from '../assets/itens/esfiha.jpg';
import esfiraCalabresa from '../assets/itens/esfiha_calabresa.jpg';
import esfiraCalabresaCreamChease from '../assets/itens/esfiha_calabresa_creamchease.jpg';

export const mockStores = [
    {
        id: 1,
        name: 'Churrascaria do arnaldo',
        note: '5.0',
        timeToDeliver: 30,
        category: 'Brasileira',
        image: arnaldo,
        items: [
            {
                id: 321321,
                name: 'Combo mistão (serve 4 pessoas) + Guaraná 2litros',
                price: 138.00,
                image: churrasco
            },
            {
                id: 123187,
                name: 'Combo parmegiana (serve 4 pessoas) + Guaraná 2 litros',
                price: 128.00,
                image: parmegiana
            },
            {
                id: 7182919,
                name: 'Spaten log nek 10 unidade',
                price: 105.50,
                image: spaten
            }
        ]
    },
    {
        id: 2,
        name: 'Bonárabe - Parnamirim',
        note: '5.0',
        timeToDeliver: 40,
        category: 'Árabe',
        image: bonarabe,
        items: [
            {
                id: 12311211,
                name: 'ESFIHA DE BACON C/ CHEDDAR',
                price: 5.99,
                image: esfira
            },
            {
                id: 123187,
                name: 'ESFIHAS DE CALABRESA',
                price: 3.99,
                image: esfiraCalabresa
            },
            {
                id: 7182919,
                name: 'ESFIHA DE CALABRESA C/ CREAM CHEESE',
                price: 3.99,
                image: esfiraCalabresaCreamChease
            }
        ]
    }
]