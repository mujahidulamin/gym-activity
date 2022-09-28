// use local storage to manage cart data
const addToDb = List =>{
    localStorage.setItem('break-time', List);
}

const getStoredList = () => {
    let list = {};

    //get the shopping cart from local storage
    const storedList = localStorage.getItem('break-time');
    if(storedList){
        list = JSON.parse(storedList);
    }
    return list;
}




export {
    addToDb, 
    getStoredList,
}