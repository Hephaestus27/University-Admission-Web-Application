function sorticon(number){
    let Icons = document.getElementsByClassName(sorting);

    for(i=0; i<=4;i++){
    if(i == number){

        Icons[i].className = "sorting fa-solid fa-arrow-down-short-wide is-succes";

    }else{
        Icons[i].className = "sorting fa-solid fa-arrow-up-short-wide";

    }

    }
  }