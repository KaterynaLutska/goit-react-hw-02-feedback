(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports={Container:"Container_Container__3tQ9A"}},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(9),r=n.n(s),i=n(3),o=n(4),u=n(7),b=n(6),d=(n(15),n(16),n(0)),j=function(e){var t=e.children;return Object(d.jsx)("div",{className:"Container",children:t})},l=n(5),p=n(10),h=n(1),O=n.n(h),v=(n(20),function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.countTotalFeedback,s=e.countPositiveFeedbackPercentage;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{}),Object(d.jsxs)("p",{className:"statistic",children:["\u0412\u0441\u0435 \u0447\u0443\u0434\u043e\u0432\u043e:",t]}),Object(d.jsxs)("p",{className:"statistic",children:["\u0414\u043e\u0431\u0440\u0435:",n]}),Object(d.jsxs)("p",{className:"statistic",children:["\u041f\u043e\u0433\u0430\u043d\u043e: ",c]}),Object(d.jsxs)("p",{className:"statistic",children:["\u0423\u0441\u0456 \u0432\u0456\u0434\u0433\u0443\u043a\u0438:",a," "]}),Object(d.jsxs)("p",{className:"statistic",children:["\u041b\u0438\u0448\u0435 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0456:",s,"%"]})]})}),f=function(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(d.jsx)("div",{className:"button-wrap",children:c.map((function(e){return Object(d.jsx)("button",{type:"button",onClick:n,children:e},e)}))})},x=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:"Statistics_title ",children:t}),n]})},m=function(e){var t=e.message;return Object(d.jsx)("p",{className:"statistic notification",children:t})},k=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.textContent;e.setState((function(e){return Object(p.a)({},Object(l.a)({},n.toLowerCase(),e[n.toLowerCase()]+1))}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.bad,n=e.countTotalFeedback();return Math.round((n-t)/n*100)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{title:"Please leave feedback",children:Object(d.jsx)(f,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(d.jsx)(x,{title:"Statistics",children:a>=1&&Object(d.jsx)(v,{good:t,neutral:n,bad:c,countTotalFeedback:a,countPositiveFeedbackPercentage:s})}),0===a&&Object(d.jsx)(m,{message:"No feedback given"})]})}}]),n}(c.Component);x.propTypes={title:O.a.string.isRequired},f.propTypes={state:O.a.object,onLeaveFeedback:O.a.func},v.propTypes={good:O.a.number,neutral:O.a.number,bad:O.a.number,totalVoice:O.a.number,goodRate:O.a.number},m.propTypes={message:O.a.string};var g=k,F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{children:Object(d.jsx)(g,{})})})}}]),n}(c.Component);n(21),n(22);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.dac3ccc6.chunk.js.map