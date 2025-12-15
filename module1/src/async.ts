type User ={
    name : string,
    age : number
}

const fetchData = ():Promise<User>=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve ({
                name : 'John',
                age : 30
            })
        }, 2000);
    })
}

const getUser = async ():Promise<User> =>{
    const data : User = await fetchData();
    return data;
}   
getUser().then((user) => console.log(user));        
