(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db4d2c7"],{2120:function(t,i,s){"use strict";s("bd8f")},"2a5e":function(t,i,s){"use strict";s.d(i,"a",(function(){return a})),s.d(i,"e",(function(){return n})),s.d(i,"g",(function(){return c})),s.d(i,"f",(function(){return r})),s.d(i,"c",(function(){return o})),s.d(i,"i",(function(){return l})),s.d(i,"b",(function(){return u})),s.d(i,"d",(function(){return d})),s.d(i,"h",(function(){return m}));s("1313");var e=s("b775"),a=function(){return Object(e["a"])("/banner")},n=function(t){return Object(e["a"])({method:"get",url:"/personalized?limit=".concat(t)})},c=function(){return Object(e["a"])("/recommend/resource")},r=function(t){return Object(e["a"])({method:"get",url:"/playlist/detail?id=".concat(t)})},o=function(t){return Object(e["a"])({method:"get",url:"/likelist?id=".concat(t)})},l=function(t,i){return Object(e["a"])({method:"get",url:"/like?id=".concat(t,"&like=").concat(i)})},u=function(t,i,s){return Object(e["a"])({method:"get",url:"/comment/hot?id=".concat(t,"&type=").concat(i,"&limit=").concat(s)})},d=function(t){var i=t.id,s=t.limit,a=void 0===s?20:s,n=t.page,c=void 0===n?0:n,r=t.before,o=void 0===r?0:r,l=c*a;return Object(e["a"])({method:"get",url:"/comment/playlist?id=".concat(i,"&limit=").concat(a,"&offset=").concat(l,"&before=").concat(o)})},m=function(t){var i=t.id,s=t.limit,a=void 0===s?30:s,n=t.page,c=void 0===n?0:n,r=c*a;return Object(e["a"])({method:"get",url:"/playlist/subscribers?id=".concat(i,"&limit=").concat(a,"&offset=").concat(r)})}},"5f8e":function(t,i,s){"use strict";s("8eca")},"6c42":function(t,i,s){},7956:function(t,i,s){"use strict";s("fda8")},"8eca":function(t,i,s){},a37f:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"view"},[s("el-skeleton",{attrs:{rows:6,animated:"",loading:t.loading}},[t.loading?t._e():[s("div",{staticClass:"play-list-detail"},[s("div",{staticClass:"detail-desc"},[s("div",{staticClass:"detail-img-wrapper"},[s("img",{staticClass:"img img-radius-8 img-border",attrs:{src:t.playlist.coverImgUrl}})]),s("div",{staticClass:"detail-desc-info"},[s("div",{staticClass:"info-title"},[s("div",{staticClass:"tag"},[t._v("歌单")]),s("span",{staticClass:"titlename"},[t._v(t._s(t.playlist.name))])]),s("div",{staticClass:"author"},[s("div",{staticClass:"author-img"},[s("img",{staticClass:"img",attrs:{src:t.playlist.creator.avatarUrl}})]),s("div",{staticClass:"author-info"},[s("span",{staticClass:"mleft-12 font-12 pointer",staticStyle:{color:"rgb(11, 88, 176)"}},[t._v(t._s(t.playlist.creator.nickname))]),s("span",{staticClass:"mleft-12 font-12",staticStyle:{color:"#2c3e50"}},[t._v(t._s(t._f("datefilter")(t.playlist.createTime)))])])]),s("ul",{staticClass:"info-btn"},[s("button",{staticClass:"btn btn-red",on:{click:t.playListSongs}},[s("i",{staticClass:"el-icon-caret-right"})]),s("button",{staticClass:"btn btn-white"},[s("i",{staticClass:"el-icon-folder-checked"})]),s("button",{staticClass:"btn btn-white"},[s("i",{staticClass:"el-icon-share"})]),s("button",{staticClass:"btn btn-red"},[s("i",{staticClass:"el-icon-hot-water"})])]),s("div",{staticClass:"detail-tag"},[s("span",[t._v("标签 : ")]),s("span",{staticStyle:{margin:"10px","font-size":"14px"}},[t._v(t._s(t.playlist.tags[0]))])]),s("div",{staticClass:"num-info"},[s("span",[t._v("歌曲 : "+t._s(t.playlist.trackCount))]),s("span",[t._v("播放 : "+t._s(t._f("countFormat")(t.playlist.playCount)))])]),s("div",{staticClass:"intro"},[s("span",{staticStyle:{"max-width":"1000px","padding-bottom":"10px"}},[t._v(" 简介："+t._s(t.playlist.description)+" ")])])])])]),s("div",{staticClass:"detail-head"},[s("van-tabs",{model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[s("van-tab",{attrs:{title:"歌曲列表"}},[s("MusicList",{attrs:{list:t.playlist,updatedList:t.updatedList}})],1),s("van-tab",{attrs:{title:"评论"}},[s("Comment",{attrs:{list:t.playlist}})],1),s("van-tab",{attrs:{title:"收藏者"}},[s("FollowList",{attrs:{list:t.playlist}})],1)],1)],1),s("div")]],2)],1)},a=[],n=s("f9ea"),c=(s("e186"),s("e456"),s("af46"),s("1baf"),s("2a5e")),r=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("el-skeleton",{attrs:{rows:6,animated:"",loading:t.loading}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tracks,stripe:""},on:{"row-click":t.getOneSong}},[s("el-table-column",{staticStyle:{color:"rgb(195, 195, 219)"},attrs:{type:"index",label:"",width:"50"}}),s("el-table-column",{attrs:{prop:"tag",label:"",width:"30"},scopedSlots:t._u([{key:"default",fn:function(i){return[s("span",{on:{click:function(s){return t.likeMusic(i.row)}}},[s("div",[i.row.isLiked?s("i",{staticClass:"iconfont icon-aixin1",staticStyle:{color:"red"}}):s("i",{staticClass:"iconfont icon-aixin"})])])]}}])}),s("el-table-column",{attrs:{prop:"name",label:"音乐标题","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return[s("span",[t._v(t._s(i.row.name))]),0!==i.row.alia.length?s("span",{staticStyle:{color:"#969697"}},[t._v("("+t._s(i.row.alia[0])+")")]):t._e(),0!==i.row.mv?s("span",{staticClass:"vip-tag",staticStyle:{color:"rgb(236, 73, 73)","border-color":"rgb(236, 73, 73)"},on:{click:function(s){return t.goDetails(i.row)}}},[t._v("MV"),s("i",{staticClass:"el-icon-caret-right"})]):t._e(),1==i.row.fee?s("span",{staticClass:"vip-tag"},[t._v("VIP")]):t._e()]}}])}),s("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手",width:"80","show-overflow-tooltip":""}})],1)],1)},o=[],l=(s("5ad0"),{props:["list","updatedList"],data:function(){return{likeIdList:[],tracks:[],loading:!0,songId:[],isListenId:0,songMsg:{}}},computed:{uid:function(){return this.$store.state.login.profile.userId}},created:function(){var t=this;this.getLikeIdList(this.uid),this.list.tracks.forEach((function(i){t.songId.push(i.id)})),this.init()},methods:{init:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.getLikeIdList(t.uid);case 2:t.loading=!1,t.list.tracks.forEach((function(i){t.songId.push(i.id)})),s=JSON.parse(JSON.stringify(t.list.tracks)),s.forEach((function(i){t.$set(i,"isLiked",t.isLiked(i.id)),t.tracks.push(i)}));case 6:case"end":return i.stop()}}),i)})))()},getOneSong:function(t){if(this.isListenId!==t.id){this.$store.commit("songDetail/songAllMsg",t),this.isListenId=t.id;var i={};i.songName=t.name,i.singer=t.ar[0].name,i.id=t.id,i.picUrl=t.al.picUrl,this.songMsg=i,this.$store.dispatch("songDetail/getoneMusic",i)}else this.$store.state.songDetail.isPlay||this.$store.commit("songDetail/playback")},getLikeIdList:function(t){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["c"])(t);case 2:e=s.sent,i.likeIdList=e.data.ids;case 4:case"end":return s.stop()}}),s)})))()},isLiked:function(t){return-1!==this.likeIdList.indexOf(t)},likeMusic:function(t){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.isLiked=!t.isLiked,s.next=3,Object(c["i"])(t.id,t.isLiked);case 3:i.getLikeIdList(i.uid),i.updatedList();case 5:case"end":return s.stop()}}),s)})))()},goDetails:function(t){this.$router.push("/videodetail/mv/"+t.mv)}}}),u=l,d=(s("5f8e"),s("cba8")),m=Object(d["a"])(u,r,o,!1,null,null,null),f=m.exports,g=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"comment"},[s("el-skeleton",{attrs:{rows:6,animated:"",loading:t.loading}},[s("div",{staticClass:"area-wrap"},[s("textarea",{staticClass:"text-area"}),s("div",{staticClass:"word-num"},[t._v("140")])]),s("div",{staticClass:"btn-wrap"},[s("div",{staticClass:"at-btv"},[s("button",{staticClass:"no-btn"},[t._v("@")]),s("button",{staticClass:"no-btn"},[t._v("#")])]),s("div",{staticClass:"send-btn"},[s("button",{staticClass:"btn btn-white"},[t._v("评论")])])]),t.loading?t._e():[s("div",{staticClass:"hot-wrap"},[s("div",{staticClass:"font-bold font-16"},[t._v("精彩评论")]),t._l(t.hotComments,(function(i){return s("div",{key:i.userId,staticClass:"comment-item"},[s("div",{staticClass:"comment_main"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img",attrs:{src:i.user.avatarUrl,alt:""}})]),s("div",{staticClass:"comment-wrap"},[s("div",{staticClass:"comment-content"},[s("span",{staticStyle:{color:"rgb(80, 125, 175)"}},[t._v(t._s(i.user.nickname)+"：")]),s("span",[t._v(t._s(i.content))])]),s("div",{staticClass:"comment-info"},[s("div",{staticClass:"time",staticStyle:{color:"rgb(159, 159, 159)","font-size":"12px"}},[t._v(" "+t._s(i.timeStr)+" ")]),s("div",{staticClass:"comment-btn"},[s("button",{staticClass:"no-btn"},[s("i",{staticClass:"iconfont icon-dianzan"}),s("span",[t._v(t._s(i.likedCount))])]),s("div",{staticClass:"div-column"}),s("button",{staticClass:"no-btn"},[s("i",{staticClass:"iconfont icon-fenxiang"})]),s("div",{staticClass:"div-column"}),s("button",{staticClass:"no-btn"},[s("i",{staticClass:"iconfont icon-jianyi",staticStyle:{"font-size":"19px"}})])])])])]),s("div",{staticClass:"div-line"})])})),s("div",{staticClass:"more-btn-wrap"},[s("button",{staticClass:"btn btn-white"},[t._v("更多精彩评论")])])],2),s("div",{staticClass:"hot-wrap"},[s("div",{staticClass:"font-16 font-bold"},[t._v("最新评论")]),t._l(t.comments,(function(i,e){return s("div",{key:i.commentId,staticClass:"comment-item"},[s("div",{staticClass:"comment_main"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img",attrs:{src:i.user.avatarUrl,alt:""}})]),s("div",{staticClass:"comment-wrap"},[s("div",{staticClass:"comment-content"},[s("span",{staticStyle:{color:"rgb(80, 125, 175)"}},[t._v(t._s(i.user.nickname)+"：")]),s("span",[t._v(t._s(i.content))]),s("div",{staticClass:"reply-content"},[t.replied[e].length>0?[s("span",{staticClass:"font-12 pointer",staticStyle:{"margin-left":"5px",color:"rgb(80, 125, 175)"}},[t._v(" @"+t._s(t.replied[e][0].user.nickname)+"： ")]),s("span",{staticClass:"font-12"},[t._v(" "+t._s(t.replied[e][0].content)+" ")])]:t._e()],2)]),s("div",{staticClass:"comment-info"},[s("div",{staticClass:"time",staticStyle:{color:"rgb(159, 159, 159)","font-size":"12px"}},[t._v(" "+t._s(i.timeStr)+" ")]),s("div",{staticClass:"comment-btn"},[s("button",{staticClass:"no-btn",staticStyle:{"font-size":"12px"}},[s("i",{staticClass:"iconfont icon-dianzan"}),t._v(" "+t._s(i.likedCount)+" "),s("span")]),s("div",{staticClass:"div-column"}),s("button",{staticClass:"no-btn"},[s("i",{staticClass:"iconfont icon-fenxiang"})]),s("div",{staticClass:"div-column"}),s("button",{staticClass:"no-btn"},[s("i",{staticClass:"iconfont icon-jianyi",staticStyle:{"font-size":"19px"}})])])])])]),s("div",{staticClass:"div-line"})])})),s("div",{staticClass:"flex_center",staticStyle:{"margin-top":"10px"}},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",comment:t.comments,"page-size":20,"current-page":t.currentPage,total:t.commentCount},on:{"current-change":t.currentChange}})],1)],2)]],2)],1)},p=[],v={props:["list"],data:function(){return{hotComments:[],comments:[],replied:[],loading:!0,currentPage:1,offset:0,commentCount:0}},created:function(){this.getHotComment(this.list.id,2,5),this.getNewComment()},methods:{getHotComment:function(t,i,s){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,Object(c["b"])(t,i,s);case 3:n=a.sent,e.hotComments=n.data.hotComments,e.loading=!1;case 6:case"end":return a.stop()}}),a)})))()},getNewComment:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.loading=!0,i.next=3,Object(c["d"])({id:t.list.id});case 3:s=i.sent,t.comments=s.data.comments,t.commentCount=s.data.total,s.data.comments.forEach((function(i){t.replied.push(i.beReplied)})),t.loading=!1;case 8:case"end":return i.stop()}}),i)})))()},currentChange:function(t){var i=this;this.currentPage=t,Object(c["d"])({id:this.list.id,page:this.currentPage-1}).then((function(t){i.comments=t.data.comments}))}}},b=v,h=(s("2120"),Object(d["a"])(b,g,p,!1,null,null,null)),C=h.exports,_=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"follow-list"},[s("el-skeleton",{attrs:{rows:6,animated:"",loading:t.loading}},[s("ul",{staticClass:"follow-list-ul"},t._l(t.suberList,(function(i){return s("li",{key:i.userId},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img",attrs:{src:i.avatarUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content-item"},[s("span",[t._v(t._s(i.nickname))]),s("span",{staticClass:"mleft-10"},[1==i.gender?s("i",{staticClass:"el-icon-male",staticStyle:{color:"rgb(61, 161, 209)"}}):2==i.gender?s("i",{staticClass:"el-icon-female",staticStyle:{color:"rgb(234, 90, 149)"}}):s("i")])]),""!==i.signature?s("div",{staticClass:"content-item"},[t._v(" "+t._s(i.signature)+" ")]):t._e()])])})),0),s("div",{staticClass:"flex_center"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",suberList:t.suberList,"page-size":20,"current-page":t.currentPage,total:t.suberCount},on:{"current-change":t.currentChange}})],1)])],1)},w=[],y={props:["list"],data:function(){return{suberList:[],loading:!0,currentPage:1,offset:0,suberCount:0}},created:function(){this.getSuberList({id:this.list.id})},methods:{getSuberList:function(t){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["h"])(t);case 2:e=s.sent,i.suberList=e.data.subscribers,i.suberCount=e.data.total,i.loading=!1;case 6:case"end":return s.stop()}}),s)})))()},currentChange:function(t){var i=this;this.currentPage=t,Object(c["h"])({id:this.list.id,page:this.currentPage-1}).then((function(t){i.suberList=t.data.subscribers}))}}},k=y,L=(s("7956"),Object(d["a"])(k,_,w,!1,null,null,null)),x=L.exports,S=s("c32d"),O=s.n(S),j={name:"PlayListDetail",components:{MusicList:f,Comment:C,FollowList:x},props:{id:{type:String,required:!0}},data:function(){return{playlist:{},active:0,loading:!0,listSongMsg:[]}},created:function(){this.getPlayListDetail(this.id)},methods:{getPlayListDetail:function(t){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["f"])(t,(new Date).getTime());case 2:e=s.sent,a=e.data.playlist,i.playlist=a,i.loading=!1,i.$store.commit("songDetail/setplayListTracks",i.playlist.tracks),i.playlist.tracks.forEach((function(t){var s={};s.songName=t.name,s.singer=t.ar[0].name,s.id=t.id,s.picUrl=t.al.picUrl,i.listSongMsg.push(s)}));case 8:case"end":return s.stop()}}),s)})))()},playListSongs:function(){this.$store.commit("songDetail/setSongList",this.listSongMsg),this.$store.dispatch("songDetail/getoneMusic",this.listSongMsg[0])},updatedList:function(){this.getPlayListDetail(this.id)}},filters:{datefilter:function(t){return O()(t).format("YYYY-MM-DD")},countFormat:function(t){return"undefined"===typeof t?0:t<1e4?t:Math.floor(t/1e4)+"万"}},watch:{$route:function(t,i){this.$route.params.id&&(this.loading=!0,this.getPlayListDetail(this.id))}}},I=j,D=(s("b1bf"),Object(d["a"])(I,e,a,!1,null,null,null));i["default"]=D.exports},b1bf:function(t,i,s){"use strict";s("6c42")},bd8f:function(t,i,s){},fda8:function(t,i,s){}}]);
//# sourceMappingURL=chunk-2db4d2c7.d89760d9.js.map