'use strict';

/**
 * Searches bans
 * @param {string} searchID
 * @param {string} key
 * @return {string}
 */

const axios = require("axios");


 module.exports = {

    //bans
    searchBan: function(searchID, key) {

      axios.defaults.baseURL =  'https://api.battlemetrics.com';
      axios.defaults.headers.common['Authorization'] = "Bearer "+key;
      axios.defaults.headers.post['Content-Type'] = 'application/json';

      let url = '/bans?filter[search]='+searchID;
      // Gets the ban counts from battlemetrics
      let config = {
          scope:'ban:read'
        }

      axios.get(url, getConfig)
        .then(function (response) {
          return console.log(response)
        })
        .catch(function (error) {
          return console.log(error);
        });
      });
    },

    addBan: function() {},
    removeBan: function() {},
    updateBan: function() {},
    listBan: function() {},
    importBan: function() {},
    exportBan: function() {},

    //players
    listPlayer: function() {},
    infoPlayer: function() {},
    historyPlayer: function() {},
    serverPlayer: function() {},
    matchPlayer: function() {},

    //player note
    nCreatePlayer: function() {},
    nDeletePlayer: function() {},
    nUpdatePlayer: function() {},
    nInfoPlayer: function() {},
    nListPlayer: function() {},

    //server
    listServer: function() {},
    infoServer: function() {},
    countHisServer: function() {},
    rankHisServer: function() {},
    timeHisServer: function() {},
    firstHisServer: function() {},
    uniqueHisServer: function() {},
    sessionHisServer: function() {},

}
