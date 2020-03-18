(function(){
    var hll = {
        app: document.querySelector('#app'),
        row: document.querySelector('#scroll-row'),
        scroll: document.querySelector('.scroll-content'),
        // shortCodes: document.querySelectorAll('.sc'),
        // searchCount: document.querySelector('.search__count'),
        // searchWrapper: document.querySelector('.search__wrapper'),
        // copyButton: document.querySelectorAll('.sc__copy'),

        calculator: function(){

            var mils = 978;
            var mil = 0.21;
            
            for( var i = 100; i <= 1600; i++ ){
                var cln = this.row.cloneNode(true);

                cln.removeAttribute('id');
                cln.querySelector('.scroll-meters').innerText = i;
                cln.querySelector('.scroll-mils').innerText = Math.floor( mils );

                this.scroll.appendChild(cln);

                mils -= mil;
            }
        },

        // Returns true if the input text value matches the content
        // hasPhrase: function(block, element, query){

        //     var text = block.querySelector(element);
        //     if(text){
        //         return text.innerHTML.toLowerCase().indexOf(query)>=0
        //     } else {
        //         return false
        //     }
        // },

        // updateCount: function(c){
        //     switch(c){
        //         case 0 : return "Sorry, we haven't got this record yet. <a href=\"https://github.com/proochster/shortcode/issues\">Submit a request here</a>";
        //         case 1 : return "<strong>1</strong> result found";
        //         default : return "<strong>" + c + "</strong> results found";
        //     }
        // },

        // searchLoop: function(){
                
        //     var self = this;
            
        //     // Reset search counter
        //     counter = 0;
            
        //     // Searched term value
        //     var inputPhrase = this.searchInput.value.toLowerCase();
            
        //     // Loop through the list of shortcodes
        //     this.shortCodes.forEach(function(code){
                
        //         // Reset display of the shortcodes
        //         code.setAttribute('data-display','false');
                
        //         // Look for the searched phrase in title and desccription
        //         if(self.hasPhrase(code,'.sc__title',inputPhrase) || self.hasPhrase(code,'.sc__text',inputPhrase)){
        //             code.setAttribute('data-display','true');
                    
        //             // Count elements that match the searched term
        //             counter++;                    
        //         }
        //     });

        //     // Update the counter after the search is finished
        //     this.searchCount.innerHTML = this.updateCount(counter);
        // },

        // // Search shortcode
        // search: function(){

        //     var self = this;
        //     var counter = self.shortCodes.length;
        //     self.searchCount.innerHTML = self.updateCount(counter);
          
        //     this.searchInput.onkeyup = function(){
                
        //         self.searchLoop();
        //         self.updateSearchIcon();
        //         self.clearSearch();
        //     }
        // },

        // updateSearchIcon: function(){

        //     if (this.searchInput.value) {
        //         this.searchInput.nextElementSibling.classList.add('search__clear');
        //     } else {
        //         this.searchInput.nextElementSibling.classList.remove('search__clear');
        //     }
        // },

        // clearSearch: function(){

        //     var self = this;

        //     if(this.searchWrapper.querySelector('.search__clear')){
        //         this.searchWrapper.querySelector('.search__clear').onclick = function(){
        //             self.searchInput.value = '';
        //             self.searchLoop();
        //             self.updateSearchIcon();
        //         };
        //     }
        // },

        // copyText: function(){
                        
        //     this.copyButton.forEach(function(btn){
        //         btn.addEventListener('click', function(){

        //             let str = btn.parentElement.querySelector('[data-lang]').innerText;                    
        //             let el = document.createElement('textarea');
        //             let copyText = btn.querySelector('.sc__copy-text');

        //             el.value = str;
        //             document.body.appendChild(el);
        //             el.select();
        //             document.execCommand('copy');
        //             document.body.removeChild(el);

        //             copyText.innerText = "copied";

        //             setTimeout(function () {                    
        //                 copyText.innerText = "copy";
        //             }, 1000)

        //         });
        //     });
        // },

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