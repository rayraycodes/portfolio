(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{3237:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiences",function(){return n(7649)}])},1490:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var s=n(5893),r=n(1664),i=n.n(r),a=n(7294);let l=e=>{let{links:t}=e;return(0,s.jsx)("div",{className:"w-full text-white flex justify-center p-2 text-xs sm:text-sm md:text-base font-mono animate-slide-fade-in",children:t.map((e,n)=>(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(i(),{href:e.href,children:(0,s.jsx)("p",{className:"hover:text-blue-500 transition-all duration-100",children:e.label})}),n<t.length-1&&(0,s.jsx)("span",{className:"mx-1 sm:mx-2",children:"/"})]})},e.href))})}},5548:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),r=n(7294),i=n(1664),a=n.n(i),l=n(608);let c=async()=>{let{data:e,error:t}=await l.O.from("stories").select("*");return t?(console.error("Error fetching stories:",t),[]):e};var o=e=>{let{storyType:t}=e,[n,i]=(0,r.useState)([]),[l,o]=(0,r.useState)(!0);(0,r.useEffect)(()=>{(async()=>{i(await c()||[])})(),o(!1)},[]);let d=t?n.filter(e=>e.type===t):n;return(0,s.jsxs)("div",{children:[l?(0,s.jsx)("div",{className:"mySpinner"}):d.map((e,t)=>(0,s.jsx)(a(),{href:"/post/".concat(e.id),children:(0,s.jsxs)("div",{className:"postCard transform hover:scale-105 bg-white p-4 rounded-lg shadow-lg mb-8 mx-4 my-6 relative overflow-hidden flex-shrink-0 flex flex-col justify-center items-center",style:{minWidth:"300px",maxWidth:"500px"},children:[(0,s.jsx)("h4",{className:"text-xl font-bold mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-sm mb-4",children:new Date(e.created_at).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]},t)},e.id)),"(",(0,s.jsx)("a",{href:"/",className:"mt-4 inline-block bg-nepal-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Back"}),")"]})}},7649:function(e,t,n){"use strict";n.r(t),n.d(t,{Experiences:function(){return a}});var s=n(5893),r=n(1490),i=n(5548);function a(){return(0,s.jsx)("div",{className:"min-h-screen flex flex-col justify-center items-center text-center p-4 pt-20 text-black",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/ray.jpeg)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:(0,s.jsxs)("div",{className:" p-6 rounded-lg shadow-lg w-4/5 mx-auto animate-slide-fade-in",style:{width:"80%",height:"80%"},children:[(0,s.jsx)(r.a,{links:[{href:"/ ",label:"Regan"},{href:"/stories",label:"Experiences"}]}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,s.jsx)(i.Z,{storyType:"experiences"})})]})})}t.default=a},608:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});let s=(0,n(6490).eI)("https://thglnguamddvnbmbzatm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2xuZ3VhbWRkdm5ibWJ6YXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NzQ0NzMsImV4cCI6MjAzNTM1MDQ3M30.rTRPjDGyupgbt8sZw5ME-o57gA4SL7BrWURo3iHmejs")}},function(e){e.O(0,[664,490,888,774,179],function(){return e(e.s=3237)}),_N_E=e.O()}]);