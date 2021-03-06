//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    //Make the counter private and not overridable
    var counter = new Date().getTime();

    /**
     * generator used to obtain unique ids, uuids and shortened uuids
     */
    Ext.define('mh.utils.Generator', {

        singleton: true,

        /**
         * Returns a unique id
         * @returns {*}
         * @member mh.utils.Generator
         */
        getId: function(){
            counter += 1;
            return counter;
        },

        /**
         * generates uuid
         * @param [a]
         * @param [b]
         * @returns {*}
         * @member mh.utils.Generator
         */
        getUuid: function(a,b){
            //https://gist.github.com/LeverOne/1308368

            /*
             DO WTF YOU WANT TO PUBLIC LICENSE
             Version 2, December 2004
             Copyright (C) 2011 Alexey Silin <pinkoblomingo@gmail.com>
             Everyone is permitted to copy and distribute verbatim or modified
             copies of this license document, and changing it is allowed as long
             as the name is changed.
             DO WTF YOU WANT TO PUBLIC LICENSE
             TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
             0. You just DO WTF YOU WANT TO.
             */

            /*
             function(
             a,b                // placeholders
             ){
             for(               // loop :)
             b=a='';        // b - result , a - numeric variable
             a++<36;        //
             b+=a*51&52  // if "a" is not 9 or 14 or 19 or 24
             ?  //  return a random number or 4
             (
             a^15      // if "a" is not 15
             ?      // genetate a random number from 0 to 15
             8^Math.random()*
             (a^20?16:4)  // unless "a" is 20, in which case a random number from 8 to 11
             :
             4            //  otherwise 4
             ).toString(16)
             :
             '-'            //  in other cases (if "a" is 9,14,19,24) insert "-"
             );
             return b
             }
             //And a short form
             function(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b}
             */

            for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b
        },

        /**
         * generates a short version of uuid - either the first or the last part
         * @param [first]
         * @returns {string}
         * @member mh.utils.Generator
         */
        getShortUuid: function(first){

            var uuid = this.getUuid();

            if(first){
                return uuid.substring(0, uuid.indexOf('-'));
            }
            else {
                return uuid.substring(uuid.lastIndexOf('-') + 1, uuid.length);
            }
        }
    });
}());