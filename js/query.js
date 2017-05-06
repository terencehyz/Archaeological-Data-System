/**
 * Created by terencehyz on 2017/5/6.
 */
new Vue({
    el:"#queryVue",
    data:{
        goodsList:[]
    },
    filters:{

    },
    mounted: function () {

    },
    methods:{
        getGoodsList: function () {
            var _this=this;
            this.$http.get().then(function (res) {

            });
        }
    }
});