//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * An example of the event data sent using the postMessage msg bus. This is a standardised DTO for all the cross window events
     * This class is never instantiaded, its main purpose is documentation.
     */
    Ext.define('mh.communication.PostMessageEvtData', {

        /**
         * @property {string} eventName
         */

        /**
         * @property {Number} currentLvl
         * indicates the current level of the event. Usually increased / decreased just before firing.
         * 0 means the level is the same as the firing window, positive numbers indicate the event is travelling up the window / parent stack, while negative number means the event is travelling down the child windows / frames stack
         */

        /**
         * @property {string} initiator
         * unique identifier of the event initiator. can be used to decide whether pass event back
         */

        /**
         * @property {string} sender
         * unique identifier of a sender.
         */

        /**
         * @property {string} recipient
         * unique identifier of a recipient. allows specifing the id of a recipient (that should have been generated by him), so msg can be recognised by a desired target
         * this is important, when there are many frames loaded from the same origin
         */

        /**
         * @property {Object} data
         * the actual event DTO
         */

        /**
         * @property {mh.communication.MsgBusEvtOpts} eOpts
         * event brodcasting options
         */
    });

}());