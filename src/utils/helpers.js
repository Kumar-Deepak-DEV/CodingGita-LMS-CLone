export function getInitials(name){
    if(!name) return "";

    const word = name.split(" ");

    if(word.length === 1) return word[0][0].toUpperCase();

    return  word[0][0].toUpperCase()+ word[1][0].toUpperCase();;
}