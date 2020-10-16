var getAllRecords = function() {
    $.getJSON(
      `https://api.airtable.com/v0/appjwpiqXF4HFv6V0/Page?api_key=keyxt8HjuBRrLoU37`,
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          let id = record.id;
          let name = record.fields["name"];
          let description = record.fields["description"];
          let wholeText = record.fields["wholeText"];
          let image = record.fields["image"];
          let link = record.fields["link"];

          html.push(listContainer(id, name, description, wholeText, image, link));
        });
        $(".projects-container").append(html);
      }
    );
  };

  const listContainer = (id, name, description, wholeText, image, link) => {
      if(!image){
          image = "";
      }
      else{
          image = image[0].url;
      }

      if(link)
      {
          let tmp = link;
          link = `<a id="git"href="${tmp}" target="_blank"><i class="devicon-github-plain" id="social"></i></a>`;
      }
      else{
        link = `<a id="git"><i id="social" class="devicon-devicon-plain"></i></a>`;
      }
      return `    
      <!-- Button trigger modal -->
      <a data-toggle="modal" data-target="#${id}">
      <div class="project-card">
        <h4 style="text-align: center;">${name}</h4>
        <p class="p">
        ${description}
        </p>
        <div class="hov">Click to expand</div>
        ${link}
        
        </div>
      </a>
      <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${id}">${name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>${wholeText}</p>
              <a <img src="${image}" width= 470px height = 450px alt=""/> </a>
            </div>
          </div>
        </div>
      </div>
    `;
  };

getAllRecords();
