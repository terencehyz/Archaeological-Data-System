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
               _this.title=res.result;
            });
        }
    }
});