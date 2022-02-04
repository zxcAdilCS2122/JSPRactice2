//Highlight all words over 8 character
const setup = () => {
  const p = document.querySelector('p');

  wrapWordsWithLengthEight(p);
}

const check = (word) => {


  const thisCharacter = word.includes(".", word.length - 1)
  || word.includes(",", word.length - 1)
  || word.includes('?', word.length - 1);

  const wordLength = thisCharacter ? (word.length -1) : word.length;
  if(wordLength > 8) {
    const spanContent = thisCharacter ? word.substring(0, word.length - 1) : word;
    const endCharacter = thisCharacter ? (word.substring(word.length - 1)) : '';
    word = `<mark>${spanContent}</mark>${endCharacter} `;
  }
  else word = `${word} `;

  return word;
};

const wrapWordsWithLengthEight = (target) => {

  const text = (target.textContent).trim().split(' ').map(check).join('');
  target.innerHTML = text;
}

window.addEventListener('load', setup);
//count the number of words in paragraph tag

function countWords(){


    var paragraphs = document.getElementsByTagName("p");


    var count = 0;

    for(var i = 0; i < paragraphs.length; i++)
    {
        count += paragraphs[i].innerHTML.split(' ').length;
    }

    document.write("Words: "+count);
}
countWords();
// Replace question and exclamation marks
Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲');
})


paragraph.innerHTML = paragraph.innerHTML
 .split(/\.[^\.|<]/)
 .join('.</p><p>') + '</p>';
