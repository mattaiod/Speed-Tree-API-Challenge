/////////////////////////////   -> am I a winner <- //////////////////////////////
amIAWinner = (listOrderKeyWithTime, timeAllKeyWithoutOptimization) => {
  const isGoodAnswer =
    JSON.stringify(listOrderKeyWithTime) ===
      JSON.stringify([
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
      ]) && timeAllKeyWithoutOptimization === 1368
  if (isGoodAnswer) {
    console.log("You are a winner ! 🎉")
    return true
  } else {
    console.log("Try again dude ! 😢")
    return false
  }
}
/////////////////////////////   -> API <- //////////////////////////////
const callApi = (timeToWait) => {
  return new Promise((resolve) => setTimeout(resolve, timeToWait))
}
/////////////////////////////   -> OBJECT TO TRAVEL <- //////////////////////////////
const objToTravel = {
  A: {
    C: {
      F: {
        J: {
          M: {
            P: {
              R: {
                S: "null",
              },
            },
            Q: "null",
          },
        },
      },
      G: "null",
    },
    D: {
      H: {
        K: {
          N: "null",
          O: "null",
        },
        L: "null",
      },
      I: "null",
    },
    E: "null",
  },
  B: "null",
}
/////////////////////////////   -> Functions To Implement <- //////////////////////////////
const performRequestApi = () => {
  const tabTime = [
    10, 500, 2, 33, 4, 53, 5, 41, 343, 9, 4, 45, 2, 49, 1, 200, 10, 34, 23, 32,
  ]
  await callApi(timeToWait)
}

const travelTreeWithOptimization = () => {}

/////////////////////////////   -> MAIN <- //////////////////////////////

const listOrder = []

const startTime = performance.now()

travelTreeWithOptimization(totalTimeWithoutOptimization, listOrder).then(
  () => {
    const endTime = performance.now() - startTime
    amIAWinner(listOrder, totalTimeWithoutOptimization)
    console.log("1. time with optimization:", endTime, "ms")
    console.log("2. time of all keys of the tree:", totalTimeWithoutOptimization, "ms")
    console.log(listOrder)
  }
)
