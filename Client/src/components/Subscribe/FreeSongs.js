export const freeSongs = type => {
    
    switch(type)
    {
        case 'SILVER':
            localStorage.setItem('free', 2);
            break;
        case 'GOLD':
            localStorage.setItem('free', 5);
            break;
        case 'DIAMON':
            localStorage.setItem('free', 10);
            break;
    }
}