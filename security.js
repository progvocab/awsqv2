var req = [
    {
        'question': 'Which service is enables you to request temporary, limited-privilege credentials for <b>AWS</b> Identity and Access Management (IAM) users or for users that you authenticate (federated users) '
        , 'optiona': 'Secrets Manager',
        'optionb': ' KMS Key Management Service ',
        'optionc': ' STS Security Token Service',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
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
    },
    {
        'question': `  How can you easily and securely add sign-up and sign-in functionality to your mobile and web apps `,
        'optiona': 'Secrets Manager',
        'optionb': ' Resource Access Manager ',
        'optionc': ' Amazon Cognito ',
        'optiond': 'AWS Security Hub',
        'answer': 'c',
        'info': ' User pools are user directories that provide sign-up and sign-in options for your app users. '
    }
    ,
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
    }
];

var title = "AWS Security"