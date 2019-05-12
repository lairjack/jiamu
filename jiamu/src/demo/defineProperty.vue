<template>
    <div>
        <div id="show">
        </div>
        <input type="text" id="inp">
    </div>
</template>
<script>
export default {
    methods:{
        obj(){
            var obj = {};
            var showDIV = document.querySelector("#show")
            var inp = document.querySelector("#inp")
            Object.defineProperty(obj,'name',{
                get:function(){
                    console.log('我被获取了')
                    return val
                },
                set:function(newVal){
                    inp.value = newVal;
                    showDIV.innerHTML = newVal;
                }
            })
            inp.addEventListener('input',function(e){
                obj.name=e.target.value;
            })
            // obj.name = 'laozhang'
            // var val = obj.name
        }
    }
}
</script>
