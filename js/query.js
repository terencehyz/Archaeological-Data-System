/**
 * Created by terencehyz on 2017/5/6.
 */
var serverIp="";
new Vue({
    el:"#queryVue",
    data:{
        goodsList:[],
        goodsValue:"",
        noList:false,
        showResult:false
    },
    filters:{

    },
    mounted: function () {
        if(localStorage.getItem("lLoginStatus")==false||localStorage.getItem("lLoginStatus")==undefined)
        {
            //路由跳转到登陆页面
        }
    },
    watch:{
        goodsValue:function () {
            this.showResult=false;
            this.noList=false;
        }
    },
    methods:{
        getGoodsList: function () {
            var _this=this;
            var url = serverIp + "" + _this.goodsValue + "&callback=JSON_CALLBACK";
            this.$http.get(url).then(function (res) {
                _this.showResult=true;
                if(res.body){
                    _this.goodsList=res.body;
                }
                else{
                    _this.noList=true;
                }
            });
        },
        signOut: function () {
            localStorage.clear();
            //路由跳转到登陆页面
        }
    }
});