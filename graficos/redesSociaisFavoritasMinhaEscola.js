import { criarGrafico, getCSS, incluirTexto } from "./common.js";

async function redesSociaisFavoritasMinhaEscola() {
    // Substituir pela pesquisa real
    const dadosPesquisa = [
        { rede: "Instagram", votos: 25 }, // 25% para Instagram
        { rede: "Facebook", votos: 20 },  // 20% para Facebook
        { rede: "WhatsApp", votos: 15 },  // 15% para WhatsApp
        { rede: "Twitter", votos: 10 },   // 10% para Twitter
        { rede: "TikTok", votos: 15 },    // 15% para TikTok
        { rede: "Outras", votos: 15 }     // 15% para outras redes
    ];

    processarDados(dadosPesquisa);
}

function processarDados(dados) {
    const redesSociais = dados.map(item => item.rede);
    const contagemRedesSociais = dados.map(item => item.votos);

    const data = [
        {
            values: contagemRedesSociais,
            labels: redesSociais,
            type: 'pie',
            textinfo: 'label+percent',
            marker: {
                colors: [
                    '#F5A623', // Instagram
                    '#3b5998', // Facebook
                    '#25D366', // WhatsApp
                    '#1DA1F2', // Twitter
                    '#69C9D0', // TikTok
                    '#E4E6EB'  // Outras
                ]
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais favoritas na minha escola',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    };

    criarGrafico(data, layout);
    incluirTexto(`
        A pesquisa revelou que o <span>Instagram</span> é a rede social favorita para 25% dos estudantes da minha escola, seguido pelo <span>Facebook</span> com 20%, e <span>WhatsApp</span> com 15%. <br>
        Outras plataformas como <span>Twitter</span>, <span>TikTok</span> e <span>outras redes</span> completam a preferência dos alunos, evidenciando a popularidade dessas redes em nosso meio.
    `);
}

redesSociaisFavoritasMinhaEscola();
