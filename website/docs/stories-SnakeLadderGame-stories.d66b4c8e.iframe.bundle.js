"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[896],{"./src/stories/SnakeLadderGame.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlaySnakeGame:()=>PlaySnakeGame,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SnakeLadderGame_stories});var react=__webpack_require__("./node_modules/react/index.js"),ReactKonva=__webpack_require__("./node_modules/react-konva/es/ReactKonva.js");const SnakeLadderContext=react.createContext(null),SnakeLadderDispatcher=react.createContext(null),Actions={PassaAction:"PassaAction",NextPlayerTurn:"NextPlayerTurn"},initialValues={scoreWithGrid:{},passaValue:null,players:[{name:"Gk",score:1,color:"rgb(255 0 0 / 90%)"},{name:"Nk",score:1,color:"rgb(0 255 0 / 90%)"}],currentPlayer:0,ladders:[{startScore:2,endScore:37},{startScore:7,endScore:14},{startScore:9,endScore:31},{startScore:21,endScore:42},{startScore:28,endScore:84},{startScore:36,endScore:44},{startScore:51,endScore:69},{startScore:71,endScore:91},{startScore:80,endScore:100}],laddersMap:new Map,snakes:[{tailScore:6,mouthScore:16},{tailScore:11,mouthScore:49},{tailScore:20,mouthScore:62},{tailScore:24,mouthScore:87},{tailScore:26,mouthScore:47},{tailScore:59,mouthScore:64},{tailScore:79,mouthScore:98},{tailScore:76,mouthScore:95},{tailScore:74,mouthScore:93}],snakesMouthScoreMap:new Map},maxGridLayers=10,SnakeLadderReducer=(state,_ref)=>{let{type,payload}=_ref;if(type===Actions.PassaAction)return{...state,passaValue:payload};if(type===Actions.UpdateScore){const{players,currentPlayer}=state;return players[currentPlayer].score=payload,{...state,players:[...players]}}if(type===Actions.NextPlayerTurn){const{currentPlayer,players}=state;return{...state,currentPlayer:currentPlayer+1>=players.length?0:currentPlayer+1}}return{...state}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const strokeColor="#000";function SnakeLadderGrid(){const state=react.useContext(SnakeLadderContext);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.keys(state.scoreWithGrid).map(((key,index)=>{const[xAxis,yAxis,rectWidth,rectHeight]=state.scoreWithGrid[key],centerX=xAxis+rectWidth/2,centerY=yAxis+rectWidth/4-5;let gridColor;return gridColor=index%2==0?"#fff6e9":"#ffefd7",(0,jsx_runtime.jsx)(RenderGrid,{name:key,xAxis,yAxis,rectWidth,rectHeight,gridColor,centerX,centerY},key)}))})}function RenderGrid(_ref){let{name,xAxis,yAxis,rectWidth,rectHeight,gridColor,centerX,centerY}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ReactKonva.UL,{x:xAxis,y:yAxis,width:rectWidth,height:rectHeight,fill:gridColor,stroke:strokeColor,strokeWidth:1},name),(0,jsx_runtime.jsx)(ReactKonva.xv,{x:centerX,y:centerY,text:name,fontSize:16})]})}try{snakeLadderGrid.displayName="snakeLadderGrid",snakeLadderGrid.__docgenInfo={description:"",displayName:"snakeLadderGrid",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},xAxis:{defaultValue:null,description:"",name:"xAxis",required:!0,type:{name:"any"}},yAxis:{defaultValue:null,description:"",name:"yAxis",required:!0,type:{name:"any"}},rectWidth:{defaultValue:null,description:"",name:"rectWidth",required:!0,type:{name:"any"}},rectHeight:{defaultValue:null,description:"",name:"rectHeight",required:!0,type:{name:"any"}},gridColor:{defaultValue:null,description:"",name:"gridColor",required:!0,type:{name:"any"}},centerX:{defaultValue:null,description:"",name:"centerX",required:!0,type:{name:"any"}},centerY:{defaultValue:null,description:"",name:"centerY",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/snakeLadderGame/snakeLadderGrid.tsx#snakeLadderGrid"]={docgenInfo:snakeLadderGrid.__docgenInfo,name:"snakeLadderGrid",path:"src/components/snakeLadderGame/snakeLadderGrid.tsx#snakeLadderGrid"})}catch(__react_docgen_typescript_loader_error){}const calcWayPoints=(vertices,differencePoints)=>{let wayPoints=[];for(let i=1;i<vertices.length;i++){let pt0=vertices[i-1],pt1=vertices[i],dx=pt1.x-pt0.x,dy=pt1.y-pt0.y;for(let j=0;j<differencePoints;j++){let x=pt0.x+dx*j/differencePoints,y=pt0.y+dy*j/differencePoints;wayPoints.push({x,y})}}return wayPoints};function SnakeLadderRender(){const state=react.useContext(SnakeLadderContext);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:state.ladders.map((ladder=>{const{startScore,endScore}=ladder,ladderStartPosition=state.scoreWithGrid[startScore],ladderEndPosition=state.scoreWithGrid[endScore];let[sXAxis,sYAxis,sRectWidth,sRectHeight]=ladderStartPosition;sXAxis+=sRectWidth/2,sYAxis+=sRectHeight/2;let[eXAxis,eYAxis,eRectWidth,eRectHeight]=ladderEndPosition;return eXAxis+=eRectWidth/2,eYAxis+=eRectHeight/2,(0,jsx_runtime.jsx)(ReactKonva.bn,{sceneFunc:(ctx,shape)=>{const heightOfLadder=Math.abs(eYAxis-sYAxis),diff=Math.floor(heightOfLadder/15),firstWayPoints=calcWayPoints([{x:sXAxis,y:sYAxis},{x:eXAxis,y:eYAxis}],diff),secondWayPoints=calcWayPoints([{x:sXAxis+10,y:sYAxis},{x:eXAxis+10,y:eYAxis}],diff);ctx.lineWidth=2,ctx.strokeStyle="#8d5524",ctx.beginPath(),ctx.moveTo(sXAxis,sYAxis),ctx.lineTo(eXAxis,eYAxis),ctx.moveTo(sXAxis+10,sYAxis),ctx.lineTo(eXAxis+10,eYAxis),ctx.stroke();for(let i=1;i<diff;i++)ctx.lineWidth=3,ctx.beginPath(),ctx.globalAlpha=1,ctx.strokeStyle="#c68642",ctx.moveTo(firstWayPoints[i].x,firstWayPoints[i].y),ctx.lineTo(secondWayPoints[i].x,secondWayPoints[i].y),ctx.stroke();ctx.closePath()},fill:"#00D2FF",stroke:"black",strokeWidth:4},`ladderStartScore${startScore}`)}))})}const getQuadraticBezierXYatT=(startPt,ct1,ct2,endPt,t)=>({x:Math.pow(1-t,3)*startPt.x+3*Math.pow(1-t,2)*t*ct1.x+3*(1-t)*Math.pow(t,2)*ct2.x+Math.pow(t,3)*endPt.x,y:Math.pow(1-t,3)*startPt.y+3*Math.pow(1-t,2)*t*ct1.y+3*(1-t)*Math.pow(t,2)*ct2.y+Math.pow(t,3)*endPt.y}),snakeRender_calcWayPoints=(vertices,difference)=>{const wayPoints=[];for(let i=1;i<vertices.length;i+=3){let startPt={x:vertices[i-1].x,y:vertices[i-1].y},ct1={x:vertices[i].x,y:vertices[i].y},ct2={x:vertices[i+1].x,y:vertices[i+1].y},endPt={x:vertices[i+2].x,y:vertices[i+2].y};for(let t=0;t<difference;t++){let pointers=getQuadraticBezierXYatT(startPt,ct1,ct2,endPt,t/difference);wayPoints.push({x:pointers.x,y:pointers.y})}}return wayPoints},colors=["#ffcc02","#ff9900","#009966","#ff999a","#0099cc"];function SnakeRender(){const state=react.useContext(SnakeLadderContext);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:state.snakes.map(((snake,index)=>{const{mouthScore,tailScore}=snake,mouthPosition=state.scoreWithGrid[mouthScore],tailPosition=state.scoreWithGrid[tailScore];let[mXAxis,mYAxis,mRectWidth,mRectHeight]=mouthPosition;mXAxis+=mRectWidth/2,mYAxis+=mRectHeight/2;let[tXAxis,tYAxis,tRectWidth,tRectHeight]=tailPosition;tXAxis+=tRectWidth/2,tYAxis+=tRectHeight/2;const color=colors[index%colors.length];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ReactKonva.x1,{x:mXAxis-5,y:mYAxis-5,points:[0,0,15,0,15,15],tension:.5,closed:!0,stroke:"#000",strokeWidth:1,fill:color}),(0,jsx_runtime.jsx)(ReactKonva.bn,{sceneFunc:(ctx,shape)=>{ctx.closePath();let a=function bezierPointsCalc(a,f){for(var c,b=[],e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var g,h,l;g=0==(l=e-1)?0:l-1,h=l===a.length-1?l:l+1,c=Math.abs((a[h].x-a[g].x)/(0==a[h].x-a[l].x?.01:a[h].x-a[l].x))*(f-1)/2+1;var t=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c,b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x+t/3,y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9},g=0===(l=e)?0:l-1,h=l===a.length-1?l:l+1,c=Math.abs((a[h].x-a[g].x)/(0==a[l].x-a[g].x?.01:a[l].x-a[g].x))*(f-1)/2+1,t=(a[h].x-a[g].x)/c,c=(a[h].y-a[g].y)/c,b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x-t/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9},b[b.length]=a[e]}return b}([{x:mXAxis,y:mYAxis},{x:mXAxis-(Math.max(tXAxis,mXAxis)-Math.min(tXAxis,mXAxis))/2,y:mYAxis+(tYAxis-mYAxis)/3},{x:mXAxis+(Math.max(tXAxis,mXAxis)-Math.min(tXAxis,mXAxis))/2,y:mYAxis+(tYAxis-mYAxis)/1.5},{x:tXAxis,y:tYAxis}],2),wayPoints=snakeRender_calcWayPoints(a,5);ctx.lineWidth=2,ctx.beginPath();for(let i=0;i<wayPoints.length;i++)ctx.lineWidth=8,ctx.beginPath(),ctx.globalAlpha=1,ctx.strokeStyle=color,0===i?ctx.moveTo(wayPoints[i].x,wayPoints[i].y):(ctx.moveTo(wayPoints[i-1].x,wayPoints[i-1].y),ctx.lineTo(wayPoints[i].x,wayPoints[i].y)),ctx.stroke();ctx.closePath()},fill:"#00D2FF",stroke:"black"})]})}))})}function PlayerPositionRender(){const state=react.useContext(SnakeLadderContext);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:state.players.map((player=>{const{name,score,color}=player;let[xAxis,yAxis,rectWidth]=state.scoreWithGrid[score];xAxis+=rectWidth/2,yAxis+=rectWidth/2;const radius=rectWidth/(state.players.length+2);return(0,jsx_runtime.jsx)(ReactKonva.Cd,{x:xAxis,y:yAxis,radius,fill:color,duration:.2},name)}))})}var Button=__webpack_require__("./src/components/Button/index.tsx");const maxPassaSides=6;function PassaRender(){const[isPassaActive,setIsPassaActive]=(0,react.useState)(!0),dispatch=react.useContext(SnakeLadderDispatcher),state=react.useContext(SnakeLadderContext),{players,currentPlayer}=state,resetNextPlayerSettings=react.useCallback((()=>{dispatch({type:Actions.NextPlayerTurn,payload:null}),dispatch({type:Actions.PassaAction,payload:null}),setIsPassaActive(!0)}),[]),animateTillNextVal=react.useCallback(((randomPassaValue,curr)=>{if(curr>=randomPassaValue)return void requestAnimationFrame((()=>{const currentPlayerScore=players[currentPlayer].score;state.snakesMouthScoreMap.has(currentPlayerScore)?setTimeout((()=>{dispatch({type:Actions.UpdateScore,payload:state.snakesMouthScoreMap.get(currentPlayerScore)}),resetNextPlayerSettings()}),300):state.laddersMap.has(currentPlayerScore)?setTimeout((()=>{dispatch({type:Actions.UpdateScore,payload:state.laddersMap.get(currentPlayerScore)}),resetNextPlayerSettings()}),300):resetNextPlayerSettings()}));const timer=setTimeout((()=>{requestAnimationFrame((()=>{dispatch({type:Actions.UpdateScore,payload:players[currentPlayer].score+1}),clearTimeout(timer),animateTillNextVal(randomPassaValue,++curr)}))}),300)}),[state.currentPlayer]),handlePassa=react.useCallback((event=>{if(event.preventDefault(),!isPassaActive)return;setIsPassaActive(!1);const randomPassaValue=Math.ceil(Math.random()*maxPassaSides);if(dispatch({type:Actions.PassaAction,payload:randomPassaValue}),state.players[state.currentPlayer].score+randomPassaValue<maxGridLayers*maxGridLayers)animateTillNextVal(randomPassaValue,0);else{const timer=setTimeout((()=>{dispatch({type:Actions.NextPlayerTurn,payload:null}),dispatch({type:Actions.PassaAction,payload:null}),setIsPassaActive(!0),clearTimeout(timer)}),1e3)}}),[state.currentPlayer]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{label:"Passa",onClick:handlePassa,disabled:!isPassaActive}),(0,jsx_runtime.jsx)("span",{children:state.passaValue||null})]})}function SnakeLadderGame(_ref){let{width,height}=_ref;initialValues.scoreWithGrid=react.useMemo((()=>{const rectWidth=width/maxGridLayers,rectHeight=width/maxGridLayers,scorePointsWithGridPosition={};for(let i=0;i<maxGridLayers;i++){const yAxis=rectHeight*i;let oddVal=maxGridLayers-1;for(let j=0;j<maxGridLayers;j++){const xAxis=rectWidth*j;let key;i%2!=0?(key=maxGridLayers*maxGridLayers-maxGridLayers*i-oddVal,oddVal--):key=maxGridLayers*maxGridLayers-(maxGridLayers*i+j),scorePointsWithGridPosition[key]=[xAxis,yAxis,rectWidth,rectHeight]}}return scorePointsWithGridPosition}),[width,height]),initialValues.snakesMouthScoreMap=react.useMemo((()=>{const map=new Map;return initialValues.snakes.forEach((_ref2=>{let{mouthScore,tailScore}=_ref2;map.set(mouthScore,tailScore)})),map}),[width,height]),initialValues.laddersMap=react.useMemo((()=>{const map=new Map;return initialValues.ladders.forEach((_ref3=>{let{startScore,endScore}=_ref3;map.set(startScore,endScore)})),map}),[width,height]);const[state,dispatch]=(0,react.useReducer)(SnakeLadderReducer,initialValues);return(0,jsx_runtime.jsx)(SnakeLadderContext.Provider,{value:state,children:(0,jsx_runtime.jsxs)(SnakeLadderDispatcher.Provider,{value:dispatch,children:[(0,jsx_runtime.jsxs)(ReactKonva.Hf,{width,height,children:[(0,jsx_runtime.jsx)(ReactKonva.mh,{children:(0,jsx_runtime.jsxs)(SnakeLadderContext.Provider,{value:state,children:[(0,jsx_runtime.jsx)(SnakeLadderGrid,{}),(0,jsx_runtime.jsx)(SnakeRender,{}),(0,jsx_runtime.jsx)(SnakeLadderRender,{})]})}),(0,jsx_runtime.jsx)(ReactKonva.mh,{children:(0,jsx_runtime.jsx)(SnakeLadderContext.Provider,{value:state,children:(0,jsx_runtime.jsx)(PlayerPositionRender,{})})})]}),(0,jsx_runtime.jsxs)("div",{children:["Active player: ",state.players[state.currentPlayer].name]}),(0,jsx_runtime.jsx)(PassaRender,{}),(0,jsx_runtime.jsxs)("div",{children:["Players Score:",state.players.map((player=>(0,jsx_runtime.jsxs)("div",{children:[player.name,": ",player.score]},player.name)))]})]})})}SnakeLadderGame.displayName="SnakeLadderGame",SnakeLadderGame.defaultProps={width:500,height:500};try{SnakeLadderGame.displayName="SnakeLadderGame",SnakeLadderGame.__docgenInfo={description:"",displayName:"SnakeLadderGame",props:{width:{defaultValue:{value:"500"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"500"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/snakeLadderGame/snakeLadderGame.tsx#SnakeLadderGame"]={docgenInfo:SnakeLadderGame.__docgenInfo,name:"SnakeLadderGame",path:"src/components/snakeLadderGame/snakeLadderGame.tsx#SnakeLadderGame"})}catch(__react_docgen_typescript_loader_error){}const SnakeLadderGame_stories={title:"Games/SnakeLadderGame",component:SnakeLadderGame,parameters:{layout:"fullScreen"},tags:["autodocs"],argTypes:{}},PlaySnakeGame={args:{width:700,height:700}};PlaySnakeGame.parameters={...PlaySnakeGame.parameters,docs:{...PlaySnakeGame.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: 700,\n    height: 700\n  }\n}",...PlaySnakeGame.parameters?.docs?.source}}};const __namedExportsOrder=["PlaySnakeGame"]},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Button/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_button.Z,options);Button_button.Z&&Button_button.Z.locals&&Button_button.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary=!1,size="medium",backgroundColor,label,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button",`storybook-button--${size}`,mode].join(" "),style:{backgroundColor},...props,children:label})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(event?: SyntheticEvent<Element, Event>) => void"}},disabled:{defaultValue:null,description:"Is this the button disabled?",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Button/button.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n}\n\n.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n}\n\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n}\n\n.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n}\n\n.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n}\n","",{version:3,sources:["webpack://./src/components/Button/button.css"],names:[],mappings:"AAAA;IACI,0EAA0E;IAC1E,gBAAgB;IAChB,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,qDAAqD;AACzD;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB",sourcesContent:[".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n}\n\n.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n}\n\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n}\n\n.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n}\n\n.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);