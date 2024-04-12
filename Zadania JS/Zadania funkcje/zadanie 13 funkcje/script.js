function choinka(ilePozimow){
const wielkoscPodstawy = ilePozimow * 2 - 1
 const srodek = Math.ceil(wielkoscPodstawy / 2);
 
 for(let i = 0; i < ilePozimow; i++){
    let poziomChoinki = "";
    for(let j = 0; j <= wielkoscPodstawy; j++){
        if(j >= srodek - i && j <= srodek + i){
            poziomChoinki = poziomChoinki + "#";
        } else {
            poziomChoinki = poziomChoinki + " ";
        }
    }
    console.log(poziomChoinki);
 }
}
choinka(10);






