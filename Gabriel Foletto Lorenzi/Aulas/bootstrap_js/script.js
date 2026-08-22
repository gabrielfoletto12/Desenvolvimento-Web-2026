const cursos = [
    {
        id: 1,
        nome : "HTML e CSS",
        descricao: "Aprenda a estrutura",
        cargaHoraria: 40,
        ativo: true, 
        categoria: "Frontend"
    },
    {
        id: 2,
        nome : "JavaScript",
        descricao: "Aprenda a programar",
        cargaHoraria: 40,
        ativo: true, 
        categoria: "Backend "
    }
];

const listaCurso = document.querySelector("#listaCursos");
const btnTodos = document.querySelector("#btnTodos");
const btnAtivos = document.querySelector('#btnAtivos');

function renderizarCursos(list){


    lista.forEach(element => {
        const card = ` 
            <div>
            <span>
                #CATEGORIA
            </spa>
                ${cursos.categoria}
                <h3>
                    ${cursos.categoria}
                </h3>
                <p>
                    ${cursos.descricao}
                </p>
            </div>

        `;
        listaCursos.insertAdjacentHTML("beforeend", card);

    });
}

renderizarCursos(cursos);
btnTodos.addEventListener("click", () => {}); 
 
 
 
