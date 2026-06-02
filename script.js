let data;
async function init(){
    let link = "data.json"
    info = await fetch(link);
    data = await info.json();

    let output = get("output");

    let build = ""
    for(let i = 0; i < data.length; i += 1){
      let death = data[i]
      build += card(death)
    }

    output.innerHTML = build
}

function filterbyyear(){
    let output = get("output");
    let year = get("yeardrop").value;
    let build = "";

    for(let i = 0; i < data.length; i += 1){
      let death = data[i]
      if(death.year == year){
        build += card(death)
      }
    }
    output.innerHTML = build
}

function filterbygender(){
    let output = get("output");
    let gender = get("gender").value;
    let build = "";

    for(let i = 0; i < data.length; i += 1){
      let death = data[i]
      if(death.sex == gender){
        build += card(death)
      }
    }
    output.innerHTML = build
}

function filterbyboth(){
    let output = get("output");
    let gender = get("gender").value;
    let year = get("yeardrop").value;
    let build = "";

    for(let i = 0; i < data.length; i += 1){
      let death = data[i]
      if(death.sex == gender && death.year == year){
        build += card(death)
      } else if(gender == "Both" && death.year == year){
        build += card(death)
      } else if(year == "2018" && gender == "Female" && death.sex == "F"){
        build += card(death)
      } else if(year == "2018" && gender == "Male" && death.sex == "M"){
        build += card(death)
      }
    }
    output.innerHTML = build
}

