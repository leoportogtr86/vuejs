let vue1 = new Vue({

    el: "#app",
    data: {

        msg: "Hello  VUE JS!"
    }
})



let btn1 = new Vue({

    el: ".btn1",
    data: {


    },

    methods: {

        clicou() {

            console.log('click')
        }
    }
})


new Vue({

    el: "#contador",
    data: {

        resultado: 0
    },
    methods: {

        mais() {

            this.resultado++


        },

        menos() {

            this.resultado--


        }
    }
})