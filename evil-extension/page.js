const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if (node.nodeType === Node.TEXT_NODE) {
    console.log('text:' + node.textContent);
    //node.replace(index,item);
    /*for(var key in MATCH_LIST){
      node.textContent = node.textContent.replace(/there/g,MATCH_LIST[key]);
    }*/
    node.textContent = node.textContent.replace(/\bthere\b/g,"$$$the_match_1@@@");
    node.textContent = node.textContent.replace(/\btheir\b/g,"$$$the_match_2@@@");
    node.textContent = node.textContent.replace(/\bthey're\b/g,"$$$the_match_3@@@");
    node.textContent = node.textContent.replace(/\bThere\b/g,"$$$the_match_4@@@");
    node.textContent = node.textContent.replace(/\bTheir\b/g,"$$$the_match_5@@@");
    node.textContent = node.textContent.replace(/\bThey're\b/g,"$$$the_match_6@@@");
    node.textContent = node.textContent.replace(/\bTHERE\b/g,"$$$the_match_7@@@");
    node.textContent = node.textContent.replace(/\bTHEIR\b/g,"$$$the_match_8@@@");
    node.textContent = node.textContent.replace(/\bTHEY'RE\b/g,"$$$the_match_9@@@");

    node.textContent = node.textContent.replace(/\$\$the_match_1\@\@\@/g,MATCH_LIST['there']);
    node.textContent = node.textContent.replace(/\$\$the_match_2\@\@\@/g,MATCH_LIST['their']);
    node.textContent = node.textContent.replace(/\$\$the_match_3\@\@\@/g,MATCH_LIST["they're"]);
    node.textContent = node.textContent.replace(/\$\$the_match_4\@\@\@/g,MATCH_LIST['There']);
    node.textContent = node.textContent.replace(/\$\$the_match_5\@\@\@/g,MATCH_LIST['Their']);
    node.textContent = node.textContent.replace(/\$\$the_match_6\@\@\@/g,MATCH_LIST["They're"]);
    node.textContent = node.textContent.replace(/\$\$the_match_7\@\@\@/g,MATCH_LIST['THERE']);
    node.textContent = node.textContent.replace(/\$\$the_match_8\@\@\@/g,MATCH_LIST['THEIR']);
    node.textContent = node.textContent.replace(/\$\$the_match_9\@\@\@/g,MATCH_LIST["THEY'RE"]);

  } else {
    //console.log(level + root.nodeName);
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
