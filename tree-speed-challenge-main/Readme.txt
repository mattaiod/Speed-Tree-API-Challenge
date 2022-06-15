<Salutations>
Bonjour, tu viens d'arriver sur un challenge qui selon ton niveau et ta chance, peut plus ou moins te challenger.
Quoiqu'il en soit, tu progresseras beaucoup avec cet exercice et tu apprendras sûrement des choses très intéressantes 
sur le javascript. Si ce n'est pas le cas, bravo, on peut dire que tu touches déjà bien le javascript.

<Ennoncé>
L'objectif est de parcourir un arbre (ici sous forme d'object dans la constante: objToTravel) en optimisant son parcours
afin de parcourir l'arbre sans jamais perdre de temps. A chaque key de objToTravel, on attendra le temps défini
correspondant (selon son ordre d'arrivée) dans l'array tabTime: 
[10, 500, 2, 33, 4, 53, 5, 41, 343, 9, 4, 45, 2, 49, 1, 200, 10, 34, 23, 32]

Attention: Tu n'as le droit d'ajouter que du code dans la section "Functions To Implement" et "body". Il est interdit de supprimer
le code déjà existant dans ces parties.

<Réussite>
=> Tu n'as pas triché et la console affiche "You are a winner ! 🎉".

-> La fonction te permettant de savoir si tu as réussis est: amIAWinner(listOrderKeyWithTime, timeAllKeyWithoutOptimization)

- listOrderKeyWithTime est l'ordre d'optimisation de passage du tableau accompagné du temps de l'api associé.
résultat attendu: l'array ci-dessous:
[
  ["A", 10],
  ["C", 2],
  ["E", 4],
  ["G", 5],
  ["D", 33],
  ["F", 53],
  ["J", 9],
  ["M", 4],
  ["H", 41],
  ["L", 1],
  ["Q", 2],
  ["P", 45],
  ["K", 49],
  ["N", 10],
  ["O", 34],
  ["R", 200],
  ["S", 23],
  ["I", 343],
  ["B", 500],
 ]

- timeAllKeyWithoutOptimization est le temps total de tous les call api avec toutes les keys si on les avait fait une par une en attendant à chaque fois,
 ce temps doit être incrémenté à chaque fois que la fonction callApi(timeApi) a terminé. Résultat attendu:
1368



