Tem uma galera aí que faz crossfit, que todo mês publica uma lista dos pesos do pessoal numa espécie de ranking, o João tá sempre em último, o que quer dizer que ele é o mais pesado e ele tá preocupado.

Mas a gente teve uma __BAITA__ ideia, a gente vai mudar a ordem da lista, vamos atribuir um "peso" a cada número, o peso vai ser a soma dos seus digitos. Você está encarregada da lista.

Por exemplo, 99 vai ter "peso" 18, 100 vai ter "peso" 1, então na lista 100 vai vir antes de 99. Dado uma string com os pesos do pessoal do crossfit numa ordem qualquer, você consegue ordenar pelo "peso" desses números?

Example:
`"56 65 74 100 99 68 86 180 90"` ordernado pelos pesos se torna: `"100 180 90 56 65 74 68 86 99"`

Quando dois números tiverem o mesmo "peso" por exemplo 180 e 90, vamos classificá-los como strings e não números: então `"90 100 180"` se torna `"100 180 90"` 100 vem antes porque seu peso é 1, agora 180 e 90 tem ambos peso 9, então 180 deve vir antes de 90 pois ele vem antes como uma string.

### Notas
- Todos os números na lista são positivos
- A lista pode vir vazia
- Pode ter mais de um espaço em branco entre um peso e outro
