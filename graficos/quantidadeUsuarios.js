import { getCSS, tickConfig, criarGrafico } from "./common.js";

async function quantidadeUsuariosPorRede() {
    // Dados adaptados globalmente
    const nomeDasRedes = ['Instagram', 'Facebook', 'WhatsApp', 'Twitter', 'TikTok', 'Outras'];
    const quantidadeDeUsuarios = [2.6, 2.9, 2.0, 0.4, 1.2, 0.5]; // Dados fictícios em bilhões de usuários (valores aproximados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
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
                text: 'Nome das redes sociais',
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
