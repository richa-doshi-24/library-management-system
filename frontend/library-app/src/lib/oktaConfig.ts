export const oktaConfig = {
    clientId: '0oad456el4R7SoRMl5d7',
    issuer: 'https://dev-61199262.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}