import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuariosPorRede() {
    // Dados de usuários (simulados com base no seu exemplo)
    const dadosUsuarios = {
        Tiktok: 1.1,    // em bilhões
        Instagram: 1.0, // em bilhões
        Facebook: 2.9   // em bilhões
    };

    const redes = Object.keys(dadosUsuarios);
    const usuarios = Object.values(dadosUsuarios);

    const data = [
        {
            x: redes, 
            y: usuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Redes sociais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    criarGrafico(data, layout);
}

quantidadeUsuariosPorRede();
