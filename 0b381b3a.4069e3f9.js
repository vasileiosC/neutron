(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(9),r=(n(0),n(169)),c={id:"add-page",title:"How to create a new Page?",sidebar_label:"Create Page"},s={id:"version-4.0-next/commands/add-page",title:"How to create a new Page?",description:"The `page` is like a `component`, but we prefer to think that components don't need to know the application state directly, because the change of state should be responsability of the pages.",source:"@site/versioned_docs/version-4.0-next/commands/add-page.md",permalink:"/docs/4.0-next/commands/add-page",version:"4.0-next",sidebar_label:"Create Page",sidebar:"version-4.0-next/docs",previous:{title:"How to create a new Duck?",permalink:"/docs/4.0-next/commands/add-duck"},next:{title:"How to create a new Saga?",permalink:"/docs/4.0-next/commands/add-saga"}},l=[{value:"Usage command example",id:"usage-command-example",children:[]},{value:"Connecting the Page with Store",id:"connecting-the-page-with-store",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"page")," is like a ",Object(r.b)("inlineCode",{parentName:"p"},"component"),", but we prefer to think that components don't need to know the application state directly, because the change of state should be responsability of the pages."),Object(r.b)("p",null,"To create a new page, you need to stay at the root of the project and enter this command in your terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"neutron add:page <pageName>\n")),Object(r.b)("p",null,"You don't need to inform the ",Object(r.b)("inlineCode",{parentName:"p"},"technology")," because the CLI reads your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," to identify the project type. This is awesome, isn't it?"),Object(r.b)("h2",{id:"usage-command-example"},"Usage command example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"neutron add:page Tools\n")),Object(r.b)("p",null,"After the execution, this command will create a new folder in ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages")," with two new files: ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," and ",Object(r.b)("inlineCode",{parentName:"p"},"styles.js"),"."),Object(r.b)("h4",{id:"example"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"/* #FILE: ./src/pages/Tools/index.js */\nimport React, { useState, useEffect } from 'react';\nimport { StyledContainer } from './styles';\n\nfunction Tools() {\n  const [message, setMessage] = useState('');\n\n  useEffect(() => {\n    setMessage('Tools page!');\n  }, []);\n\n  return (\n    <StyledContainer>\n      <h1>{message}</h1>\n    </StyledContainer>\n  );\n}\n\nexport default Tools;\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"/* #FILE: ./src/pages/Tools/styles.js */\nimport styled from 'styled-components';\n\nimport colors from '@/styles/colors';\n\nexport const StyledContainer = styled.div`\n  background-color: ${colors.background};\n  color: ${colors.primary};\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n`;\n")),Object(r.b)("h2",{id:"connecting-the-page-with-store"},"Connecting the Page with Store"),Object(r.b)("p",null,"To connect the page with store, you should import these references on the ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import React, { useCallback, useEffect } from 'react';\nimport { useSelector, useDispatch } from 'react-redux';\nimport ToolsActions from '@/store/ducks/tools';\n")),Object(r.b)("p",null,"Finally, you need to use ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector")," to retrieve data and the ",Object(r.b)("inlineCode",{parentName:"p"},"useDispatch")," instance to call your actions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"\nfunction Tools() {\n  const dispatch = useDispatch();\n  const tools = useSelector((state) => state.tools);\n\n  const getToolsRequest = useCallback(() => {\n    dispatch(ToolsActions.getToolsRequest());\n  }, [dispatch]);\n\n  useEffect(() => {\n    getToolsRequest();\n  }, [getToolsRequest]);\n\n  return (\n    <StyledContainer>\n      <ul>\n        {tools.data.map(tool => (\n          <li>{tool.name}</li>\n        ))}\n      </ul>\n    </StyledContainer>\n  );\n}\n\nexport default Tools;\n\n")))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(m,s({ref:t},i,{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);