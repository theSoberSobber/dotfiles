const css =`<style>
:root{--background-color:#EEEEEE;--text:#444444;--link-color:teal;}
@media(prefers-color-scheme:dark){
:root{--background-color:#222222;--text:#CCCCCC;--link-color:cadetblue;}}
body{background:var(--background-color);color:var(--text);}
body{margin:30px auto;max-width:700px;line-height:1.6;font-size:18px;font-family:Arial,Helvetica,sans-serif;color:var(--text);background:var(--background-color);padding:0 10px;}
h1{line-height:1.2;text-align:center;}
h2,h3{line-height:1.2;}
td,th{border:none!important;}
table{width:100%!important;}
a{color:var(--link-color);text-decoration:none;}
pre code{-webkit-overflow-scrolling: touch; display: block; overflow-x: scroll;}
</style>`;

const base = "https://github.com/theSoberSobber/CP-Snippets/blob/main/snippets.json"; 
const self = "https://thesobersobber.github.io/CP-Snippets";
const gh = "https://github.com/theSoberSobber"; 
const ld = "https://www.linkedin.com/in/pavitchhabrawork"
const cf = "https://codeforces.com"

const {readFile, writeFile} = require("fs/promises"); 
const { marked } = require('marked');

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

| [About](${self}) | [Codeforces](${cf}) | [GitHub](${gh}) | [LinkedIn](${ld}) |
| - | - | - | - |

## About

A collection of CPP Snippets to aid in competetive programming. <br />
This site was auto generated with the help of [marked](https://www.npmjs.com/package/marked).

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
    await writeFile('./index.html', css+marked.parse(final)); 
})();