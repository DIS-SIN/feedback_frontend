const url = window.location.origin;

module.exports = {
  authority: 'https://account.da-an.ca/openid',
  response_type: 'id_token token',
  client_id: '450483',
  scope: 'openid profile',
  post_logout_redirect_uri: `${url}/#!logout`,
  redirect_uri: `${url}/#!callback`,
  silent_redirect_uri: `${url}/#!silent`,
};
