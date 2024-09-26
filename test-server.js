const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importStar(require("node-fetch"));
const addMagicAgent = (init, agentOverride) => ({
  ...init,
  agent: ( 'FORGE_PRODUCT_REQUEST')
});

const s = async () => {
  //const init = (0, addMagicAgent)();
  const init = {}
  //if (!hasAuthorizationHeader(init.headers)) {
  const url = `https://jira/rest/api/3/issue/KAN-1?fields=labels`;
    init.headers = { ...init.headers, authorization: `Forge user` };
  //}
  console.log('!!!!!! init.headers',  init.headers);
  const response = await (0, node_fetch_1.default)(url, init);
  //(0, exports.handleProxyResponseErrors)(response);
  console.log('!!!!!!!response', response);
  return response;
};
s();
