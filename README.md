![](https://miro.medium.com/max/2430/1*ACR0gj0wbx91V_xgURifWg.png)


# VueJS

Meus estudos do framework Vue [JS](https://br.vuejs.org/) para criação de interfaces com Javascript.


## Importando o VUE JS

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>




## Rodando o projeto


    npm start




## Instanciando o Vue Js

Para manipular elementos da DOM, precisamos instanciar o vue e associá-lo ao **el**emento.



**HTML**

    <div id="app">
        <h1>{{msg}}<h1>
    </div>

**JS**

    let vue1 = new Vue({

        el: "#app",
        data: {

            msg: "Hello  VUE JS!"
        }
    })


## Contador VUE JS

**HTML**

    <div class="contador" id="contador">
        <h2>Contador</h2>
        <h3>{{resultado}}</h3>

        <div class="botoes">
            <button class="menos" v-on:click="menos">-</button>
            <button class="mais" v-on:click="mais">+</button>
        </div>

    </div>


**JS**



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



    
