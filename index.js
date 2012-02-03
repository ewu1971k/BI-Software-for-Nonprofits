Ext.setup({
    glossOnIcon: false,
    onReady: function() {

        var tpl = Ext.XTemplate.from('guests');
		
		Ext.regModel('User', {
            fields: [
                { name: 'id', type: 'string' },
                { name: 'ward', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'phone', type: 'string' },
                { name: 'primaryuser', type: 'string' },
                { name: 'threestone', type: 'string' },
                { name: 'charcoal', type: 'string' },
                { name: 'ekwukstove', type: 'string' },
                { name: 'gas', type: 'string' },
                { name: 'tripod', type: 'string' },
                { name: 'sawdust', type: 'string' },
                { name: 'kerosene', type: 'string' },
                { name: 'otherstovetype', type: 'string' },
                { name: 'daysfirewoodlast', type: 'string' },
                { name: 'mealscookday', type: 'string' },
                { name: 'peoplefeed', type: 'string' },
                { name: 'burnersused', type: 'string' },
                { name: 'collectwood', type: 'string' },
                { name: 'timepriceincrease', type: 'string' },
                { name: 'changeinwoodtype', type: 'string' },
                { name: 'reasonchangeinwoodtype', type: 'string' },
                { name: 'weeklyspendonwood', type: 'string' }
            ]
        });
		
		var formBase =  new Ext.form.FormPanel({
            scroll: 'vertical',
            url   : 'server.php',
            standardSubmit : false,
            title: 'Baseline Survey',
            
            items: [
               {
                xtype: 'fieldset',
                title: '',
                defaults: {
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                {
                	xtype: 'fieldset',
                    title: '*Ward where the household is located',
                    defaults: {
                        xtype: 'radiofield',
                        labelWidth: '35%'
                    },
                    items: [{
                        name: 'ward',
                        value: 'Abia',
                        label: 'Abia'
                    }, {
                        name: 'ward',
                        label: 'Abijang',
                        value: 'Abijang'
                    }, {
                    	name: 'ward',
                        value: 'Agbokim',
                        label: 'Agbokim'
                    }, {
                    	name: 'ward',
                        value: 'Ajassor',
                        label: 'Ajassor'
                    }, {
                    	name: 'ward',
                        value: 'Bendeghe Ekiem',
                        label: 'Bendeghe Ekiem'
                    }, {
                    	name: 'ward',
                        value: 'Effraya',
                        label: 'Effraya'
                    }, {
                    	name: 'ward',
                        value: 'Etomi',
                        label: 'Etomi'
                    }, {
                    	name: 'ward',
                        value: 'Itaka',
                        label: 'Itaka'
                    }, {
                        name: 'ward',
                        label: 'Mkpot',
                        value: 'Mkpot'
                    }, {
                        name: 'ward',
                        label: 'Nsofang',
                        value: 'Nsofang'
                    }]

                }, {
                    xtype: 'textfield',
                    name : 'name',
                    label: "*Name of survey respondent",
                    useClearIcon: true,
                    autoCapitalize : true
                }, {
                    xtype: 'numberfield',
                    name : 'phone',
                    label: "Phone number of respondent",
                    useClearIcon: true
                }, {
                	xtype: 'fieldset',
                    title: 'Is the respondent the primary cook-stove user?',
                    defaults: {
                        xtype: 'radiofield',
                        labelWidth: '35%'
                    },
                    items: [{
                        name: 'primaryuser',
                        value: 'Yes',
                        label: 'Yes'
                    }, {
                        name: 'primaryuser',
                        label: 'No',
                        value: 'No'
                    }]

                }, {
                	xtype: 'fieldset',
                    title: '*What kind of stove(s) do you use presently? (select all that apply)',
                    defaults: {
                    	 labelAlign: 'left',
                         labelWidth: '40%'
                    },
                    items: [
                            {	
                            xtype: 'checkboxfield',
							name: 'threestone',
							label: 'Three Stone',
							value: 'Yes'
							}, {
								xtype: 'checkboxfield',
								name: 'charcoal',
								label: 'Charcoal',
								value: 'Yes'
							
							}, {
								xtype: 'checkboxfield',
								name: 'ekwukstove',
								label: 'Ekwuk Stove',
								value: 'Yes'
							}, {
								xtype: 'checkboxfield',
								name: 'gas',
								label: 'Gas',
								value: 'Yes'
							}, {
								xtype: 'checkboxfield',
								name: 'tripod',
								label: 'Tripod',
								value: 'Yes'
							}, {
								xtype: 'checkboxfield',
								name: 'sawdust',
								label: 'Sawdust',
								value: 'Yes'
							}, {
								xtype: 'checkboxfield',
								name: 'kerosene',
								label: 'Kerosene',
								value: 'Yes'
							}, {
                    	
                    		 xtype: 'textfield',
                             name : 'otherstovetype',
                             label: "Other (please specify)",
                             useClearIcon: true,
                             autoCapitalize : true
                    	 }, {
                         	xtype: 'fieldset',
                            title: '*In your household, normally...',
                            defaults: {
                            	 labelAlign: 'left',
                                 labelWidth: '40%'
                            },
                        items: [
                            {
                            	xtype: 'numberfield',
                            	name : 'daysfirewoodlast',
                            	label: "how many days would this bundle of firewood last? (If wood is not used, enter 0)",
                            	useClearIcon: true
                            	
                            }, {
                            	xtype: 'numberfield',
                                name : 'mealscookday',
                                label: "how many meals do you cook in a day?",
                                useClearIcon: true
                            }, {
                            	xtype: 'numberfield',
                                name : 'peoplefeed',
                                label: "how many people do you usually feed at each meal?",
                                useClearIcon: true
                            }, {
                            	xtype: 'numberfield',
                                name : 'burnersused',
                                label: "how many burners do you use at one time?",
                                useClearIcon: true
                            
                    	 }]
                        
                    }, {
                    	xtype: 'fieldset',
                        title: '',
                        defaults: {
                        	 labelAlign: 'left',
                             labelWidth: '40%'
                        },
                    items: [
                    {
                    	xtype: 'fieldset',
                        title: '*If you use wood, do you usually collect the wood or buy it yourself?',
                        defaults: {
                            xtype: 'radiofield',
                            labelWidth: '35%'
                        },
                        items: [{
                            name: 'collectwood',
                            value: 'Collect',
                            label: 'Collect'
                        }, {
                            name: 'collectwood',
                            label: 'Buy',
                            value: 'Buy'
                        }]

                    },{
                    	xtype: 'fieldset',
                        title: 'If you collect, has the time or distance traveled to collect the wood increased in the past 3 years? If you buy, has the price of wood increased in the past 3 years?',
                        defaults: {
                            xtype: 'radiofield',
                            labelWidth: '35%'
                        },
                        items: [{
                            name: 'timepriceincrease',
                            value: 'Yes',
                            label: 'Yes'
                        }, {
                            name: 'timepriceincrease',
                            label: 'No',
                            value: 'No'
                        }]

                    },{
                    	xtype: 'fieldset',
                        title: '*Have you noticed a change in the types of wood that are available in the last three years?',
                        defaults: {
                            xtype: 'radiofield',
                            labelWidth: '35%'
                        },
                        items: [{
                            name: 'changeinwoodtype',
                            value: 'Yes',
                            label: 'Yes'
                        }, {
                            name: 'changeinwoodtype',
                            label: 'No',
                            value: 'No'
                        }]

                    },{
                        xtype: 'textfield',
                        name : 'reasonchangeinwoodtype',
                        label: "If yes, why?",
                        useClearIcon: true,
                        autoCapitalize : true
                    },{
                    	xtype: 'fieldset',
                        title: 'If you buy wood, how much do you normally spend on wood each week?',
                        defaults: {
                        	labelAlign: 'left',
                            labelWidth: '40%'
                        },
                        items: [{
                        	xtype: 'numberfield',
                            name : 'weeklyspendonwood',
                            label: 'Answer in Naira (if a range, then report average amount)',
                            useClearIcon: true
                        }]

                        
                         
                      
                	 }]
                
                }]
                
                
               
                	
               }]
                
               
               
            }],
        
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    xtype: 'spacer'
                }, {
                    text: 'Reset',
                    handler: function() {
                        formBase.reset();
                    }
                }, {
                    text: 'Save',
                    ui: 'confirm',
                    handler: function() {
                        formBase.submit({
                            waitMsg: {
                                message:'Submitting',
                                cls : 'demos-loading'
                            },
                            success: function(e) {
                                showCenteredOverlay();
                                formBase.reset();
                            }
                        });
                    }
                }]
            }]
        });

        var overlayTb = new Ext.Toolbar({
            dock: 'top'
        });

        var overlay = new Ext.Panel({
            floating: true,
            modal: true,
            centered: true,
            width: Ext.is.Phone ? 260 : 400,
            height: 60,
            dockedItems: overlayTb
        });

        var showCenteredOverlay = function() {
            overlayTb.setTitle('Data Inserted');
            overlay.show();
        };

        function showRecent() {
            Ext.Ajax.request({
                url: 'server.php?action=get',
                success: function(e) {
                    var obj = Ext.util.JSON.decode(e.responseText);
                    var guests = obj.guests;
                    if (guests) {
                        var html = tpl.applyTemplate(guests);
                        Ext.getCmp('recentTab').update(html);
                    }
                }
            });
        }
		
        new Ext.TabPanel({
            fullscreen: true,
            type: 'dark',
            sortable: true,
            items: [formBase, {
                id: 'recentTab',
                title: 'Records Entered',
                html: '2',
                scroll: 'vertical',
                cls: 'recent',
                listeners: {
                    'beforeshow': showRecent
                }
            }]
        });
    }
});
