var req = [
  {
     'question': ' Which Deployment option launch a full set of new instances running the new version of the application in a separate Auto Scaling group, alongside the instances running the old version',
     'optiona': ' rolling deployments',
     'optionb': 'Immutable deployments',
     'optionc': 'Both',
     'optiond': 'None of the above',
     'answer': 'b',
     'info': '<a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html">Read more </a>'
 },{
    'question': ' Which Deployment option Elastic Beanstalk splits the environment\'s Amazon EC2 instances into batches and deploys the new version of the application to one batch at a time. It leaves the rest of the instances in the environment running the old version of the application',
    'optiona': ' rolling deployments',
    'optionb': 'Immutable deployments',
    'optionc': 'Both',
    'optiond': 'None of the above',
    'answer': 'a',
    'info': '<a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html">Read more </a>'
},{
        'question': ' If your AWS Elastic Beanstalk application performs operations or workflows that take a long time to complete, you can offload those tasks to a dedicated_________  ',
        'optiona': ' Web environment',
        'optionb': 'Worker environment',
        'optionc': 'Both',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': 'Decoupling your web application front end from a process that performs blocking operations is a common way to ensure that your application stays responsive under load.'
    },
    {
       'question': 'Which command Sets default values for Elastic Beanstalk applications created with EB CLI by prompting you with a series of questions. ',
       'optiona': ' eb config',
       'optionb': 'eb init',
       'optionc': 'Both',
       'optiond': 'None of the above',
       'answer': 'b',
       'info': ' The command doesn\'t create anything in your Elastic Beanstalk account. To create an Elastic Beanstalk environment, run eb create after running eb init..'
   }
,{
   'question': ' You design these worker instances to take items from the queue only when they have capacity to run them, preventing them from becoming overwhelmed. Which service is used for this',
   'optiona': ' SNS ',
   'optionb': 'AWS MQ',
   'optionc': 'Amazon SQS queue',
   'optiond': 'None of the above',
   'answer': 'c',
   'info': 'Elastic Beanstalk worker environments simplify this process by managing the Amazon SQS queue and running a daemon process on each instance that reads from the queue for you.'
}
,{
   'question': ' For immutable update, If an immutable environment update fails, the rollback process requires __________ ',
   'optiona': ' rolling update to roll back to the previous configuration ',
   'optionb': 'terminating an Auto Scaling group',
   'optionc': 'Both',
   'optiond': 'None of the above',
   'answer': 'b',
   'info': ' Immutable environment updates ensure that configuration changes that require replacing instances are applied efficiently and safely. '
},{
   'question': ' To create an Elastic Beanstalk application that uses CodeBuild include the specification in file',
   'optiona': ' .elasticbeanstalk/config.yml ',
   'optionb': 'buildspec.yml',
   'optionc': 'Both',
   'optiond': 'None of the above',
   'answer': 'b',
   'info': '  '
},{
   'question': '  is a combination of an operating system, programming language runtime, web server, application server, and Elastic Beanstalk components',
   'optiona': ' Environment tier ',
   'optionb': 'Environment configuration',
   'optionc': 'Saved configuration',
   'optiond': 'Platform',
   'answer': 'd',
   'info': ' You design and target your web application to a platform. Elastic Beanstalk provides a variety of platforms on which you can build your applications. '
},{
   'question': '  Which of the following is optional in platform.yml',
   'optiona': ' version-number ',
   'optionb': 'provisioner-type',
   'optionc': 'provisioner-template',
   'optiond': 'provisioner-flavor',
   'answer': 'd',
   'info': ' You design and target your web application to a platform. Elastic Beanstalk provides a variety of platforms on which you can build your applications. '
},{
   'question': '  I want to start my application as  "node application.js" , which attribute of platform.yml should I update ',
   'optiona': ' Both',
   'optionb': `option_settings:
 - namespace: "aws:elasticbeanstalk:application:environment"
   option_name: "TEST"
   default_value: "node application.js"`,
   'optionc': 'options_definitions:<p>namespace: "aws:elasticbeanstalk:container:custom:application"</p><p>default_value: "node application.js" </p>',
   'optiond': 'None',
   'answer': 'c',
   'info': ' '
},{
   'question': ' To enable or disable log streaming to CloudWatch Logs ',
   'optiona': ' eb logs --cloudwatch-logs [enable | disable] [--cloudwatch-log-source instance | environment-health | all] [environment-name] ',
   'optionb': 'eb logs [-all | --zip | --stream] [--cloudwatch-log-source instance] [--instance instance-id] [--log-group log-group] [environment-name]',
   'optionc': 'eb logs [-all | --zip | --stream] --cloudwatch-log-source environment-health [environment-name]',
   'optiond': 'None of the above',
   'answer': 'a',
   'info': ' <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-logs.html">Read More </a> '
},{
   'question': ' The Custom platform hook scripts should be placed on subfolder of AMI ',
   'optiona': '_ ',
   'optionb': '/opt/elasticbeanstalk/hooks/',
   'optionc':  '',
   'optiond': 'None of the above',
   'answer': 'b',
   'info': ' <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platform-hooks.html">Read More </a> '
},{
   'question': 'To specify a custom build and configuration command for your application, place a file named ______ in the root directory of your application source ',
   'optiona': ' Procfile ',
   'optionb': 'Buildfile',
   'optionc':  '.platform/hooks/prebuild',
   'optiond': 'None of the above',
   'answer': 'b',
   'info': '<p>make: ./build.sh</p> <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.html">Read More </a> '
},{
   'question': '_____ are executable files that you deploy as part of your application\'s source code, and Elastic Beanstalk runs during various instance provisioning stages',
   'optiona': ' Procfile ',
   'optionb': 'Buildfile',
   'optionc':  'Platform hooks ',
   'optiond': 'None of the above',
   'answer': 'c',
   'info': 'prebuild , predeploy  and postdeploy  <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.html">Read More </a> '
},{
   'question': ' Which command sets the number of instances to 2 ',
   'optiona': ' eb logs --cloudwatch-logs [enable | disable] [--cloudwatch-log-source instance | environment-health | all] [environment-name] ',
   'optionb': 'eb logs [-all | --zip | --stream] [--cloudwatch-log-source instance] [--instance instance-id] [--log-group log-group] [environment-name]',
   'optionc': 'eb scale 2',
   'optiond': 'None of the above',
   'answer': 'a',
   'info': ' <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-logs.html">Read More </a> '
},{
   'question': ' How do you create a new  environment in aws cli',
   'optiona': '  eb init <p> eb create my-env </p> ',
   'optionb': `<p style='white-space: pre-wrap;'>~$ aws elasticbeanstalk check-dns-availability --cname-prefix my-cname
~$ aws elasticbeanstalk create-application-version --application-name my-application --version-label v1 --source-bundle S3Bucket=my-bucket,S3Key=php-proxy-sample.zip
~$ aws elasticbeanstalk create-environment --cname-prefix my-cname --application-name my-app --version-label v1 --environment-name my-env --solution-stack-name "64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Passenger Standalone)"</p>`,
   'optionc': 'Both',
   'optiond': 'None of the above',
   'answer': 'c',
   'info': ' The AWS CLI is great for scripting, but is not as easy to use from the command line because of the number of commands that you need to run and the number of parameters on each command . <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html">Know more</a> '
}
  ];

    var title = "Elastic Bean stalk";
