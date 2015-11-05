//Skapa en action, en action talar bara om att något hänt och skickar med vilken typ
//av händelse det är och vlafria data.
export const RANDOMIZE = 'RANDOMIZE' //Man brukar använda konstanter för att tala om typen på en action.
export function randomize(length){
  return {
    type: RANDOMIZE,
    length //om posten i objektet har samma namn som den tilldelade variabeln behöver man inte speca det
  }
}
export const CLEANIT = 'CLEANIT'
export function cleanit(length) {
  return {
    type: CLEANIT,
    length
  }
}

export const GREYIT = 'GREYIT'
export function greyit() {
  return {
    type: GREYIT,
    length
  }
}
