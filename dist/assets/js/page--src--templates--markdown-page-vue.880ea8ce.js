(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MtIX:function(t,e,a){"use strict";var s={props:["header"],computed:{img:function(){return console.log(this.header),this.header.image.src?this.header.image.src:this.header.image}}},l=a("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v(t._s(t.header.title))]),a("p",{staticClass:"mb-8 text-gray-700 leading-relaxed"},[t._v(t._s(t.header.excerpt))])]),a("div",{staticClass:"lg:w-1/2 px-2"},[a("img",{attrs:{src:t.img,alt:t.header.altImg}})])])])}),[],!1,null,null,null);e.a=r.exports},akyF:function(t,e,a){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},l=a("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[a("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[a("div",{staticClass:"lg:w-1/2"},[a("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),a("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[a("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),a("p",{staticClass:"mt-4 text-gray-700"},[t._v(t._s(t.card.excerpt))]),a("div",{staticClass:"mt-8"},[a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])])])])])])}),[],!1,null,null,null);e.a=r.exports},lMek:function(t,e,a){},"lxj+":function(t,e,a){"use strict";a("lMek")},zwLt:function(t,e,a){"use strict";a.r(e);var s=a("nOak"),l=a.n(s),r=a("akyF"),i=a("MtIX"),n={components:{VueMarkdown:l.a,NewCard:r.a,Header:i.a},metaInfo:function(){return{title:this.$page.markdownPage.title}}},c=(a("lxj+"),a("KHd+")),d=null,o=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[e("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden text-center py-5"},[e("Header",{attrs:{header:this.$page.markdownPage}}),e("vue-markdown",[this._v("\n  "+this._s(this.$page.markdownPage.content)+"\n  ")]),this._l(this.$page.markdownPage.cards,(function(t){return e("NewCard",{key:t.id,attrs:{card:t}})}))],2)])}),[],!1,null,"164dee62",null);"function"==typeof d&&d(o);e.default=o.exports}}]);