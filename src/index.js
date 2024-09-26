import Resolver from '@forge/resolver';
import api, { route, getAppContext, authorize } from '@forge/api';
const resolver = new Resolver();

const test = () => {
  //await authorize().onJira().then(v=>v.)
  const { appAri, appVersion, environmentAri, environmentType, invocationId, installationAri, moduleKey } = getAppContext();

  console.log(appAri.toString());
// 'ari:cloud:ecosystem::app/00000000-0000-0000-0000-000000000000'

  console.log(appAri.appId);
// '00000000-0000-0000-0000-000000000000'

  console.log(appVersion);
// '1.0.0'

  console.log(environmentAri.toString());
// 'ari:cloud:ecosystem::environment/00000000-0000-0000-0000-000000000000/11111111-1111-1111-0111-111111111111'

  console.log(environmentAri.environmentId);
// '11111111-1111-1111-0111-111111111111'

  console.log(environmentType);
// 'DEVELOPMENT'

  console.log(invocationId);
// '33333333-3333-3333-0333-333333333333'

  console.log(installationAri.toString());
// 'ari:cloud:ecosystem::installation/22222222-2222-2222-0222-222222222222'

  console.log(installationAri.installationId);
// '22222222-2222-2222-0222-222222222222'

  console.log(moduleKey);
// 'hello-world'

  //console.log(JSON.stringify(license));
//{"isActive":true,"billingPeriod":"MONTHLY","ccpEntitlementId":"NULL","ccpEntitlementSlug":"NULL","isEvaluation":"NULL","subscriptionEndDate":"NULL","supportEntitlementNumber":"NULL","trialEndDate":"NULL","type":"commercial"}
}
resolver.define('azaza', async (req) => {
  const key = req.context.extension.issue.key;

  const res = await api.asApp().requestJira(route`/rest/api/3/issue/${key}?fields=labels`);

  const data = await res.json();

  const label = data.fields.labels;
  if (label == undefined) {
    console.warn(`${key}: Failed to find labels`);
    return [];
  }

  return label;
});

export const handler = resolver.getDefinitions();
