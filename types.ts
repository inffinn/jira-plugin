type Message = {
    id: string
    origin: string
    type: string
    command: string
    status: string
    data: 'a' | 'b'
    error: {
        name: string
        message: string
        stack: string
    }
};


///////////////////////////////////////////Plugin data

const jira = {
    "id": "bac662b1-46a9-420f-9025-729f1841566b",
    "appVersion": "2.0.0",
    "installationId": "6c3ccdf7-6037-4cc2-9d78-7652ff12aac9",
    "environmentId": "4c162a57-79bb-4f76-bf74-aa22ca7a32d7",
    "environmentType": "DEVELOPMENT",
    "environmentKey": "default",
    "properties": {
        "resourceUploadId": "84946e8c-7eab-44ff-8241-8db950b019fa",
        "edit": {
            "resource": "edit",
            "render": "native"
        },
        "resource": "main",
        "name": "test",
        "description": "A hello world custom field.",
        "type": "string",
        "render": "native"
    },
    "license": null,
    "scopes": [],
    "type": "jira:customField",
    "__typename": "Extension",
    "consentUrl": "https://id.atlassian.com/outboundAuth/start?containerId=bac662b1-46a9-420f-9025-729f1841566b_4c162a57-79bb-4f76-bf74-aa22ca7a32d7&serviceKey=atlassian-token-service-key&cloudId=270a9da9-b020-4f3e-8c31-dc3ef2bd9d95&isAccountBased=true",
    "currentUserConsent": null,
    "requiresUserConsent": false,
    "egress": [],
    "dataClassificationPolicyDecision": {
        "status": "ALLOWED"
    }
}

const trello = {
    "id": "597cbecff4fe5f1d91d4b614",
    "idOrganizationOwner": "590c6da99ad57fcaf064ecdc",
    "author": "Appfire",
    "capabilities": [
        "board-buttons",
        "card-badges",
        "card-detail-badges",
        "card-buttons",
        "authorization-status",
        "callback"
    ],
    "capabilitiesOptions": [],
    "categories": [
        "developer-tools",
        "it-project-management"
    ],
    "iframeConnectorUrl": "https://t-planning-poker.lizzybrain.com/manifest",
    "name": "Planning Poker",
    "privacyUrl": "https://appfire.com/privacy-policy/",
    "public": true,
    "moderatedState": null,
    "supportEmail": "https://appfire.atlassian.net/servicedesk/customer/portal/11",
    "url": "https://t-planning-poker.lizzybrain.com/manifest.json",
    "tags": [],
    "claimedDomains": [],
    "icon": {
        "url": "https://t-planning-poker.lizzybrain.com/pp_logo_3.png"
    },
    "listing": {
        "name": "Planning Poker",
        "locale": "en-US",
        "description": "About\n----------------\n\nPlanning Poker integrates into the Trello board. You can estimate cards in real-time with your colleagues and see estimation results on the cards. No Chrome extensions needed, this is a native cross-browser Power-Up.\n\nFeatures\n----------------\n\n- Easy to use (hopefully)\n- Real-time collaboration\n- Fully integrated into Trello board\n- Cards are pulled by the label\n- Estimates are displayed on the backs of the cards\n\nQuestions?\n----------------\n\nDon't hesitate to drop me a letter to support@appfire.com\n\nScreenshots\n----------------\n![Screenshot 1](https://t-planning-poker.lizzybrain.com/img/marketing/1.png)\n![Screenshot 2](https://t-planning-poker.lizzybrain.com/img/marketing/2.png)",
        "overview": "Planning Poker — estimate cards in real-time with your colleagues and see estimation results on the cards."
    },
    "isCompliantWithPrivacyStandards": true,
    "usageBrackets": {
        "boards": 10000
    }
}


const my = {
    "id": "bac662b1-46a9-420f-9025-729f1841566b",
    "appVersion": "2.0.0",
    "properties": {
        "resource": "main",
        "name": "test",
        "description": "A hello world custom field.",
        "type": "string",
        "render": "native"
    },
    "permission": [],
    "type": "jira:customField",
}
