// /rest/api/3/users
//__bridge.callBridge('invoke',{functionKey:'azaza'})
addEventListener("message", (event) => {
  console.log('frame', JSON.stringify(event.data, null, 2))
})
t.cards
var t = window.TrelloPowerUp.iframe();
t.getAll()
  .then(function (data) {
    console.log(JSON.stringify(data, null, 2));
  });

await __bridge.callBridge('getContext')

var s = document.createElement('script');
s.setAttribute('src', `https://unpkg.com/vue@3.5.8/dist/vue.global.js`);
document.body.appendChild(s);


////////////////////////////////////////////////////////////////////// jira
//__bridge.callBridge('getContext'})

[
  {
    "__post_robot_10_0_41__": [{
      "id": "80bb9ff894_mje6nty6ndc",
      "origin": "http://localhost:8000",
      "type": "postrobot_message_request",
      "hash": "getContext_0135f8c78a_mje6nty6ndc",
      "name": "getContext",
      "fireAndForget": false
    }]
  },
  {
    "__post_robot_10_0_41__": [{
      "id": "3ecd570a81_mje6nty6ndc",
      "origin": "https://inffinn.atlassian.net",
      "type": "postrobot_message_ack",
      "hash": "getContext_0135f8c78a_mje6nty6ndc",
      "name": "getContext"
    }]
  },
  {
    "__post_robot_10_0_41__": [{
      "id": "4cd20151c7_mje6nty6ndc",
      "origin": "https://inffinn.atlassian.net",
      "type": "postrobot_message_response",
      "hash": "getContext_0135f8c78a_mje6nty6ndc",
      "name": "getContext",
      "ack": "success",
      "data": {
        "localId": "ari:cloud:ecosystem::extension/db4b6ddb-4e8a-4ad3-984f-b0dd49401f54/f6f1beb2-21f4-4c51-8763-bbb3d90c2d01/static/issue-panel-2-hello-world-panel-9c6d5696-1726092412467",
        "cloudId": "270a9da9-b020-4f3e-8c31-dc3ef2bd9d95",
        "environmentId": "f6f1beb2-21f4-4c51-8763-bbb3d90c2d01",
        "environmentType": "DEVELOPMENT",
        "moduleKey": "issue-panel-2-hello-world-panel",
        "siteUrl": "https://inffinn.atlassian.net",
        "extension": {
          "issue": { "key": "KAN-1", "id": "10000", "type": "Task", "typeId": "10001" },
          "project": { "id": "10000", "key": "KAN", "type": "software" },
          "isNewToIssue": false,
          "type": "jira:issuePanel"
        },
        "accountId": "5c35f8199f443a65fecba9b8",
        "license": null,
        "timezone": "Europe/Moscow",
        "locale": "en_US",
        "theme": { "dark": "dark", "light": "light", "spacing": "spacing", "colorMode": "light" },
        "surfaceColor": "#FFFFFF"
      }
    }]
  }
]

// __bridge.callBridge('invoke',{functionKey:'azaza'})

  [
  {
    "__post_robot_10_0_41__": [{
      "id": "3cefb1f173_mji6mti6ntm",
      "origin": "http://localhost:8000",
      "type": "postrobot_message_request",
      "hash": "invoke_a68ede18eb_mji6mti6ntm",
      "name": "invoke",
      "data": { "functionKey": "azaza" },
      "fireAndForget": false
    }]
  },
    {
      "__post_robot_10_0_41__": [{
        "id": "34aae5a361_mji6mti6ntm",
        "origin": "https://inffinn.atlassian.net",
        "type": "postrobot_message_ack",
        "hash": "invoke_a68ede18eb_mji6mti6ntm",
        "name": "invoke"
      }]
    },
    {
      "__post_robot_10_0_41__": [{
        "id": "b69828a3bf_mji6mti6ntq",
        "origin": "https://inffinn.atlassian.net",
        "type": "postrobot_message_response",
        "hash": "invoke_a68ede18eb_mji6mti6ntm",
        "name": "invoke",
        "ack": "success",
        "data": []
      }]
    }
  ]
// jirarequest
const topMessage = {
  "__post_robot_10_0_41__":
    [{
      "id": "c697150b49_mta6mzu6mdg",
      "origin": "http://localhost:8000",
      "type": "postrobot_message_request",
      "hash": "fetchProduct_bbe8439f46_mta6mzu6mdg",
      "name": "fetchProduct",
      "data": {
        "product": "jira",
        "restPath": "/rest/api/3/issue/KAN-2",
        "fetchRequestInit": { "body": null, "headers": [["x-atlassian-token", "no-check"]] },
        "isMultipartFormData": false
      },
      "fireAndForget": false
    }]
}


//error
const a = [{
  "__post_robot_10_0_41__": [{
    "id": "c703009253_mji6mjc6mju",
    "origin": "https://inffinn.atlassian.net",
    "type": "postrobot_message_response",
    "hash": "invoke_a6e8a17c1e_mji6mjc6mjq",
    "name": "invoke",
    "ack": "error",
    "data": null,
    "error": {
      "__type__": "error",
      "__val__": {
        "message": "There was an error invoking the function - Resolver has no definition for 'azaa'.",
        "stack": "Error: There was an error invoking the function - Resolver has no definition for 'azaa'.\n    at invoke (https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/async-forge-ui-custom-field.f4635df5.js:68:3322)\n    at async https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/async-forge-ui-custom-field.f4635df5.js:68:33455"
      }
    }
  }]
}]


////////////////////////////////////////////////////// TRELLO

// T.cards.getAll

  [{
  "data": [
    {
      "type": "request",
      "data": {
        "args": [
          {
            "fields": [],
            "context": {
              "version": "build-210009",
              "member": "6252cae1013200411fbd9fb8",
              "permissions": {
                "board": "write",
                "organization": "write"
              },
              "locale": "en-US",
              "theme": "light",
              "initialTheme": "light",
              "organization": "6252cae782bab66c1fdc97dd",
              "board": "6252cdee2af1e5252d0f527f",
              "card": null,
              "command": "callback",
              "el": "vzofqdo3i4wVeG2j",
              "plugin": "597cbecff4fe5f1d91d4b614"
            }
          }
        ],
        "command": "cards",
        "id": "RsdzlVOkyxNbyK5l2"
      }
    }
  ],
  "secret": "0fl3uf0kRqiojvJDmnZa0k8Ezc3a5HvbN7ELdllg1iSx5SdO9XSBO7K7Wtgpp8aw",
  "type": "bulk"
},
  {
    "data": [
      {
        "type": "response",
        "data": {
          "response": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "success": true,
          "to": "RsdzlVOkyxNbyK5l2"
        }
      }
    ],
    "secret": "0fl3uf0kRqiojvJDmnZa0k8Ezc3a5HvbN7ELdllg1iSx5SdO9XSBO7K7Wtgpp8aw",
    "type": "bulk"
  }]
  //error
  [
  {
    "data": [
      {
        "type": "response",
        "data": {
          "response": {
            "code": "not handled",
            "message": "Invalid context, missing card"
          },
          "success": false,
          "to": "RsdzlVOkyxNbyK5l5"
        }
      }
    ],
    "secret": "0fl3uf0kRqiojvJDmnZa0k8Ezc3a5HvbN7ELdllg1iSx5SdO9XSBO7K7Wtgpp8aw",
    "type": "bulk"
  }
  ]
