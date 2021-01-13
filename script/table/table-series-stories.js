function tableData(characters) {
    createTable(characters);
}

function createTable(character) {
  let divTable = createDivision();
  let div = createDivision();
  divTable.addClass('scroll');
  div.addClass('col-md-6').addClass('col-sm-12').addClass('col-lg-6').addClass('col-12').addClass('show-characters').addClass('table-series-stories');

  let table = $('<table>');
  let thead = createThead();
  let tr = createTr();
  let thTitle = createTh();
  let thDescription = createTh();
  let tbody = createTbody();

  table.addClass('table');
  thead.addClass('thead-dark');
  thTitle.attr('scope', 'col');
  thDescription.attr('scope', 'col');

  thTitle.text('Title');
  thDescription.text('Description');

  tr.append(thTitle).append(thDescription);
  thead.append(tr);
  table.append(thead);
  
  character.data.results.forEach(characterData => {
    tbody.append(dataTable(model(characterData)))
  });

  table.addClass('table-bordered');

  table.append(tbody);

  divTable.append(table);
  div.append(divTable);

  $('#characters-data').append(div);
}

function dataTable(character) {
  let tr = createTr();
  let tdTitle = createTd();
  let tdDescription = createTd();

  tr.addClass('bg-warning');
  tdTitle.attr('scope', 'row').addClass('bg-warning');

  tdTitle.text(character.title);
  tdDescription.text(character.description);
  
  tr.append(tdTitle).append(tdDescription);

  return tr;
}

function createThead() {
  return $('<thead>');
}
function createTr() {
  return $('<tr>');
}
function createTh() {
  return $('<th>');
}
function createTd() {
  return $('<td>');
}
function createTbody() {
  return $('<tbody>')
}

function model(character) {
  return Character = {
    id: character.id,
    title: character.title,
    description: character.description
  }
}