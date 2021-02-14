var kron = (function(){

    var k = {
        dataElement: document.querySelector('#kData'),
        dataStorageKey: document.querySelector('#kData').getAttribute('data-story'),
        kTemplate: document.querySelector('#frame-template'),
        kChoice: document.querySelector('#choice-template'),
        frames: document.querySelector('#frames'),
        numberOfChoices: 6,
        
        devClear: document.querySelector('#dev-clear'),

        parsedData: function(){
            const kData = JSON.parse(this.dataElement.innerHTML);
            return kData;
        },

        initFrames: function(){

            // Check Local Storage for Story item
            let savedState = window.localStorage.getItem(this.dataStorageKey);

            if ( !savedState ){

                // Create localStorage object and pass initial 0 state array as a value
                console.log('First visit: local storage ' + this.dataStorageKey + ' created');
                window.localStorage.setItem(this.dataStorageKey, JSON.stringify([0]));

                // Load first frame
                this.loadFrame(this.parsedData()[0]);

            } else {

                // Load frames by iterating through local storage data
                let parsedState = JSON.parse(savedState);

                
                // Loop throug saved choices
                parsedState.forEach( (s, sIndex) => {
                    
                    // Check if last choice and load with all active options
                    if( parsedState.length -1 === sIndex ){
                        this.loadFrame(this.parsedData()[s], false);
                        
                    // Oterwise disable choices and set highlights on selected ones
                    } else {
                        let nextIndex = sIndex + 1;
                        this.loadFrame(this.parsedData()[s], true, parsedState[nextIndex]);
                    }

                });

                console.log('Welcome back: loading data from ' + this.dataStorageKey + ' local storage');

            }            
        },

        loadFrame: function(jsonFrame, inactive, selectedChoice){

            // Load <frame-template>
            const frame = document.importNode(this.kTemplate.content, true);

                // Load Title and Copy to the frame
                frame.querySelector('.title').innerHTML = jsonFrame.title ? jsonFrame.title : '';
                frame.querySelector('.copy').innerHTML = jsonFrame.copy ? jsonFrame.copy : '';

                // Check for Choices
                for( let c = 1; c <= this.numberOfChoices; c++ ){

                    let choiceValue = eval('jsonFrame.choice_'+c);
                    let choiceIndex = eval('jsonFrame.goto_'+c);

                    // If choice exists
                    if( choiceValue != null && choiceIndex != null ){

                        // Load <choice-template>
                        let choice = document.importNode(this.kChoice.content, true);

                        // Set values
                        let choiceLink = choice.querySelector('.choice');
                        choiceLink.innerHTML = choiceValue;
                        choiceLink.setAttribute('data-choice', choiceIndex);
                        choiceLink.setAttribute('href', '#' + choiceIndex);

                        // Update state of choices when loaded from storage
                        // Check if this was the selected choice
                        if( selectedChoice && selectedChoice === choiceIndex - 2 ){
                            
                            // console.log('selectedChoice ' + selectedChoice + ' choiceIndex: ' + choiceIndex);
                            choiceLink.parentElement.classList.add('is-chosen');

                            // Apply disabled style to the choice
                        } else if ( inactive ){
                            choiceLink.parentElement.classList.add('not-chosen');
                        }

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
            selectedFrameIndex = e.target.getAttribute('data-choice') - 2;

            // Update state of Choices
            this.sortClicks(e.target);

            // Save Choice to local storage
            let currentState = JSON.parse(window.localStorage.getItem(this.dataStorageKey));
            currentState.push(selectedFrameIndex);
            window.localStorage.setItem(this.dataStorageKey, JSON.stringify(currentState));

            // Load frame
            this.loadFrame(this.parsedData()[selectedFrameIndex]);
        },

        sortClicks: function( choice ){
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

        clearChoices: function(){
            k.devClear.addEventListener('click', () => {
                console.log('Clearing choices for ' +  this.dataStorageKey);                
                window.localStorage.clear(this.dataStorageKey);
                location.reload();
            });
        },

        init: function(){
            if( k.dataElement ){
                this.initFrames();
            }
            if( k.devClear ){
                this.clearChoices();
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