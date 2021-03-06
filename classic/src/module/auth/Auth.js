(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Lock screen used to lock the UI from user interaction; adds item to centered vbox layout
     */
    Ext.define('mh.module.auth.Auth', {
        extend: 'mh.module.auth.LockingScreen',

        xtype: 'mh.auth-screen',

        controller: 'mh-auth',

        requires: [
            'Ext.layout.container.VBox',
            'mh.module.auth.LockingScreen',
            'mh.module.auth.AuthController'
        ],

        config: {

            /**
             * @cfg {string} [loginView|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'loginView|setUI': null,

            /**
             * @cfg {string} [btnForgotPass|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnForgotPass|setUI': null,

            /**
             * @cfg {string} [btnForgotPass|setScale]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnForgotPass|setScale': null,

            /**
             * @cfg {string} [btnLogin|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnLogin|setUI': null,

            /**
             * @cfg {string} [btnLogin|setScale]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnLogin|setScale': null,

            /**
             * @cfg {string} [forgotPassView|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'forgotPassView|setUI': null,

            /**
             * @cfg {string} [btnResetPass|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnResetPass|setUI': null,

            /**
             * @cfg {string} [btnResetPass|setScale]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnResetPass|setScale': null,

            /**
             * @cfg {string} [btnResetPassCancel|setUI]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnResetPassCancel|setUI': null,

            /**
             * @cfg {string} [btnResetPassCancel|setScale]
             * see mh.mixin.CustomConfig.applyCustomViewConfig for details
             */
            'btnResetPassCancel|setScale': null
        },

        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },

        items: [
            {
                xtype: 'container',
                width: 300,

                layout: 'card',

                reference: 'cardLayout',

                items: [
                    {
                        xtype: 'form',
                        header: {
                            title: 'Login',
                            iconCls: 'x-fa fa-lock',
                            height: 35
                        },

                        reference: 'loginView',
                        layout: 'form',

                        items: [
                            {
                                xtype: 'textfield',
                                reference: 'txtEmail',
                                height: 35,
                                emptyText: 'Email',
                                enableKeyEvents: true,
                                listeners: {
                                    keydown: 'trapLoginEnter'
                                }
                            },
                            {
                                xtype: 'textfield',
                                reference: 'txtPass',
                                height: 35,
                                emptyText: 'Password',
                                inputType: 'password',
                                enableKeyEvents: true,
                                listeners: {
                                    keydown: 'trapLoginEnter'
                                }
                            }
                        ],
                        dockedItems: [
                            {
                                xtype: 'toolbar',
                                dock: 'bottom',
                                items: [
                                    {
                                        xtype: 'button',
                                        reference: 'btnForgotPass',
                                        text:  'Forgot pass?',
                                        listeners: {
                                            click: 'onForgotPassBtnClick'
                                        }
                                    },
                                    '->',
                                    {
                                        xtype: 'button',
                                        text: 'Login',
                                        reference: 'btnLogin'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        header: {
                            title: 'Forgot pass?',
                            iconCls: 'x-fa fa-exclamation-triangle',
                            height: 35
                        },
                        layout: 'form',
                        reference: 'forgotPassView',
                        items: [
                            {
                                xtype: 'textfield',
                                reference: 'txtForgotPassEmail',
                                height: 35,
                                emptyText: 'Email',
                                enableKeyEvents: true,
                                listeners: {
                                    keydown: 'trapLoginEnter'
                                }
                            }
                        ],
                        dockedItems: [
                            {
                                xtype: 'toolbar',
                                dock: 'bottom',
                                items: [
                                    {
                                        xtype: 'button',
                                        reference: 'btnResetPass',
                                        text:  'Reset pass',
                                        listeners: {
                                            //click: 'onResetPassBtnClick'
                                        }
                                    },
                                    '->',
                                    {
                                        xtype: 'button',
                                        text: 'Back to Login',
                                        reference: 'btnResetPassCancel',
                                        listeners: {
                                            click: 'onResetPassCancelBtnClick'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
}());