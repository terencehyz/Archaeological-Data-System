/**
 * Created by terencehyz on 2017/5/6.
 */
var serverIp="http://47.93.31.225/project/";
var vm = new Vue({
    el:"#app",
    data:{
        userInfo:{
            id:"",
            pwd:""
        },
        loginMessage:"",
        temp:{}
    },
    filters:{

    },
    mounted: function () {

    },
    watch:{
        userInfo:function () {
            this.loginMessage="";
        }
    },
    methods:{
        login: function () {
            var _this = this;
            var url = serverIp+"login.php?username="+_this.userInfo.id+"&password="+hex_md5(_this.userInfo.pwd)+"&callback=JSON_CALLBACK";
            this.$http.get(url).then(function (res) {
                _this.temp=res.body;
                /* res.body是取到的真正PHP返回的内容 */
                if(res.body.judge){
                    _this.loginMessage="";
                    localStorage.setItem("lUserInfo",res.body);
                    localStorage.setItem("lLoginStatus",true);
                    //路由跳转到query页面
                }
                else{
                    _this.loginMessage="用户名或密码错误！请重试";
                }
            });
        }
    }
});