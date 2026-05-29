async function init(){
    let link = "data.json"
    info = await fetch(link);
    data = await info.json();

    output = get("output");

    let build = ""
    for(let i = 0; i < data.length; i += 1){
      build += "card(data)"
    }
}