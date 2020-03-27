(function(){
    var hll = {
        app: document.querySelector('#app'),
        row: document.querySelector('#scroll-row'),
        scroll: document.querySelector('.scroll-content'),

        calculator: function(){

            var mils = 978 + 2;
            var mil = 0.2373;
            
            for( var i = 95; i <= 1605; i++ ){
                var cln = this.row.cloneNode(true);

                cln.removeAttribute('id');
                cln.querySelector('.scroll-meters').innerText = i >= 100 ? i : '---';
                cln.querySelector('.scroll-mils').innerText = mils <= 979 ? Math.floor( mils ) : '---';

                if( i % 100 == 0 ){
                    cln.setAttribute("id", i);
                }

                this.scroll.appendChild(cln);

                mils -= mil;
            }
        },

        init: function(){
            if( hll.app ){
                this.calculator();
            }
        }
    };
    
    return (
        hll.init()
    )
})();