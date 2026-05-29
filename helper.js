function get(id){
  return document.getElementById(id);
}

function card(info){
  build = `<div class="fitted card">
              <h2>${info.year}</h2>
              <h4>${info.leading_cause}</h4>
              <hr>
              <h4>${info.sex}</h4>
              <h4>${info.race_ethnicity}</h4>
              <h4>${info.death_rate}</h4>
           </div>`;
  return build;
}