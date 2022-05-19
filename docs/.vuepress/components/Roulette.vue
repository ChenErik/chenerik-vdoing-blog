<template>
<div class="eat-what">
  <div class="main" id="main">
    <div id="box" class="box">
        <div class="box1">
            <span class="span1"><b style="left:25%;">Spicy hot pot
                <br>🍲
            </b></span>
            <span class="span2"><b style="left:75%;">KFC
                <br>🍔
            </b></span>
            <span class="span3"><b style="top:80%;">Canteen
                <br>🏚️
            </b></span>
            <span class="span4"><b style="top:25%;">Noodles
                <br/>🍜
            </b></span>
        </div>
        <div class="box2">
            <span class="span1"><b style="left:25%;">Curry Rice
                <br>🍛
            </b></span>
            <span class="span2"><b style="left:75%;">Coffee
                <br>🍯
            </b></span>
            <span class="span3"><b style="top:75%;">Beef vermicelli
                <br>🍝
            </b></span>
            <span class="span4"><b style="top:25%;">Roast Fish
                <br>🦈</b>
            </span>
        </div>
    </div>
  </div>
    <button class="spin" @click="myfunction()">Spin!</button>
</div>
</template>

<script>
export default {
    name:'Roulette',
    methods:{
        myfunction(){
            var x = 1024;
            var y = 9999;
            var deg = Math.floor(Math.random() * (x - y)) + y;
            document.getElementById('box').style.transform = "rotate("+deg+"deg)";
            var element = document.getElementById('main');
            element.classList.remove('animate');
            setTimeout(function(){
                element.classList.add('animate');
            }, 3000);
        }
    },
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
}
.eat-what{
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    overflow: hidden;
    background: #e4f2f0;
    background-size: cover;
    position: relative;
}
.main{
position: relative;
width: 500px;
height: 500px;
}

.main:after{
    position: absolute;
    content: '';
    width: 32px;
    height: 32px;
    background: url(https://cdn.jsdelivr.net/gh/ChenErik/image-hosting@master/images/arrow.26xvu16op680.webp) no-repeat;
    background-size: 32px;
    top: 37%;
    transform: translate(-50%,-50%);
    left: 50%;
}

.box{
width: 100%;
height: 100%;
position: relative;
border-radius: 50%;
border: 9px solid black;
overflow: hidden;
transition: all ease 3s;

}

span{
width: 50%;
height: 50%;
display: inline-block;
position: absolute;
}

.span1{
clip-path: polygon(0 92%, 100% 50%, 0 8%);
background-color: #618d87;
top: 120px;
left: 0;
}
.span2{
clip-path: polygon(100% 92%, 0 50%, 100% 8%);
background-color: rgb(90, 90, 90);
top: 120px;
right: 0;
}
.span3{
clip-path: polygon(50% 0%, 8% 100%, 92% 100%);
background-color: #70416d;
bottom: 0;
left: 120px;
}
.span4{
clip-path: polygon(50% 100%, 92% 0, 8% 0);
background-color: #170a19;
top: 0;
left: 120px;

}

.box2{
width: 100%;
height: 100%;
transform: rotate(-135deg);
}
span b{
    font-family: 'Roboto Condensed', sans-serif;
    width: 100px;
    height: 65px;
    line-height: 20px;
    color: rgb(228, 226, 226);
    font-size: 18px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.spin{
    font-family: 'Roboto Condensed', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: rgb(46, 77, 77);
    color: #fff;
    box-shadow: 0 5px 10px #000;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
}

.spin:active{
    width: 60px;
    height: 60px;
    font-size: 20px;
}

.main.animate:after{
    animation: animateArrow 0.7s ease infinite;

}
</style>