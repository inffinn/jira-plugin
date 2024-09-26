const plugin  = {
  "id": "ari:cloud:ecosystem::extension/db4b6ddb-4e8a-4ad3-984f-b0dd49401f54/f6f1beb2-21f4-4c51-8763-bbb3d90c2d01/static/issue-panel-2-hello-world-panel",
  "appVersion": "2.8.0",
  "installationId": "7d5a41f8-2341-46d3-a464-2482854c7f42",
  "environmentId": "f6f1beb2-21f4-4c51-8763-bbb3d90c2d01",
  "environmentType": "DEVELOPMENT",
  "environmentKey": "default",
  "properties": {
    "resolver": {
      "function": "resolver"
    },
    "resourceUploadId": "d43f368d-0d21-4110-bafb-d9ce7699c6a6",
    "resource": "main",
    "viewportSize": "medium",
    "icon": "https://developer.atlassian.com/platform/forge/images/issue-panel-icon.svg",
    "title": "issue panel 2"
  },
  "license": null,
  "scopes": [
    "read:jira-work"
  ],
  "type": "jira:issuePanel",
  "__typename": "Extension",
  "consentUrl": "https://id.atlassian.com/outboundAuth/start?containerId=db4b6ddb-4e8a-4ad3-984f-b0dd49401f54_f6f1beb2-21f4-4c51-8763-bbb3d90c2d01&serviceKey=atlassian-token-service-key&cloudId=270a9da9-b020-4f3e-8c31-dc3ef2bd9d95&isAccountBased=true&scopes=read%3Ajira-work+offline_access",
  "currentUserConsent": null,
  "requiresUserConsent": false,
  "egress": [],
  "dataClassificationPolicyDecision": {
    "status": "ALLOWED"
  }
}
const invokePayload = {
  "operationName": "forge_ui_invokeExtension",
  "variables": {
  "input": {
    "contextIds": [
      "ari:cloud:jira:270a9da9-b020-4f3e-8c31-dc3ef2bd9d95:workspace/280af532-7d02-456a-9b54-af51e2faaf70"
    ],
      "extensionId": "ari:cloud:ecosystem::extension/db4b6ddb-4e8a-4ad3-984f-b0dd49401f54/f6f1beb2-21f4-4c51-8763-bbb3d90c2d01/static/issue-panel-2-hello-world-panel",
      "payload": {
      "call": {
        "functionKey": "azaza"
      },
      "context": {
        "localId": "ari:cloud:ecosystem::extension/db4b6ddb-4e8a-4ad3-984f-b0dd49401f54/f6f1beb2-21f4-4c51-8763-bbb3d90c2d01/static/issue-panel-2-hello-world-panel-9c6d5696-1726092412467",
          "cloudId": "270a9da9-b020-4f3e-8c31-dc3ef2bd9d95",
          "environmentId": "f6f1beb2-21f4-4c51-8763-bbb3d90c2d01",
          "environmentType": "DEVELOPMENT",
          "moduleKey": "issue-panel-2-hello-world-panel",
          "siteUrl": "https://inffinn.atlassian.net",
          "extension": {
          "issue": {
            "key": "KAN-1",
              "id": "10000",
              "type": "Task",
              "typeId": "10001"
          },
          "project": {
            "id": "10000",
              "key": "KAN",
              "type": "software"
          },
          "isNewToIssue": false,
            "type": "jira:issuePanel"
        }
      },
      "contextToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZvcmdlL2NvbnRleHQtdG9rZW4vZWI5MWVjMWMtODNmOS00MjZlLWI5ZmEtZjY3OWI1MTZmMmU0In0.eyJhY2NvdW50SWQiOiI1YzM1ZjgxOTlmNDQzYTY1ZmVjYmE5YjgiLCJhcHBJZCI6ImFyaTpjbG91ZDplY29zeXN0ZW06OmFwcC9kYjRiNmRkYi00ZThhLTRhZDMtOTg0Zi1iMGRkNDk0MDFmNTQiLCJhcHBWZXJzaW9uIjoiMi44LjAiLCJjb250ZXh0Ijp7ImFjY291bnRJZCI6IjVjMzVmODE5OWY0NDNhNjVmZWNiYTliOCIsImxvY2FsSWQiOiJhcmk6Y2xvdWQ6ZWNvc3lzdGVtOjpleHRlbnNpb24vZGI0YjZkZGItNGU4YS00YWQzLTk4NGYtYjBkZDQ5NDAxZjU0L2Y2ZjFiZWIyLTIxZjQtNGM1MS04NzYzLWJiYjNkOTBjMmQwMS9zdGF0aWMvaXNzdWUtcGFuZWwtMi1oZWxsby13b3JsZC1wYW5lbC05YzZkNTY5Ni0xNzI2MDkyNDEyNDY3IiwiY2xvdWRJZCI6IjI3MGE5ZGE5LWIwMjAtNGYzZS04YzMxLWRjM2VmMmJkOWQ5NSIsIm1vZHVsZUtleSI6Imlzc3VlLXBhbmVsLTItaGVsbG8td29ybGQtcGFuZWwiLCJleHRlbnNpb24iOnsiaXNzdWUiOnsia2V5IjoiS0FOLTEiLCJpZCI6IjEwMDAwIiwidHlwZSI6IlRhc2siLCJ0eXBlSWQiOiIxMDAwMSJ9LCJwcm9qZWN0Ijp7ImlkIjoiMTAwMDAiLCJrZXkiOiJLQU4iLCJ0eXBlIjoic29mdHdhcmUifSwiaXNOZXdUb0lzc3VlIjpmYWxzZSwidHlwZSI6ImppcmE6aXNzdWVQYW5lbCJ9fSwiY29udGV4dElkcyI6WyJhcmk6Y2xvdWQ6amlyYToyNzBhOWRhOS1iMDIwLTRmM2UtOGMzMS1kYzNlZjJiZDlkOTU6d29ya3NwYWNlLzI4MGFmNTMyLTdkMDItNDU2YS05YjU0LWFmNTFlMmZhYWY3MCJdLCJleHRlbnNpb25JZCI6ImFyaTpjbG91ZDplY29zeXN0ZW06OmV4dGVuc2lvbi9kYjRiNmRkYi00ZThhLTRhZDMtOTg0Zi1iMGRkNDk0MDFmNTQvZjZmMWJlYjItMjFmNC00YzUxLTg3NjMtYmJiM2Q5MGMyZDAxL3N0YXRpYy9pc3N1ZS1wYW5lbC0yLWhlbGxvLXdvcmxkLXBhbmVsIiwidW5saWNlbnNlZCI6ZmFsc2UsImV4dGVuc2lvblR5cGUiOiJqaXJhOmlzc3VlUGFuZWwiLCJpc3MiOiJmb3JnZS9jb250ZXh0LXRva2VuIiwiYXVkIjoiZm9yZ2UiLCJpYXQiOjE3MjcwMTcyMTIsIm5iZiI6MTcyNzAxNzIxMiwiZXhwIjoxNzI3MDE4MTEyLCJqdGkiOiI1ODIzMDEzM2UwZDM1NjZmNDQ0NGVkYTZmYzg5MmI0ZmU4OTQwZmE2In0.gswaaJC66-dETX6go0lfoqyclaSfWEkPJjwitVRj4D7l1J6LXDiT-lPm0V74uAFy2PUXuZOWC7GmElAQB9NlhsgCG55aySNnWIzIwElXRz9eG9qz1Gv99s1UPE446yh2zwhmgmHQTCUBqpmB4wgpMOa7zMraFP4dCx8pcUxFmjK4gX5xH2DBM1Ntm2bBBz5gTc9eHfBBFQzDKtGlnceBjfCFcMZcv8MZ5SRP6Rvyirl8hydqbn-s8F-lWnfVcty46W4S_VAVWYZuE7zUvZ0Q8mO-J5wJhsHacuaxJZa_t-a44JprkojiTGeKMYpsQaYhDI1J1S-ekj58OQmQ32qClg"
    },
    "entryPoint": "resolver"
  }
},
  "query": "mutation forge_ui_invokeExtension($input: InvokeExtensionInput!) {\n  invokeExtension(input: $input) {\n    success\n    response {\n      body\n      __typename\n    }\n    contextToken {\n      jwt\n      expiresAt\n      __typename\n    }\n    errors {\n      message\n      extensions {\n        errorType\n        statusCode\n        ... on InvokeExtensionPayloadErrorExtension {\n          fields {\n            authInfoUrl\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
}
