var req = [
     {
        'question': ' What is AWS Ampify  ',
        'optiona': 'a development platform for building secure, scalable mobile and web applications',
        'optionb': 'The open source Framework provides an opinionated set of libraries, UI components, and a command line interface to build an app backend and integrate it with your iOS, Android, Web, and React Native apps',
        'optionc': 'provides a complete workflow for developing, deploying, and hosting single page web apps or static sites with serverless backends',
        'optiond': 'All of the above',
        'answer': 'd',
        'info': 'Both'
    },
    {
    'question': 'Which of the following is presigned URL ',
    'optiona': '  Adding a query string value to the request ,  the signature is part of the URL in this case ',
    'optionb': ' Using the HTTP Authorization header  ',
    'optionc': ' Both',
    'optiond': 'None of the Above',
    'answer': 'a',
    'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html"> Read More </a>'
  },
  {
  'question': 'The signing process helps secure requests in which of the following ways ',
  'optiona': ' Verify the identity of the requester ',
  'optionb': ' Protect data in transit  ',
  'optionc': ' Protect against potential replay attacks',
  'optiond': 'All of the Above',
  'answer': 'd',
  'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html"> Read More </a>'
},
{
'question': 'Which step is performed before <p>Add the signature to the HTTP request</p> to create a signed request ',
'optiona': ' Create a canonical request for Signature Version 4 ',
'optionb': ' Create a string to sign for Signature Version 4  ',
'optionc': '  Calculate the signature for AWS Signature Version 4',
'optiond': 'All of the Above',
'answer': 'd',
'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html"> Read More </a>'
},
    {
    'question': 'The AWS SDK for Java automatically retries requests, and you can configure the retry settings using the ',
    'optiona': '  ClientConfiguration  ',
    'optionb': ' maxErrorRetry  ',
    'optionc': ' Both',
    'optiond': 'None of the Above',
    'answer': 'c',
    'info': '<a href="https://docs.aws.amazon.com/general/latest/gr/api-retries.html"> Read More </a>'
    },{
       'question': 'In which deployment method during the deployment process two software versions, new and old, are running on the same fleet, allowing a zerodowntime update  ',
       'optiona': 'All at Once (In-Place Deployment)',
       'optionb': 'Rolling Deployment',
       'optionc': 'All of the above',
       'optiond': 'None',
       'answer': 'b',
       'info': '<a href="https://d1.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf"> Read more </a>'
   },
    {
        'question': 'Which service Securely host highly scalable private Git repositories',
        'optiona': 'AWS Code Pipeline',
        'optionb': 'AWS Code Deploy ',
        'optionc': 'AWS Code Build  ',
        'optiond': 'AWS Code Commit',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': 'What is XRay ',
        'optiona': 'helps you locate the sources of bugs by aggregating errors, faults, and exceptions',
        'optionb': 'collects timing and response data needed to identify high-latency services, bottlenecks, and throttling in a microservices architecture.',
        'optionc': 'creates a map of services used by your application to provide you with a view of connections among clients, front-end service, and downstream services.',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': ' All of the Above'
    },
    {
        'question': ' Choose the correct statement ',
        'optiona': 'Instrumenting is the ability to moniter or measure the level of products performance to diagnose error and write trace information',
        'optionb': ' The SDK records data about incoming and outgoing requests and sends it to the X-Ray daemon, which relays the data in batches to X-Ray',
        'optionc': 'Service integration can include adding tracing headers to incoming requests, sending trace data to X-Ray, or running the X-Ray daemon',
        'optiond': 'All',
        'answer': 'd',
        'info': ' '
    }
    ,
    {
      'question': ' Which of the following triggers CodeArtifact events ',
      'optiona': ' Publishing a new package version',
      'optionb': ' Adding a new asset to an existing package version ',
      'optionc': ' Copying a package version from one repository to another using copy-package-version',
      'optiond': 'All',
      'answer': 'd',
      'info': ' '
    }  ,
      {
      'question': ' Which of the following actions can be triggered by an event ',
      'optiona': ' Invoking an AWS Lambda function and starting a pipeline in AWS CodePipeline',
      'optionb': ' Activating an AWS Step Functions state machine',
      'optionc': ' Notifying an Amazon SNS topic or an Amazon SQS queue ',
      'optiond': 'All',
      'answer': 'd',
      'info': ' '
      }
      ,
       {
       'question': ' In CodeArtifact, your software packages are stored in  ',
       'optiona': ' repositories',
       'optionb': ' domain',
       'optionc': ' asset ',
       'optiond': 'package namespace',
       'answer': 'a',
       'info': ' '
       },
        {
        'question': '  In CodeArtifact,  repositories are stored in a   ',
        'optiona': ' packages',
        'optionb': ' domain',
        'optionc': ' asset ',
        'optiond': 'package namespace',
        'answer': 'b',
        'info': 'Your software packages are stored in repositories, and repositories are stored in a domain '
        }
    ,
    {
        'question': ' How do you create a segment ',
        'optiona': 'aws-xray-sdk.openSegment(MyApp)',
        'optionb': 'aws-xray-sdk.express.openSegment(MyApp)',
        'optionc': 'both',
        'optiond': 'none',
        'answer': 'b',
        'info': ''
    },
    {
        'question': ' What is Passive Instrumentation  ',
        'optiona': ' Samples and instruments incoming requests.',
        'optionb': 'Instruments requests that have been sampled by another service.',
        'optionc': 'Adds a tracing header to all incoming requests and propagates it downstreamth',
        'optiond': 'Runs the X-Ray daemon to receive segments from the X-Ray SDK.',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' Which services provide X-Ray integration ',
        'optiona': ' Lambda , EC2 , Elastic Beanstalk , SNS , SQS  ',
        'optionb': '  Lambda , API gateway , ELB , Elastic Beanstalk , SNS , SQS  ',
        'optionc': ' Lambda , API gateway , ELB , Elastic Beanstalk , SNS , SQS  , Fargate',
        'optiond': ' None',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' you can trace all of your applications primary and downstream AWS resources by    ',
        'optiona': ' Add the X-Ray SDK for Javas tracing filter to your servlet configuration in a WebConfig class or web.xml file.',
        'optionb': ' Take the X-Ray SDK for Javas submodules as build dependencies in your Maven or Gradle build configuration. ',
        'optionc': 'All of the above',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' AWS X-Ray receives data from services as  ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    }  ,
    {
        'question': ' The compute resources running your application logic send data about their work as   ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    }  ,
    {
        'question': ' A segment can break down the data about the work done into ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' sub segments ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    }  ,
    {
        'question': '__________ connect the services that work together to serve requests ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'd',
        'info': '  '
    } ,
     {
        'question': ' Choose the correct statement ',
        'optiona': ' A segments name should match the domain name or logical name of the service that generates the segment ',
        'optionb': ' The client IP that is recorded for a forwarded request can be trusted. ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'd',
        'info': ' The client IP that is recorded for a forwarded request can be forged, so it should not be trusted. '
    }  ,
    {
        'question': '  a JSON document that contains information about the services and resources that make up your application ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': '  For a distributed application, X-Ray combines nodes from all services that process requests with the same trace ID into ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'a',
        'info': '  '
    }  ,
    {
        'question': '  collects all the segments generated by a single request ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' The sampling decision and trace ID are added to HTTP requests in tracing headers named ',
        'optiona': ' Trace-Id ',
        'optionb': ' Amzn-Trace-Id ',
        'optionc': ' X-Amzn-Trace-Id ',
        'optiond': ' Xray-Amzn-Trace-Id',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': '  to find traces related to specific paths or users. ',
        'optiona': ' service graph ',
        'optionb': ' traces ',
        'optionc': ' segments ',
        'optiond': ' Edges',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': '  Which service helps you set up your application development in the cloud and manage your development from a single, centralized dashboard ',
        'optiona': 'AWS Code Pipeline',
        'optionb': 'AWS Code Deploy ',
        'optionc': 'AWS CodeStar  ',
        'optiond': 'AWS Code Commit',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': '  Which service has project templates allow you to start with a sample application and deploy it using AWS resources created to support your development project ',
        'optiona': 'AWS Code Pipeline',
        'optionb': 'AWS Code Deploy ',
        'optionc': 'AWS CodeStar  ',
        'optiond': 'AWS Code Commit',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': '  CodePipeline can be created using  ',
        'optiona': 'AWS CodeCommit , AWS CodeBuild ,CodeDeploy/Elastic Beanstalk/Cloud Formation  ',
        'optionb': 'Github/Bitbucket , Jenkins , AWS Service Catalog  ',
        'optionc': ' ECR /S3 , AWS CodeBuild  ,ECS /S3 , ',
        'optiond': ' All the above options ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': 'What is the Minimum number of stages in CodePipeline   ',
        'optiona': ' All 5 ',
        'optionb': ' 3 ',
        'optionc': ' 4 ',
        'optiond': ' 2 ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': 'Which service allows you to centrally manage commonly deployed IT services, and helps you achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need.  ',
        'optiona': '   AWS Ampify',
        'optionb': 'AWS Code Deploy ',
        'optionc': ' Cloud9',
        'optiond': ' AWS Service Catalog ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': 'IT Service Management (ITSM) tools, such as ServiceNow and Jira Service Desk, connect with  ',
        'optiona': 'AWS Service Catalog',
        'optionb': 'AWS Config',
        'optionc': ' AWS Systems Manager',
        'optiond': 'All ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': 'Which service gives  immediate access to a rich code editor, integrated debugger, and built-in terminal with pre-configured AWS CLI – all within your browser after creating Linux server though SSH',
        'optiona': ' AWS Ampify',
        'optionb': ' CodeCommit ',
        'optionc': ' Cloud9',
        'optiond': 'All ',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': 'Which service gives  lets you define and maintain configurations for your entire environment in code',
        'optiona': ' AWS OpsWorks Stacks ',
        'optionb': ' CodeCommit ',
        'optionc': ' Cloud9',
        'optiond': 'All ',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': 'AWS OpsWorks Stacks  provision your instances with',
        'optiona': ' Puppet ',
        'optionb': 'Chef ',
        'optionc': ' Both',
        'optiond': 'None ',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': 'AWS OpsWorks Stacks works with ',
        'optiona': '  Amazon EC2 instances ',
        'optionb': 'on-premises servers ',
        'optionc': ' Both',
        'optiond': 'None ',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': ' AWS OpsWorks Stacks lets you model and visualize your application using concepts such as  ',
        'optiona': ' stacks ',
        'optionb': 'layers ',
        'optionc': ' apps',
        'optiond': 'All ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': ' What is ECS blue green deployments  ',
        'optiona': ' This type of deployment gives you an opportunity to test features in the green environment without impacting the current running version of your application ',
        'optionb': '“Blue” is the current running version of your application and “green” is the new version of your application you will deploy. ',
        'optionc': ' you should be able to roll back to the blue environment at any time during the deployment process',
        'optiond': 'All ',
        'answer': 'd',
        'info': '  '
    } ,
    {
        'question': ' What service   is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images ',
        'optiona': ' Amazon Elastic Container Service (ECS) ',
        'optionb': 'Amazon Elastic Container Registry (ECR) ',
        'optionc': ' both',
        'optiond': 'None ',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' Which Service is used to  helps you configure AWS services and share resources across accounts ',
        'optiona': ' Resource access Manager ',
        'optionb': ' AWS Organization ',
        'optionc': ' both',
        'optiond': 'None ',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' How do you integrate jenkins with Github  ',
        'optiona': ' Create a project in Github ',
        'optionb': ' Create an Organization in Github ',
        'optionc': ' Using Webhook',
        'optiond': 'None ',
        'answer': 'c',
        'info': ' Specify the jenkins URL in Webhook '
    } ,
    {
        'question': ' Which file CodeBuild uses to run a build ',
        'optiona': ' pom.xml ',
        'optionb': ' buildspec.yml ',
        'optionc': ' Both ',
        'optiond': 'None ',
        'answer': 'b',
        'info': '   	'
    } ,
    {
        'question': ' What are the phases of a build ',
        'optiona': ' install ',
        'optionb': ' pre_build and post_build ',
        'optionc': ' build ',
        'optiond': 'All ',
        'answer': 'd',
        'info': '   	'
    } ,
    {
        'question': ' You want to run all Build commands in same instance , Which version will you use ',
        'optiona': ' 0.1 ',
        'optionb': ' 0.2 ',
        'optionc': ' Anyone ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  0.1 runs build in different instance 	'
    },
    {
        'question': '_______ is a fully managed artifact repository service that makes it easy for organizations to securely store and share software packages used for application development ',
        'optiona': 'CodeArtifact  ',
        'optionb': ' CodeCommit ',
        'optionc': ' Anyone ',
        'optiond': ' None ',
        'answer': 'a',
        'info': '  CodeArtifact automatically scales when you ingest or publish new packages to your repositories	'
    },
    {
        'question': 'Repositories are aggregated into a higher-level entity known as a',
        'optiona': 'Package  ',
        'optionb': ' Asset ',
        'optionc': ' Domain ',
        'optiond': ' Package namespace ',
        'answer': 'c',
        'info': '  All package assets and metadata are stored in the domain, but they are consumed through repositories	'
    },
    {
        'question': 'is a bundle of software and the metadata that is required to resolve dependencies and install the software',
        'optiona': 'Package  ',
        'optionb': ' Asset ',
        'optionc': ' Domain ',
        'optiond': ' Package namespace ',
        'answer': 'a',
        'info': '  AWS CodeArtifact supports npm, PyPI, and Maven package formats	'
    },
    {
        'question': '  is an individual file stored in CodeArtifact that is associated with a package version, such as an npm  .tgz file or Maven POM and JAR files',
        'optiona': 'Package  ',
        'optionb': ' Asset ',
        'optionc': ' Domain ',
        'optiond': ' Package namespace ',
        'answer': 'b',
        'info': '  A given package asset, such as a Maven JAR file, is stored once per domain, no matter how many repositories it\'s present in	'
    },
    {
        'question': ' Which command in eb cli is used to set repository to codecommit ',
        'optiona': 'eb codesource codecommit   ',
        'optionb': ' eb codesource local ',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'a',
        'info': '  <a href= "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-codesource.html"> Read More </a>	'
    },
    {
        'question': ' How do you configure aws cli credentials for code commit ',
        'optiona': '.gitconfig  ',
        'optionb': 'git config --global credential.helper \'!aws codecommit credential-helper $@\' ',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'b',
        'info': '  <a href= "https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ide-c9.html"> Read More </a>	'
    },
    {
        'question': ' _________  helps developers easily understand the runtime behaviour of their applications, improve performance, and decrease infrastructure costs. ',
        'optiona': 'Amazon CodeGuru Reviewer  ',
        'optionb': 'CodeGuru Profiler ',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'b',
        'info': '  <a href= "https://aws.amazon.com/codeguru/faqs/"> Read More </a>	'
    },
    {
        'question': ' _________  is an automated code review service that identifies critical defects and deviation from coding best practices for Java code. ',
        'optiona': 'Amazon CodeGuru Reviewer  ',
        'optionb': 'CodeGuru Profiler ',
        'optionc': ' both ',
        'optiond': ' none ',
        'answer': 'a',
        'info': '  <a href= "https://aws.amazon.com/codeguru/faqs/"> Read More </a>	'
    }
];

var title = "Developers Tools"
