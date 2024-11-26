import { criarGrafico, getCSS, incluirTexto } from "./common.js";

function gerarGraficoTurma() {
    const dadosTurmas = [
        { turma: "8B", tiktok: 19, instagram: 7, facebook: 0 },
        { turma: "8C", tiktok: 14, instagram: 6, facebook: 0 },
        { turma: "8D", tiktok: 13, instagram: 12, facebook: 0 },
        { turma: "9A", tiktok: 14, instagram: 3, facebook: 0 },
        { turma: "9B", tiktok: 17, instagram: 4, facebook: 0 },
        { turma: "9C", tiktok: 12, instagram: 4, facebook: 0 },
        { turma: "1A", tiktok: 15, instagram: 11, facebook: 4 },
        { turma: "2A", tiktok: 17, instagram: 7, facebook: 10 }
    ];

    // Processa cada turma para gerar o gráfico
    dadosTurmas.forEach(turma => {
        const valores = [turma.tiktok, turma.instagram, turma.facebook];
        const labels = ['Tiktok', 'Instagram', 'Facebook'];

        const data = [{
            values: valores,
            labels: labels,
            type: 'pie',
            textinfo: 'label+percent'
        }];

        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            height: 400,
            title: {
                text: `Redes sociais preferidas da turma ${turma.turma}`,
                x: 0,
                font: {
                    color: getCSS('--primary-color'),
                    family: getCSS('--font'),
                    size: 20
                }
            },
            legend: {
                font: {
                    color: getCSS('--primary-color'),
                    size: 16
                }
            }
        };

        // Cria o gráfico de pizza
        criarGrafico(data, layout);

        // Adiciona texto explicativo sobre as preferências
        incluirTexto(`Na turma ${turma.turma}, o <span>Tiktok</span> foi a rede social mais popular, seguido por <span>Instagram</span> e <span>Facebook</span>.`);
    });
}

gerarGraficoTurma();
