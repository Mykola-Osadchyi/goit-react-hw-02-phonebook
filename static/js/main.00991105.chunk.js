(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"Container_container__3vQNe"}},12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Bill Gates","number":"459-12-56"},{"id":"id-2","name":"Mark Zuckerberg","number":"443-89-12"},{"id":"id-3","name":"Elon Musk","number":"645-17-79"},{"id":"id-4","name":"Chuck Norris","number":"227-91-26"}]')},19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(8),o=n.n(i),s=(n(19),n(13)),u=n(3),l=n(4),b=n(6),d=n(5),j=n(9),h=n.n(j),m=n(10),f=n.n(m);var O=function(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})},x=n(11),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.getContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",disabled:!this.state.number,children:"Add contact"})]})})}}]),n}(c.Component),v=function(t){var e=t.filterValue,n=t.filterData;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},C=function(t){var e=t.contacts,n=t.removeContact;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("p",{children:r}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},g=n(12),y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:g,filter:""},t.addContact=function(e){var n={id:h.a.generate(),name:e.name,number:e.number};t.state.contacts.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts!")):t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.findContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.findContact();return Object(a.jsxs)(O,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(p,{getContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(v,{filterValue:this.state.filter,filterData:this.changeFilter}),Object(a.jsx)(C,{contacts:t,removeContact:this.deleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.00991105.chunk.js.map