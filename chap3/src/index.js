//Panel
// new Ext.Application({
  // name: 'TouchStart',
  // launch: function() {
    // this.viewport = new Ext.Panel({
      // fullscreen: true,
      // bodyPadding: 20,
      // dockedItems: [
      // {
        // dock : 'top',
        // xtype: 'toolbar',
        // title: 'Touch Start'
      // },
      // {
        // dock : 'top',
        // xtype: 'toolbar',
        // items: [
        // {
          // text: 'Hello Button'
        // }
        // ]
      // }
      // ],
      // items: [
      // ]
    // });
  // }
// });
// TabPanel
new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    this.viewport = new Ext.TabPanel({
      fullscreen: true,
      cardSwitchAnimation: 'slide',
      tabBar:{
        dock: 'bottom',
        layout: {
          pack: 'center'
        }
      },
      items: [{
        xtype: 'panel',
        title: 'Panel 1',
        fullscreen: false,
        html: '<div id="hello">Hello World</div>',
        iconCls: 'bolt',
        dockedItems: [
          {
          dock: 'top',
          xtype: 'toolbar',
          title: 'About TouchStart',
          },
          {
            dock: 'top',
            xtype: 'toolbar',
            ui: 'light',
            items: [
              {
              text: 'Back',
              ui: 'back'
            }, {
              text: 'Round',
              ui: 'round'
            }, {
              text: 'Small',
              ui: 'small'
            }, {
              text: 'Normal',
              ui: 'normal'
            }, {
              text: 'Action',
              ui: 'action'
            }, {
              text: 'Forward',
              ui: 'forward'
            }, {
              text: 'Confirm',
              ui: 'confirm'
            }, {
              text: 'SubNav',
              ui: 'subnav'
            }
            ]

          }
        ]
      }, {
        xtype: 'container',
        html: 'TouchStart container 2',
        iconCls: 'home',
        title: 'Panel 2'
      }, {
        xtype: 'container',
        html: 'TouchStart container 3',
        iconCls: 'favorites',
        title: 'Panel 3'
      }]
    });
  }
});
