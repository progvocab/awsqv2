var req = [
  {
      'question': 'What is the sign in url for IAM user    '
      , 'optiona': 'https://aws_account_id.signin.aws.amazon.com/console',
      'optionb': ' https://alias.signin.aws.amazon.com/console ',
      'optionc': ' Both',
      'optiond': 'None',
      'answer': 'c',
      'info': '  '

  },{
      'question': 'When you use an endpoint with no Region, AWS routes the   request to   '
      , 'optiona': 'US East (Ohio) (us-east-2)',
      'optionb': ' US East (N. Virginia) (us-east-1) ',
      'optionc': ' Both',
      'optiond': 'None',
      'answer': 'b',
      'info': ' <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region"> Read more </a> '

  },{
      'question': 'AWS services offer FIPS endpoints in selected Regions , how do you use it    '
      , 'optiona': 'vpn',
      'optionb': ' endpoint-url parameter ',
      'optionc': ' Both',
      'optiond': 'None',
      'answer': 'b',
      'info': ' aws kms create-key --endpoint-url https://kms-fips.us-west-2.amazonaws.com <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region"> Read more </a> '

  },  {
      'question': 'Secrets Manager encrypts the protected text of a secret by using   '
      , 'optiona': 'STS',
      'optionb': ' KMS ',
      'optionc': ' Both',
      'optiond': 'None',
      'answer': 'b',
      'info': '  '

  },  {
        'question': 'Which credential type is used for AWS root account or IAM user account login to the AWS Management Console  '
        , 'optiona': 'X.509 Certificates',
        'optionb': ' Access Keys ',
        'optionc': ' Multi-Factor Authentication (MFA)',
        'optiond': 'Key Pairs',
        'answer': 'c',
        'info': ` A six-digit single-use code that is required in addition to your password to log in to your AWS Account or IAM user account.  <a href='https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf'>Know more </a>`
    },  {
          'question': 'Which credential type is used for Digitally signed requests to AWS APIs (using the AWS SDK, CLI, or REST/Query APIs) '
          , 'optiona': 'X.509 Certificates',
          'optionb': ' Access Keys ',
          'optionc': ' Multi-Factor Authentication (MFA)',
          'optiond': 'Key Pairs',
          'answer': 'b',
          'info': `  Includes an access key ID and a secret access key. You use access keys to digitally sign programmatic requests that you make to AWS. <a href='https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf'>Know more </a>`
      },  {
            'question': 'Which credential type is used for Digitally signed SOAP requests to AWS APIs SSL server certificates for HTTPS '
            , 'optiona': 'X.509 Certificates',
            'optionb': ' Access Keys ',
            'optionc': ' Multi-Factor Authentication (MFA)',
            'optiond': 'Key Pairs',
            'answer': 'a',
            'info': `  X.509 certificates are only used to sign SOAP-based requests (currently used only with Amazon S3) <a href='https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf'>Know more </a>`
        },{
      'question': 'How to retrieve the encrypted secret value of a secret  '
      , 'optiona': 'aws secretsmanager describe-secret --secret-id MyTestDatabaseSecret',
      'optionb': ' aws secretsmanager get-secret-value --secret-id MyTestDatabaseSecret --version-stage AWSPREVIOUS ',
      'optionc': ' Both',
      'optiond': 'None',
      'answer': 'b',
      'info': '  '

  },{
      'question': 'STS global service endpoint  '
      , 'optiona': 'https://sts.aws.com',
      'optionb': ' https://sts.amazon.com ',
      'optionc': ' https://sts.amazonaws.com',
      'optiond': 'None',
      'answer': 'c',
      'info': '  '

  },{
      'question': 'Which Action returns a set of temporary credentials for an AWS account or IAM user  '
      , 'optiona': 'GetCallerIdentity',
      'optionb': ' GetFederationToken',
      'optionc': ' GetSessionToken',
      'optiond': 'None',
      'answer': 'c',
      'info': '  '

  },{
        'question': 'Which service is enables you to request temporary, limited-privilege credentials for <b>AWS</b> Identity and Access Management (IAM) users or for users that you authenticate (federated users) '
        , 'optiona': 'Secrets Manager',
        'optionb': ' KMS Key Management Service ',
        'optionc': ' STS Security Token Service',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': '  '

    },{
          'question': 'The temporary security credentials created by GetSessionToken can be used to make API calls to any AWS service except '
          , 'optiona': 'AssumeRole ',
          'optionb': ' GetCallerIdentity ',
          'optionc': ' Both ',
          'optiond': 'None',
          'answer': 'c',
          'info': '  '

      },{
            'question': 'Which Action you use  if you want to use MFA to protect programmatic calls to specific AWS API operations like Amazon EC2 StopInstances '
            , 'optiona': 'AssumeRole ',
            'optionb': ' GetCallerIdentity ',
            'optionc': ' GetSessionToken ',
            'optiond': 'GetFederationToken',
            'answer': 'c',
            'info': '  '

        },{
              'question': 'Which Action Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to '
              , 'optiona': 'AssumeRole ',
              'optionb': ' GetCallerIdentity ',
              'optionc': ' GetSessionToken ',
              'optiond': 'GetFederationToken',
              'answer': 'a',
              'info': ' <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html> Read More </a>" '

          },{
              'question': 'The temporary security token that was obtained through a call to AWS Security Token Service (AWS STS) is passed in which parameter '
              , 'optiona': 'X-Amz-Credential ',
              'optionb': ' X-Amz-Security-Token ',
              'optionc': ' X-Amz-Signature ',
              'optiond': 'X-Amz-SignedHeaders',
              'answer': 'b',
              'info': '  '

          },{
                'question': 'In the response of GetSessionToken , which attribute in credentials is used to sign request  '
                , 'optiona': 'AccessKeyId ',
                'optionb': ' SecretAccessKey ',
                'optionc': ' SessionToken ',
                'optiond': 'None',
                'answer': 'b',
                'info': '  '

            },
    {
        'question': 'Which Service is used to Run automated security checks across your AWS environment',
        'optiona': 'Secrets Manager',
        'optionb': ' KMS Key Management Service ',
        'optionc': ' STS Security Token Service',
        'optiond': 'AWS Security Hub',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': 'Which Service allows you to Share AWS resources with other AWS accounts',
        'optiona': 'Secrets Manager',
        'optionb': ' Resource Access Manager ',
        'optionc': ' STS Security Token Service',
        'optiond': 'AWS Security Hub',
        'answer': 'b',
        'info': '  '
    },{
        'question': `  How can you easily and securely add sign-up and sign-in functionality to your mobile and web apps `,
        'optiona': 'Secrets Manager',
        'optionb': ' Resource Access Manager ',
        'optionc': ' Amazon Cognito ',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': ' User pools are user directories that provide sign-up and sign-in options for your app users. '
    } ,
    {
        'question': ` In Cognito Which of the following is an entity within a user pool that has permission to call unauthenticated APIs (APIs that do not have an authenticated user), such as APIs to register, sign in, and handle forgotten passwords  `,
        'optiona': ' Trigger ',
        'optionb': ' Resource server ',
        'optionc': ' App Client  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html"> Read More </a> '
    } ,
    {
        'question': ' How your app can get temporary credentials to access AWS services for anonymous guest users or for users who have signed in ',
        'optiona': 'Secrets Manager',
        'optionb': ' Resource Access Manager ',
        'optionc': ' Amazon Cognito ',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': ' Identity pools provide AWS credentials to grant your users access to other AWS services. '
    },
    {
        'question': ' Which service  synchronize application data across devices. ',
        'optiona': 'Amazon Cognito Sync ',
        'optionb': ' AWS AppSync ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' AWS AppSync is an enterprise-level, fully managed GraphQL service with real-time data synchronization and offline programming features'
    },
    {
        'question': ` The following request is ideal for <p style='white-space:pre'>
var params = {
  Name: 'STRING_VALUE', /* required */
  DurationSeconds: 'NUMBER_VALUE',
  Policy: 'STRING_VALUE',
  PolicyArns: [  {
      arn: 'STRING_VALUE'
    } ],
  Tags: [   {
      Key: 'STRING_VALUE', /* required */
      Value: 'STRING_VALUE' /* required */
    }  ]
};
</p> `,
        'optiona': 'sts.getSessionToken(params, function(err, data)  ',
        'optionb': ' sts.getFederationToken(params, function(err, data) ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': ' To get temporary credentials for a role by using GetFederationToken <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html#getSessionToken-property">Check </a>'
    },
    {
        'question': 'Which Service  helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources ',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' Web Application Firewall ',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'Which service can Analyze multiple data sources, including AWS CloudTrail events and VPC Flow Logs. ',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' Web Application Firewall ',
        'optiond': 'AWS Security Hub',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'Which service  protects your AWS accounts and workloads by adding your own threat lists and trusted IP lists ',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' Web Application Firewall ',
        'optiond': 'AWS Security Hub',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'Which service is used to store, rotate, monitor, and control access to secrets such as database credentials, API keys, and OAuth tokens',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' Web Application Firewall ',
        'optiond': 'AWS Security Hub',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': 'Which service makes it easy to manage SSO access to multiple AWS accounts and business applications ',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' AWS SSO ',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': ' '
    },
    {
        'question': ' ___ contains claims about contains claims about the identity of the authenticated user such as name, email, and phone_number ',
        'optiona': 'Id token',
        'optionb': ' access token ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html"> Know more </a> '
    },
    {
        'question': ' ___ contains scopes and groups and is used to grant access to authorized resources. ',
        'optiona': 'Id token',
        'optionb': ' access token ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html"> Know more </a> '
    },
    {
        'question': '________ are entities in IAM that describe an external identity provider (IdP) service that supports the OpenID Connect (OIDC) standard, such as Google or Salesforce',
        'optiona': 'IAM SAML Identity Providers',
        'optionb': ' OpenID Connect (OIDC) Identity Providers ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html"> Know more </a> '
    },
    {
        'question': 'After you create a user pool, you can create an  to use the built-in webpages for signing up and signing in your users',
        'optiona': 'Domain',
        'optionb': ' app client ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html"> Know more </a> '
    },
    {
        'question': 'You can use an ______ and choose an available domain prefix, or you can use your own web address as a custom domain.',
        'optiona': ' Amazon Cognito hosted domain',
        'optionb': ' app client ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html"> Know more </a> '
    },

    {
        'question': 'Which service  is a continuous security monitoring and threat detection service that incorporates threat intelligence, anomaly detection, and machine learning to help protect your AWS resources, including your AWS accounts',
        'optiona': 'Secrets Manager',
        'optionb': ' Amazon GuardDuty ',
        'optionc': ' AWS SSO ',
        'optiond': 'AWS Security Hub',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'Which service  is used if you own high visibility websites or are otherwise prone to frequent DDoS attacks',
        'optiona': ' AWS WAF alone ',
        'optionb': ' Firewall Manager with AWS WAF ',
        'optionc': ' AWS Shield Advanced ',
        'optiond': 'None',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': 'Which service  is optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets',
        'optiona': ' NACL network access control list  ',
        'optionb': '  web access control list (web ACL)   ',
        'optionc': ' Both',
        'optiond': 'None',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': 'Which service  gives you fine-grained control over the web requests that your Amazon CloudFront distribution, Amazon API Gateway API, or Application Load Balancer responds to',
        'optiona': ' NACL network access control list  ',
        'optionb': '  web access control list (web ACL)   ',
        'optionc': ' Both',
        'optiond': 'None',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': 'Which service can be called during user pool operations such as user sign-up, confirmation, and sign-in (authentication) ',
        'optiona': ' API Gateway  ',
        'optionb': '  ELB   ',
        'optionc': ' AWS Lambda',
        'optiond': 'None',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': 'Which token contains the information necessary to obtain a new ID or access token. ',
        'optiona': '  ID Token  ',
        'optionb': '   Access Token   ',
        'optionc': ' Refresh Token',
        'optiond': 'None',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': 'How to verify a user pool JSON web token (JWT). ',
        'optiona': '  Confirm the Structure of the JWT  ',
        'optionb': '   Validate the JWT Signature   ',
        'optionc': ' Verify the Claims ',
        'optiond': 'All of the above',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': 'Which header parameter represents the cryptographic algorithm used to secure the ID token ',
        'optiona': '  Algorithm (alg)  ',
        'optionb': ' Key Type (kty) ',
        'optionc': ' RSA Exponent (e) ',
        'optiond': 'RSA Modulus (n)',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': 'Which claim should match your user pool ',
        'optiona': '  audience (aud)  ',
        'optionb': ' issuer (iss) ',
        'optionc': '  token_use  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' Which type of IAM policy is managed by AWS and cannot be edited ',
        'optiona': '  Managed Policy ',
        'optionb': ' Customer managed Policy  ',
        'optionc': '  Inline Policy  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' In IAM policy where to set Allow or Deny ',
        'optiona': ' Action ',
        'optionb': ' Effect  ',
        'optionc': '  Condition  ',
        'optiond': ' Principal ',
        'answer': 'b',
        'info': ' '
    } ,
    {
        'question': ' Which is optional and Depends on Resource ',
        'optiona': ' Action ',
        'optionb': ' Effect  ',
        'optionc': '  Condition  ',
        'optiond': ' Principal ',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': ' Which one represents account user role or federated user ',
        'optiona': ' Action ',
        'optionb': ' Effect  ',
        'optionc': '  Condition  ',
        'optiond': ' Principal ',
        'answer': 'd',
        'info': ' '
    }  ,
    {
        'question': ' Trust policies define which entities can assume the role . Where is the trust policy specified while creating a role . ',
        'optiona': ' Both ',
        'optionb': ' ManagedPolicyArns  ',
        'optionc': '  AssumeRolePolicyDocument  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> Read more </a>'
    }  ,
    {
        'question': 'for a policy Read / Write object is speciafied in  ',
        'optiona': ' Action ',
        'optionb': ' Effect  ',
        'optionc': '  Condition  ',
        'optiond': ' Principal ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' Which service gives you best practices related to cost optimization , performance and security ',
        'optiona': ' Trusted Adviser ',
        'optionb': ' Inspector   ',
        'optionc': '  Both  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' Which service lets you manage your EC2 instances, on-premises instances, and virtual machines (VMs) through an interactive one-click browser-based shell or through the AWS CLI ',
        'optiona': ' Trusted Adviser ',
        'optionb': ' Inspector   ',
        'optionc': '  AWS Systems Manager Session Manager   ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': ' Which service syncronizes the user data and preferences across devices',
        'optiona': ' Cognito Identity Pool ',
        'optionb': ' User Pool  ',
        'optionc': '  AWS Cognito Sync  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': ' Which service Cognito uses to push notification and synchronize data',
        'optiona': ' Cognito Identity Pool ',
        'optionb': ' User Pool  ',
        'optionc': ' SNS  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ' '
    } ,
    {
        'question': ' On enabling which service ,  it begins to consume, aggregate, organize, and prioritize findings from AWS services that you have enabled, such as Amazon GuardDuty, Amazon Inspector, and Amazon Macie',
        'optiona': ' Cognito Identity Pool ',
        'optionb': ' User Pool  ',
        'optionc': ' SNS  ',
        'optiond': ' AWS Security Hub ',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': '  The finding provider uses the ____________  API operation to update the general information about a finding ',
        'optiona': '  BatchUpdateFindings ',
        'optionb': ' BatchEnableStandards  ',
        'optionc': ' BatchImportFindings  ',
        'optiond': ' BatchDisableStandards ',
        'answer': 'c',
        'info': ' '
    },
    {
        'question': ' Which of the following is  Used by Security Hub customers to update information about their investigation into a finding',
        'optiona': '  BatchUpdateFindings ',
        'optionb': ' BatchEnableStandards  ',
        'optionc': ' BatchImportFindings  ',
        'optiond': ' BatchDisableStandards ',
        'answer': 'a',
        'info': ' '
    } ,
    {
        'question': ' Which of the following Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to',
        'optiona': '  aws sts assume-role --profile sam --role-session-name myrs --role-arn arn:aws:iam::12345:role/MyRole ',
        'optionb': '  aws sts assume-role-with-saml  --profile sam --role-session-name myrs --role-arn arn:aws:iam::12345:role/MyRole  --saml-assertion VERYLONGENCRYPEDTEXT ',
        'optionc': '  aws sts assume-role-with-web-identity   --profile sam --role-session-name myrs --role-arn arn:aws:iam::12345:role/MyRole  --web-identity-token BearerTokenOAuth  ',
        'optiond': ' All of the Above ',
        'answer': 'd',
        'info': ' '
    } ,
    {
        'question': ' How do you use the temporary security credentials ',
        'optiona': '   use the access key ID and secret access key the same way you would use long-term credentials to sign a request and adding the session token to an HTTP header or to a query string parameter named X-Amz-Security-Token ',
        'optionb': ' BatchEnableStandards  ',
        'optionc': ' BatchImportFindings  ',
        'optiond': ' BatchDisableStandards ',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' _______________are attached to an IAM user, group, or role ',
        'optiona': '   Identity-based policies  ',
        'optionb': ' Resource-based policies  ',
        'optionc': ' Both  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' '
    },
	{
        'question': 'For Policy <p> { "Version": "2012-10-17", "Statement": [ {  "Sid": "_____", "Effect": "_____",   "Action": [  _____  ],  "Resource": _____ } ] } </p> What should be in Effect ',
        'optiona': '  Allow / Deny  ',
        'optionb': ' [  "dynamodb:*",   "ec2:RunInstances",  "s3:*"  ]  ',
        'optionc': ' ["arn:aws:s3:::CompanyConfidential/*" ,"arn:aws:dynamodb:::table/*" ,"arn:aws:ec2:::instance/*" ]  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': ' { "Version": "2012-10-17", "Statement": [ {  "Sid": "SomeServices", "Effect": "Allow",   "Action": [  "dynamodb:*",   "ec2:*",  "s3:*"  ],  "Resource": ["arn:aws:s3:::CompanyConfidential/*" ,"arn:aws:dynamodb:::table/*" ,"arn:aws:ec2:::instance/*" ] } ] }'
    },
	{
        'question': 'When a user attempts to launch an instance, he is facing an error like this A client error (UnauthorizedOperation) occurred: You are not authorized to perform this operation. Encoded authorization failure message:encodedmessage . How do you find what is the error ',
        'optiona': '  Allow / Deny  ',
        'optionb': ' aws sts get-caller-identity ',
        'optionc': '  aws sts decode-authorization-message --encoded-message encodedmessage  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
	{
        'question': 'For symmetric CMKs , create-key what should be the value in --key-usage ',
        'optiona': '  omit the parameter or specify ENCRYPT_DECRYPT  ',
        'optionb': '  specify ENCRYPT_DECRYPT or SIGN_VERIFY . ',
        'optionc': '  specify SIGN_VERIFY  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
	{
        'question': 'For asymmetric  CMKs with RSA key material , create-key what should be the value in --key-usage ',
        'optiona': '  omit the parameter or specify ENCRYPT_DECRYPT  ',
        'optionb': '  specify ENCRYPT_DECRYPT or SIGN_VERIFY . ',
        'optionc': '  specify SIGN_VERIFY  ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
	{
        'question': 'For asymmetric  CMKs with ECC key material , create-key what should be the value in --key-usage ',
        'optiona': '  omit the parameter or specify ENCRYPT_DECRYPT  ',
        'optionb': '  specify ENCRYPT_DECRYPT or SIGN_VERIFY . ',
        'optionc': '  specify SIGN_VERIFY  ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
	{
        'question': `<p>aws kms create-key --customer-master-key-spec RSA_4096 \
 --key-usage SIGN_VERIFY \
 --description "Sample Digital Signature Key Pair"</p> What this command will return`,
        'optiona': '  KeyMetadata object ',
        'optionb': '  specify ENCRYPT_DECRYPT or SIGN_VERIFY . ',
        'optionc': '  specify SIGN_VERIFY  ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  '
    },
	{
        'question': ' Which operation returns a plaintext copy of the symmetric  data key and a copy that is encrypted under a customer master key (CMK) that you specify',
        'optiona': '  GenerateDataKey ',
        'optionb': '  GenerateDataKeyPair ',
        'optionc': '  GenerateDataKeyWithoutPlaintext  ',
        'optiond': ' GenerateDataKeyPairWithoutPlaintext ',
        'answer': 'a',
        'info': '  '
    },
	{
        'question': ' Enabling Security Hub grants it permissions to import findings from:',
        'optiona': '  Amazon GuardDuty ',
        'optionb': '  Amazon Inspector ',
        'optionc': '  Amazon Macie  ',
        'optiond': ' All ',
        'answer': 'd',
        'info': 'also from  AWS IAM Access Analyzer AWS Firewall Manager '
    },
	{
        'question': '  Automatically discover sensitive data across all of your organization\'s S3 buckets',
        'optiona': '  Amazon GuardDuty ',
        'optionb': '  Amazon Inspector ',
        'optionc': '  Amazon Macie  ',
        'optiond': ' All ',
        'answer': 'c',
        'info': 'Macie continually evaluates your Amazon S3 environment and provides an S3 resource summary across all of your accounts '
    },
	{
        'question': ' _______  captures all API calls for Macie as events ',
        'optiona': '  CloudTrail ',
        'optionb': '  CloudWatch ',
        'optionc': '  xray  ',
        'optiond': ' All ',
        'answer': 'a',
        'info': ' If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon Simple Storage Service (Amazon S3) bucket, including events for Macie '
    },{
          'question': ' Which type of policy allows you to specify expiration date only ',
          'optiona': '  Custom policy ',
          'optionb': '  Canned policy ',
          'optionc': '  Both  ',
          'optiond': ' None ',
          'answer': 'b',
          'info': ' <a href="https://aws.amazon.com/blogs/developer/serving-private-content-through-amazon-cloudfront-using-signed-cookies/#:~:text=Canned%20policies%20allow%20you%20to,the%20use%20of%20the%20Amazon.">Know more</a> '
      },{
            'question': ' In addition to an expiration date, which policies allow you to set resource paths with wildcards, activation time, and IP address/address ranges. ',
            'optiona': '  Custom policy ',
            'optionb': '  Canned policy ',
            'optionc': '  Both  ',
            'optiond': ' None ',
            'answer': 'a',
            'info': ' <a href="https://aws.amazon.com/blogs/developer/serving-private-content-through-amazon-cloudfront-using-signed-cookies/#:~:text=Canned%20policies%20allow%20you%20to,the%20use%20of%20the%20Amazon.">Know more</a> '
        },{

        'question': '  Shared Responsibility Model for Infrastructure Services , what are customers Responsibility ',
        'optiona': '  Operating system network and firewall configuration  ',
        'optionb': '  CloudWatch ',
        'optionc': '  xray  ',
        'optiond': ' All ',
        'answer': 'a',
        'info': ' If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon Simple Storage Service (Amazon S3) bucket, including events for Macie '
    },{

    'question': '  you can provision a ________ that you can add to your app to handle sign-up and sign-in workflows',
    'optiona': '  hosted authentication UI  ',
    'optionb': '  App client ',
    'optionc': '  Resource Server  ',
    'optiond': ' All ',
    'answer': 'a',
    'info': ' <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html"> Read more </a> '
}
];

var title = "AWS Security"
