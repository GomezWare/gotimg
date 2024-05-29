# GotImg

GotImg is a API to generate images placeholders

## Install

1. Install packages `npm i`
2. Build the aplication `npm run build`
3. Start the server `node ./dist/server/entry.mjs`

## Use

### Generating 1:1 images

![https://gotimg.gomeware.dev/200](https://gotimg.gomeware.dev/200)
   
`https://gotimg.gomeware.dev/<width>`

### Generating custom size images

![https://gotimg.gomeware.dev/256/128](https://gotimg.gomeware.dev/256/128)
   
`https://gotimg.gomeware.dev/<width>/<height>`

### Generating images with colors

![https://gotimg.gomeware.dev/256/128/acf](https://gotimg.gomeware.dev/256/128/acf)
   
`https://gotimg.gomeware.dev/<width>/<height>/<hex>`
      
![https://gotimg.gomeware.dev/256/128/teal](https://gotimg.gomeware.dev/256/128/teal)
   
`https://gotimg.gomeware.dev/<width>/<height>/<htmlcolor>`

### Generating selecting output formats
**Suported formats**
    
    - jpeg
    - png

![https://gotimg.gomeware.dev/500/128/red/png](https://gotimg.gomeware.dev/500/128/red/png)
`https://gotimg.gomeware.dev/<width>/<height>/<htmlcolor>/png`

![https://gotimg.gomeware.dev/500/128/red/jpeg](https://gotimg.gomeware.dev/500/128/red/jpeg)
`https://gotimg.gomeware.dev/<width>/<height>/<htmlcolor>/jpeg`