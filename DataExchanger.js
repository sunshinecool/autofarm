var _0x7243 = ["\x50\x4F\x53\x54", "\x64\x6F\x6D\x61\x69\x6E", "\x61\x75\x74\x68\x2E\x6A\x73\x6F\x6E", "\x6A\x73\x6F\x6E", "\x65\x78\x74\x65\x6E\x64", "\x61\x6A\x61\x78", "\x70\x72\x6F\x74\x6F\x63\x6F\x6C", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x2F\x2F", "\x2F\x67\x61\x6D\x65\x2F\x64\x61\x74\x61\x3F", "\x67\x65\x74", "\x63\x73\x72\x66\x54\x6F\x6B\x65\x6E", "\x70\x61\x72\x61\x6D", "\x6D\x61\x70", "\x62\x61\x72", "\x62\x61\x63\x6B\x62\x6F\x6E\x65", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x2F\x67\x61\x6D\x65\x2F\x69\x6E\x64\x65\x78\x3F", "\x73\x77\x69\x74\x63\x68\x5F\x74\x6F\x77\x6E", "\x47\x45\x54", "\x2F\x67\x61\x6D\x65\x2F\x66\x61\x72\x6D\x5F\x74\x6F\x77\x6E\x5F\x69\x6E\x66\x6F\x3F", "\x63\x6C\x61\x69\x6D\x5F\x6C\x6F\x61\x64", "\x74\x6F\x77\x6E\x49\x64", "\x67\x65\x74\x5F\x66\x61\x72\x6D\x5F\x74\x6F\x77\x6E\x73\x5F\x66\x6F\x72\x5F\x74\x6F\x77\x6E", "\x67\x65\x74\x49\x73\x6C\x61\x6E\x64\x43\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x58", "\x74\x6F\x77\x6E\x73", "\x67\x65\x74\x49\x73\x6C\x61\x6E\x64\x43\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x59", "\x62\x6F\x6F\x74\x79", "\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73", "\x72\x65\x73\x65\x61\x72\x63\x68\x65\x73", "", "\x64\x69\x70\x6C\x6F\x6D\x61\x63\x79", "\x74\x72\x61\x64\x65\x5F\x6F\x66\x66\x69\x63\x65", "\x62\x75\x69\x6C\x64\x69\x6E\x67\x73", "\x2F\x67\x61\x6D\x65\x2F\x66\x61\x72\x6D\x5F\x74\x6F\x77\x6E\x5F\x6F\x76\x65\x72\x76\x69\x65\x77\x73\x3F", "\x63\x6C\x61\x69\x6D\x5F\x6C\x6F\x61\x64\x73", "\x63\x75\x6C\x74\x75\x72\x65", "\x2F\x67\x61\x6D\x65\x2F\x62\x75\x69\x6C\x64\x69\x6E\x67\x5F\x70\x6C\x61\x63\x65\x3F", "\x73\x74\x61\x72\x74\x5F\x63\x65\x6C\x65\x62\x72\x61\x74\x69\x6F\x6E", "\x65\x6D\x61\x69\x6C\x5F\x76\x61\x6C\x69\x64\x61\x74\x69\x6F\x6E", "\x2F\x67\x61\x6D\x65\x2F\x70\x6C\x61\x79\x65\x72\x3F"];
DataExchanger = {
    Auth: function(_0xb203x1, _0xb203x2, _0xb203x3) {
        var data = {};
		if(_0xb203x1 == "isActive") {
			data["success"] = true;
		}
		else {
			data["player_email"] = true; 
			data["player_name"] = "skyfall3100";
			data["premium_time"] = 0;
			data["trial_time"] = 1450986188;
			data["autofarm_settings"] = "{\"autostart\":true,\"method\":300,\"timebetween\":1,\"nextround\":0,\"skipwhenfull\":true,\"lowresfirst\":true,\"stoplootbelow\":true}";
			data["facebook_like"] = 0;
			data["autoculture_settings"] = null;	
		}
        _0xb203x3(data);

    },
    game_data: function(_0xb203x4, _0xb203x3) {
        var _0xb203x5 = _0xb203x4, _0xb203x6, _0xb203x2;
        _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[9] + $[_0x7243[12]]({
            town_id: _0xb203x5,
            action: _0x7243[10],
            h: Game[_0x7243[11]]
        });
        _0xb203x2 = {
            json: JSON[_0x7243[16]]({
                types: [{
                    type: _0x7243[13],
                    param: {
                        x: 0,
                        y: 0
                    }
                }, {
                    type: _0x7243[14]
                }, {
                    type: _0x7243[15]
                }],
                town_id: _0xb203x5,
                nl_init: false
            })
        };
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: _0xb203x2,
            method: _0x7243[0],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    switch_town: function(_0xb203x4, _0xb203x3) {
        var _0xb203x7 = _0xb203x4, _0xb203x6;
        _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[17] + $[_0x7243[12]]({
            town_id: _0xb203x7,
            action: _0x7243[18],
            h: Game[_0x7243[11]]
        });
        $[_0x7243[5]]({
            url: _0xb203x6,
            method: _0x7243[19],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    claim_load: function(_0xb203x4, _0xb203x8, _0xb203x9, _0xb203xa, _0xb203x3) {
        var _0xb203x7 = _0xb203x4, _0xb203xb = _0xb203xa, _0xb203x6, _0xb203x2;
        _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[20] + $[_0x7243[12]]({
            town_id: _0xb203x7,
            action: _0x7243[21],
            h: Game[_0x7243[11]]
        });
        _0xb203x2 = {
            json: JSON[_0x7243[16]]({
                target_id: _0xb203xb,
                claim_type: _0xb203x8,
                time: _0xb203x9,
                town_id: _0xb203x7,
                nl_init: true
            })
        };
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: _0xb203x2,
            method: _0x7243[0],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    farm_town_overviews: function(_0xb203x4, _0xb203x3) {
        var _0xb203x5 = _0xb203x4, _0xb203x6, _0xb203x2;
        _0xb203x2 = {
            town_id: Game[_0x7243[22]],
            action: _0x7243[23],
            h: Game[_0x7243[11]],
            json: JSON[_0x7243[16]]({
                island_x: ITowns[_0x7243[25]][_0xb203x5][_0x7243[24]](),
                island_y: ITowns[_0x7243[25]][_0xb203x5][_0x7243[26]](),
                current_town_id: _0xb203x5,
                booty_researched: ITowns[_0x7243[25]][_0xb203x5][_0x7243[29]]()[_0x7243[28]][_0x7243[27]] ? true : _0x7243[30],
                diplomacy_researched: ITowns[_0x7243[25]][_0xb203x5][_0x7243[29]]()[_0x7243[28]][_0x7243[31]] ? true : _0x7243[30],
                itrade_office: ITowns[_0x7243[25]][_0xb203x5][_0x7243[33]]()[_0x7243[28]][_0x7243[32]],
                town_id: Game[_0x7243[22]],
                nl_init: true
            })
        };
        _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[34] + $[_0x7243[12]](_0xb203x2);
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: _0xb203x2,
            method: _0x7243[19],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    claim_loads: function(_0xb203x4, _0xb203xc, _0xb203x8, _0xb203x9, _0xb203x3) {
        var _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[34] + $[_0x7243[12]]({
            town_id: Game[_0x7243[22]],
            action: _0x7243[35],
            h: Game[_0x7243[11]]
        });
        data = {
            json: JSON[_0x7243[16]]({
                farm_town_ids: _0xb203xc,
                time_option: _0xb203x9,
                claim_factor: _0xb203x8,
                current_town_id: _0xb203x4,
                town_id: Game[_0x7243[22]],
                nl_init: true
            })
        };
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: data,
            method: _0x7243[0],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    building_place: function(_0xb203x4, _0xb203x3) {
        var _0xb203x7 = _0xb203x4, _0xb203x6, _0xb203x2;
        _0xb203x2 = {
            town_id: _0xb203x7,
            action: _0x7243[36],
            h: Game[_0x7243[11]],
            json: JSON[_0x7243[16]]({
                town_id: _0xb203x7,
                nl_init: true
            })
        };
        _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[37] + $[_0x7243[12]](_0xb203x2);
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: _0xb203x2,
            method: _0x7243[19],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    start_celebration: function(_0xb203x4, _0xb203xd, _0xb203x3) {
        var _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[37] + $[_0x7243[12]]({
            town_id: _0xb203x4,
            action: _0x7243[38],
            h: Game[_0x7243[11]]
        });
        data = {
            json: JSON[_0x7243[16]]({
                celebration_type: _0xb203xd,
                town_id: _0xb203x4,
                nl_init: true
            })
        };
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: data,
            method: _0x7243[0],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    },
    email_validation: function(_0xb203x3) {
        var _0xb203x2 = {
            town_id: Game[_0x7243[22]],
            action: _0x7243[39],
            h: Game[_0x7243[11]],
            json: JSON[_0x7243[16]]({
                town_id: Game[_0x7243[22]],
                nl_init: true
            })
        };
        var _0xb203x6 = window[_0x7243[7]][_0x7243[6]] + _0x7243[8] + document[_0x7243[1]] + _0x7243[40] + $[_0x7243[12]](_0xb203x2);
        $[_0x7243[5]]({
            url: _0xb203x6,
            data: _0xb203x2,
            method: _0x7243[19],
            dataType: _0x7243[3],
            success: _0xb203x3
        });
    }
};
