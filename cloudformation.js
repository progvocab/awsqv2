var req = [
  {
      'question': 'Which of the following Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.  '
      , 'optiona': `aws cloudtrail put-event-selectors --trail-name TrailName --event-selectors '[{"ReadWriteType": "All","IncludeManagementEvents": true,"DataResources": [{"Type":"AWS::S3::Object", "Values": ["arn:aws:s3:::mybucket/prefix","arn:aws:s3:::mybucket2/prefix2"]},{"Type": "AWS::Lambda::Function","Values": ["arn:aws:lambda:us-west-2:999999999999:function:hello-world-python-function"]}]}]'`,
      'optionb': ' put-insight-selectors --trail-name Name --insight-selectors  selector',
      'optionc': ' Both ',
      'optiond': ' None ',
      'answer': 'b',
      'info': '   '

  } ,{
        'question': 'Which commnad starts the recording of AWS API calls and log file delivery for a trail. '
        , 'optiona': 'aws cloudtrail start-logging --name Trail1 ',
        'optionb': ' aws cloudtrail validate-logs --trail-arn arn:aws:cloudtrail:us-east-1:123456789012:trail/Trail1 --start-time 20160129T19:00:00Z ',
        'optionc': ' Both',
        'optiond': ' None ',
        'answer': 'a',
        'info': '   '

    },{
        'question': 'Which command looks up management events or CloudTrail Insights events that are captured by CloudTrail. How can you look up events that occurred in a region within the last 90 days '
        , 'optiona': 'aws cloudtrail get-trail --name Trail1 ',
        'optionb': ' aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin ',
        'optionc': ' Both ',
        'optiond': ' All ',
        'answer': 'b',
        'info': '   '

    },{
        'question': 'Which is the correct statement  '
        , 'optiona': 'CloudFormation rolls back changes automatically if errors are detected. ',
        'optionb': ' CloudFormation can be used via console , CLI and SDK ',
        'optionc': ' Template can be in YAML , JSON , .template, or .txt ',
        'optiond': ' All ',
        'answer': 'd',
        'info': '   '

    },{
        'question': 'The user actions that the cfn-hup daemon calls periodically are defined in  '
        , 'optiona': 'cfn-hup.conf ',
        'optionb': ' hooks.conf ',
        'optionc': ' cfn-auto-reloader.conf ',
        'optiond': ' All ',
        'answer': 'b',
        'info': `<p  style='white-space: pre-wrap;'>[hookname]
triggers=post.add or post.update or post.remove
path=Resources.<logicalResourceId> (.Metadata or .PhysicalResourceId)(.<optionalMetadatapath>)
action=<arbitrary shell command>
runas=<runas user>  </p>`

    }, {
        'question': 'The intrinsic function ________ returns the value of an output exported by another stack    ',
        'optiona': 'Fn::Select',
        'optionb': 'Fn::ImportValue',
        'optionc': 'Ref ',
        'optiond': 'None',
        'answer': 'b',
        'info': 'You typically use this function to create cross-stack references.'
    }, {
        'question': 'To create a cross-stack reference, use the ______ output field to flag the value of a resource output for export',
        'optiona': 'Value',
        'optionb': 'Export',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': ' '
    }, {
        'question': '__________ section in your template that invokes the AWS::CodeDeployBlueGreen ',
        'optiona': 'Outputs',
        'optionb': 'Transform',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': ' '
    },{
        'question': ' CloudFormation template can be    ',
        'optiona': ' check out locally',
        'optionb': 'upload to S3',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'c',
        'info': 'Both'
    },{
        'question': ' The template enables and configures the to listen for changes to the configuration defined in the metadata for the Amazon EC2 instance ',
        'optiona': ' Auto Scaling Grooup',
        'optionb': 'cfn-hup daemon ',
        'optionc': 'Both ',
        'optiond': 'None',
        'answer': 'b',
        'info': '<a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/updating.stacks.walkthrough.html"> Read more </a>'
    },{
        'question': ' Which CloudFormation Helper Script ,  Use to check for updates to metadata and execute custom hooks when changes are detected.',
        'optiona': ' cfn-init',
        'optionb': 'cfn-signal',
        'optionc': 'cfn-get-metadata ',
        'optiond': 'cfn-hup',
        'answer': 'd',
        'info': ' <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-hup.html">Read More </a>'
    },{
        'question': ' Which CloudFormation Helper Script , Use to signal with a CreationPolicy or WaitCondition, so you can synchronize other resources in the stack when the prerequisite resource or application is ready ',
        'optiona': ' cfn-init',
        'optionb': 'cfn-signal',
        'optionc': 'cfn-get-metadata ',
        'optiond': 'cfn-hup',
        'answer': 'b',
        'info': ' '
    },{
        'question': ' Which CloudFormation Helper Script , is  Used to retrieve and interpret resource metadata, install packages, create files, and start services.    ',
        'optiona': ' cfn-init',
        'optionb': 'cfn-signal',
        'optionc': 'cfn-get-metadata ',
        'optiond': 'cfn-hup',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' What are the elements of an AWS CloudFormation template?',
        'optiona': 'Version , Description and metadata ',
        'optionb': ' parameters , mappings and conditions ',
        'optionc': 'transform resources and output  ',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': 'How do you fetch the value of an attribute from a resource in the template. ',
        'optiona': '{ "Fn::GetAtt" : [ "logicalNameOfResource", "attributeName" ] }',
        'optionb': 'Fn::GetAtt: [ logicalNameOfResource, attributeName ]',
        'optionc': '!GetAtt logicalNameOfResource.attributeName',
        'optiond': 'All of the Above',
        'answer': 'd',
        'info': ' All of the Above'
    },
    {
        'question': ' Values to pass to your template at runtime  in set in ',
        'optiona': 'Mappings',
        'optionb': 'Parameters',
        'optionc': 'Metadata',
        'optiond': 'Conditions ',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' Which one is a Lookup table and provide data in key value pairs ',
        'optiona': 'Mappings',
        'optionb': 'Parameters',
        'optionc': 'Metadata',
        'optiond': 'Conditions ',
        'answer': 'a',
        'info': ' '
    },
    {
        'question': ' Which one is a used when we want to create a resource only on certian conditions ',
        'optiona': 'Mappings',
        'optionb': 'Parameters',
        'optionc': 'Metadata',
        'optiond': 'Conditions ',
        'answer': 'd',
        'info': ' '
    },
    {
        'question': ' Which one is used to pass data to other cloud formation template ',
        'optiona': 'Mappings',
        'optionb': 'Parameters',
        'optionc': 'Metadata',
        'optiond': 'Outputs ',
        'answer': 'd',
        'info': ' '
    }  ,
      {
          'question': '_______ are configurable scripts that run on a schedule, to monitor your endpoints and APIs ',
          'optiona': ' Metrics',
          'optionb': ' Canary',
          'optionc': 'both',
          'optiond': 'None',
          'answer': 'b',
          'info': '  '
      } ,
        {
            'question': ' Which  canary blueprint detects the  link errors like 404 Page Not Found',
            'optiona': ' Heartbeat Monitoring',
            'optionb': ' API Canary',
            'optionc': 'Broken Link Checker',
            'optiond': 'GUI Workflow Builder',
            'answer': 'c',
            'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html"> Read more </a> '
        }
    ,
    {
        'question': 'How to create CloudFormation template from existing AWS resources in your account ',
        'optiona': ' CloudTrail',
        'optionb': ' CloudFormer',
        'optionc': 'both',
        'optiond': 'None',
        'answer': 'b',
        'info': 'Cloud Formation -> Select Template -> Cloud Formar '
    },
    {
        'question': ' Which of the following enables you to create, update, or delete stacks across multiple accounts and regions with a single operation ',
        'optiona': 'AWS CloudFormation registry',
        'optionb': 'AWS CloudFormation StackSets',
        'optionc': 'Nested Stacks',
        'optiond': 'CloudFormation Helper Scripts',
        'answer': 'b',
        'info': ' '
    },
    {
        'question': ' Which of the following needs an AMI ',
        'optiona': ' Auto Scaling Group ',
        'optionb': ' Launch Configuration ',
        'optionc': ' Both ',
        'optiond': ' None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'AMI can be created from  ',
        'optiona': 'Running EC2 instance ',
        'optionb': 'Stopped Ec2 instance ',
        'optionc': 'All of the above',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    } ,

    {
        'question': ' How do you find the security group id from mac id 12:68:d1:05:b6:1d  ',
        'optiona': 'http://169.254.169.254/latest/meta-data/network/interfaces/macs/12:68:d1:05:b6:1d/security-group-ids',
        'optionb': 'http://169.254.169.254/latest/meta-data/network/macs/12:68:d1:05:b6:1d/security-group-ids',
        'optionc': 'http://169.254.169.254/latest/meta-data/macs/12:68:d1:05:b6:1d/security-group-ids',
        'optiond': 'None',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' AMI are  ',
        'optiona': ' region specific ',
        'optionb': ' can be used in any region ',
        'optionc': 'All of the above',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' Which command copies the AMI from one region to another  ',
        'optiona': ' export ',
        'optionb': ' copy ',
        'optionc': 'All of the above',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    } ,
    {
        'question': ' Which service used for governence , compliance , auditing  ',
        'optiona': ' CloudFormation ',
        'optionb': ' CloudWatch ',
        'optionc': 'Cloudtrail',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': ' By default cloudtrail collect logs via event history for  ',
        'optiona': ' 30 days ',
        'optionb': ' 60 days ',
        'optionc': ' 90 days',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    } ,
    {
        'question': ' To Analyze cloud trail logs which service can be used to query   ',
        'optiona': ' Athena ',
        'optionb': ' Lambda ',
        'optionc': ' All ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    } ,
    {
        'question': ' Which service is used to encrypt the cloud trail logs  ',
        'optiona': ' Simple token service  ',
        'optionb': ' Amazon secrets ',
        'optionc': ' Key management service ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    } ,{
        'question': ' Choose the correct statement  ',
        'optiona': ' Cloudtrail logs can be passed to CloudWatch ',
        'optionb': ' CloudWatch logs can be passed to  Cloudtrail ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Which event are turned on and cannot turned off ',
        'optiona': ' Mamagement Event ',
        'optionb': ' Data Event ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Data event are enabled for which service  ',
        'optiona': ' S3 ',
        'optionb': ' Lambda',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events"> Read More</a>'
    },
    {
        'question': 'Which event is used for routing , logging , registering devices and configuring security ',
        'optiona': ' Mamagement Event ',
        'optionb': ' Data Event ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Which event is used for getItem , PutItem ',
        'optiona': ' Mamagement Event ',
        'optionb': ' Data Event ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Which returns the value of specified parameter or resource',
        'optiona': ' Fn::GetAtt ',
        'optionb': ' Ref ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': ` "Parameters" : {
    "EnvType" : {
      "Description" : "Environment type.",
      "Default" : "test",
      "Type" : "String",
      "AllowedValues" : ["prod", "test"],
      "ConstraintDescription" : "must specify prod or test."
    }
  },

  "Conditions" : {
    "CreateProdResources" : {"Fn::Equals" : [{"Ref" : "EnvType"}, "prod"]}
  },`
    },
    {
        'question': 'Which service can create alarms that watch metrics and send notifications or automatically make changes to the resources you are monitoring when a threshold is breached',
        'optiona': ' Cloud trail ',
        'optionb': ' Cloud watch  ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'In CFT , where do you specify the volume to be attached to EC2',
        'optiona': ' Properties of AWS::EC2::Instance ',
        'optionb': '  Properties of AWS::EC2::Volume  ',
        'optionc': '  Properties of AWS::EC2::VolumeAttachment ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': `"MountPoint" : {
      "Type" : "AWS::EC2::VolumeAttachment",
      "Condition" : "CreateProdResources",
      "Properties" : {
        "InstanceId" : { "Ref" : "EC2Instance" },
        "VolumeId"  : { "Ref" : "NewVolume" },
        "Device" : "/dev/sdh"
      }
    }`
    },
    {
        'question': 'Which service you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances and then use this data to determine whether you should launch additional instances to handle increased load',
        'optiona': ' Load Balancer ',
        'optionb': ' Cloud watch  ',
        'optionc': ' Auto Scaling ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': 'How do you view the user data ',
        'optiona': ' aws ec2 modify-instance-attribute --instance-id i-1234567890abcdef0 --attribute userData --value file://my_script_base64.txt ',
        'optionb': ' aws ec2 describe-instance-attribute --instance-id i-1234567890abcdef0 --attribute userData  ',
        'optionc': ' aws ec2 describe-instance-attribute --instance-id i-1234567890abcdef0 --attribute userData --output text --query "UserData.Value" | base64 --decode ',
        'optiond': ' b and c',
        'answer': 'd',
        'info': '  To retrieve the user data for an instance, use the describe-instance-attribute command. With describe-instance-attribute, the AWS CLI does not perform base64 decoding of the user data for you. '
    },
    {
        'question': 'Which service is used to trigger serverless cron job',
        'optiona': ' CloudTrail ',
        'optionb': ' Cloud watch  ',
        'optionc': ' CloudFormation ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': '  IAM AttachRolePolicy API operations / Amazon EC2 CreateDefaultVpc API operations are which type of event',
        'optiona': ' Management ',
        'optionb': ' Data  ',
        'optionc': ' Insights ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' A  is a configuration that enables delivery of CloudTrail events to an Amazon S3 bucket, CloudWatch Logs, and CloudWatch Events',
        'optiona': ' event ',
        'optionb': ' trail  ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Which type has  data having a one-minute granularity',
        'optiona': ' Standard resolution ',
        'optionb': ' High resolution  ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' Which type has  data having a one-second granularity',
        'optiona': ' Standard resolution ',
        'optionb': ' High resolution  ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' Metrics produced by AWS services are ________ resolution by default',
        'optiona': ' Standard resolution ',
        'optionb': ' High resolution  ',
        'optionc': ' Both ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'Developer needs to call PutMetricData  for a custom metric , but does not want high charges , which resolution should he choose ',
        'optiona': ' Standard resolution ',
        'optionb': ' High resolution  ',
        'optionc': ' Both will have same charges ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': 'You can have up to ___ dimensions in one metric,  ',
        'optiona': ' 3 ',
        'optionb': ' 5  ',
        'optionc': ' 10 ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': ' You can have up to 10 dimensions in one metric, and each dimension is defined by a name and value pair. '
    },
    {
        'question': 'To publish a single data point for a new or existing metric ',
        'optiona': ' aws cloudwatch put-metric-alarm --alarm-name cpu-mon --alarm-description "Alarm when CPU exceeds 70 percent" --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 70 --comparison-operator GreaterThanThreshold  --dimensions "Name=InstanceId,Value=i-12345678" --evaluation-periods 2 --alarm-actions arn:aws:sns:us-east-1:111122223333:MyTopic --unit Percent ',
        'optionb': ' aws cloudwatch put-metric-data --metric-name PageViewCount --namespace MyService --value 2 --timestamp 2016-10-20T12:00:00.000Z  ',
        'optionc': ' put-composite-alarm ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' enables you to query multiple CloudWatch metrics and use math expressions to create new time series based on these metrics ',
        'optiona': ' Metric Math',
        'optionb': ' Canary  ',
        'optionc': ' CloudWatch Anomaly ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' <p> Your account typically logs no more than 20 Amazon S3 deleteBucket API calls per minute, but your account starts to log an average of 100 deleteBucket API calls per minute</p> What type of event is this',
        'optiona': ' Management ',
        'optionb': ' Data  ',
        'optionc': ' Insights ',
        'optiond': 'None of the above',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': 'Which service is the core service of CloudWatch',
        'optiona': ' Logs ',
        'optionb': ' Alarms ',
        'optionc': ' Events ',
        'optiond': 'None of the above',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' Which of the following allow you to see how your changes might impact your running resources, especially for critical resources, before implementing them',
        'optiona': ' Drift ',
        'optionb': ' Change Sets ',
        'optionc': ' Stacks ',
        'optiond': 'None of the above',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' How do you create a change set',
        'optiona': ' aws cloudformation execute-change-set --change-set-name arn:aws:cloudformation:us-east-1:123456789012:changeSet/SampleChangeSet/1a2345b6-0000-00a0-a123-00abc0abc000 ',
        'optionb': ' aws cloudformation create-change-set --stack-name arn:aws:cloudformation:us-east-1:123456789012:stack/SampleStack/1a2345b6-0000-00a0-a123-00abc0abc000 --change-set-name SampleChangeSet --use-previous-template --parameters ParameterKey="InstanceType",UsePreviousValue=true ParameterKey="KeyPairName",UsePreviousValue=true ParameterKey="Purpose",ParameterValue="production" ',
        'optionc': ' aws cloudformation list-change-sets --stack-name arn:aws:cloudformation:us-east-1:123456789012:stack/SampleStack/1a2345b6-0000-00a0-a123-00abc0abc000 ',
        'optiond': 'aws cloudformation describe-change-set --change-set-name arn:aws:cloudformation:us-east-1:123456789012:changeSet/SampleChangeSet/1a2345b6-0000-00a0-a123-00abc0abc000',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' You can now create a highly scalable, load-balanced web site using multiple Amazon EC2 instances, and you can easily arrange for the entire HTTPS encryption and decryption process (generally known as SSL termination) to be handled by',
        'optiona': '  Security Group ',
        'optionb': '  Load Balancer ',
        'optionc': '  Auto Scaling Group ',
        'optiond': '  Auto Scaling Policy ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' What does intrinsic function Fn::Base64 does',
        'optiona': '  It is used to decode the Base64 data to string     ',
        'optionb': '   It is used to encode the string to Base64  ',
        'optionc': '  Both ',
        'optiond': '  None ',
        'answer': 'b',
        'info': '  '
    },
    {
        'question': ' create 6 CIDRs with a subnet mask "/27" inside from a CIDR with a mask of "/24". ',
        'optiona': '  { "Fn::Cidr" : [ "192.168.0.0/24", "6", "5"] }   ',
        'optionb': ' { "Fn::Cidr" : [ "192.168.0.0/27", "6", "8"] }  ',
        'optionc': '  Both ',
        'optiond': '  None ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' Which intrinsic function   returns a single object from a list of objects by index ',
        'optiona': '  Fn::Select  ',
        'optionb': ' Fn::Split ',
        'optionc': '  Fn::Sub ',
        'optiond': '  Fn::Join ',
        'answer': 'a',
        'info': '  '
    },
    {
        'question': ' Which intrinsic function appends a set of values into a single value, separated by the specified delimiter ',
        'optiona': '  Fn::Select  ',
        'optionb': ' Fn::Split ',
        'optionc': '  Fn::Sub ',
        'optiond': '  Fn::Join ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' Which of the following lets you detect whether a stacks actual configuration has been changed outside of Clodformation ',
        'optiona': '  Stack Sets ',
        'optionb': ' CloudFormation Registry ',
        'optionc': '  Drift Detection',
        'optiond': '  None ',
        'answer': 'c',
        'info': '  '
    },
    {
        'question': ' You can perform drift detection on stacks that are in  ',
        'optiona': '  CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_ROLLBACK_COMPLETE, and UPDATE_ROLLBACK_FAILED ',
        'optionb': ' CREATE_IN_PROGRESS DELETE_IN_PROGRESS ROLLBACK_IN_PROGRESS UPDATE_IN_PROGRESS ',
        'optionc': '  DELETE_COMPLETE ROLLBACK_COMPLETE',
        'optiond': '  None ',
        'answer': 'a',
        'info': '  <a href="https://aws.amazon.com/blogs/aws/new-cloudformation-drift-detection/"> Know more </a>'
    },
    {
        'question': ' The Amazon EC2 API Reference  provides descriptions, syntax, and usage examples for each of the actions and data types for the following services:',
        'optiona': '  Amazon EC2 ',
        'optionb': 'Amazon EBS',
        'optionc': '  Amazon VPC and AWS VPN',
        'optiond': '  All ',
        'answer': 'd',
        'info': '  '
    },
    {
        'question': ' What is the Maximum size of a parameter value in a Standard parameter store ',
        'optiona': '  1 KB ',
        'optionb': ' 4KB',
        'optionc': '  8 KB',
        'optiond': '  None ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html"> Read more </a> '
    },
    {
        'question': ' What is the Maximum size of a parameter value in a Advanced parameter store ',
        'optiona': '  1 KB ',
        'optionb': ' 4KB',
        'optionc': '  8 KB',
        'optiond': '  None ',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html"> Read more </a> '
    },
    {
        'question': ' A log stream is a sequence of log events that share ',
        'optiona': '   same source ',
        'optionb': ' same retention, monitoring, and access control settings',
        'optionc': '  Both',
        'optiond': '  None ',
        'answer': 'a',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html"> Read more </a> '
    },
    {
        'question': ' A log group is a group of log streams that share ',
        'optiona': '   same source ',
        'optionb': ' same retention, monitoring, and access control settings',
        'optionc': '  Both',
        'optiond': '  None ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html"> Read more </a> '
    },
    {
        'question': ' Which command  Install and Configure CloudWatch Logs on an Existing Amazon EC2 Instance ',
        'optiona': '  sudo yum install -y awslogs',
        'optionb': ' sudo service awslogs start ',
        'optionc': '  Both',
        'optiond': '  None ',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartEC2Instance.html"> Read more </a> '
    },
    {
        'question': ' Which command  Install and Configure CloudWatch Logs on an Existing Amazon EC2 Instance ',
        'optiona': '  sudo yum install -y awslogs',
        'optionb': ' sudo service awslogs start ',
        'optionc': '  Both',
        'optiond': '  None ',
        'answer': 'c',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartEC2Instance.html"> Read more </a> '
    },
    {
        'question': ' What are the valid values of Statistics ',
        'optiona': '  SampleCount ',
        'optionb': ' Average , Sum ',
        'optionc': '  Minimum , Maximum',
        'optiond': '  All of the Above ',
        'answer': 'd',
        'info': ' <a href="https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/get-metric-statistics.html"> Read more </a> '
    },
    {
        'question': ' By default, the EC2 cloud watch logs points to the us-east-1 region. To push your logs to a different region edit',
        'optiona': '  /etc/awslogs/awslogs.conf ',
        'optionb': ' /etc/awslogs/awscli.conf ',
        'optionc': '  /var/log/awslogs.log ',
        'optiond': '  None ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartEC2Instance.html"> Read more </a> '
    },
    {
        'question': ' ___ represents a time-ordered set of data points that are published to CloudWatch',
        'optiona': '  Metrics ',
        'optionb': ' Namespaces',
        'optionc': '  Data points ',
        'optiond': '  Dimensions ',
        'answer': 'a',
        'info': `<p style='white-space: pre-wrap;'> {
            "Namespace": "AWS/Lambda",
            "MetricName": "Errors",
            "Dimensions": [
                {
                    "Name": "FunctionName",
                    "Value": "apigetddb"
                },
                {
                    "Name": "Resource",
                    "Value": "apigetddb"
                }
            ]
        }</p>  <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"> Read more </a> `
    },
    {
        'question': ' ___ is a container for  metrics',
        'optiona': '  Statistics ',
        'optionb': ' Namespaces',
        'optionc': '  Data points ',
        'optiond': '  Dimensions ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"> Read more </a> '
    },
    {
        'question': ' ___ is a name/value pair that is part of the identity of a metric',
        'optiona': '  Statistics ',
        'optionb': ' Namespaces',
        'optionc': '  Data points ',
        'optiond': '  Dimensions ',
        'answer': 'd',
        'info': ' <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"> Read more </a> '
    },
    {
        'question': ' Data points with a period of less than 60 seconds are available for__________',
        'optiona': '  15 months ',
        'optionb': '  3 hours',
        'optionc': '  15 days ',
        'optiond': '  63 days ',
        'answer': 'b',
        'info': ' <a href="https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/get-metric-data.html"> Read more </a> '
    },
    {
        'question': ' Can we use Elasticache with CloudFormation ',
        'optiona': ' Yes , Redis Only ',
        'optionb': '  Yes , Memcache Only',
        'optionc': ' Both  ',
        'optiond': ' None',
        'answer': 'c',
        'info': ' <a href="https://aws.amazon.com/elasticache/faqs/"> Read More </a>'
    }

];

var title = "Management"
