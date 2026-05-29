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
    let year = get("yeardrop.value");

    let build = ""
    if(year == "twentyfive"){
      for(let i = 0; i < data.length; i += 1){
        let death = data[i]
        build += card(death)
      }
    }  
    output.innerHTML = build
}

