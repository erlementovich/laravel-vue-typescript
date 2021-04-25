export default {
    request: function (req, token) {
        if (req.url === this.options.refreshData.url) {
            req.data = {refresh_token: this.token(this.options.refreshTokenName)};
        }
        this.http.setHeaders.call(this, req, {
            Authorization: 'Bearer ' + token,
        });
    },

    response: function (res) {
        const resData = res.data || {};
        this.token(this.options.refreshTokenName, resData.refresh_token);
        return resData.token;
    },
};
