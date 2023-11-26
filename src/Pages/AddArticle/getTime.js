const date = new Date();

export const getTime = () =>{
    const time = date.getDate() + ' / ' + date.getMonth() + ' / '
                    + date.getFullYear();
    return time;
}

