//Skapa en action, en action talar bara om att något hänt och skickar med vilken typ
//av händelse det är och vlafria data.
export const RANDOMIZE = 'RANDOMIZE' //Man brukar använda konstanter för att tala om typen på en action.
export function randomize(length){
  return {
    type: RANDOMIZE,
    length //om posten i objektet har samma namn som den tilldelade variabeln behöver man inte speca det
  }
}

export const SORTLIST = 'SORTLIST' //Man brukar använda konstanter för att tala om typen på en action.
export function sortList(){
  console.log('Action sort')
  return {
    type: SORTLIST
  }
}
