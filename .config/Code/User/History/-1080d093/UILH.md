# TODO - 

- bitset
- seg, fen, link, block
- static range sum
- binse tern
- tarjan, dfs tree

# Repo - 

- make it actually look good (Done, kinda)
- map the gh index to anchor tags by ids of the html page
- make a frontend for the snippet-gen script
- multi-page-site (index that redirects to codes with a fixed navbar)
- generalise the markdown site-gen engine and seperate it from just the codes page
    - split site-gen into
        - site-gen: converts md to html
        - code-gen: json snippets to code
- new workflow
    - make new file in snippets folder
    - snippet-gen converts it to snippet and adds it to the snippets.json file
- generate initial snippets folder from snippets.json using site-gen's JSON to code generation module
- make the index variables global and import them
- move site and gh page deployment to a site folder