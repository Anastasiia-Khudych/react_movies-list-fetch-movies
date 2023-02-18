(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=c(9),v=c.n(u),h="https://www.omdbapi.com/?apikey=".concat("92182745");function O(e){return fetch("".concat(h,"&t=").concat(e)).then((function(e){return e.json()}))}c(21);var x=function(e){var t=e.Poster,c=e.Title,i=e.Plot,a=e.imdbID,s={imgUrl:t,title:c,description:i,imdbId:a,imdbUrl:"https://www.imdb.com/title/".concat(a)};return"N/A"===s.imgUrl&&(s.imgUrl="https://via.placeholder.com/360x270.png?text=no%20preview"),s},p=function(e){var t=e.query,c=e.setSearchQuery,i=e.addMovie,a=Object(r.useState)(null),s=Object(n.a)(a,2),o=s[0],m=s[1],u=Object(r.useState)(!1),h=Object(n.a)(u,2),p=h[0],f=h[1],g=Object(r.useState)(!1),N=Object(n.a)(g,2),y=N[0],w=N[1],S=Object(r.useState)(!0),I=Object(n.a)(S,2),U=I[0],k=I[1],C=function(){f(!1),w(!1)},F=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!1),e.next=4,O(t);case 4:c=e.sent,"Error"in c?f(!0):(i=x(c),m(i)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(!0);case 11:return e.prev=11,k(!0),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),F(t)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:t,onChange:function(e){C();var t=e.target.value;c(t)}})}),p&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"}),y&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't load data from server"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":!U}),disabled:0===t.length,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:o&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return i(o),m(null),c(""),void C()},children:"Add to the list"})})]})]}),o&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:o})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)(""),d=Object(n.a)(a,2),j=d[0],m=d[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{query:j,setSearchQuery:m,addMovie:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d2875f68.chunk.js.map