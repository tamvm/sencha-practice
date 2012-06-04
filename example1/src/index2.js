Ext.setup({
  tableStartupScreen: 'tablet_startup.png',
  phoneStarupScreen: 'phone_startup.png',
  icon: 'icon.png',
  glossOnIcon: false,
  onReady: function() {
    var timeline = new Ext.Component({
      title: "Timeline",
      cls: "timeline",
      scroll: "vertical",
      tpl: ["test"]
    });

    var map = new Ext.Map({
      title: "Map",
      geoLocation: true,
      mapOptions: {
        zoom: 12
      }
    });

    var panel = new Ext.TabPanel({
      fullscreen: true,
      cardSwitchAnimation: "slide",
      items: [map, timeline]
    });

    var tarBar = panel.getTabBar();
    tabBar.addDocked({
      ui: 'plain',
      iconMask: true,
      iconCls: "refresh",
    });
  }
});
