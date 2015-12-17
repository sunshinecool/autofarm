var _0x3deb = ["\x41\x75\x74\x6F\x62\x6F\x74", "\x46\x61\x72\x6D\x69\x6E\x67", "\x43\x75\x6C\x74\x75\x72\x65", "\x52\x65\x63\x72\x75\x69\x74", "", "\x73\x63\x72\x6F\x6C\x6C", "\x3C\x64\x69\x76\x2F\x3E", "\x74\x65\x72\x6D\x69\x6E\x61\x6C\x2D\x6F\x75\x74\x70\x75\x74", "\x61\x70\x70\x65\x6E\x64", "\x74\x65\x72\x6D\x69\x6E\x61\x6C", "\x41\x75\x74\x6F\x62\x6F\x74\x20\x43\x6F\x6E\x73\x6F\x6C\x65", "\x68\x74\x6D\x6C", "\x3C\x6C\x65\x67\x65\x6E\x64\x2F\x3E", "\x3C\x66\x69\x65\x6C\x64\x73\x65\x74\x2F\x3E", "\x66\x6C\x6F\x61\x74\x3A\x6C\x65\x66\x74\x3B\x20\x77\x69\x64\x74\x68\x3A\x34\x37\x32\x70\x78\x3B", "\x2E\x74\x65\x72\x6D\x69\x6E\x61\x6C\x2D\x6F\x75\x74\x70\x75\x74", "\x66\x69\x6E\x64", "\x65\x61\x63\x68", "\x6C\x65\x6E\x67\x74\x68", "\x4C\x6F\x67\x73", "\x73\x68\x69\x66\x74", "\x30", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x3A", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x20\x2D\x20", "\x5B", "\x54\x79\x70\x65\x73", "\x5D\x3A\x20", "\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B", "\x70\x75\x73\x68", "\x73\x63\x72\x6F\x6C\x6C\x55\x70\x64\x61\x74\x65", "\x2E\x74\x65\x72\x6D\x69\x6E\x61\x6C", "\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74", "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70", "\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x65\x72\x76\x61\x6C", "\x68\x65\x69\x67\x68\x74"];
ConsoleLog = {
    Logs: [],
    Types: [_0x3deb[0], _0x3deb[1], _0x3deb[2], _0x3deb[3]],
    scrollInterval: _0x3deb[4],
    scrollUpdate: true,
    contentConsole: function() {
        var _0x6e5bx1 = $(_0x3deb[13], {
            "\x73\x74\x79\x6C\x65": _0x3deb[14]
        })[_0x3deb[8]]($(_0x3deb[12])[_0x3deb[11]](_0x3deb[10]))[_0x3deb[8]]($(_0x3deb[6], {
            "\x63\x6C\x61\x73\x73": _0x3deb[9]
        })[_0x3deb[8]]($(_0x3deb[6], {
            "\x63\x6C\x61\x73\x73": _0x3deb[7]
        }))[_0x3deb[5]](function() {
            ConsoleLog.LogScrollBottom()
        }));
        var _0x6e5bx2 = _0x6e5bx1[_0x3deb[16]](_0x3deb[15]);
        $[_0x3deb[17]](ConsoleLog.Logs, function(_0x6e5bx3, _0x6e5bx4) {
            _0x6e5bx2[_0x3deb[8]](_0x6e5bx4)
        });
        return _0x6e5bx1;
    },
    Log: function(_0x6e5bx5, _0x6e5bx6) {
        if (this[_0x3deb[19]][_0x3deb[18]] >= 500) {
            this[_0x3deb[19]][_0x3deb[20]]()
        }
        ;function _0x6e5bx7(_0x6e5bx8) {
            return (_0x6e5bx8 < 10) ? _0x3deb[21] + _0x6e5bx8 : _0x6e5bx8
        }
        var _0x6e5bx9 = new Date();
        var _0x6e5bxa = _0x6e5bx7(_0x6e5bx9[_0x3deb[22]]()) + _0x3deb[23] + _0x6e5bx7(_0x6e5bx9[_0x3deb[24]]()) + _0x3deb[23] + _0x6e5bx7(_0x6e5bx9[_0x3deb[25]]());
        var _0x6e5bxb = $(_0x3deb[6])[_0x3deb[8]]($(_0x3deb[6], {
            "\x73\x74\x79\x6C\x65": _0x3deb[30]
        })[_0x3deb[11]](_0x6e5bxa + _0x3deb[26] + _0x3deb[27] + ConsoleLog[_0x3deb[28]][_0x6e5bx6] + _0x3deb[29] + _0x6e5bx5));
        this[_0x3deb[19]][_0x3deb[31]](_0x6e5bxb);
        var _0x6e5bx2 = $(_0x3deb[15]);
        if (_0x6e5bx2[_0x3deb[18]]) {
            _0x6e5bx2[_0x3deb[8]](_0x6e5bxb);
            if (this[_0x3deb[32]]) {
                var _0x6e5bxc = $(_0x3deb[33]);
                var _0x6e5bxd = $(_0x3deb[15])[0][_0x3deb[34]];
                _0x6e5bxc[_0x3deb[35]](_0x6e5bxd);
            }
            ;
        }
        ;
    },
    LogScrollBottom: function() {
        clearInterval(this[_0x3deb[36]]);
        var _0x6e5bxc = $(_0x3deb[33]);
        var _0x6e5bx2 = $(_0x3deb[15]);
        if (_0x6e5bxc[_0x3deb[35]]() + _0x6e5bxc[_0x3deb[37]]() == _0x6e5bx2[_0x3deb[37]]()) {
            this[_0x3deb[32]] = true
        } else {
            this[_0x3deb[32]] = false
        }
        ;var _0x6e5bxd = _0x6e5bx2[0][_0x3deb[34]];
        this[_0x3deb[36]] = setInterval(function() {
            _0x6e5bxc[_0x3deb[35]](_0x6e5bxd)
        }, 7000);
    }
};
