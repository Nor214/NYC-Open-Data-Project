function card(info){
  build = `<div class="fitted card">
              <h2>${info.violation}</h2>
              <h4>${info.issue_date}</h4>
              <h4>${info.violation_time}</h2>
              <hr>
              <p>License Type: ${info.license_type}</p>
              <p>Issuing Agency: ${info.issuing_agency}</p>
              <p>County: ${info.county}</p>
           </div>`;
  return build;
}