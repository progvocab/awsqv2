var req = [
    {
        'question': 'Which is the correct statment '
        , 'optiona': 'Lambda is event driven',
        'optionb': 'Lambda function cannot be triggered by posting message to SNS and SQS queue',
        'optionc': 'Lambda function cannot be triggered by adding data to DynamoDB or S3',
        'optiond': 'Lambda function cannot be triggered by Cloudwatch and Cloud trail or calling diectly from API',
        'answer': 'a',
        'info': ' Lambda is serverless '

    }, {
        'question': ' Which is the correct statment  ',
        'optiona': 'Lambda function cannot be used for real time data analysis',
        'optionb': 'Lambda function cannot be called using api gateway',
        'optionc': 'Lambda function cannot be called using AWS SDK',
        'optiond': 'None',
        'answer': 'd',
        'info': 'Lambda is applicable for all of the above'
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
        'question': 'What is AWS Lambda execution context  ',
        'optiona': ' an AWS Lambda resource that reads from an event source and invokes a Lambda function ',
        'optionb': '  it provisions and manages the resources needed to run your Lambda function  ',
        'optionc': '  a combination of Lambda functions, event sources, and other resources that work together to perform tasks. ',
        'optiond': ' provides a collection of Lambda applications that you can deploy in your account with a few clicks ',
        'answer': 'b',
        'info': ' The execution context is a temporary runtime environment that initializes any external dependencies of your Lambda function code, such as database connections or HTTP endpoints '
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
        'optiona': ' Lambda ignores it ',
        'optionb': '  Lambda runs it again  ',
        'optionc': '  the system automatically deploys the new version of the function and gradually sends an increasing amount of traffic to the new version ',
        'optiond': ' None ',
        'answer': 'c',
        'info': '  '
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
    'optiona': ' AWS managed CMK ',
    'optionb': ' update-function-configuration  ',
    'optionc': '  Both ',
    'optiond': ' None ',
    'answer': 'a',
    'info': ' Each customer master key (CMK) that you create in AWS Key Management Service (KMS) costs $1/month until you delete it, regardless of where the underlying key material was generated by the service, a custom key store, or you imported it '
},
{
   'question': `  How to share common dependencies accross all lambda function `,
   'optiona': ' environment variables ',
   'optionb': ' layers  ',
   'optionc': '   context object ',
   'optiond': ' None ',
   'answer': 'b',
   'info': ' AWS released Lambda layers, providing a mechanism to externally package dependencies that can be shared across multiple Lambda functions<a href="https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/">Visit</a> '
}
];

var title = "Lambda"