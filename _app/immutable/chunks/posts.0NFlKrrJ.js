import{w as n}from"./index.BI7v63FY.js";import{C as i}from"./scheduler.FGUOCI5T.js";function S(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}var c={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const e={author:{avatar:"/assets/myimg@512.png",bio:"Hi, I'm Wesam Almasruri, a 16-year-old software developer and web designer from Oman. I've been passionate about coding since childhood and love creating websites.",name:"Wesam Almasruri",status:"👨‍💻"},description:"Wesam Almasruri's Blog",domain:c.URARA_SITE_DOMAIN??"blog.wesam.site",lang:"en-US",protocol:c.URARA_SITE_PROTOCOL??!1?"http://":"https://",subtitle:"Wesam Almasruri's Blog",themeColor:"#3D4451",title:"WESAMDEV"},w={sizes:"48x48",src:`${e.protocol+e.domain}/favicon.png`,type:"image/png"},R={180:{sizes:"180x180",src:`${e.protocol+e.domain}/assets/any@180.png`,type:"image/png"},192:{sizes:"192x192",src:`${e.protocol+e.domain}/assets/any@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${e.protocol+e.domain}/assets/any@512.png`,type:"image/png"}},D={192:{sizes:"192x192",src:`${e.protocol+e.domain}/assets/maskable@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${e.protocol+e.domain}/assets/maskable@512.png`,type:"image/png"}},O=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dracula"},{name:"dark",text:"🌜 Dark"},{name:"coffee",text:"☕ Coffee"},{name:"forest",text:"🌲 Forest"},{name:"night",text:"🌃 Night"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"},{name:"winter",text:"❄ Winter"}],E={},U={nav:[{link:"/privacy-policy",text:"Privacy policy"},{link:"/terms-of-service",text:"Terms of service"}]},z={nav:[{link:"/atom.xml",text:"Feed"},{link:"/sitemap.xml",text:"Sitemap"},{link:"https://instagram.com/wesamdev",text:"Instagram"}]},C={locales:"en-US",options:{day:"numeric",month:"short",weekday:"long",year:"numeric"}},I={},W=n({});function k(t){const s=t-1;return s*s*s+1}function B(t,{delay:s=0,duration:r=400,easing:p=k,x:l=0,y:g=0,opacity:d=0}={}){const a=getComputedStyle(t),o=+a.opacity,f=a.transform==="none"?"":a.transform,u=o*(1-d),[x,y]=i(l),[h,v]=i(g);return{delay:s,duration:r,easing:p,css:(m,b)=>`
			transform: ${f} translate(${(1-m)*x}${y}, ${(1-m)*h}${v});
			opacity: ${o-u*b}`}}const L=n([]),T=n([]);export{T as a,w as b,R as c,I as d,S as e,B as f,U as g,E as h,O as i,z as j,C as k,D as m,L as p,e as s,W as t};
