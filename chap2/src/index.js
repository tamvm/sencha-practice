// container HTML
// new Ext.Application({
  // name: "TouchStart",
  // launch: function() {
    // var hello = new Ext.Container({
      // fullscreen: true,
      // html: "<div id='hello'>Hello</div>"
    // });
    // this.viewport = hello;
  // }
// });

//container layout
/*
new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    var hello = new Ext.Container({
      fullscreen: true,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [
        {
        xtype: 'container',
        flex: 2,
        html: '<div id="hello">Hello World Top</div>',
        cls: 'blueBox',
        border: 1
      }, {
        xtype: 'container',
        flex: 1,
        html: '<div id="hello">Hello World Bottom</div>',
        cls: 'redBox',
        border: 1
      }, {
        xtype: 'container',
        height: 50,
        html: '<div id="footer">Footer</div>',
        cls: 'greenBox'
      }
      ]
    });
    this.viewport = hello;
  }
});
*/

//Panel
/*
new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    this.viewport = new Ext.Panel({
      fullscreen: true,
      bodyPadding: 20,
      dockedItems: [
      {
        dock : 'top',
        xtype: 'toolbar',
        title: 'Touch Start'
      },
      {
        dock : 'top',
        xtype: 'toolbar',
        items: [
        {
          text: 'Hello Button'
        }
        ]
      }
      ],
      html: 'Hello Panel'
    });
  }
});
*/

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
        iconCls: 'info',
        dockedItems: [
          {
          dock: 'top',
          xtype: 'toolbar',
          title: 'About TouchStart'
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

Ext.regModel('ListItem', {
  fields: [
    {name: 'id', type: 'int'},
    {name: 'fullname', type: 'string'}
  ]
});

