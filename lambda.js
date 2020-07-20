var req = [
  {
      'question': 'When you invoke or view a function, you can include a _______ to specify a version or alias '
      , 'optiona': 'Trigger',
      'optionb': 'Runtime',
      'optionc': 'Qualifier',
      'optiond': 'Event',
      'answer': 'c',
      'info': ' An alias is a pointer to a version that can be updated to map to a different version, or split traffic between two versions. For example, my-function:BLUE. You can use versions and aliases together to provide a stable interface for clients to invoke your function. '

  },{
      'question': 'Which of the following  adds an on-failure destination to the existing asynchronous invocation configuration for the specified function. '
      , 'optiona': 'Trigger',
      'optionb': `aws lambda create-event-source-mapping \
    --function-name my-function \
    --batch-size 5 \
    --event-source-arn arn:aws:sqs:us-west-2:123456789012:mySQSqueue`,
      'optionc': 'aws lambda update-function-event-invoke-config --function-name error \--destination-config \'{"OnFailure":{"Destination": "arn:aws:sqs:us-east-2:123456789012:destination"}}\' ',
      'optiond': 'Event',
      'answer': 'c',
      'info': '  '

  },{
        'question': 'A file descriptor is a number that uniquely identifies an open file in a computer\'s operating system .What is the maximum  file descriptors or Execution processes/threads'
        , 'optiona': '256',
        'optionb': '512',
        'optionc': '1024',
        'optiond': 'None',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"> Read More </a> '

    },{
          'question': 'The following quotas apply per Region and can be increased via Service Quotas '
          , 'optiona': 'Concurrent executions 1000',
          'optionb': 'Function and layer storage 75GB',
          'optionc': 'Both',
          'optiond': 'None',
          'answer': 'c',
          'info': '  <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html"> Read more </a> '

      },{
            'question': 'What is the maximum size of invocation payload request and response for asynchronous invocation '
            , 'optiona': '256 KB',
            'optionb': '1 MB',
            'optionc': '6 MB',
            'optiond': 'None',
            'answer': 'a',
            'info': '  <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"> Read more </a> '

        },{
            'question': 'What is the maximum size of invocation payload request and response for synchronous invocation '
            , 'optiona': '256 KB',
            'optionb': '1 MB',
            'optionc': '6 MB',
            'optiond': 'None',
            'answer': 'c',
            'info': '  <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"> Read more </a> '

        } ,
        {
            'question': ' How to efficiently absorb the invoke overhead across a larger set of records, increasing your throughput ',
            'optiona': ' increase the batch size',
            'optionb': '  tell the event source to buffer records for up to 5 minutes by configuring a batch window  ',
            'optionc': ' Both ',
            'optiond': ' None',
            'answer': 'c',
            'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
        }, {
            'question': 'Which of The following limits  cannot be increased. '
            , 'optiona': 'Function resource-based policy 20KB',
            'optionb': 'Function layers 5 ',
            'optionc': 'Function burst concurrency 500 - 3000',
            'optiond': 'All of the Above',
            'answer': 'd',
            'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"> Read More </a> '

        },{
        'question': ' How to increase the CPU available to your function  ',
        'optiona': ' increase the memory size ',
        'optionb': ' decrease the memory size',
        'optionc': ' memory does not have any effect in CPU  available to your function',
        'optiond': 'None',
        'answer': 'a',
        'info': '<a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
    },
    {
    'question': 'Choose the best practice   ',
    'optiona': ' if you are writing to an Amazon S3 bucket, instead of hard-coding the bucket name you are writing to, configure the bucket name as an environment variable ',
    'optionb': ' To have full control of the dependencies your function uses, package all of your dependencies with your deployment package',
    'optionc': ' Initialize SDK clients and database connections outside of the function handler, and cache static assets locally in the /tmp directory',
    'optiond': 'All of the Above',
    'answer': 'd',
    'info': '<a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
  },
  {
  'question': ' How do you reduce the time it takes Lambda to unpack deployment packages authored in Java   ',
  'optiona': '  putting all your function’s code in a single jar with a large number of .class files ',
  'optionb': ' by putting your dependency .jar files in a separate /lib directory',
  'optionc': ' Both',
  'optiond': 'None of the Above',
  'answer': 'b',
  'info': '<a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
},
{
'question': 'If you are using Amazon Simple Queue Service as an event source  what should we make sure of ',
'optiona': '  the function\'s expected execution time < Visibility Timeout value on the queue ',
'optionb': ' the function\'s expected execution time > Visibility Timeout value on the queue  ',
'optionc': ' Both',
'optiond': 'None of the Above',
'answer': 'a',
'info': '<a href="https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"> Read More </a>'
},
{
'question': 'The AWS SDK for Java automatically retries requests, and you can configure the retry settings using the ',
'optiona': '  ClientConfiguration  ',
'optionb': ' maxErrorRetry  ',
'optionc': ' Both',
'optiond': 'None of the Above',
'answer': 'c',
'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/api-retries.html"> Read More </a>'
},
    {
        'question': ' Which service would you chosse for Coordinate task for image analysis',
        'optiona': 'Lambda',
        'optionb': 'Step Function',
        'optionc': 'SWF',
        'optiond': ' AWS Fargate',
        'answer': 'b',
        'info': ' Step Function'
    }
    ,
    {
        'question': ' Which service would you choose for Complete Encoding of larger files and return results  ',
        'optiona': ' Lambda ',
        'optionb': ' AWS Glue ',
        'optionc': ' Fargate ',
        'optiond': ' SWF ',
        'answer': 'c',
        'info': 'Fargate '
    },
    {
        'question': 'What is layer',
        'optiona': 'users can use libraries in a function without needing to include the libraries in a deployment package',
        'optionb': 'a .zip archive that contains libraries, a custom runtime, or other dependencies',
        'optionc': 'You can configure your Lambda function to pull in additional code and content in the form of layers ',
        'optiond': 'All of the Above ',
        'answer': 'd',
        'info': 'Layers let you keep your deployment package small, which makes development easier'
    },
    {
        'question': 'What is throttle',
        'optiona': 'Need additional permissions to configure VPC settings HTTP Status Code: 502',
        'optionb': 'When requests come in faster than your function can scale, or when your function is at maximum concurrency, additional requests fail with a throttling error (429 status code)',
        'optionc': 'An error occured when reading from or writing to a connected file system.HTTP Status Code: 410',
        'optiond': 'All of the Above',
        'answer': 'b',
        'info': ' All of the Above'
    },
    {
        'question': '  Which of the following can be applied to a task in Fargate ',
        'optiona': ' Security Group',
        'optionb': 'IAM Role',
        'optionc': 'Both',
        'optiond': 'None',
        'answer': 'c',
        'info': ''
    },
    {
        'question': ' Max duration for Lambda Task  ',
        'optiona': ' 1 mins ',
        'optionb': ' 5 mins ',
        'optionc': ' 15 mins ',
        'optiond': ' No Limit ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' Max duration for Fargate Task  ',
        'optiona': ' 1 mins ',
        'optionb': ' 5 mins ',
        'optionc': ' 15 mins ',
        'optiond': ' No Limit ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': ' Max memory a Lambda Task  can use ',
        'optiona': ' 1 GB ',
        'optionb': ' 3 GB ',
        'optionc': ' 30 GB ',
        'optiond': ' No Limit ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Max   memory a Fargate Task  can use   ',
        'optiona': ' 1 GB ',
        'optionb': ' 3 GB ',
        'optionc': ' 30 GB ',
        'optiond': ' No Limit ',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': ' How is lambda priced  ',
        'optiona': ' per 100ms ',
        'optionb': ' per second  ',
        'optionc': ' per min ',
        'optiond': ' 1 min and then for every second ',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' How is fargate priced  ',
        'optiona': ' per 100ms ',
        'optionb': ' per second  ',
        'optionc': ' per min ',
        'optiond': ' 1 min and then for every second ',
        'answer': 'd',
        'info': '  '
    } ,
	 {
        'question': 'What does lambda authorizer returns ',
        'optiona': ' boolean  ',
        'optionb': '  token   ',
        'optionc': ' policy ',
        'optiond': ' None ',
        'answer': 'c',
        'info': ` <p style="white-space: pre-wrap;">{
  "policyDocument": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "execute-api:Invoke",
        "Resource": [
          "arn:aws:execute-api:us-east-2:123456789012:example/prod/*/*"
        ],
        "Effect": "Deny"
      }
    ]
  },
  "context": {
    "bool": true,
    "number": 1,
    "key": "value"
  },
  "principalId": "user|a1b2c3d4"
}</p> `
    },
	 {
        'question': 'What is AWS Lambda execution context  ',
        'optiona': ' an AWS Lambda resource that reads from an event source and invokes a Lambda function ',
        'optionb': '  it provisions and manages the resources needed to run your Lambda function  ',
        'optionc': '  a combination of Lambda functions, event sources, and other resources that work together to perform tasks. ',
        'optiond': ' provides a collection of Lambda applications that you can deploy in your account with a few clicks ',
        'answer': 'b',
        'info': ' The execution context is a temporary runtime environment that initializes any external dependencies of your Lambda function code, such as database connections or HTTP endpoints '
    },
	 {
        'question': ' Which of the following is true about execution context  ',
        'optiona': ' AWS Lambda automatically reuses the execution context for subsequent function invocations  ',
        'optionb': ' additional logic in  code is required to check if a connection exists before creating one ',
        'optionc': '  both ',
        'optiond': ' none ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html"> Read more </a> '
    },
    {
         'question': 'Lambda encrypts environment variables with    ',
         'optiona': ' AWS Managed CMK  ',
         'optionb': ' Customer Managed CMK ',
         'optionc': '  both ',
         'optiond': ' none ',
         'answer': 'c',
         'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption"> Read more </a> '
     },{
          'question': 'The KMS key that\'s used to encrypt the function\'s environment variables is specified using   ',
          'optiona': ' MasterArn  ',
          'optionb': ' KMSKeyArn ',
          'optionc': '  FunctionArn ',
          'optiond': ' none ',
          'answer': 'b',
          'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_FunctionConfiguration.html"> Read more </a> '
      },
     {
          'question': ' When you use the console encryption helpers, your function needs permission to call the ___________ API operation in its execution role.  ',
          'optiona': ' kms:CreateGrant, kms:Encrypt  ',
          'optionb': '   kms:Decrypt ',
          'optionc': '  kms:ListAliases ',
          'optiond': ' none ',
          'answer': 'b',
          'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption"> Read more </a> '
      }, {
        'question': ' How to fix cold start issues   ',
        'optiona': ' turn on Provisioned Concurrency  ',
        'optionb': '  writing code in python ',
        'optionc': '  both ',
        'optiond': ' none ',
        'answer': 'a',
        'info': ' <a href="https://aws.amazon.com/blogs/compute/new-for-aws-lambda-predictable-start-up-times-with-provisioned-concurrency/"> Read more </a> '
    },
	 {
        'question': 'How do you call lambda asynchronously from cli ',
        'optiona': ' aws lambda invoke --function-name my-function  --invocation-type Event --payload \'{ "key": "value" }\' response.json ',
        'optionb': '  aws lambda put-function-event-invoke-config --function-name error  --maximum-event-age-in-seconds 3600 --maximum-retry-attempts 0  ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '   To invoke a function asynchronously, set InvocationType to Event . <a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/invoke.html" >Visit</a>'
    },
	 {
        'question': 'If the function doesn\'t have enough concurrency available to process all events, additional requests are throttled. For throttling errors (429) and system errors (500-series) which of the following is true for async invocation ',
        'optiona': ' Lambda ignores it ',
        'optionb': '  Lambda runs it again  ',
        'optionc': ' Lambda returns the event to the queue and attempts to run the function again for up to 6 hours ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
    },
	 {
        'question': 'What is Rolling deployments for Lambda functions',
        'optiona': ' Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the interval, in minutes, before the remaining traffic is shifted in the second increment ',
        'optionb': '  All traffic is shifted from the original Lambda function to the updated Lambda function version all at once  ',
        'optionc': '  the system automatically deploys the new version of the function and gradually sends an increasing amount of traffic to the new version',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-rolling-deployments.html"> Read more </a>'
    },
    {
       'question': 'What is the maximum size of all environment variable ',
       'optiona': ' 1 KB ',
       'optionb': '  2 KB  ',
       'optionc': '  4 KB ',
       'optiond': ' 6 KB ',
       'answer': 'c',
       'info': ' The total size of all environment variables doesnt exceed 4 KB '
   },
   {
      'question': 'Lambda stores environment variables securely by encrypting them at rest. Which of the following is true ',
      'optiona': ' You can configure Lambda to use a different encryption key ',
      'optionb': ' encrypt environment variable values on the client side  ',
      'optionc': '  set environment variables in an AWS CloudFormation template with AWS Secrets Manager ',
      'optiond': ' All of the Above ',
      'answer': 'd',
      'info': ' Lambda encrypts environment variables with a key that it creates in your account (an AWS managed customer master key (CMK)). Use of this key is free. You can also choose to provide your own key for Lambda to use instead of the default key. '
  },
  {
     'question': 'Which of the following is free to use ',
     'optiona': ' AWS managed CMK ',
     'optionb': ' Customer managed CMK  ',
     'optionc': '  Both ',
     'optiond': ' None ',
     'answer': 'a',
     'info': ' Each customer master key (CMK) that you create in AWS Key Management Service (KMS) costs $1/month until you delete it, regardless of where the underlying key material was generated by the service, a custom key store, or you imported it '
 },
 {
    'question': `Which command do you use to add enviroment variables <p>$ aws lambda _____________ --function-name my-function \
    --environment "Variables={BUCKET=my-bucket,KEY=file.txt}" </p> `,
    'optiona': ' update-event-source-mapping ',
    'optionb': ' update-function-configuration  ',
    'optionc': '  Both ',
    'optiond': ' None ',
    'answer': 'b',
    'info': '  '
},
{
   'question': `How can you map a function named my-function to a DynamoDB stream that is specified by its Amazon Resource Name (ARN), with a batch size of 500. `,
   'optiona': ' aws lambda create-event-source-mapping --function-name my-function --batch-size 500 --starting-position LATEST --event-source-arn arn:aws:dynamodb:us-east-2:123456789012:table/my-table/stream/2019-06-10T19:26:16.525 ',
   'optionb': ` aws lambda update-function-event-invoke-config \
    --function-name my-function \
    --destination-config '{"OnFailure":{"Destination": "arn:aws:sqs:us-east-2:123456789012:destination"}}' `,
   'optionc': '  Both ',
   'optiond': ' None ',
   'answer': 'a',
   'info': '  '
},
{
   'question': `  How to share common dependencies accross all lambda function `,
   'optiona': ' environment variables ',
   'optionb': ' layers  ',
   'optionc': '   context object ',
   'optiond': ' None ',
   'answer': 'b',
   'info': ' AWS released Lambda layers, providing a mechanism to externally package dependencies that can be shared across multiple Lambda functions<a href="https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/">Visit</a> '
},
{
   'question': ` For X-Ray tracing, the IP address and port of the X-Ray daemon are set in which  unreserved Runtime Environment Variable  `,
   'optiona': ' _X_AMZN_TRACE_ID  ',
   'optionb': ' AWS_XRAY_DAEMON_ADDRESS  ',
   'optionc': '   context object ',
   'optiond': ' None ',
   'answer': 'b',
   'info': ' AWS released Lambda layers, providing a mechanism to externally package dependencies that can be shared across multiple Lambda functions<a href="https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/">Visit</a> '
},
{
   'question': ` What is a prerequisite for creating lambda RDS proxy `,
   'optiona': ' store your database credentials as a secret in AWS Secrets Manager  ',
   'optionb': ' create an IAM Policy that allows RDS Proxy to read the secret  ',
   'optionc': '   both ',
   'optiond': ' None ',
   'answer': 'c',
   'info': ' <a href="https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/">Visit</a> '
},
{
   'question': ` Throttling is possible after   `,
   'optiona': ' Burst Limit  ',
   'optionb': ' Concurrency Limit ',
   'optionc': '   both ',
   'optiond': ' None ',
   'answer': 'a',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Visit</a> '
},
{
   'question': ` The Lambda runtime needs permission to read the files in your deployment package. How do you resolve errors like EACCES: permission denied    `,
   'optiona': ' Create an IAM policy and attach to role ',
   'optionb': ' chmod 755 ',
   'optionc': '   both ',
   'optiond': ' None ',
   'answer': 'b',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-deployment.html">Visit</a> '
},
{
   'question': ` If a function becomes stuck in the Pending state for more than six minutes,Which of the the following API operations should be called to unblock it.  `,
   'optiona': ' UpdateFunctionCode ',
   'optionb': ' UpdateFunctionConfiguration ',
   'optionc': '   PublishVersion ',
   'optiond': ' Any one ',
   'answer': 'd',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-invocation.html">Visit</a> '
},
{
   'question': ` Choose the CLI command which will perform the following , <p>The alias points to version 1 of the function. Version 2 of the function receives 3 percent of the traffic. The remaining 97 percent of traffic is routed to version 1</p> `,
   'optiona': ` $ aws lambda create-alias --name  routing-alias  --function-name  my-function  --function-version  1  \
--routing-config  AdditionalVersionWeights={"2"=0.03}  ` ,
   'optionb': `$ aws lambda update-alias --name  routing-alias  --function-name  my-function  \
--routing-config  AdditionalVersionWeights={"2"=0.03}`,
   'optionc': '   Both ',
   'optiond': ' None ',
   'answer': 'c',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">Visit</a> '
},{
   'question': ` Which performance metric is used for thr amount of time between when the stream receives the record and when the event source mapping sends the event to the function `,
   'optiona': ' Duration  ',
   'optionb': ' IteratorAge  ',
   'optionc': '   Both  ',
   'optiond': ' None ',
   'answer': 'c',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html">Visit</a> '
},{
   'question': ` To throttle a function, set the  to zero`,
   'optiona': ' reserved concurrency  ',
   'optionb': ' provisioned concurrency  ',
   'optionc': '   Both  ',
   'optiond': ' None ',
   'answer': 'a',
   'info': ' <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html">Visit</a> '
}
];

var title = "Lambda"
