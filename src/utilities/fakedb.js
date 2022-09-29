// use local storage to manage cart data
const addToDb = List =>{
    localStorage.setItem('break-time', List);
}

export {
    addToDb, 
}