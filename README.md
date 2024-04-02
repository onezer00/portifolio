# PORTIFÓLIO

```
Este portifólio foi desenvolvido com o propósito de listar meus projetos e integra-lo à página do portifólio do App em React.

Deixo aqui o agradecimento a comunidade React e Python.
```

### Estrutura do projeto
   - app/
        - src/
            - pages/ - `Aqui ficará todas as páginas de navegação do NavBar.`
            - App.js - `Onde fica toda estrutura da home page.`
   - server/
        - projects/ - `Aqui será implementado todos os  projetos que serão integrados ao frontend.`
        - tests/ - `Armazenará todos os testes unitários.`
        - app - `Inicia o server backend python e armazena a criação das rotas.`

### Decisão de arquitetura
O projeto foi desenvolvido com uma arquitetura pensada para otimizar custos. A estratégia adotada envolve a implementação de um container distinto para cada "projeto" e para o frontend. Essa abordagem foi cuidadosamente escolhida para permitir o uso de uma única máquina, com a possibilidade de escalonamento conforme a demanda. Dessa forma, conseguimos maximizar a eficiência dos recursos e garantir uma expansão flexível e econômica do sistema.

### Visão inicial do projeto

Todas as páginas ainda estão em construção, então inicialmente só tenho a Home Page criada.
A seguir você pode ter uma prévia do layout que criei.

[![Home Page](https://github.com/onezer00/portifolio/blob/main/midia/home.png)]