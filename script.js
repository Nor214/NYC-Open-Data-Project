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

function otherinit(){
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

function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}

function DeathByYears(){
  let twenty21 = 0, twenty20 = 0, twenty19 = 0, twenty18 = 0, twenty17 = 0, twenty16 = 0, twenty15 = 0;
  let data = "data.json"

  for(let i = 0; i < data.length; i++){
    let death = data[i];
    if(death.year == "2021"){
      twenty21++;
    }else if(death.year == "2020"){
      twenty20++;
    }else if(death.year == "2019"){
      twenty19++;
    }else if(death.year == "2018"){
      twenty18++;
    }else if(death.year == "2017"){
      twenty17++;
    }else if(death.year == "2016"){
      twenty16++;
    }else if(death.year == "2015"){
      twenty15++;
    }
    
  }
  let chartData = [
    ["2021",twenty21],
    ["2020",twenty20],
    ["2019", twenty19],
    ["2018", twenty18],
    ["2017", twenty17]
    ["2016", twenty16]
    ["2015", twenty15]
  ]
  
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}

