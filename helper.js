function get(id){
  return document.getElementById(id);
}

function card(info){
  build = `<div class="card line">
              <h2>${info.year}</h2>
              <h4>${info.leading_cause}</h4>
              <h4>Deaths due to cause: ${info.deaths}</h4>
              <hr>
              <h4>Victim's Sex: ${info.sex}</h4>
              <h4>Victim's Ethnicity: ${info.race_ethnicity}</h4>
              <hr>
              <h4>Death Rate: ${info.death_rate}</h4>
              <h4>Age adjusted Death Rate: ${info.age_adjusted_death_rate}</h4>
           </div>`;
  return build;
}