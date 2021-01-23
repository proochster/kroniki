var kron = (function(){

    var k = {
        dataElement: document.querySelector('#kData'),
        kTemplate: document.querySelector('#frame-template'),
        kChoice: document.querySelector('#choice-template'),
        frames: document.querySelector('#frames'),
        numberOfChoices: 6,

        parsedData: function(){
            const kData = JSON.parse(this.dataElement.innerHTML);
            return kData;
        },

        initFrames: function(){
            // Load first story frame
            this.loadFrame(this.parsedData()[0]);
        },

        loadFrame: function(jsonFrame){

            // Load <frame-template>
            const frame = document.importNode(this.kTemplate.content, true);

                // Load Title and Copy to frame
                frame.querySelector('.title').innerHTML = jsonFrame.title ? jsonFrame.title : '';
                frame.querySelector('.copy').innerHTML = jsonFrame.copy ? jsonFrame.copy : '';
            
                // Check for Choices
                for( let c = 1; c <= this.numberOfChoices; ++c ){
                    let choiceValue = eval('jsonFrame.choice_'+c);
                    let choiceIndex = eval('jsonFrame.goto_'+c);

                    if( choiceValue != null && choiceIndex != null ){

                        // Load <choice-template>
                        let choice = document.importNode(this.kChoice.content, true);

                        // Set values
                        let choiceLink = choice.querySelector('.choice');
                        choiceLink.innerHTML = choiceValue;
                        choiceLink.setAttribute('data-choice', choiceIndex);
                        choiceLink.setAttribute('href', '#' + choiceIndex);

                        // Append Choices to Frame
                        frame.querySelector('.choices').appendChild(choice);
                    }
                }

            // Append Frame to frames
            this.frames.appendChild(frame);
        },

        choiceClick: function(e){
            e.preventDefault();
            /**
             * Deducts 2 rows to align CSV file with the Data Sheet
             * Document starts on row 2 and parsed data starts with index 0
             */

            frameIndex = e.target.getAttribute('data-choice') - 2;

            // Sort out Choices
            this.sortClicks(e.target);

            // Load frame
            this.loadFrame(this.parsedData()[frameIndex]);
        },

        sortClicks: function(choice){
            /**
             * choice - anchor tag
             * choices - list of choices
             */

            let choices = choice.closest('.choices').querySelectorAll('.choices--item');

            choices.forEach(c => {
                if(choice.parentElement == c){
                    c.classList.add('is-chosen');
                } else {
                    c.classList.add('not-chosen');
                }
            });
        },

        init: function(){
            if( k.dataElement ){
                this.initFrames();
            }
            // scrollTo = document.querySelectorAll('[data-scroll]');

            // scrollTo.forEach( s => {

            //     s.addEventListener('click', () => {

            //         this.scrollIt(
            //             document.getElementById(s.text),
            //             300,
            //             'easeOutQuad',
            //             // () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
            //         );
            //     });
            // });
        },
        
        // calculator: function(){

        //     var mils = 978 + 2;
        //     var mil = 0.2373;
            
        //     for( var i = 95; i <= 1605; i++ ){
        //         var cln = this.row.cloneNode(true);

        //         cln.removeAttribute('id');
        //         cln.querySelector('.scroll-meters').innerText = i >= 100 ? i : '---';
        //         cln.querySelector('.scroll-mils').innerText = mils <= 979 ? Math.floor( mils ) : '---';

        //         if( i % 100 == 0 ){
        //             cln.setAttribute("id", i);
        //         }

        //         this.scroll.appendChild(cln);

        //         mils -= mil;
        //     }
        // },

        // scrollIt: function(destination, duration = 200, easing = 'linear', callback) {

        //     const easings = {
        //         linear(t) {
        //             return t;
        //         },
        //         easeInQuad(t) {
        //             return t * t;
        //         },
        //         easeOutQuad(t) {
        //             return t * (2 - t);
        //         },
        //         easeInOutQuad(t) {
        //             return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        //         },
        //         easeInCubic(t) {
        //             return t * t * t;
        //         },
        //         easeOutCubic(t) {
        //             return (--t) * t * t + 1;
        //         },
        //         easeInOutCubic(t) {
        //             return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        //         },
        //         easeInQuart(t) {
        //             return t * t * t * t;
        //         },
        //         easeOutQuart(t) {
        //             return 1 - (--t) * t * t * t;
        //         },
        //         easeInOutQuart(t) {
        //             return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        //         },
        //         easeInQuint(t) {
        //             return t * t * t * t * t;
        //         },
        //         easeOutQuint(t) {
        //             return 1 + (--t) * t * t * t * t;
        //         },
        //         easeInOutQuint(t) {
        //             return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        //         }
        //     };

        //     const scrollContent = document.querySelector('.scroll-content');
        
        //     const start = scrollContent.scrollTop;
        //     const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        
        //     // const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        //     // const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        //     // const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        //     // const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
            
        //     const scrollHeight = scrollContent.scrollHeight;
        //     const scrollWrapperHeight = document.querySelector('.scroll-wrapper').clientHeight;
        //     const destinationOffset = destination.offsetTop;
        //     const destinationOffsetToScroll = Math.round(scrollHeight - destinationOffset < scrollWrapperHeight ? scrollHeight - scrollWrapperHeight : destinationOffset);

        
        //     if ('requestAnimationFrame' in window === false) {
        //         scrollContent.scroll(0, destinationOffsetToScroll);
        //     if (callback) {
        //         callback();
        //     }
        //     return;
        //     }
        
        //     function scrollAnimation() {

        //         const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        //         const time = Math.min(1, ((now - startTime) / duration));
        //         const timeFunction = easings[easing](time);
        //         scrollContent.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
            
        //         if (scrollContent.scrollTop === destinationOffsetToScroll) {
        //             if (callback) {
        //             callback();
        //             }
        //             return;
        //         }
            
        //         requestAnimationFrame(scrollAnimation);
        //     }
        
        //     scrollAnimation();
        // },
    };
    
    return (
        k.init(),
        k
    );

})();