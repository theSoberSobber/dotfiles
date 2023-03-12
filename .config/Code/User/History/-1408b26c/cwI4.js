const {readFile, writeFile} = require("fs/promises"); 
const { marked } = require('marked');
const base = "https://github.com/theSoberSobber/CP-Snippets/blob/main/snippets.json"; 

(async () => { 
    let file = await JSON.parse(await readFile('./snippets.json', 'utf8')); 
    // console.log(file);
    let pre = {}; 
    let t=2; 
    for(let i in file){ 
        pre[i]=t; 
        t+=file[i].body.length+6; 
    }
    let final=`
# CP Snippets

---

`;
    for(let topic in file){
        let code="";
        for(let line in file[topic].body){
            code+=file[topic].body[line];
            code+='\n';
        }
        code = code.substring(0, code.length-1);
        final += `
## ${topic}

- ${file[topic].description}
- [github](${base}#L${pre[topic]})

\`\`\`cpp
${code}
\`\`\`

---
`;
    }
    let html="";
    
    await writeFile('./index.html', marked.parse(final)); 
})();