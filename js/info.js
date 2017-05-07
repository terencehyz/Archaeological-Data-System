/**
 * Created by terencehyz on 2017/5/6.
 */
new Vue({
    el:"#infoVue",
    data:{
        title:"hello!"
    },
    filters:{

    },
    mounted: function () {

    },
    methods:{
    signOut: function () {
        localStorage.clear();
        //路由跳转到登陆页面
    }
    }
});