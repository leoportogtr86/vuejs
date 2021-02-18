![](https://miro.medium.com/max/2430/1*ACR0gj0wbx91V_xgURifWg.png)


# VueJS

Meus estudos do framework Vue JS.


### Importando o VUE JS

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>




### Instanciando o Vue Js

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







 
