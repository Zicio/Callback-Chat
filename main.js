(()=>{"use strict";class t{constructor(t){this.element=t}static showButton(t){t.classList.toggle("hidden"),t.classList.toggle("hover")}static showChat(s){const c=document.querySelector(".chat");if(!c.classList.contains("active"))return c.classList.add("active"),void c.classList.remove("disactive");c.classList.remove("active"),c.classList.add("disactive");const e=document.querySelector(".button");t.showButton(e)}}new class{constructor(t){this.element=t,this.clickListener()}clickListener(){this.element.addEventListener("click",(t=>this.constructor.clickHandler(t)))}static clickHandler(s){if(s.target.classList.contains("button"))return t.showButton(s.target),void t.showChat();s.target.classList.contains("chat__close")&&t.showChat()}}(document)})();