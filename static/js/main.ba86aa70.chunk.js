(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(9),s=n.n(o),l=(n(21),n(1)),c=n(3),i=n(4),p=n(5),u=n(6),m=n(7),h=(n(22),n(23),n(24),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{className:"image",alt:"monster",src:"https://img.pokemondb.net/artwork/large/".concat(e.monster.name,".jpg")}),r.a.createElement("h2",{className:"name"}," ",e.monster.name," "),e.monster.type1&&r.a.createElement("p",{className:"type"}," Type 1: ",e.monster.type1," "),e.monster.type2&&r.a.createElement("p",{className:"type"}," Type 2: ",e.monster.type2," "))}),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setProperties=function(e){var t=[];e.results.forEach((function(e){return t.push(n.itemProperties(e))})),n.props.setAllPokemon(t),n.props.all_pokemon.forEach((function(e,t){return n.setSprite(e,t)}))},n.itemProperties=function(e){return{name:e.name,url:e.url,id:n.setId(e),sprite:""}},n.setId=function(e){return e.url.substring(34,e.url.lastIndexOf("/"))},n.setSprite=function(e,t){fetch(e.url).then((function(e){return e.json()})).then((function(e){return n.props.updateStateAttributes(e,t)}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){return e.json()})).then((function(t){return e.setProperties(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card-list"},this.props.monsters&&this.props.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))}}]),t}(a.Component),f=(n(25),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{onChange:n,className:"search",type:"search",placeholder:t})}),y=n(12),k=n.n(y),v=(a.Component,n(15)),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).setAllPokemon=function(t){e.setState({all_pokemon:t})},e.updateStateAttributes=function(t,n){var a;e.setState({all_pokemon:k()(e.state.all_pokemon,(a={},Object(l.a)(a,n,{sprite:{$set:t.sprites.front_default}}),Object(l.a)(a,n,{type1:{$set:t.types[0].type.name}}),a))}),t.types[1]&&e.setState({all_pokemon:k()(e.state.all_pokemon,Object(l.a)({},n,{type2:{$set:t.types[1].type.name}}))})},e.handleSearchChange=function(t){e.setState({searchField:t.target.value})},e.handleDropDownChange=function(t){null===t?e.setState({searchType:""}):e.setState({searchType:t.value})},e.typeFilter=function(e,t){return!(!e.type1||!e.type1.toLowerCase().includes(t.toLowerCase()))||!(!e.type2||!e.type2.toLowerCase().includes(t.toLowerCase()))},e.state={all_pokemon:[],searchField:"",searchType:"Name"},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,n=this.state,a=n.all_pokemon,o=n.searchField,s=n.searchType;e="Name"===s?a.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})):"Type"===s?a.filter((function(e){return t.typeFilter(e,o)})):a;var l=[{value:"Name",label:"Name"},{value:"Type",label:"Type"}];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pokedex"),r.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleSearchChange}),r.a.createElement(v.a,{options:l,defaultValue:l[0],className:"myDropdown",placeholder:"Search Type",isClearable:!0,onChange:this.handleDropDownChange}),r.a.createElement(d,{all_pokemon:this.state.all_pokemon,monsters:e,setAllPokemon:this.setAllPokemon,updateStateAttributes:this.updateStateAttributes}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ba86aa70.chunk.js.map