"use strict";(self.webpackChunkcat_code_blog=self.webpackChunkcat_code_blog||[]).push([[2711],{9331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(6540);var r=a(8774),s=a(1312),i=a(1003),c=a(781),l=a(1107),n=a(4848);function d(e){let{year:t,posts:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{as:"h3",id:t,children:t}),(0,n.jsx)("ul",{children:a.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:t}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(d,{...e})},t)))})})})}function o(e){let{archive:t}=e;const a=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.be,{title:a,description:r}),(0,n.jsxs)(c.A,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,n.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,n.jsx)("main",{children:d.length>0&&(0,n.jsx)(h,{years:d})})]})]})}}}]);