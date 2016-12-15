<template>
    <div id="menu-wapper">
        <ul class="sidenav">
            <li>
                <router-link to="/edit/New"><i class="fa fa-check"></i><b>新的动作</b></router-link>
            </li>
            <li @click="move">
                <a href="#"><i class="fa fa-inbox"></i><b>新的训练计划</b></a>
            </li>
            <li><a href="#"><i class="fa fa-pencil"></i><b>New Post</b></a></li>
            <li><a href="#"><i class="fa fa-cog"></i><b>Settings</b></a></li>
            <li><a href="#"><i class="fa fa-star"></i><b>Starred</b></a></li>
            <li><a href="#"><i class="fa fa-power-off"></i><b>Logout</b></a></li>
        </ul>

    </div>
</template>
<script>
    import { MessageBox } from 'mint-ui'
    export default {
        methods: {
            move() {
                this.$store.state.selected = "健身计划"
                MessageBox.prompt('请输入计划的名称')
                    .then(({ value, action }) => {
                        this.$store.state.title = value
                        this.$store.state.planList[value] = {}
                        this.$store.state.selectedParams.name = value
                        this.$router.push("/PlanMuscleList/new")
                    })
                    .catch(() => console.log('conl'))
        }
    }
    }
</script>
<style>
    .sidenav {
        background: rgb(50, 60, 60);
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 15px;
        padding-top: 10vh;
    }
    
    .sidenav li {
        list-style-type: none;
    }
    
    .sidenav a {
        color: white;
        text-decoration: none;
    }
    
    .sidenav b {
        font: bold 12px/48px Montserrat;
        display: block;
        opacity: 1;
        transform: translateX(50px);
        transition: all 0.4s;
    }
    
    .sidenav i {
        display: block;
        width: 50px;
        float: left;
        font-size: 16px;
        line-height: 48px;
        text-align: center;
    }
    
    #tm:checked ~ .sidenav b {
        opacity: 1;
        transform: translateX(0);
    }
    /*Adding delay to link animation - in multiples of .08s*/
    /*One can use jQuery also for creating the delayed effect. But I will stick to manual CSS for this walkthrough.*/
    #tm:checked ~ .sidenav li:nth-child(1) b {transition-delay: 0.08s;}
	#tm:checked ~ .sidenav li:nth-child(2) b {transition-delay: 0.16s;}
	#tm:checked ~ .sidenav li:nth-child(3) b {transition-delay: 0.24s;}
	#tm:checked ~ .sidenav li:nth-child(4) b {transition-delay: 0.32s;}
	#tm:checked ~ .sidenav li:nth-child(5) b {transition-delay: 0.40s;}
    #tm:checked ~.sidenav li:nth-child(6) b {
        transition-delay: 0.48s;
    }
</style>