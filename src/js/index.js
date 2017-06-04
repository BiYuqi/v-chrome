import '../css/index.css'
import '../css/animate.css'
import Vue from 'vue/dist/vue.min.js'
import showdown from 'showdown/dist/showdown.min.js'
import Clipboard from 'clipboard/dist/clipboard.min.js'
import data from '../data/info.json'

new Vue({
    el:"#app-prev-css",
    data () {
        return {
            selected:'bounce',
            activeClass: 'animated',
            errorClass: 'bounce',
            isShow:false,
            options:[
                'bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello',
                'bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp',
                'bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp',
                'fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight',
                'fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig',
                'fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig',
                'flip','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut',
                'rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight',
                'rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight',
                'slideInUp','slideInDown','slideInLeft','slideInRight','slideOutUp','slideOutDown','slideOutLeft',
                'slideOutRight','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp',
                'zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp','hinge','rollIn','rollOut'
            ]
        }
    },
    methods:{
        copyTips () {
            const that = this;
            this.isShow = true;
            setTimeout(function(){
                that.isShow = false;
            },1000)
        }
    },
    computed:{
        cssText () {
            this.errorClass = this.selected

            var converter =  new showdown.Converter({
              tables: true
            });

            var  baseData = data[this.selected]
            baseData = converter.makeHtml(baseData);

            baseData = baseData.replace(/(.*?)gs/g,"<div>$1</div>")
            baseData = baseData.replace(/<p>|<\/p>/g,"")
            baseData = baseData.replace(/\b(sp)\b/g,"<span class='space'></span>")
            baseData = baseData.replace(/\b(sp2)\b/g,"<span class='space2'></span>")

            return baseData
        }
    },
    mounted:function() {
        this.$nextTick(function(){
            new Clipboard('.copy-btn');
        })
    }
})
