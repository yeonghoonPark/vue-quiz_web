import{E as d,p as n}from"./index.3f6e2155.js";const w=d("record",()=>{const t=n(null),c=n("00"),o=n("00"),r=n("00"),i=n(null),m=n(null),a=n(0),s=n(null),l=e=>e<10?"0"+e:""+e,u=()=>{console.log("[startTimerInterval]"),i.value=setInterval(function(){let e=new Date(Date.now()-t.value);c.value=l(e.getMinutes()),o.value=l(e.getSeconds()),r.value=l(Math.floor(e.getMilliseconds()/10))},1)};return{startingPoint:t,minute:c,second:o,millisecond:r,correctAnswerNumber:a,timeTaken:s,alignedRankList:m,startTimeAttack:()=>{var e;console.log("[startTimeAttack]"),t.value=(e=t.value)!=null?e:Date.now(),u()},stopTimeAttack:()=>{console.log("[stopTimeAttack]"),clearInterval(i.value)},resetTimer:()=>{console.log("[resetTimer]"),t.value=null,c.value="00",o.value="00",r.value="00",a.value=0,s.value=null},getTimeTaken:()=>{console.log("[getTimeTaken]"),s.value=`${c.value}:${o.value}.${r.value}`}}}),N=[{nickname:"\uAC04\uB514",correctAnswerNumber:"8",minute:"01",second:"08",millisecond:"99"},{nickname:"\uC774\uC601\uC790",correctAnswerNumber:"7",minute:"01",second:"11",millisecond:"15"},{nickname:"\uC11D\uAC00\uBAA8\uB2C8",correctAnswerNumber:"7",minute:"01",second:"05",millisecond:"93"},{nickname:"Mike",correctAnswerNumber:"6",minute:"01",second:"11",millisecond:"43"},{nickname:"Jamse Tylor",correctAnswerNumber:"5",minute:"01",second:"15",millisecond:"34"},{nickname:"\uC6B4\uC601\uC790",correctAnswerNumber:"3",minute:"02",second:"08",millisecond:"56"},{nickname:"\uB098\uADF8\uB124",correctAnswerNumber:"5",minute:"01",second:"19",millisecond:"73"},{nickname:"\uC138\uC885\uB300\uC655",correctAnswerNumber:"6",minute:"01",second:"18",millisecond:"24"},{nickname:"\uD034\uC988\uC655",correctAnswerNumber:"6",minute:"01",second:"08",millisecond:"08"},{nickname:"\uBC15\uC9C0\uC131",correctAnswerNumber:"5",minute:"01",second:"56",millisecond:"88"}];export{N as r,w as u};
