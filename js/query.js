/**
 * Created by terencehyz on 2017/5/6.
 */
var serverIp="http://47.93.31.225/project/";
new Vue({
    el:"#queryVue",
    data:{
        showLogin:localStorage.getItem("lLoginStatus"),
        showForm8:false,
        showItem:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
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

    },
    methods:{
        selectForm:function () {
            this.showItem=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
            this.getData8();
        },
        signOut: function () {
            localStorage.clear();
            //路由跳转到登陆页面
        },
        getData8:function () {
            this.showForm8=true;
        }
    }
});