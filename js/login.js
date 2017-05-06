/**
 * Created by terencehyz on 2017/5/6.
 */
var vm = new Vue({
    el:"#app",
    data:{
        title:""
    },
    filters:{

    },
    mounted: function () {

    },
    methods:{
        login: function () {
            var _this = this;
            this.$http.get().then(function (res) {
                /* res.body是取到的真正PHP返回的内容 */
               _this.title=res.body.result;
            });
        }
    }
});