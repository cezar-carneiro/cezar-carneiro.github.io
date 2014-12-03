;(function($) {
	$.fn.glow = function(options) {       
        function animate(curRad){
            //add a box-shadow to the element
            css['box-shadow'] = fixedParams + curRad + 'px ' + options.color;
            $this.css(css);
            if(curRad < options.spreadSize)
                setTimeout(function(){animate((curRad += stepRad));}, 24);//agenda a proxima plotagem
        }
       
        function pulsate(pulses){//execute 'pulses' pulses
            if(pulses > 0){
                animate(0);//initiate the animation of one pulse
                setTimeout(function (){pulsate(--pulses);}, options.pulseDuration);//schedule next pulse
            }else{
                //end of all pulses
                css['box-shadow'] = 'none';
                $this.css(css);
            }
        }
       
       	var $this = $(this);
        var stepRad = options.spreadSize / (options.pulseDuration / 30);
        var fixedParams = options.horizontalLength + 'px ' + options.verticalLength + 'px ' + options.blurSize + 'px ';
        var css = {'box-shadow': fixedParams + '0px ' + options.color};
       
        //INIT
        pulsate(options.pulses);
	}
})(jQuery);