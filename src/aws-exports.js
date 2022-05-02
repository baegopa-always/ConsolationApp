/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-northeast-2",
    "aws_cognito_identity_pool_id": "ap-northeast-2:eb92e19d-973a-4b2f-af26-5d363c163e00",
    "aws_cognito_region": "ap-northeast-2",
    "aws_user_pools_id": "ap-northeast-2_S8NlSAZRi",
    "aws_user_pools_web_client_id": "sae502c39nhv97e7nug7u8h03",
    "oauth": {
        "domain": "consolationapp319e96e3-319e96e3-staging.auth.ap-northeast-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://master.d1v65us4879kzp.amplifyapp.com/,http://localhost:3000/",
        "redirectSignOut": "https://master.d1v65us4879kzp.amplifyapp.com/,http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
