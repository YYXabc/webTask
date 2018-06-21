/**
 * Created by Administrator on 2018/3/14 0014.
 */
var vue = new Vue ({
    el:"#app",
    data: {
    },
    components: {
        'my-project-code': {
            template:''+
            '<ul class="my-project-list">' +
            '<li v-for="n in N" v-if="statue == \'projectUrl\'"><a :href="projectUrl+n+\'.html\'" target="_blank">项目{{n}}</a></li>' +
            '<li v-for="n in N" v-if="statue != \'projectUrl\'"><a :href="gitHubUrl+n+\'.html\'" target="_blank">源码{{n}}</a></li>'+
            '</ul>',
            props:['statue'],
            data: function () {
                return {
                    gitHubUrl:'https://github.com/YYXabc/webTask/blob/master/html/test',
                    projectUrl:'html/test',
                    N:[1,2,3,4,5,6,7,8,9,10]
                }
            }
        },
        'my-project': {
            template:　''+
            '<div class="col-lg-5 col-md-5 col-sm-12">'+
            '<div class="text-center">'+
            '<h2>{{title}}</h2>' +
            '<slot name="list"></slot>'+
            '</div>'+
            '</div>',
            props:['title'],
        },
        'my-navigation-bar': {
            template: ''+
            '<div class="navbar navbar-fixed-top navbar-inverse">'+
            '<div class="container">'+
            '<div class="navbar-header">'+
            '<button type="button" name="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
            '<span class="sr-only">Toggle navigation</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '</button>'+
            '</div>'+
            '<div class="collapse navbar-collapse">'+
            '<ul class="nav navbar-nav" id="id-ul">'+
            '<li><a class="navbar-brand" :href="indexHref">动态Web</a></li>'+
            '<li><a target="_blank" :href="gitHubHref"><span class="glyphicon glyphicon-home"> GitHub</span></a></li>'+
            '<li><a target="_blank" :href="contactHref"><span class="glyphicon glyphicon-qrcode"> 点击这里给我发消息</span></a></li>'+
            '<li><a target="_blank" :href="musicHref"><span class="glyphicon glyphicon-headphones"> 我的歌单</span></a></li>'+
            '</ul>'+
            '</div>'+
            '</div>'+
            '</div>',
            data: function () {
                return {
                    'indexHref':'http://201401250132.net3v.net/',
                    'musicHref': "http://music.163.com/#/m/playlist?id=113810547&userid=96573719",
                    'contactHref': "http://wpa.qq.com/msgrd?v=3&uin=404115964&site=qq&menu=yes",
                    'gitHubHref': "https://github.com/YYXabc?tab=repositories",
                }
            }
        },
        'my-div': {//test1.html
            template: ''+
            '<div class="container">'+
            '<div class="text-center">'+
            '<slot name="title1"></slot>'+
            '<img v-for="n in imgName" :src="url+n">'+
            '<slot name="title2"></slot>'+
            '<img :src="url+imgName[3]" alt="">'+
            '</div>'+
            '</div>',
            data: function () {
                return {
                    url:'../img/imgWeb/',
                    imgName:['glxy.jpg','rwysxy.jpg','sxy.jpg','A.png']
                }
            }
        }
    }
})
