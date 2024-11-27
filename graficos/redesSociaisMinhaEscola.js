import { getCSS, criarGrafico, incluirTexto } from "./common.js";

async function redesFavoritasMundo() {
    // Substituir pela pesquisa global, adaptada de dados globais
    const redes = ['Instagram', 'Facebook', 'WhatsApp', 'Twitter', 'TikTok', 'Outras'];
    const valores = [25, 20, 15, 10, 15, 15]; // As porcentagens adaptadas da pesquisa

    const data = [
        {
            values: valores,
            labels: redes,
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
            text: 'Redes sociais favoritas globalmente',
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
        Globalmente, o <span>Instagram</span> se destaca como a rede social favorita com 25% de preferência. Em seguida, temos o <span>Facebook</span> com 20%, e <span>WhatsApp</span> com 15%.<br>
        Outras plataformas como <span>Twitter</span>, <span>TikTok</span>, e outras também têm uma participação significativa, mostrando a diversidade de preferências.
    `);
}

redesFavoritasMundo();
